from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Application, CommandHandler, MessageHandler, filters, ContextTypes, CallbackQueryHandler
import json
import requests
import os

# Токен бота будет подставлен из переменных окружения на Bothost
BOT_TOKEN = os.environ.get('BOT_TOKEN', '')
APP_URL = os.environ.get('APP_URL', '')

# ID администратора (ваш ID)
ADMIN_ID = 8043971654  # ЗДЕСЬ ВАШ ID!

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Проверяет, админ или пользователь, и отправляет соответствующее меню"""
    user_id = update.effective_user.id
    
    if user_id == ADMIN_ID:
        # Это админ - показываем админ-панель
        await show_admin_panel(update, context)
    else:
        # Это обычный пользователь - показываем магазин
        await show_user_shop(update, context)

async def show_user_shop(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Отправляет ссылку на магазин обычному пользователю"""
    keyboard = [[
        InlineKeyboardButton("🛍 Открыть магазин", web_app={"url": f"{APP_URL}/"})
    ]]
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text(
        "Добро пожаловать в магазин техники!\n"
        "Нажмите кнопку ниже, чтобы открыть каталог.",
        reply_markup=reply_markup
    )

async def show_admin_panel(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Показывает админ-панель с кнопками управления"""
    keyboard = [
        [InlineKeyboardButton("📊 Статистика", callback_data="admin_stats")],
        [InlineKeyboardButton("📦 Все заказы", callback_data="admin_orders")],
        [InlineKeyboardButton("➕ Добавить товар", callback_data="admin_add_product")],
        [InlineKeyboardButton("✏️ Редактировать товар", callback_data="admin_edit_product")],
        [InlineKeyboardButton("❌ Удалить товар", callback_data="admin_delete_product")],
        [InlineKeyboardButton("👥 Пользователи", callback_data="admin_users")],
        [InlineKeyboardButton("⚙️ Настройки", callback_data="admin_settings")],
        [InlineKeyboardButton("🛍 Перейти в магазин", web_app={"url": f"{APP_URL}/"})]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    
    await update.message.reply_text(
        "🔐 **Админ-панель**\n\n"
        "Добро пожаловать в панель управления магазином!\n"
        "Выберите действие:",
        reply_markup=reply_markup,
        parse_mode='Markdown'
    )

async def button_callback(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Обрабатывает нажатия на кнопки в админ-панели"""
    query = update.callback_query
    await query.answer()
    
    if query.data == "admin_stats":
        await show_stats(query, context)
    elif query.data == "admin_orders":
        await show_orders(query, context)
    elif query.data == "admin_add_product":
        await query.edit_message_text("➕ Функция добавления товара в разработке...")
    elif query.data == "admin_edit_product":
        await query.edit_message_text("✏️ Функция редактирования товара в разработке...")
    elif query.data == "admin_delete_product":
        await query.edit_message_text("❌ Функция удаления товара в разработке...")
    elif query.data == "admin_users":
        await query.edit_message_text("👥 Список пользователей в разработке...")
    elif query.data == "admin_settings":
        await show_settings(query, context)
    elif query.data == "back_to_admin":
        await back_to_admin(query, context)

async def show_stats(query, context):
    """Показывает статистику магазина"""
    stats_text = (
        "📊 **Статистика магазина**\n\n"
        "👥 Всего пользователей: 0\n"
        "📦 Всего заказов: 0\n"
        "💰 Общая выручка: 0 ₽\n"
        "🛍 Товаров в каталоге: 0\n\n"
        "📈 Заказов сегодня: 0\n"
        "📈 Заказов за неделю: 0\n"
        "📈 Заказов за месяц: 0"
    )
    
    keyboard = [[InlineKeyboardButton("◀️ Назад", callback_data="back_to_admin")]]
    reply_markup = InlineKeyboardMarkup(keyboard)
    
    await query.edit_message_text(
        stats_text,
        reply_markup=reply_markup,
        parse_mode='Markdown'
    )

async def show_orders(query, context):
    """Показывает список последних заказов"""
    orders_text = (
        "📦 **Последние заказы**\n\n"
        "Нет заказов для отображения."
    )
    
    keyboard = [[InlineKeyboardButton("◀️ Назад", callback_data="back_to_admin")]]
    reply_markup = InlineKeyboardMarkup(keyboard)
    
    await query.edit_message_text(
        orders_text,
        reply_markup=reply_markup,
        parse_mode='Markdown'
    )

async def show_settings(query, context):
    """Показывает настройки магазина"""
    settings_text = (
        "⚙️ **Настройки магазина**\n\n"
        f"• URL магазина: {APP_URL}\n"
        "• Режим: Рабочий\n"
        "• Уведомления: Включены\n\n"
        "Дополнительные настройки в разработке..."
    )
    
    keyboard = [[InlineKeyboardButton("◀️ Назад", callback_data="back_to_admin")]]
    reply_markup = InlineKeyboardMarkup(keyboard)
    
    await query.edit_message_text(
        settings_text,
        reply_markup=reply_markup,
        parse_mode='Markdown'
    )

async def back_to_admin(query, context):
    """Возвращает в главное меню админ-панели"""
    keyboard = [
        [InlineKeyboardButton("📊 Статистика", callback_data="admin_stats")],
        [InlineKeyboardButton("📦 Все заказы", callback_data="admin_orders")],
        [InlineKeyboardButton("➕ Добавить товар", callback_data="admin_add_product")],
        [InlineKeyboardButton("✏️ Редактировать товар", callback_data="admin_edit_product")],
        [InlineKeyboardButton("❌ Удалить товар", callback_data="admin_delete_product")],
        [InlineKeyboardButton("👥 Пользователи", callback_data="admin_users")],
        [InlineKeyboardButton("⚙️ Настройки", callback_data="admin_settings")],
        [InlineKeyboardButton("🛍 Перейти в магазин", web_app={"url": f"{APP_URL}/"})]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    
    await query.edit_message_text(
        "🔐 **Админ-панель**\n\n"
        "Добро пожаловать в панель управления магазином!\n"
        "Выберите действие:",
        reply_markup=reply_markup,
        parse_mode='Markdown'
    )

async def handle_order(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Обрабатывает заказ из мини-приложения"""
    try:
        # Получаем данные заказа
        order_str = update.message.text
        order = json.loads(order_str)
        
        # Формируем сообщение с заказом
        items_list = []
        for item in order['items']:
            items_list.append(f"• {item['name']} x{item['quantity']} - {item['total']} ₽")
        
        message = f"🛒 **Новый заказ!**\n\n"
        message += f"👤 Пользователь: {order['user']['first_name']} (ID: {order['user']['id']})\n"
        message += f"📦 Товары:\n" + "\n".join(items_list)
        message += f"\n💰 Итого: {order['total']} ₽"
        message += f"\n🕐 {order['date']}"
        
        # Отправляем заказ админу
        await context.bot.send_message(
            chat_id=ADMIN_ID,
            text=message,
            parse_mode='Markdown'
        )
        
        # Подтверждение пользователю
        await update.message.reply_text("✅ Заказ принят! Скоро мы свяжемся с вами.")
        
        # Отправляем копию на сервер для сохранения
        try:
            requests.post(f"{APP_URL}/api/order", json=order, timeout=5)
        except:
            pass  # Если сервер не отвечает - игнорируем
            
    except Exception as e:
        print(f"Ошибка: {e}")
        await update.message.reply_text("❌ Ошибка при обработке заказа")

def main():
    """Запуск бота"""
    if not BOT_TOKEN:
        print("ОШИБКА: Не указан BOT_TOKEN в переменных окружения!")
        return
        
    app = Application.builder().token(BOT_TOKEN).build()
    
    app.add_handler(CommandHandler("start", start))
    app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_order))
    app.add_handler(CallbackQueryHandler(button_callback))
    
    print("Бот запущен...")
    print(f"ID администратора: {ADMIN_ID}")
    print(f"URL магазина: {APP_URL}")
    app.run_polling(allowed_updates=Update.ALL_TYPES)

if __name__ == "__main__":
    main()
