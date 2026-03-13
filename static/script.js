// Инициализация Telegram
const tg = window.Telegram?.WebApp;
if (tg) {
    tg.ready();
    tg.expand();
}

const user = tg?.initDataUnsafe?.user;
const greetingEl = document.getElementById('user-greeting');
if (user && greetingEl) {
    greetingEl.innerText = `Добро пожаловать, ${user.first_name}!`;
}

// Состояние приложения
let catalogData = null;
let allProducts = [];
let cart = {};
let navStack = [];
let currentNode = null;
let searchMode = false;

// Загружаем каталог с сервера
async function loadCatalog() {
    try {
        const response = await fetch('/api/catalog');
        catalogData = await response.json();
        collectAllProducts();
        renderCurrentLevel();
    } catch (error) {
        console.error('Ошибка загрузки каталога:', error);
    }
}

// Собираем все товары в один массив
function collectAllProducts() {
    allProducts = [];
    
    function collect(node) {
        if (node.products) {
            node.products.forEach(p => {
                allProducts.push({
                    id: p.id,
                    name: p.name,
                    price: p.price,
                    description: p.description || ''
                });
            });
        }
        if (node.subcategories) {
            node.subcategories.forEach(sub => collect(sub));
        }
    }
    
    catalogData.categories.forEach(cat => collect(cat));
}

// Функция транслитерации (русский -> английский)
function transliterate(text) {
    const ru = {
        'а':'a','б':'b','в':'v','г':'g','д':'d','е':'e','ё':'e',
        'ж':'zh','з':'z','и':'i','й':'y','к':'k','л':'l','м':'m',
        'н':'n','о':'o','п':'p','р':'r','с':'s','т':'t','у':'u',
        'ф':'f','х':'kh','ц':'ts','ч':'ch','ш':'sh','щ':'sch',
        'ъ':'','ы':'y','ь':'','э':'e','ю':'yu','я':'ya'
    };
    return text.toLowerCase().split('').map(c => ru[c] || c).join('');
}

// Поиск товаров
function searchProducts(query) {
    if (query.length < 2) return [];
    const searchTerm = query.toLowerCase();
    const searchTranslit = transliterate(searchTerm);
    
    return allProducts.filter(p => {
        const nameLower = p.name.toLowerCase();
        const nameTranslit = transliterate(nameLower);
        const descLower = (p.description || '').toLowerCase();
        const descTranslit = transliterate(descLower);
        
        return nameLower.includes(searchTerm) ||
               nameTranslit.includes(searchTranslit) ||
               descLower.includes(searchTerm) ||
               descTranslit.includes(searchTranslit);
    });
}

// Навигация по категориям
function getRootCategories() {
    return catalogData.categories.map(cat => ({
        id: cat.id,
        name: cat.name,
        type: 'category',
        node: cat
    }));
}

function getChildren(node) {
    if (!node) return [];
    if (node.subcategories?.length) {
        return node.subcategories.map(sub => ({
            id: sub.id,
            name: sub.name,
            type: 'category',
            node: sub
        }));
    }
    if (node.products?.length) {
        return node.products.map(p => ({
            id: p.id,
            name: p.name,
            price: p.price,
            description: p.description,
            type: 'product',
            node: p
        }));
    }
    return [];
}

function renderItems(items) {
    const content = document.getElementById('catalog-content');
    if (!content) return;
    
    content.innerHTML = '';
    
    if (items.length === 0) {
        content.innerHTML = '<div class="empty-cart">Пусто</div>';
        return;
    }
    
    const isProducts = items[0].type === 'product';
    const grid = document.createElement('div');
    grid.className = isProducts ? 'products-grid' : 'categories-grid';
    
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = isProducts ? 'product-card' : 'category-card';
        
        if (isProducts) {
            card.innerHTML = `
                <div class="product-name">${item.name}</div>
                <div class="product-price">${item.price.toLocaleString()} ₽</div>
                ${item.description ? `<div class="product-description">${item.description}</div>` : ''}
                <button class="add-to-cart-btn" data-id="${item.id}">В корзину</button>
            `;
        } else {
            card.innerHTML = `<div class="category-name">${item.name}</div>`;
            card.addEventListener('click', () => {
                navStack.push(currentNode);
                currentNode = item;
                renderCurrentLevel();
            });
        }
        
        grid.appendChild(card);
    });
    
    content.appendChild(grid);
    
    if (isProducts) {
        document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            btn.addEventListener('click', (e) => addToCart(e.target.dataset.id));
        });
    }
}

function renderCurrentLevel() {
    const backBtn = document.getElementById('back-btn');
    
    if (searchMode) return;
    
    if (!currentNode) {
        renderItems(getRootCategories());
        if (backBtn) backBtn.style.display = 'none';
    } else {
        const children = getChildren(currentNode.node);
        if (children.length) {
            renderItems(children);
            if (backBtn) backBtn.style.display = 'inline-block';
        }
    }
}

function showSearchResults(results) {
    const content = document.getElementById('catalog-content');
    const backBtn = document.getElementById('back-btn');
    
    content.innerHTML = '';
    
    if (results.length === 0) {
        content.innerHTML = '<div class="empty-cart">Ничего не найдено</div>';
        backBtn.style.display = 'inline-block';
        return;
    }
    
    const grid = document.createElement('div');
    grid.className = 'products-grid';
    
    results.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-name">${p.name}</div>
            <div class="product-price">${p.price.toLocaleString()} ₽</div>
            ${p.description ? `<div class="product-description">${p.description}</div>` : ''}
            <button class="add-to-cart-btn" data-id="${p.id}">В корзину</button>
        `;
        grid.appendChild(card);
    });
    
    content.appendChild(grid);
    
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => addToCart(e.target.dataset.id));
    });
    
    backBtn.style.display = 'inline-block';
}

// Корзина
function loadCart() {
    try {
        const saved = localStorage.getItem('cart');
        if (saved) cart = JSON.parse(saved);
    } catch (e) {}
    updateCartUI();
}

function saveCart() {
    try {
        localStorage.setItem('cart', JSON.stringify(cart));
    } catch (e) {}
}

function addToCart(productId) {
    cart[productId] = (cart[productId] || 0) + 1;
    saveCart();
    updateCartUI();
}

function removeFromCart(productId) {
    delete cart[productId];
    saveCart();
    updateCartUI();
}

function changeQuantity(productId, delta) {
    if (!cart[productId]) return;
    const newQty = cart[productId] + delta;
    if (newQty <= 0) {
        removeFromCart(productId);
    } else {
        cart[productId] = newQty;
        saveCart();
        updateCartUI();
    }
}

function updateCartUI() {
    const container = document.getElementById('cart-items');
    const totalSpan = document.getElementById('cart-total');
    const countSpan = document.getElementById('cart-count');
    
    const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
    if (countSpan) countSpan.innerText = totalItems;
    
    if (!container) return;
    
    container.innerHTML = '';
    
    if (totalItems === 0) {
        container.innerHTML = '<div class="empty-cart">Корзина пуста</div>';
        if (totalSpan) totalSpan.innerText = 'Итого: 0 ₽';
        return;
    }
    
    let totalSum = 0;
    
    for (const [id, qty] of Object.entries(cart)) {
        const product = allProducts.find(p => p.id === id);
        if (!product) continue;
        
        const itemTotal = product.price * qty;
        totalSum += itemTotal;
        
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div>
                <div>${product.name}</div>
                <div>${product.price.toLocaleString()} ₽ x ${qty}</div>
            </div>
            <div class="cart-item-controls">
                <button onclick="changeQuantity('${id}', -1)" ${qty === 1 ? 'disabled' : ''}>−</button>
                <span>${qty}</span>
                <button onclick="changeQuantity('${id}', 1)">+</button>
                <button onclick="removeFromCart('${id}')">🗑️</button>
            </div>
        `;
        container.appendChild(div);
    }
    
    if (totalSpan) totalSpan.innerText = `Итого: ${totalSum.toLocaleString()} ₽`;
}

// Отправка заказа
function sendOrder() {
    if (!tg) return;
    
    const items = [];
    let total = 0;
    
    for (const [id, qty] of Object.entries(cart)) {
        const product = allProducts.find(p => p.id === id);
        if (product) {
            items.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: qty,
                total: product.price * qty
            });
            total += product.price * qty;
        }
    }
    
    const order = {
        user: user ? { id: user.id, first_name: user.first_name } : null,
        items: items,
        total: total,
        date: new Date().toISOString()
    };
    
    tg.sendData(JSON.stringify(order));
    tg.MainButton.hide();
    tg.showAlert('✅ Заказ отправлен!');
}

// Обработчики событий
document.addEventListener('DOMContentLoaded', () => {
    loadCatalog();
    loadCart();
    
    const tabs = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');
    const backBtn = document.getElementById('back-btn');
    const searchInput = document.getElementById('search-input');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.dataset.tab;
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(`${tabId}-tab`).classList.add('active');
            
            if (tabId === 'catalog') {
                navStack = [];
                currentNode = null;
                searchMode = false;
                if (searchInput) searchInput.value = '';
                renderCurrentLevel();
            }
            
            if (tabId === 'cart') {
                updateCartUI();
            }
        });
    });
    
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            if (searchMode) {
                searchMode = false;
                if (searchInput) searchInput.value = '';
                renderCurrentLevel();
                return;
            }
            if (navStack.length > 0) {
                currentNode = navStack.pop();
            } else {
                currentNode = null;
            }
            renderCurrentLevel();
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value;
            if (query.length >= 2) {
                searchMode = true;
                showSearchResults(searchProducts(query));
            } else if (searchMode) {
                searchMode = false;
                renderCurrentLevel();
            }
        });
    }
    
    // Настройка главной кнопки Telegram
    if (tg) {
        tg.MainButton.setText('Оформить заказ');
        tg.MainButton.onClick(sendOrder);
    }
});

// Делаем функции глобальными
window.changeQuantity = changeQuantity;
window.removeFromCart = removeFromCart;
