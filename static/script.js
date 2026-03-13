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

// ========== ВАШ ПОЛНЫЙ КАТАЛОГ (вставлен сюда) ==========
const catalogData = {
  "categories": [
    {
      "id": "phones",
      "name": "📱 Телефоны",
      "subcategories": [
        {
          "id": "galaxy_a",
          "name": "Samsung Galaxy A",
          "subcategories": [
            {
              "id": "a_4_64",
              "name": "4/64Gb",
              "products": [
                { "id": "a06_4_64_black", "name": "A06 4/64Gb Black 🇷🇺", "price": 5700 },
                { "id": "a06_4_64_lightblue", "name": "A06 4/64Gb Light Blue 🇷🇺", "price": 5700 }
              ]
            },
            {
              "id": "a_4_64c",
              "name": "4/64Gb с зарядкой",
              "products": [
                { "id": "a07_4_64_black", "name": "A07 4/64Gb Black (с зарядкой) 🇦🇪", "price": 6500 },
                { "id": "a07_4_64_green", "name": "A07 4/64Gb Green (с зарядкой) 🇦🇪", "price": 6500 },
                { "id": "a07_4_64_violet", "name": "A07 4/64Gb Light Violet (с зарядкой) 🇦🇪", "price": 6500 }
              ]
            },
            {
              "id": "a_4_128",
              "name": "4/128Gb",
              "products": [
                { "id": "a17_4g_4_128_gray", "name": "A17 4G 4/128Gb Gray 🇦🇪", "price": 10200 },
                { "id": "a17_4g_4_128_lblue", "name": "A17 4G 4/128Gb L.Blue 🇦🇪", "price": 10200 }
              ]
            },
            {
              "id": "a_8_256",
              "name": "8/256Gb",
              "products": [
                { "id": "a17_4g_8_256_lblue", "name": "A17 4G 8/256Gb L.Blue 🇦🇪", "price": 13900 },
                { "id": "a17_4g_8_256_black", "name": "A17 4G 8/256Gb Black 🇷🇺", "price": 14000 }
              ]
            },
            {
              "id": "a_6_128",
              "name": "6/128Gb",
              "products": [
                { "id": "a35_5g_6_128_navy", "name": "A35 5G 6/128Gb A.Navy 🇲🇾", "price": 14500 },
                { "id": "a26_5g_6_128_black", "name": "A26 5G 6/128Gb Black 🇦🇪", "price": 14700 },
                { "id": "a26_5g_6_128_pink", "name": "A26 5G 6/128Gb Peach Pink 🇦🇪", "price": 14700 },
                { "id": "a26_5g_6_128_white", "name": "A26 5G 6/128Gb White 🇦🇪", "price": 14700 }
              ]
            },
            {
              "id": "a_8_256_5g",
              "name": "8/256Gb 5G",
              "products": [
                { "id": "a17_5g_8_256_gray", "name": "A17 5G 8/256Gb Gray 🇲🇾", "price": 14800 }
              ]
            },
            {
              "id": "a_8_128",
              "name": "8/128Gb",
              "products": [
                { "id": "a36_5g_8_128_black", "name": "A36 5G 8/128Gb A.Black 🇦🇪", "price": 18100 }
              ]
            },
            {
              "id": "a_8_128gb",
              "name": "8/128GB",
              "products": [
                { "id": "a55_5g_8_128_navy", "name": "A55 5G 8/128GB A.Navy 🇲🇾", "price": 20000 }
              ]
            },
            {
              "id": "a_8_256_5g_b",
              "name": "8/256Gb 5G",
              "products": [
                { "id": "a35_5g_8_256_iceblue", "name": "A35 5G 8/256Gb Iceblue 🇰🇿", "price": 18000 },
                { "id": "a35_5g_8_256_navy", "name": "A35 5G 8/256Gb A.Navy 🇷🇺", "price": 18000 },
                { "id": "a36_5g_8_256_lime_ae", "name": "A36 5G 8/256Gb A.Lime 🇦🇪", "price": 20800 },
                { "id": "a36_5g_8_256_white_ae", "name": "A36 5G 8/256Gb A.White 🇦🇪", "price": 20800 },
                { "id": "a36_5g_8_256_lime_kz", "name": "A36 5G 8/256Gb A.Lime 🇰🇿", "price": 20900 },
                { "id": "a36_5g_8_256_white_kz", "name": "A36 5G 8/256Gb A.White 🇰🇿", "price": 20900 },
                { "id": "a36_5g_12_256_lime_my", "name": "A36 5G 12/256Gb A.Lime 🇲🇾", "price": 23000 }
              ]
            },
            {
              "id": "a_8_128_5g",
              "name": "8/128GB 5G",
              "products": [
                { "id": "a56_5g_8_128_pink", "name": "A56 5G 8/128GB A.Pink 🇦🇪", "price": 24300 }
              ]
            },
            {
              "id": "a_8_256gb",
              "name": "8/256GB",
              "products": [
                { "id": "a56_5g_8_256_graphite_id", "name": "A56 5G 8/256GB A.Graphite 🇮🇩", "price": 26500 },
                { "id": "a56_5g_8_256_graphite_ae", "name": "A56 5G 8/256GB A.Graphite 🇦🇪", "price": 26600 },
                { "id": "a56_5g_8_256_lightgray", "name": "A56 5G 8/256GB A.Lightgray 🇦🇪", "price": 26600 },
                { "id": "a56_5g_8_256_olive", "name": "A56 5G 8/256GB A.Olive 🇦🇪", "price": 26600 }
              ]
            }
          ]
        },
        {
          "id": "galaxy_s",
          "name": "Samsung Galaxy S",
          "subcategories": [
            {
              "id": "s_8_256",
              "name": "8/256Gb",
              "products": [
                { "id": "s24_8_256_onyxblack", "name": "S24 8/256Gb Onyx Black 🇮🇳", "price": 40000 },
                { "id": "s25_fe_8_256_jetblack", "name": "S25 FE 5G 8/256Gb JetBlack 🇷🇺", "price": 40000 }
              ]
            },
            {
              "id": "s_8_512",
              "name": "8/512Gb",
              "products": [
                { "id": "s25_fe_8_512_navy_pa", "name": "S25 FE 5G 8/512Gb Navy 🇵🇦", "price": 44500 },
                { "id": "s25_fe_8_512_white_my", "name": "S25 FE 5G 8/512Gb White 🇲🇾", "price": 44500 },
                { "id": "s25_fe_8_512_white_sg", "name": "S25 FE 5G 8/512Gb White 🇸🇬", "price": 44700 },
                { "id": "s25_fe_8_512_jetblack", "name": "S25 FE 5G 8/512Gb JetBlack 🇷🇺", "price": 45000 },
                { "id": "s25_fe_8_512_navy_ru", "name": "S25 FE 5G 8/512Gb Navy 🇷🇺", "price": 45000 },
                { "id": "s25_fe_8_512_white_ru", "name": "S25 FE 5G 8/512Gb White 🇷🇺", "price": 45000 }
              ]
            },
            {
              "id": "s_12_256",
              "name": "12/256Gb",
              "products": [
                { "id": "s25_12_256_icyblue", "name": "S25 12/256Gb Icyblue 🇮🇳", "price": 52900 },
                { "id": "s25_12_256_blueblack", "name": "S25 12/256Gb Blue Black 🇮🇳", "price": 54000 },
                { "id": "s25_plus_12_256_navy", "name": "S25+ 12/256Gb Navy 🇮🇳", "price": 59000 }
              ]
            },
            {
              "id": "s_12_512",
              "name": "12/512Gb",
              "products": [
                { "id": "s25_12_512_mint", "name": "S25 12/512Gb Mint 🇮🇳", "price": 65500 },
                { "id": "s25_12_512_silvershadow", "name": "S25 12/512Gb Silver Shadow 🇮🇳", "price": 65500 },
                { "id": "s25_ultra_12_512_silverblue", "name": "S25 Ultra 12/512Gb Titanium Silverblue 🇲🇾", "price": 86000 }
              ]
            },
            {
              "id": "s26_12_256",
              "name": "12/256Gb",
              "products": [
                { "id": "s26_12_256_black", "name": "S26 12/256Gb Черный 🇷🇺", "price": 71500 },
                { "id": "s26_12_256_blue", "name": "S26 12/256Gb Голубой 🇷🇺", "price": 71500 },
                { "id": "s26_12_256_purple", "name": "S26 12/256Gb Фиолетовый 🇷🇺", "price": 71500 },
                { "id": "s26_12_256_white", "name": "S26 12/256Gb Белый 🇷🇺", "price": 71500 }
              ]
            },
            {
              "id": "s26_12_512",
              "name": "12/512Gb",
              "products": [
                { "id": "s26_12_512_black_ae", "name": "S26 12/512Gb Black 🇦🇪", "price": 79000 },
                { "id": "zfold6_12_256_navy", "name": "Z Fold 6 12/256Gb Navy 🇦🇪", "price": 80000 },
                { "id": "s26_12_512_black_ru", "name": "S26 12/512Gb Черный 🇷🇺", "price": 82000 },
                { "id": "s26_12_512_blue_ru", "name": "S26 12/512Gb Голубой 🇷🇺", "price": 82000 },
                { "id": "s26_12_512_purple_ru", "name": "S26 12/512Gb Фиолетовый 🇷🇺", "price": 82000 },
                { "id": "s26_plus_12_256_blue", "name": "S26+ 12/256Gb Голубой 🇷🇺", "price": 82000 },
                { "id": "s26_plus_12_256_white", "name": "S26+ 12/256Gb Белый 🇷🇺", "price": 82500 },
                { "id": "s26_plus_12_256_purple", "name": "S26+ 12/256Gb Фиолетовый 🇷🇺", "price": 82500 },
                { "id": "s26_plus_12_256_black", "name": "S26+ 12/256Gb Черный 🇷🇺", "price": 83000 }
              ]
            },
            {
              "id": "s26_ultra_12_256",
              "name": "12/256Gb Ultra",
              "products": [
                { "id": "s26_ultra_12_256_black_ae", "name": "S26 Ultra 12/256Gb Black 🇦🇪", "price": 96000 },
                { "id": "s26_ultra_12_256_blue_ae", "name": "S26 Ultra 12/256Gb Sky Blue 🇦🇪", "price": 96000 },
                { "id": "s26_ultra_12_256_violet_ae", "name": "S26 Ultra 12/256Gb Cobalt Violet 🇦🇪", "price": 96000 },
                { "id": "s26_ultra_12_256_white_ae", "name": "S26 Ultra 12/256Gb White 🇦🇪", "price": 96000 },
                { "id": "s25_ultra_12_1t_black", "name": "S25 Ultra 12/1Tb Titanium Black 🇵🇦", "price": 97900 },
                { "id": "s25_ultra_12_1t_gray", "name": "S25 Ultra 12/1Tb Titanium Gray 🇵🇦", "price": 97900 },
                { "id": "s26_ultra_12_256_blue_ru", "name": "S26 Ultra 12/256Gb Голубой 🇷🇺", "price": 99000 },
                { "id": "s26_ultra_12_256_purple_ru", "name": "S26 Ultra 12/256Gb Фиолетовый 🇷🇺", "price": 99000 }
              ]
            },
            {
              "id": "s26_ultra_12_512",
              "name": "12/512Gb Ultra",
              "products": [
                { "id": "s26_ultra_12_512_black_ae", "name": "S26 Ultra 12/512Gb Black 🇦🇪", "price": 110000 },
                { "id": "s26_ultra_12_512_blue_ae", "name": "S26 Ultra 12/512Gb Sky Blue 🇦🇪", "price": 110000 },
                { "id": "s26_ultra_12_512_violet_ae", "name": "S26 Ultra 12/512Gb Cobalt Violet 🇦🇪", "price": 110000 },
                { "id": "s26_ultra_12_512_white_ae", "name": "S26 Ultra 12/512Gb White 🇦🇪", "price": 110000 },
                { "id": "s26_ultra_12_512_black_ru", "name": "S26 Ultra 12/512Gb Черный 🇷🇺", "price": 117000 }
              ]
            },
            {
              "id": "s26_ultra_16_1t",
              "name": "16/1Tb Ultra",
              "products": [
                { "id": "s26_ultra_16_1t_black_ae", "name": "S26 Ultra 16/1Tb Black 🇦🇪", "price": 145000 },
                { "id": "s26_ultra_16_1t_blue_ae", "name": "S26 Ultra 16/1Tb Sky Blue 🇦🇪", "price": 145000 },
                { "id": "s26_ultra_16_1t_violet_ae", "name": "S26 Ultra 16/1Tb Cobalt Violet 🇦🇪", "price": 147000 }
              ]
            }
          ]
        },
        {
          "id": "iphone_17",
          "name": "iPhone 17",
          "subcategories": [
            {
              "id": "pro_256",
              "name": "Pro 256GB",
              "products": [
                { "id": "iphone17_pro_256_orange_us", "name": "17 Pro 256 Orange 🇺🇸 (e sim актив)", "price": 98500 },
                { "id": "iphone17_pro_256_blue_us", "name": "17 Pro 256 Blue 🇺🇸 (e sim актив)", "price": 99000 },
                { "id": "iphone17_pro_256_blue_jp", "name": "17 Pro 256 Blue 🇯🇵 (e sim)", "price": 101500 },
                { "id": "iphone17_pro_256_orange_jp", "name": "17 Pro 256 Orange 🇯🇵 (e sim)", "price": 102000 },
                { "id": "iphone17_pro_256_orange_cn", "name": "17 Pro 256 Orange 🇨🇳 (2 sim)", "price": 103000 },
                { "id": "iphone17_pro_256_orange_kr", "name": "17 Pro 256 Orange 🇰🇷🇭🇰 (1sim+e sim)", "price": 108500 },
                { "id": "iphone17_pro_256_silver_jp", "name": "17 Pro 256 Silver 🇯🇵 (e sim)", "price": 111500 },
                { "id": "iphone17_pro_256_blue_kr", "name": "17 Pro 256 Blue 🇰🇷🇭🇰🇸🇬 (1sim+e sim)", "price": 113500 },
                { "id": "iphone17_pro_256_silver_kr", "name": "17 Pro 256 Silver 🇰🇷🇭🇰 (1sim+e sim)", "price": 115500 }
              ]
            },
            {
              "id": "pro_512",
              "name": "Pro 512GB",
              "products": [
                { "id": "iphone17_pro_512_orange_jp", "name": "17 Pro 512 Orange 🇯🇵 (e sim)", "price": 116000 },
                { "id": "iphone17_pro_512_blue_jp", "name": "17 Pro 512 Blue 🇯🇵 (e sim)", "price": 123500 },
                { "id": "iphone17_pro_512_orange_kr", "name": "17 Pro 512 Orange 🇰🇷🇭🇰 (1sim+e sim)", "price": 124000 },
                { "id": "iphone17_pro_512_silver_jp", "name": "17 Pro 512 Silver 🇯🇵 (e sim)", "price": 125500 },
                { "id": "iphone17_pro_512_blue_kr", "name": "17 Pro 512 Blue 🇰🇷🇭🇰 (1sim+e sim)", "price": 134000 },
                { "id": "iphone17_pro_512_silver_kr", "name": "17 Pro 512 Silver 🇰🇷🇭🇰 (1sim+e sim)", "price": 138000 }
              ]
            },
            {
              "id": "pro_1tb",
              "name": "Pro 1TB",
              "products": [
                { "id": "iphone17_pro_1tb_blue_jp", "name": "17 Pro 1TB Blue 🇯🇵 (e sim)", "price": 133000 },
                { "id": "iphone17_pro_1tb_silver_jp", "name": "17 Pro 1TB Silver 🇯🇵 (e sim)", "price": 136500 },
                { "id": "iphone17_pro_1tb_blue_kr", "name": "17 Pro 1TB Blue 🇰🇷 (1sim+e sim)", "price": 147000 },
                { "id": "iphone17_pro_1tb_silver_kr", "name": "17 Pro 1TB Silver 🇰🇷🇭🇰 (1sim+e sim)", "price": 149000 }
              ]
            },
            {
              "id": "pm_256",
              "name": "Pro Max 256GB",
              "products": [
                { "id": "iphone17_pro_max_256_orange_jp_refurb", "name": "iPhone 17 Pro Max 256GB Orange 🇯🇵 (eSIM) - замена материнской платы", "price": 95000 },
                { "id": "iphone17_pro_max_256_blue_active", "name": "17 Pro Max 256 Blue 🇺🇸🇯🇵 (e sim актив)", "price": 109500 },
                { "id": "iphone17_pro_max_256_orange_jp", "name": "17 Pro Max 256 Orange 🇯🇵 (e sim)", "price": 115200 },
                { "id": "iphone17_pro_max_256_blue_us_jp", "name": "17 Pro Max 256 Blue 🇺🇸🇯🇵 (e sim)", "price": 115500 },
                { "id": "iphone17_pro_max_256_silver_zd_eu", "name": "iPhone 17 Pro Max 256GB Silver ZD 🇪🇺 (sim/esim) - замена в СЦ", "price": 117500 },
                { "id": "iphone17_pro_max_256_blue_kr", "name": "17 Pro Max 256 Blue 🇰🇷 (1sim+e sim)", "price": 118500 },
                { "id": "iphone17_pro_max_256_orange_kr", "name": "17 Pro Max 256 Orange 🇰🇷🇭🇰 (1sim+e sim)", "price": 118500 },
                { "id": "iphone17_pro_max_256_silver_jp", "name": "17 Pro Max 256 Silver 🇯🇵 (e sim)", "price": 119200 },
                { "id": "iphone17_pro_max_256_silver_kr", "name": "17 Pro Max 256 Silver 🇰🇷🇭🇰 (1sim+e sim)", "price": 126200 }
              ]
            },
            {
              "id": "pm_512",
              "name": "Pro Max 512GB",
              "products": [
                { "id": "iphone17_pro_max_512_orange_jp", "name": "17 Pro Max 512 Orange 🇯🇵 (e sim)", "price": 124500 },
                { "id": "iphone17_pro_max_512_blue_jp", "name": "17 Pro Max 512 Blue 🇯🇵 (e sim)", "price": 125500 },
                { "id": "iphone17_pro_max_512_silver_jp", "name": "17 Pro Max 512 Silver 🇯🇵 (e sim)", "price": 135000 },
                { "id": "iphone17_pro_max_512_orange_kr", "name": "17 Pro Max 512 Orange 🇰🇷🇭🇰 (1sim+e sim)", "price": 145500 },
                { "id": "iphone17_pro_max_512_blue_kr", "name": "17 Pro Max 512 Blue 🇰🇷🇭🇰 (1sim+e sim)", "price": 145500 },
                { "id": "iphone17_pro_max_512_silver_kr", "name": "17 Pro Max 512 Silver 🇰🇷🇭🇰 (1sim+e sim)", "price": 146500 }
              ]
            },
            {
              "id": "pm_1tb",
              "name": "Pro Max 1TB",
              "products": [
                { "id": "iphone17_pro_max_1tb_blue_jp", "name": "17 Pro Max 1TB Blue 🇯🇵 (e sim)", "price": 149000 },
                { "id": "iphone17_pro_max_1tb_orange_jp", "name": "17 Pro Max 1TB Orange 🇯🇵 (e sim)", "price": 149500 },
                { "id": "iphone17_pro_max_1tb_silver_jp", "name": "17 Pro Max 1TB Silver 🇯🇵 (e sim)", "price": 152000 },
                { "id": "iphone17_pro_max_1tb_orange_kr", "name": "17 Pro Max 1TB Orange 🇰🇷🇭🇰 (1sim+e sim)", "price": 167000 },
                { "id": "iphone17_pro_max_1tb_blue_kr", "name": "17 Pro Max 1TB Blue 🇰🇷🇭🇰 (1sim+e sim)", "price": 172000 },
                { "id": "iphone17_pro_max_1tb_silver_kr", "name": "17 Pro Max 1TB Silver 🇰🇷🇭🇰 (1sim+e sim)", "price": 182000 }
              ]
            },
            {
              "id": "pm_2tb",
              "name": "Pro Max 2TB",
              "products": [
                { "id": "iphone17_pro_max_2tb_orange_jp", "name": "17 Pro Max 2TB Orange 🇯🇵 (e sim) *", "price": 154000 },
                { "id": "iphone17_pro_max_2tb_blue_jp", "name": "17 Pro Max 2TB Blue 🇯🇵 (e sim) *", "price": 155500 },
                { "id": "iphone17_pro_max_2tb_silver_jp", "name": "17 Pro Max 2TB Silver 🇯🇵 (e sim)", "price": 180000 },
                { "id": "iphone17_pro_max_2tb_orange_kr", "name": "17 Pro Max 2TB Orange 🇰🇷🇭🇰 (1sim+e sim)", "price": 189000 },
                { "id": "iphone17_pro_max_2tb_blue_kr", "name": "17 Pro Max 2TB Blue 🇰🇷🇭🇰 (1sim+e sim)", "price": 189000 },
                { "id": "iphone17_pro_max_2tb_silver_kr", "name": "17 Pro Max 2TB Silver 🇰🇷🇭🇰 (1sim+e sim)", "price": 215500 }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "tvs",
      "name": "📺 Телевизоры",
      "subcategories": [
        {
          "id": "lg_tvs",
          "name": "LG",
          "subcategories": [
            {
              "id": "lg_32_43",
              "name": "32-43 дюйма",
              "products": [
                { "id": "lg_32lq63006la", "name": "LG 32LQ63006LA", "price": 22000 },
                { "id": "lg_32lq63806lc", "name": "LG 32LQ63806LC", "price": 22500 },
                { "id": "lg_43qned70a6a", "name": "LG 43QNED70A6A", "price": 36500 }
              ]
            },
            {
              "id": "lg_48_55",
              "name": "48-55 дюймов",
              "products": [
                { "id": "lg_55qned80a6a", "name": "LG 55QNED80A6A", "price": 64000 },
                { "id": "lg_oled48c5rla", "name": "LG OLED48C5RLA", "price": 91000 },
                { "id": "lg_oled55c5rla", "name": "LG OLED55C5RLA", "price": 120000 },
                { "id": "lg_oled55g5rla", "name": "LG OLED55G5RLA", "price": 158000 }
              ]
            },
            {
              "id": "lg_65",
              "name": "65 дюймов",
              "products": [
                { "id": "lg_65qned70a6a", "name": "LG 65QNED70A6A", "price": 67000 },
                { "id": "lg_oled65c5rla", "name": "LG OLED65C5RLA", "price": 165000 },
                { "id": "lg_oled65g5rla", "name": "LG OLED65G5RLA", "price": 212000 }
              ]
            },
            {
              "id": "lg_75_100",
              "name": "75-100 дюймов",
              "products": [
                { "id": "lg_75qned86a6a", "name": "LG 75QNED86A6A", "price": 115000 },
                { "id": "lg_100qned86a6a", "name": "LG 100QNED86A6A", "price": 325000 },
                { "id": "lg_oled83c5rla", "name": "LG OLED83C5RLA", "description": "🇲", "price": 348000 },
                { "id": "lg_oled83g5rla", "name": "LG OLED83G5RLA", "description": "🇲", "price": 450000 },
                { "id": "lg_oled97g5rla", "name": "LG OLED97G5RLA", "price": 1490000 }
              ]
            }
          ]
        },
        {
          "id": "samsung_tvs",
          "name": "Samsung",
          "subcategories": [
            {
              "id": "s_32_43",
              "name": "32-43 дюйма",
              "products": [
                { "id": "samsung_ue32h5000fuxru", "name": "Samsung UE32H5000FUXRU", "price": 17000 },
                { "id": "samsung_ue32f6000fuxru", "name": "Samsung UE32F6000FUXRU", "price": 20000 },
                { "id": "samsung_ue43u8000fuxru", "name": "Samsung UE43U8000FUXRU", "price": 25500 },
                { "id": "samsung_qe32ls03cbuxru", "name": "Samsung QE32LS03CBUXRU", "price": 39500 },
                { "id": "samsung_qe43qn90dauxru", "name": "Samsung QE43QN90DAUXRU", "description": "уценка", "price": 70000 }
              ]
            },
            {
              "id": "s_50_55",
              "name": "50-55 дюймов",
              "products": [
                { "id": "samsung_ue50u8000fuxru", "name": "Samsung UE50U8000FUXRU", "price": 35800 },
                { "id": "samsung_qe50q7faauxru", "name": "Samsung QE50Q7FAAUXRU", "price": 44500 },
                { "id": "samsung_ue55u8000fuxru", "name": "Samsung UE55U8000FUXRU", "price": 43000 },
                { "id": "samsung_qe55qef1auxru", "name": "Samsung QE55QEF1AUXRU", "price": 45000 },
                { "id": "samsung_qe55q7faauxru", "name": "Samsung QE55Q7FAAUXRU", "price": 53000 },
                { "id": "samsung_qe55qn70fauxru", "name": "Samsung QE55QN70FAUXRU", "price": 76500 },
                { "id": "samsung_qe55ls03fauxru", "name": "Samsung QE55LS03FAUXRU", "price": 105000 },
                { "id": "samsung_qe55s85faexce", "name": "Samsung QE55S85FAEXCE", "price": 115000 },
                { "id": "samsung_qe55s85faexru", "name": "Samsung QE55S85FAEXRU", "price": 128000 },
                { "id": "samsung_qe55s90fauxru", "name": "Samsung QE55S90FAUXRU", "price": 132000 },
                { "id": "samsung_qe55qn90fauxru", "name": "Samsung QE55QN90FAUXRU", "price": 147500 },
                { "id": "samsung_qe55s95fauxru", "name": "Samsung QE55S95FAUXRU", "price": 190000 }
              ]
            },
            {
              "id": "s_65_75",
              "name": "65-75 дюймов",
              "products": [
                { "id": "samsung_qe65qef1auxru", "name": "Samsung QE65QEF1AUXRU", "price": 56000 },
                { "id": "samsung_ue75u8000fuxru", "name": "Samsung UE75U8000FUXRU", "price": 69000 },
                { "id": "samsung_qe65q8faauxru", "name": "Samsung QE65Q8FAAUXRU", "price": 84000 },
                { "id": "samsung_qe65ls03fauxru", "name": "Samsung QE65LS03FAUXRU", "price": 137000 },
                { "id": "samsung_qe65qn800duxru", "name": "Samsung QE65QN800DUXRU", "price": 158000 },
                { "id": "samsung_qe65s85faexru", "name": "Samsung QE65S85FAEXRU", "price": 170000 },
                { "id": "samsung_qe65qn900duxru", "name": "Samsung QE65QN900DUXRU", "price": 170000 },
                { "id": "samsung_qe65s90faexru", "name": "Samsung QE65S90FAEXRU", "price": 175000 },
                { "id": "samsung_qe65qn90fauxru", "name": "Samsung QE65QN90FAUXRU", "price": 210000 },
                { "id": "samsung_qe65s95fauxce", "name": "Samsung QE65S95FAUXCE", "price": 240000 },
                { "id": "samsung_qe65qn900fuxru", "name": "Samsung QE65QN900FUXRU", "description": "🇲", "price": 248000 },
                { "id": "samsung_qe65s95fauxru", "name": "Samsung QE65S95FAUXRU", "price": 248000 },
                { "id": "samsung_qe75ls03fauxru", "name": "Samsung QE75LS03FAUXRU", "price": 188000 },
                { "id": "samsung_qe75qn90fauxru", "name": "Samsung QE75QN90FAUXRU", "price": 270000 }
              ]
            },
            {
              "id": "s_77_85",
              "name": "77-85 дюймов",
              "products": [
                { "id": "samsung_qe77s85faexru", "name": "Samsung QE77S85FAEXRU", "price": 249000 },
                { "id": "samsung_qe77s90faexru", "name": "Samsung QE77S90FAEXRU", "price": 297000 },
                { "id": "samsung_ue85u8000fuxru", "name": "Samsung UE85U8000FUXRU", "price": 99000 },
                { "id": "samsung_qe85q7faauxru", "name": "Samsung QE85Q7FAAUXRU", "price": 111000 },
                { "id": "samsung_qe85ls03fauxru", "name": "Samsung QE85LS03FAUXRU", "price": 240000 },
                { "id": "samsung_qe85qn900fuxru", "name": "Samsung QE85QN900FUXRU", "description": "резерв", "price": 474000 }
              ]
            },
            {
              "id": "s_98+",
              "name": "98+ дюймов",
              "products": [
                { "id": "samsung_ue98du9000uxru", "name": "Samsung UE98DU9000UXRU", "price": 200000 },
                { "id": "samsung_qe98qn90fauxru", "name": "Samsung QE98QN90FAUXRU", "price": 540000 },
                { "id": "samsung_qe100qn80fuxru", "name": "Samsung QE100QN80FUXRU", "price": 345000 }
              ]
            }
          ]
        },
        {
          "id": "hisense_tvs",
          "name": "Hisense",
          "subcategories": [
            {
              "id": "his_32_43",
              "name": "32-43 дюйма",
              "products": [
                { "id": "hisense_32a4q", "name": "Hisense 32A4Q", "price": 12400 },
                { "id": "hisense_43e7q", "name": "Hisense 43E7Q", "description": "🇲", "price": 23000 }
              ]
            },
            {
              "id": "his_75_85",
              "name": "75-85 дюймов",
              "products": [
                { "id": "hisense_75u7q", "name": "Hisense 75U7Q", "price": 105000 },
                { "id": "hisense_85e7q", "name": "Hisense 85E7Q", "price": 95000 }
              ]
            },
            {
              "id": "his_100+",
              "name": "100+ дюймов",
              "products": [
                { "id": "hisense_100u7q", "name": "Hisense 100U7Q", "description": "🇲 (под заказ 1 день)", "price": 195000 },
                { "id": "hisense_116uxq", "name": "Hisense 116UXQ", "description": "под заказ 1 день", "price": 1470000 }
              ]
            }
          ]
        },
        {
          "id": "tcl_tvs",
          "name": "TCL",
          "subcategories": [
            {
              "id": "tcl_32_43",
              "name": "32-43 дюйма",
              "products": [
                { "id": "tcl_32s5k", "name": "TCL 32S5K", "description": "🇲", "price": 16000 },
                { "id": "tcl_43s5k", "name": "TCL 43S5K", "description": "🇲", "price": 21600 },
                { "id": "tcl_43p7k", "name": "TCL 43P7K", "price": 27000 }
              ]
            },
            {
              "id": "tcl_55_65",
              "name": "55-65 дюймов",
              "products": [
                { "id": "tcl_55c6k", "name": "TCL 55C6K", "description": "🇲", "price": 52500 },
                { "id": "tcl_55c7k", "name": "TCL 55C7K", "price": 66000 },
                { "id": "tcl_65p6k", "name": "TCL 65P6K", "description": "🇲", "price": 44000 },
                { "id": "tcl_65c6k", "name": "TCL 65C6K", "description": "🇲", "price": 78000 },
                { "id": "tcl_65c7k", "name": "TCL 65C7K", "description": "🇲", "price": 90000 },
                { "id": "tcl_65c8k", "name": "TCL 65C8K", "description": "🇲", "price": 125000 }
              ]
            },
            {
              "id": "tcl_75_85",
              "name": "75-85 дюймов",
              "products": [
                { "id": "tcl_75c7k", "name": "TCL 75C7K", "description": "🇲", "price": 125000 },
                { "id": "tcl_75c8k", "name": "TCL 75C8K", "description": "🇲", "price": 164000 },
                { "id": "tcl_85c6k", "name": "TCL 85C6K", "description": "🇲", "price": 133000 },
                { "id": "tcl_85x11k", "name": "TCL 85X11K", "description": "🇲", "price": 330000 }
              ]
            },
            {
              "id": "tcl_115",
              "name": "115 дюймов",
              "products": [
                { "id": "tcl_115x955", "name": "TCL 115X955", "description": "под заказ 1 день", "price": 1180000 }
              ]
            }
          ]
        },
        {
          "id": "xiaomi_tvs",
          "name": "Xiaomi",
          "subcategories": [
            {
              "id": "x_32_43",
              "name": "32-43 дюйма",
              "products": [
                { "id": "xiaomi_tv_a32_2026", "name": "Xiaomi TV A 32 2026 (L32MB-ARU)", "price": 13100 },
                { "id": "xiaomi_tv_a_pro_32_2026", "name": "Xiaomi TV A Pro 32 2026 (L32MB-APRU)", "price": 13400 },
                { "id": "xiaomi_tv_a_43_2026", "name": "Xiaomi TV A 43 2026 (L43MB-AURU)", "price": 20500 },
                { "id": "xiaomi_tv_a_pro_43_2026", "name": "Xiaomi TV A Pro 43 2026 (L43MB-APRU)", "price": 22900 }
              ]
            },
            {
              "id": "x_50_55",
              "name": "50-55 дюймов",
              "products": [
                { "id": "xiaomi_tv_a_pro_50_2026", "name": "Xiaomi TV A Pro 50 2026 (L50MB-APRU)", "price": 27500 },
                { "id": "xiaomi_tv_a_55_2026", "name": "Xiaomi TV A 55 2026 (L55MB-ARU)", "price": 27000 },
                { "id": "xiaomi_tv_a_pro_55_2026", "name": "Xiaomi TV A Pro 55 2026 (L55MB-APRU)", "price": 31500 }
              ]
            },
            {
              "id": "x_65_75",
              "name": "65-75 дюймов",
              "products": [
                { "id": "xiaomi_tv_a_65_2026", "name": "Xiaomi TV A 65 2026 (L65MB-ARU)", "price": 39000 },
                { "id": "xiaomi_tv_a_pro_65_2026", "name": "Xiaomi TV A Pro 65 2026 (L65MB-APRU)", "price": 41000 },
                { "id": "xiaomi_tv_a_pro_75_2026", "name": "Xiaomi TV A Pro 75 2026 (L75MB-APRU)", "price": 61000 },
                { "id": "xiaomi_tv_s_65_2025", "name": "Xiaomi TV S 65 2025 (L65MA-SPLRU)", "price": 72000 }
              ]
            }
          ]
        },
        {
          "id": "yandex_tvs",
          "name": "Яндекс",
          "subcategories": [
            {
              "id": "ya_55",
              "name": "55 дюймов",
              "products": [
                { "id": "yandex_55_pro_00101", "name": "Яндекс 55 Про YNDX-00101", "price": 58000 },
                { "id": "yandex_55_pro_00103", "name": "Яндекс 55 Про YNDX-00103", "price": 72500 }
              ]
            }
          ]
        },
        {
          "id": "tv_mounts",
          "name": "Кронштейны и рамки",
          "products": [
            { "id": "samsung_wmn_b50eb", "name": "Кронштейн Samsung WMN-B50EB Slim Fit", "price": 8500 },
            { "id": "samsung_frame_frame_white", "name": "Рамка Samsung The Frame Accessories VG-SCFA55WTBRU Белый", "price": 7000 },
            { "id": "samsung_frame_frame_brown", "name": "Рамка Samsung The Frame Accessories VG-SCFA55BWBRU Коричневый", "price": 7000 },
            { "id": "samsung_wmn_b30fb", "name": "Кронштейн Samsung WMN-B30FB", "price": 14500 }
          ]
        }
      ]
    },
    {
      "id": "photo_video",
      "name": "📸 Фото и видео",
      "subcategories": [
        {
          "id": "instax",
          "name": "Instax",
          "subcategories": [
            {
              "id": "instax_cam",
              "name": "Камеры",
              "products": [
                { "id": "instax_mini_12", "name": "instax mini 12", "description": "⚪️8500💚💙", "price": 9000 },
                { "id": "instax_mini_evo_black", "name": "Instax Mini Evo Black", "description": "⚫️", "price": 17000 },
                { "id": "instax_wide_400", "name": "Instax Wide 400", "description": "💚", "price": 17000 },
                { "id": "instax_mini_evo_brown", "name": "Instax Mini Evo Brown", "description": "🟤", "price": 17500 },
                { "id": "instax_mini_evo_pink", "name": "Instax mini Evo Pink", "description": "💖", "price": 19500 },
                { "id": "instax_mini_evo_wide", "name": "Instax Mini Evo Wide", "description": "⚫️", "price": 29000 },
                { "id": "instax_wide_evo_hybrid_black", "name": "Instax Wide Evo Hybrid Camera Black", "description": "⚫️ NEW", "price": 31000 },
                { "id": "kodak_charmera", "name": "Kodak Charmera", "description": "NEW", "price": 3500 }
              ]
            },
            {
              "id": "instax_acc",
              "name": "Принтеры и бумага",
              "products": [
                { "id": "instax_mini_link_wide", "name": "Fuji Instax Mini Link WIDE", "price": 12000 },
                { "id": "instax_film_mini_10", "name": "Фотобумага mini -10 кадров", "price": 1600 },
                { "id": "instax_film_mini_20", "name": "Фотобумага mini -20 кадров", "price": 2600 },
                { "id": "instax_film_mini_60", "name": "Фотобумага mini 60 кадров", "price": 8000 }
              ]
            }
          ]
        },
        {
          "id": "canon",
          "name": "Canon",
          "subcategories": [
            {
              "id": "canon_printers",
              "name": "Принтеры",
              "products": [
                { "id": "canon_selphy_cp1500_black", "name": "Canon Selphy CP1500 Black", "price": 12500 },
                { "id": "canon_selphy_paper", "name": "Canon Selphy Бумага (108pc)", "price": 3500 }
              ]
            },
            {
              "id": "canon_cameras",
              "name": "Камеры",
              "products": [
                { "id": "canon_psg7x_mark3_black", "name": "Canon PSG7X Mark 3 PowerShot G7X Black", "description": "⚫️", "price": 92000 },
                { "id": "canon_sx740_hs", "name": "Canon sx740 hs", "description": "🩶⚫️", "price": 51000 }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "dyson_hair",
      "name": "💃 Dyson Стайлеры",
      "subcategories": [
        {
          "id": "hs09",
          "name": "HS09 Airwrap",
          "products": [
            { "id": "dyson_hs09_coanda_pink", "name": "HS09 Airwrap CoAnda 2X Ceramic pink", "description": "🇭🇰53000🇪🇺", "price": 51000 },
            { "id": "dyson_hs09_coanda_jasper", "name": "HS09 Airwrap CoAnda 2X Jasper Plum", "description": "🇰🇷50000🇭🇰", "price": 52000 },
            { "id": "dyson_hs09_coanda_amber", "name": "HS09 Airwrap CoAnda 2X Amber Silk", "description": "🇪🇺🇰🇷", "price": 53000 },
            { "id": "dyson_hs09_coanda_red", "name": "HS09 Airwrap Coanda 2x (Red velvet)", "description": "🇭🇰🇰🇷 NEW", "price": 54000 }
          ]
        },
        {
          "id": "hs08",
          "name": "HS08",
          "products": [
            { "id": "dyson_hs08_amber_silk", "name": "HS08 Amber Silk", "description": "🇭🇰39.000🇪🇺", "price": 35000 },
            { "id": "dyson_hs08_ceramic_pink", "name": "HS08 Ceramic Pink", "description": "🇭🇰41.000🇪🇺", "price": 35000 },
            { "id": "dyson_hs08_prussian_blue_copper", "name": "HS08 Prussian Blue/Rich Copper", "description": "🇭🇰", "price": 35000 },
            { "id": "dyson_hs08_vinca_blue_topaz", "name": "HS08 Vinca blue/topaz", "description": "🇮🇳", "price": 33000 },
            { "id": "dyson_hs08_ceramic_patina_topaz", "name": "HS08 Ceramic patina/Topaz", "description": "🇰🇷 наша вилка", "price": 39000 },
            { "id": "dyson_hs08_ceramic_patina_topaz_diffuse", "name": "HS08 Ceramic Patina/Topaz с диффузором", "description": "🇪🇺", "price": 38000 },
            { "id": "dyson_hs08_jasper_plum_hk", "name": "HS08 Jasper Plum", "description": "🇭🇰", "price": 38000 },
            { "id": "dyson_hs08_amber_silk_diffuse", "name": "HS08 Amber Silk диффузор", "description": "🇪🇺", "price": 39000 },
            { "id": "dyson_hs08_ceramic_pink_diffuse", "name": "HS08 Ceramic Pink Diffuse", "description": "🇪🇺", "price": 39000 },
            { "id": "dyson_hs08_red_velvet", "name": "HS08 Red Velvet", "description": "🇭🇰", "price": 41000 },
            { "id": "dyson_hs08_kanzan_pink", "name": "HS08 Kanzan Pink", "description": "🇭🇰", "price": 45000 },
            { "id": "dyson_hs08_vinca_blue_topaz_diffuse", "name": "HS08 Vinca blue/topaz c Диффузором", "description": "🇪🇺", "price": 38000 }
          ]
        },
        {
          "id": "hs05",
          "name": "HS05",
          "products": [
            { "id": "dyson_hs05_nickel_copper_origin", "name": "HS05 Nickel/Copper Origin (без кейса, 3 насадки)", "description": "🇪🇺", "price": 32000 },
            { "id": "dyson_hs05_nickel_copper", "name": "HS05 Nickel/Cooper", "description": "🇨🇳", "price": 34000 },
            { "id": "dyson_hs05_ceramic_pop", "name": "HS05 Ceramic Pop", "description": "🇭🇰 45.000 наша вилка", "price": 35000 },
            { "id": "dyson_hs05_prussian_blue", "name": "HS05 Prussian Blue", "description": "🇭🇰🇨🇳", "price": 36000 },
            { "id": "dyson_hs05_strawberry_blush", "name": "HS05 Strawberry Bronze/Blush Pink", "description": "наша вилка", "price": 45000 },
            { "id": "dyson_hs05_fuchsia_nickel", "name": "HS05 Fuchsia/Nickel", "description": "🇨🇳", "price": 47000 },
            { "id": "dyson_hs05_prussian_blue_diffuse", "name": "HS05 Prussian Blue Diffuse", "description": "🇪🇺", "price": 50000 },
            { "id": "dyson_hs05_strawberry_blush_diffuse", "name": "HS05 Strawberry /Blush Pink Diffusor", "description": "🇪🇺", "price": 50000 },
            { "id": "dyson_hs05_topaz_orange", "name": "HS05 Topaz Orange", "description": "🇨🇳 (С дорожной сумкой)", "price": 59000 }
          ]
        },
        {
          "id": "ht01",
          "name": "HT01 Выпрямители",
          "products": [
            { "id": "dyson_ht01_prussian_blue", "name": "HT01 Prussian Blue", "description": "🇦🇪🇭🇰32.000 наша вилка", "price": 26500 },
            { "id": "dyson_ht01_nickel_copper", "name": "HT01 Nickel/Cooper", "description": "🇨🇳🇦🇪 34.000 наша вилка", "price": 28000 },
            { "id": "dyson_ht01_strawberry_blush_damaged", "name": "HT01 Strawberry Bronze/Blush Pink (поврежденная коробка)", "price": 28000 },
            { "id": "dyson_ht01_ceramic_pink_rose", "name": "HT01 Ceramic pink/Rose", "description": "🇭🇰🇲🇾36000🇰🇷", "price": 30000 },
            { "id": "dyson_ht01_amber_silk_case", "name": "HT01 Amber Silk ( с кейсом)", "description": "🇭🇰 33.000🇰🇷", "price": 31000 },
            { "id": "dyson_ht01_jasper_plum_case", "name": "HT01 Jasper Plum (с кейсом)", "description": "🇭🇰", "price": 32000 },
            { "id": "dyson_ht01_strawberry_blush_case", "name": "HT01 Strawberry Bronze /Blush Pink (с кейсом)", "description": "🇨🇳34.000🇰🇷наша вилка", "price": 33000 },
            { "id": "dyson_ht01_red_velvet_case", "name": "HT01 Red Velvet (с кейсом)", "description": "🇮🇳🇭🇰40.000🇰🇷наша вилка", "price": 33000 },
            { "id": "dyson_ht01_ceramic_pink_rose_case", "name": "HT01 Ceramic pink/Rose (с кейсом)", "description": "🇦🇺37000🇰🇷", "price": 34000 },
            { "id": "dyson_ht01_kanzan_pink_case", "name": "HT01 Kanzan Pink ( с кейсом )", "description": "🇭🇰", "price": 34000 },
            { "id": "dyson_ht01_stand_blue", "name": "HT01 STAND (синяя)", "price": 3000 },
            { "id": "dyson_ht01_travel_bag", "name": "Дорожная Сумка для HT01 черный / медный", "price": 5000 }
          ]
        },
        {
          "id": "hd",
          "name": "Фены HD",
          "products": [
            { "id": "dyson_hd08_black_nickel_origin", "name": "HD08 Black/Nickel origin 1 насадка", "description": "🇭🇰", "price": 26000 },
            { "id": "dyson_hd07_prussian_blue_no_case", "name": "HD07 Prussian Blue (без кейса)", "description": "🇪🇺", "price": 27000 },
            { "id": "dyson_hd16_prussian_blue", "name": "HD16 Prussian Blue", "description": "🇭🇰", "price": 28000 },
            { "id": "dyson_hd08_nickel_copper", "name": "HD08 Nickel/Cooper", "description": "🇮🇳", "price": 30000 },
            { "id": "dyson_hd15_nickel_copper", "name": "HD15 Nickel/Сopper", "description": "🇰🇷 наша вилка", "price": 32000 },
            { "id": "dyson_hd16_ceramic_patina_no_case", "name": "HD16 Ceramic Patina (без кейса)", "description": "🇮🇳", "price": 32000 },
            { "id": "dyson_hd08_blue_copper_case", "name": "HD08 Blue /Cooper (c кейсом) /Prussian blue", "description": "🇮🇳", "price": 32000 },
            { "id": "dyson_hd16_vinca_blue_topaz", "name": "HD16 Vinca blue/topaz", "description": "🇰🇷Наша вилка, 35.000🇪🇺", "price": 33000 },
            { "id": "dyson_hd16_red_velvet_gold_case", "name": "HD16 Red Velvet/Gold (с кейсом)", "description": "🇭🇰", "price": 33000 },
            { "id": "dyson_hd17_rpro_ceramic_pink_case", "name": "HD17 R-PRO Ceramic Pink (с кейсом)", "description": "🇭🇰35.000🇰🇷наша вилка", "price": 33000 },
            { "id": "dyson_hd17_rpro_jasper_plum_case", "name": "HD17 R-PRO Jasper Plum (с кейсом)", "description": "🇭🇰", "price": 34000 },
            { "id": "dyson_hd17_rpro_ceramic_pink", "name": "HD17 R-PRO Ceramic Pink", "description": "🇭🇰", "price": 34000 },
            { "id": "dyson_hd17_rpro_jasper_plum", "name": "HD17 R-PRO Jasper Plum", "description": "🇪🇺", "price": 34000 },
            { "id": "dyson_hd17_rpro_kazan_pink_case", "name": "HD17 R-PRO KazaN Pink (с кейсом)", "description": "🇭🇰", "price": 34000 },
            { "id": "dyson_hd16_ceramic_pink_no_case", "name": "HD16 Ceramic Pink (без кейса)", "description": "🇪🇺", "price": 35000 },
            { "id": "dyson_hd07_blue_blush_case", "name": "HD07 Blue Blush (с кейсом)", "description": "🇬🇧", "price": 35000 },
            { "id": "dyson_hd16_vinca_blue_topaz_case", "name": "HD16 Vinca blue/topaz (с кейсом)", "description": "🇮🇳", "price": 35000 },
            { "id": "dyson_hd16_prussian_blue_case", "name": "HD16 Prussian Blue (с кейсом)", "description": "🇰🇷 наша вилка", "price": 36000 },
            { "id": "dyson_hd07_antrazit_fuchsia", "name": "HD07 Antrazit/Fuchsia", "description": "🇬🇧", "price": 37000 },
            { "id": "dyson_hd07_nickel_copper", "name": "HD07 Nickel/Copper", "description": "🇪🇺", "price": 37000 },
            { "id": "dyson_hd16_strawberry_bronze_case", "name": "HD16 Strawberry Bronze (с кейсом)", "description": "🇭🇰", "price": 37000 },
            { "id": "dyson_hd16_amber_silk_case", "name": "HD16 Amber Silk (с кейсом)", "description": "🇭🇰 40.000🇪🇺", "price": 38000 },
            { "id": "dyson_hd15_ceramic_pink_rose_case", "name": "HD15 Ceramic Pink/Rose Gold (с кейсом)", "description": "🇭🇰", "price": 38000 },
            { "id": "dyson_hd07_prussian_blue_case", "name": "HD07 Prussian Blue (c кейсом)", "description": "🇪🇺", "price": 40000 },
            { "id": "dyson_hd17_rpro_jasper_plum_case_damaged", "name": "HD17 R-PRO Jasper Plum (с кейсом, подмят)", "description": "🇰🇷 наша вилка", "price": 39000 },
            { "id": "dyson_hd18_rpro_vinca_blue", "name": "HD18 R-PRO, professional- vinca blue/ topaz", "description": "🇪🇺", "price": 45000 },
            { "id": "dyson_hd16_jasper_plum_case", "name": "HD16 Jasper Plum (с кейсом)", "description": "🇪🇺", "price": 47000 }
          ]
        },
        {
          "id": "dyson_vac",
          "name": "Пылесосы",
          "products": [
            { "id": "dyson_v8_advanced_silver_nickel_sv25", "name": "V8 advanced silver/nickel (SV25) (3 насадки)", "description": "🇬🇧", "price": 21000 },
            { "id": "dyson_v8_absolute_silver_nickel", "name": "V8 absolute silver/nickel (6 насадок)", "description": "🇮🇳", "price": 26000 },
            { "id": "dyson_v8_cyclone", "name": "V8 cyclone", "description": "🇪🇺", "price": 25000 },
            { "id": "dyson_v10_cyclon_absolute_sv27", "name": "V10 Cyclon absolute (sv27)", "description": "🇬🇧", "price": 33000 },
            { "id": "dyson_v12_slim_absolute_detected_yellow_sv46", "name": "V12 Slim Absolute detected (SV46) yellow/nickel", "description": "🇬🇧35000 🇪🇺", "price": 33500 },
            { "id": "dyson_v11_absolute_sv28", "name": "V11 (sv28) absolute фиолет никель (6 насадок)", "description": "🇮🇳", "price": 41000 },
            { "id": "dyson_cinetic_big_ball_multi_floor_2", "name": "Cinetic Big Ball multi floor 2", "description": "🇪🇺", "price": 42000 },
            { "id": "dyson_cinetic_big_ball_parquet_2", "name": "Cinetic Big Ball Parquet 2", "description": "🇪🇺", "price": 42000 },
            { "id": "dyson_cinetic_big_ball_multi_floor_animal", "name": "Cinetic Big Ball multi floor animal", "description": "мятый", "price": 42000 },
            { "id": "dyson_v12s_sv46_submarine_yellow_nickel", "name": "V12S SV46 Submarine Yellow/Nickel", "description": "🇮🇳48.000🇪🇺", "price": 43000 },
            { "id": "dyson_cinetic_big_ball_absolute_2_blue", "name": "Cinetic Big Ball absolute 2 синий cv28", "description": "🇪🇺", "price": 47000 },
            { "id": "dyson_pencilvac_sv50_fluffy_black", "name": "Dyson PencilVac SV50 Fluffy Black", "description": "492747-01 BLK", "price": 49000 },
            { "id": "dyson_pencilvac_fluffycone", "name": "Dyson Pencilvac Fluffycone", "description": "наша вилка 🇰🇷48.500🇭🇰", "price": 49500 },
            { "id": "dyson_v15s_detected_submarine", "name": "V15S Detected Submarine", "description": "🇪🇺51.000🇬🇧", "price": 52000 },
            { "id": "dyson_gen5_absolute_detected_prussian", "name": "Gen5 Absolute Detected Prussian (SV23)", "description": "🇪🇺", "price": 52000 },
            { "id": "dyson_gen5_absolute_detected_sv23_purple", "name": "Gen5 Absolute Detected (SV23)", "description": "фиолетовый (5 насадок) 🇪🇺51.500🇬🇧", "price": 53000 },
            { "id": "dyson_robot_360_navi", "name": "Robot vacuum 360 Navi", "description": "🇭🇰", "price": 64000 },
            { "id": "dyson_v16_ds60_animal_eu", "name": "Dyson V16 DS60 Piston Animal", "description": "🇪🇺", "price": 63000 },
            { "id": "dyson_v16_ds60_animal_submarine_eu", "name": "Dyson V16 DS60 Piston Animal Submarine", "description": "🇪🇺", "price": 72000 },
            { "id": "dyson_ds60_piston_animal_kr", "name": "Dyson DS60 Piston Animal", "description": "🇰🇷 с док станцией", "price": 90000 },
            { "id": "dyson_ds60_piston_animal_submarine_kr", "name": "Dyson DS60 Piston Animal Submarine", "description": "🇰🇷 с док станцией", "price": 110000 },
            { "id": "dyson_spot_scrub_ai", "name": "Dyson Spot+Scrub AI (Black)", "description": "🇰🇷наша вилка", "price": 110000 }
          ]
        },
        {
          "id": "dyson_puri",
          "name": "Очистители",
          "products": [
            { "id": "dyson_hushjet_purifier_compact_sp01_black", "name": "HushJet Purfier Compact SP01 Black Teal", "description": "🇬🇧", "price": 38500 },
            { "id": "dyson_hushjet_purifier_compact_sp01_white", "name": "HushJet Purfier Compact SP01 White Silver", "description": "🇬🇧", "price": 38500 },
            { "id": "dyson_ph05_purifier_humidify_cool", "name": "Очиститель-увлажнитель воздуха Dyson PH05 Purifier Humidify + Cool PH2 De-NOx (Белый/Золотой)", "description": "🇦🇪 65.000🇪🇺", "price": 63000 }
          ]
        },
        {
          "id": "dyson_dry",
          "name": "Сушилки для рук",
          "products": [
            { "id": "dyson_airblade_v_hu02_nickel", "name": "Dyson AirBlade V HU02 (Nickel)", "description": "🇭🇰/🇸🇬", "price": 53500 },
            { "id": "dyson_airblade_v_hu02_white", "name": "Dyson AirBlade V HU02 (White)", "description": "🇭🇰/🇸🇬", "price": 54000 }
          ]
        },
        {
          "id": "dyson_acc",
          "name": "Аксессуары Dyson",
          "products": [
            { "id": "dyson_travel_bag_magnetic", "name": "Дорожные сумки на магните Dyson", "description": "черный / никель - 3600", "price": 3600 },
            { "id": "dyson_comb", "name": "Расческа гребень Dyson Detangling Comb Black/Rose", "price": 3500 },
            { "id": "dyson_paddle_brush", "name": "Расческа Dyson Paddle Brush (Rose Pale)", "price": 4500 },
            { "id": "dyson_vented_brush", "name": "Расческа Dyson Vented Barrel brush – 45mm (Prussian Blue)", "price": 4000 },
            { "id": "dyson_hair_clips", "name": "Dyson Hair Clips 4 шт", "price": 8000 }
          ]
        }
      ]
    },
    {
      "id": "yandex_smart_home",
      "name": "🇷🇺 Яндекс.Умный дом",
      "subcategories": [
        {
          "id": "yandex_stations",
          "name": "Яндекс Станции",
          "subcategories": [
            {
              "id": "ya_light",
              "name": "Станции Лайт",
              "products": [
                { "id": "yandex_light_2_green", "name": "Яндекс станция Лайт 2 без часов -green", "price": 3900 },
                { "id": "yandex_light_2_purple", "name": "Яндекс станция Лайт 2 без часов purple", "price": 3900 },
                { "id": "yandex_light_2_pink", "name": "Яндекс станция Лайт 2 без часов - pink", "price": 3900 },
                { "id": "yandex_light_2_blue", "name": "Яндекс станция Лайт 2 без часов - blue", "price": 3900 },
                { "id": "yandex_light_2_coral", "name": "Яндекс станция Лайт 2 без часов - coral", "price": 3900 },
                { "id": "yandex_light_2_black", "name": "Яндекс станция Лайт 2 без часов -black", "price": 4300 },
                { "id": "yandex_light_2_pink_2", "name": "Яндекс Станция Лайт 2 pink", "price": 4400 },
                { "id": "yandex_light_2_purple_2", "name": "Яндекс Станция Лайт 2 purple", "price": 4400 },
                { "id": "yandex_light_2_blue_2", "name": "Яндекс Станция Лайт 2 blue", "price": 4400 },
                { "id": "yandex_light_2_green_2", "name": "Яндекс Станция Лайт 2 green", "price": 4400 },
                { "id": "yandex_light_2_coral_2", "name": "Яндекс Станция Лайт 2 coral", "price": 4400 },
                { "id": "yandex_light_turquoise", "name": "Яндекс Станция Лайт Turquoise", "price": 5000 }
              ]
            },
            {
              "id": "ya_mini",
              "name": "Станции Мини",
              "products": [
                { "id": "yandex_mini_2_black", "name": "Яндекс Станция Мини 2 Black", "price": 6500 },
                { "id": "yandex_mini_2_blue", "name": "Яндекс Станция Мини 2 blue", "price": 6500 },
                { "id": "yandex_mini_3_hours_black", "name": "Яндекс Станция Мини 3 (с часами) Black", "price": 6500 },
                { "id": "yandex_mini_3_hours_gray", "name": "Яндекс Станция Мини 3 (с часами) Gray", "price": 6500 },
                { "id": "yandex_mini_3_hours_purple", "name": "Яндекс Станция Мини 3 (с часами) luel", "price": 7000 },
                { "id": "yandex_mini_3_hours_green", "name": "Яндекс Станция Мини 3 (с часами) Green", "price": 7000 },
                { "id": "yandex_mini_2_hours_black", "name": "Яндекс Станция Мини 2 (с часами) Black", "price": 7500 },
                { "id": "yandex_mini_2_hours_blue", "name": "Яндекс Станция Мини 2 (с часами) Blue", "price": 7500 },
                { "id": "yandex_mini_3_pro_black", "name": "Яндекс мини 3 про черная", "price": 8800 },
                { "id": "yandex_mini_3_pro_gray", "name": "Яндекс мини 3 про серая", "price": 9300 },
                { "id": "yandex_mini_3_pro_blue", "name": "Яндекс мини 3 про синяя", "price": 9300 },
                { "id": "yandex_mini_3_pro_green", "name": "Яндекс мини 3 про зеленая", "price": 9300 }
              ]
            },
            {
              "id": "ya_street",
              "name": "Станции Стрит",
              "products": [
                { "id": "yandex_station_street_black", "name": "Яндекс Станция Стрит Черный", "price": 9300 },
                { "id": "yandex_station_street_gray", "name": "Яндекс Станция Стрит серая", "price": 9300 },
                { "id": "yandex_station_street_orange", "name": "Яндекс Станция Стрит оранжевая", "price": 9300 },
                { "id": "yandex_station_street_green", "name": "Яндекс Станция Стрит зелёный", "price": 9000 },
                { "id": "yandex_station_street_purple", "name": "Яндекс Станция Стрит фиолет", "price": 8500 }
              ]
            },
            {
              "id": "ya_midi",
              "name": "Станции Миди",
              "products": [
                { "id": "yandex_midi_orange", "name": "Яндекс Станция Миди Orange", "price": 11000 },
                { "id": "yandex_midi_raspberry", "name": "Яндекс Станция Миди Raspberry", "price": 11000 },
                { "id": "yandex_midi_black", "name": "Яндекс Станция Миди Black", "price": 11000 },
                { "id": "yandex_midi_green", "name": "Яндекс Станция Миди Green", "price": 11000 },
                { "id": "yandex_midi_silver", "name": "Яндекс Станция Миди Silver", "price": 11500 }
              ]
            },
            {
              "id": "ya_3",
              "name": "Станции 3",
              "products": [
                { "id": "yandex_station_3_black", "name": "Яндекс Станция Станция 3 Black", "description": "⚫️, коробки с дыркой -18.000", "price": 19500 },
                { "id": "yandex_station_3_gray", "name": "Яндекс Станция Станция 3 Grey", "description": "🩶, 19.500 с дыркой", "price": 21000 },
                { "id": "yandex_station_3_purple", "name": "Яндекс Станция Станция 3 Purple", "price": 21500 }
              ]
            },
            {
              "id": "ya_2",
              "name": "Станции 2",
              "products": [
                { "id": "yandex_station_2_blue", "name": "Яндекс Станция 2 Blue", "price": 19000 },
                { "id": "yandex_station_2_beige", "name": "Яндекс Станция 2 Beige", "price": 20000 },
                { "id": "yandex_station_2_black", "name": "Яндекс Станция 2 Black", "price": 21000 }
              ]
            },
            {
              "id": "ya_max",
              "name": "Станции Макс",
              "products": [
                { "id": "yandex_max_3_75_green", "name": "Яндекс Макс 3.75 (Zigbee) Green", "price": 24000 },
                { "id": "yandex_max_3_75_turquoise", "name": "Яндекс Макс 3.75 (Zigbee) Turquoise (мятный)", "price": 24500 },
                { "id": "yandex_max_3_75_black", "name": "Яндекс Макс 3.75 (Zigbee) Black", "description": "⚫️, 24.500 с дыркой", "price": 25500 },
                { "id": "yandex_max_3_75_beige", "name": "Яндекс Макс 3.75 (Zigbee) Beige", "description": "⚪️, 25.000 мятый", "price": 26000 }
              ]
            },
            {
              "id": "ya_duo",
              "name": "Станции Дуо",
              "products": [
                { "id": "yandex_duo_red", "name": "Яндекс Станция Дуо (с экраном) Red", "price": 35000 },
                { "id": "yandex_duo_green", "name": "Яндекс Станция Дуо (с экраном) Green", "price": 35000 }
              ]
            }
          ]
        },
        {
          "id": "yandex_smart_devices",
          "name": "Умные устройства",
          "products": [
            { "id": "yandex_lamp_color", "name": "Яндекс лампа цветная", "description": "е27, е14, gu10", "price": 1000 },
            { "id": "yandex_switch_2", "name": "Яндекс выключатель 2 клавиши", "price": 1800 },
            { "id": "yandex_ip_camera", "name": "Яндекс ip камера", "price": 4000 },
            { "id": "yandex_hub", "name": "Хаб", "price": 4200 },
            { "id": "yandex_socket", "name": "Яндекс розетка", "description": "❌", "price": 0 },
            { "id": "yandex_motion_sensor", "name": "Яндекс датчик движения", "description": "❌", "price": 0 },
            { "id": "yandex_open_sensor", "name": "Яндекс датчик открытия окон", "description": "❌", "price": 0 }
          ]
        }
      ]
    },
    {
      "id": "games_consoles",
      "name": "🎮 Игровые консоли",
      "subcategories": [
        {
          "id": "ps",
          "name": "PlayStation",
          "subcategories": [
            {
              "id": "ps_acc",
              "name": "Аксессуары",
              "products": [
                { "id": "ps5_stand", "name": "Подставка для PS5 Slim/ Pro", "price": 2800 },
                { "id": "ps5_drive_pro", "name": "Дисковод PS5 Pro", "price": 9800 }
              ]
            },
            {
              "id": "ps_portal",
              "name": "Порталы",
              "products": [
                { "id": "ps5_portal", "name": "PS5 Portal Black White", "price": 20000 }
              ]
            },
            {
              "id": "ps_vr",
              "name": "VR",
              "products": [
                { "id": "ps5_vr2", "name": "PS5 VR2", "price": 35500 },
                { "id": "ps5_vr2_horizon", "name": "VR2 с игрой Horizon", "price": 37500 }
              ]
            },
            {
              "id": "ps_consoles",
              "name": "Консоли",
              "products": [
                { "id": "ps5_slim_digital_825gb", "name": "PS5 Slim Digital 825gb", "price": 42500 },
                { "id": "ps5_slim_digital_1tb", "name": "PS5 Slim Digital 1tb", "price": 44000 },
                { "id": "ps5_slim_disk", "name": "PlayStation 5 Slim (DISK 1 TB)", "price": 46500 },
                { "id": "ps5_pro_2tb", "name": "PlayStation 5 Pro 2 TB", "price": 72500 },
                { "id": "ps5_pro_2tb_jp", "name": "PlayStation 5 Pro 2 TB (Вторая ревизия)", "price": 76000 }
              ]
            },
            {
              "id": "ps_heads",
              "name": "Наушники",
              "products": [
                { "id": "ps5_pulse_elite", "name": "PS5 Pulse Elite Black White", "price": 13500 },
                { "id": "ps5_pulse_explore_white", "name": "PS5 Pulse Explore White", "price": 14000 },
                { "id": "ps5_pulse_explore_black", "name": "PS5 Pulse Explore Black", "price": 14000 }
              ]
            }
          ]
        },
        {
          "id": "xbox",
          "name": "Xbox",
          "subcategories": [
            {
              "id": "xbox_consoles",
              "name": "Консоли",
              "products": [
                { "id": "xbox_s_1tb_white", "name": "Xbox S 1TB White", "price": 41500 },
                { "id": "xbox_x_1tb_digital", "name": "Хbox X 1 tb DIGITAL", "price": 58000 },
                { "id": "xbox_x_1tb_black", "name": "Xbox Х 1 tb Black", "price": 60500 }
              ]
            },
            {
              "id": "xbox_gamepads",
              "name": "Геймпады",
              "products": [
                { "id": "xbox_gamepad_carbon_black", "name": "Xbox Геймпад Carbon Black", "price": 5700 },
                { "id": "xbox_gamepad_robot_white", "name": "Xbox Геймпад Robot White", "price": 5700 }
              ]
            }
          ]
        },
        {
          "id": "nintendo",
          "name": "Nintendo",
          "subcategories": [
            {
              "id": "nintendo_lite",
              "name": "Lite",
              "products": [
                { "id": "nintendo_lite_coral", "name": "Nintendo Lite Coral", "price": 16000 },
                { "id": "nintendo_lite_yellow", "name": "Nintendo Lite Yellow", "price": 16000 },
                { "id": "nintendo_lite_turquoise", "name": "Nintendo Lite Turquoise", "price": 16000 },
                { "id": "nintendo_lite_grey", "name": "Nintendo Lite Grey", "price": 16000 },
                { "id": "nintendo_lite_blue", "name": "Nintendo Lite Blue", "price": 16500 }
              ]
            },
            {
              "id": "nintendo_oled",
              "name": "Switch OLED",
              "products": [
                { "id": "nintendo_switch_oled_white", "name": "Nintendo Switch Oled 64 White", "price": 28700 },
                { "id": "nintendo_switch_oled_neon", "name": "Nintendo Switch Oled 64 Neon", "price": 28700 },
                { "id": "nintendo_switch_oled_zelda", "name": "Nintendo Switch Oled 64 Zelda", "price": 28700 },
                { "id": "nintendo_switch_oled_splatoon", "name": "Nintendo Switch OLED 64 Splatoon", "price": 28700 }
              ]
            },
            {
              "id": "nintendo_switch2",
              "name": "Switch 2",
              "products": [
                { "id": "nintendo_switch_2_black", "name": "Nintendo Switch 2 Black", "price": 37000 },
                { "id": "nintendo_switch_2_deluxe_case", "name": "Nintendo Switch 2 Deluxe System Case", "price": 7000 },
                { "id": "nintendo_switch_2_carry_case", "name": "Nintendo Switch 2 Carrying Case and Screen Protector", "price": 6000 }
              ]
            }
          ]
        },
        {
          "id": "handheld",
          "name": "Портативные консоли",
          "subcategories": [
            {
              "id": "meta_quest",
              "name": "Meta Quest",
              "products": [
                { "id": "meta_quest_3s_128", "name": "Meta Quest 3S 128", "price": 25000 },
                { "id": "meta_quest_3s_256", "name": "Meta Quest 3S 256", "price": 34000 }
              ]
            },
            {
              "id": "steam_deck",
              "name": "Steam Deck",
              "products": [
                { "id": "steam_deck_oled_512gb", "name": "Steam Deck OLED 512GB", "price": 57000 },
                { "id": "steam_deck_oled_1tb", "name": "Steam deck OLED 1TB", "price": 67000 }
              ]
            },
            {
              "id": "asus_rog",
              "name": "Asus ROG Ally",
              "products": [
                { "id": "asus_rog_ally_x_16_512", "name": "Asus Rog Xbox Ally X 16/512 White", "price": 53000 },
                { "id": "asus_rog_ally_x_24_1tb", "name": "Asus Rog Xbox Ally X 24/1tb Black", "price": 84000 }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "gamepads",
      "name": "🎮 Геймпады",
      "subcategories": [
        {
          "id": "dualsense",
          "name": "Sony DualSense",
          "subcategories": [
            {
              "id": "ds_std",
              "name": "Обычные",
              "products": [
                { "id": "dualsense_red", "name": "Геймпад Sony DualSense Red", "price": 6000 },
                { "id": "dualsense_white", "name": "Геймпад Sony DualSense White", "price": 6200 },
                { "id": "dualsense_black", "name": "Геймпад Sony DualSense Black", "price": 6200 },
                { "id": "dualsense_pink", "name": "Геймпад Sony DualSense Pink", "price": 6200 },
                { "id": "dualsense_blue", "name": "Геймпад Sony DualSense Blue", "price": 6200 },
                { "id": "dualsense_gray_camo", "name": "Геймпад Sony DualSense Gray Camouflage", "price": 6200 },
                { "id": "dualsense_galactic_purple", "name": "Геймпад Sony DualSense Galactic Purple", "price": 6200 },
                { "id": "dualsense_sterling_silver", "name": "Геймпад Sony DualSense PS5 Sterling Silver", "price": 6700 },
                { "id": "dualsense_chrome_indigo", "name": "Геймпад Sony DualSense PS5 Chrome Indigo", "price": 6700 },
                { "id": "dualsense_chrome_pearl", "name": "Геймпад SonyDualSense PS5 Chrome Pearl", "price": 6700 },
                { "id": "dualsense_chrome_teal", "name": "Геймпад Sony DualSense PS5 Chrome Teal", "price": 6700 }
              ]
            },
            {
              "id": "ds_limited",
              "name": "Лимитированные",
              "products": [
                { "id": "dualsense_alpine_green", "name": "Геймпад Sony DualSense Alpine Green", "price": 9500 },
                { "id": "dualsense_ghost_yotei_gold", "name": "Геймпад Sony DualSense Ps5 GHOST OF YOTEI Gold", "price": 9500 },
                { "id": "dualsense_ghost_yotei_limited", "name": "Геймпад Sony DualSense Ghost OF Yotei", "price": 9500 },
                { "id": "dualsense_ghost_yotei_limited_edition", "name": "Геймпад Sony DualSense Limited edition Ghost of Yotei", "price": 11000 }
              ]
            },
            {
              "id": "ds_edge",
              "name": "Edge",
              "products": [
                { "id": "dualsense_edge_white", "name": "Геймпад Sony DualSense Edge White", "price": 17500 },
                { "id": "dualsense_edge_black", "name": "Геймпад Sony DualSense Edge Black", "price": 17500 }
              ]
            },
            {
              "id": "ds_nacon",
              "name": "Nacon Revolution",
              "products": [
                { "id": "nacon_revolution_5_pro_white", "name": "Dualsense Nacon Revolution 5 Pro White", "price": 15000 },
                { "id": "nacon_revolution_5_pro_black", "name": "Dualsense Nacon Revolution 5 Pro Black", "price": 15000 },
                { "id": "nacon_revolution_5_pro_urban_camo", "name": "Dualsense Nacon Revolution 5 Pro Urban camo", "price": 15500 },
                { "id": "nacon_revolution_5_pro_arctic_camo", "name": "Dualsense Nacon Revolution 5 Pro Arctic camo", "price": 15500 },
                { "id": "nacon_revolution_5_pro_forest_camo", "name": "Dualsense Nacon Revolution 5 Pro Forest camo", "price": 15500 }
              ]
            },
            {
              "id": "ds_chargers",
              "name": "Зарядные станции",
              "products": [
                { "id": "dualsense_charging_station_eu", "name": "PS5 DualSense Charging Station", "description": "🇪🇺🔌", "price": 2600 },
                { "id": "dualsense_charging_station_orig", "name": "PS5 DualSense ChargingStation оригинал", "price": 4500 }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "games",
      "name": "💿 Игры PS4/PS5",
      "products": [
        { "id": "ps5_gta5", "name": "PS5 GTA 5", "price": 3000 },
        { "id": "ps5_mk11_ultimate", "name": "PS5 MK 11 Ultimate", "price": 3000 },
        { "id": "ps5_it_takes_two", "name": "PS5 it Takes Two", "price": 3200 },
        { "id": "ps5_spiderman_morales", "name": "PS5 Spider Man Morales", "price": 3200 },
        { "id": "ps5_atomic_heart", "name": "PS5 Atomic Heart", "price": 3300 },
        { "id": "ps5_minecraft", "name": "PS5 MineCraft", "price": 3500 },
        { "id": "ps5_gow", "name": "PS5 God of War (рус)", "price": 3800 },
        { "id": "ps5_horizon_fest", "name": "PS5 Horizon Fest", "price": 3800 },
        { "id": "ps5_last_of_us2", "name": "PS5 Last of Us 2", "price": 3900 },
        { "id": "ps5_gt7", "name": "PS5 Gran Turismo7", "price": 4000 },
        { "id": "ps5_mortal_combat1", "name": "Mortal Combat 1", "price": 4000 },
        { "id": "ps5_spiderman2", "name": "PS5 Spiderman 2", "price": 4700 },
        { "id": "ps5_assassins_shadows", "name": "PS5 Assassins Shadows", "price": 4800 },
        { "id": "ps5_fc26", "name": "PS5 FC26", "price": 5200 },
        { "id": "ps5_ghost_yotei", "name": "Ghost Of Yotai", "price": 6000 }
      ]
    },
    {
      "id": "apple_acc",
      "name": "🍏 Аксессуары Apple",
      "subcategories": [
        {
          "id": "chargers",
          "name": "Зарядные устройства",
          "subcategories": [
            {
              "id": "blocks",
              "name": "Блоки питания",
              "products": [
                { "id": "charger_20w", "name": "🔌20w", "description": "🇪🇺", "price": 1800 },
                { "id": "charger_35w", "name": "🔌35w", "description": "🇪🇺", "price": 2400 },
                { "id": "apple_charger_35w_dual_mnwm3", "name": "Apple Power Adapter 35W Dual USB-C Port MNWM3", "description": "🇺🇸", "price": 4500 },
                { "id": "magsafe_charger_1m", "name": "Зарядка Apple MagSafe (1м) 25w", "price": 5500 },
                { "id": "magsafe_charger_2m", "name": "Зарядка Apple MagSafe (2м) 25w", "price": 6500 },
                { "id": "apple_charger_96w_mx0j2", "name": "Apple Power Adapter 96W USB-C MX0J2", "description": "🇺🇸", "price": 7400 },
                { "id": "dual_usb_c_35w", "name": "Dual USB -C Port 35W", "price": 7500 },
                { "id": "apple_charger_35w_dual_mw2k3", "name": "Apple Power Adapter 35W Dual USB-C Port MW2K3", "description": "🇪🇺🇷🇺", "price": 7500 },
                { "id": "apple_charger_140w_mlyu3", "name": "Apple Power Adapter 140W USB-C MLYU3", "price": 9600 }
              ]
            },
            {
              "id": "cables",
              "name": "Кабели",
              "products": [
                { "id": "apple_cable_usbc_1m", "name": "Кабель Apple (плетёный) USB-C / USB-C, 1м, 60W белый", "price": 2000 },
                { "id": "apple_cable_usbc_2m", "name": "Кабель Apple (плетёный) USB-C / USB-C, 2м, 160W белый", "price": 2500 },
                { "id": "apple_cable_magsafe3_silver_2m", "name": "Apple кабель USB-C to MagSafe 3 Silver 2m MLYV3", "price": 6500 },
                { "id": "apple_cable_magsafe3_midnight_2m", "name": "Apple кабель USB-C to MagSafe 3 Midnight 2m MPL43", "price": 6500 },
                { "id": "apple_cable_magsafe3_gray_2m", "name": "Apple кабель USB-C to MagSafe 3 Space Gray 2m MPL23", "price": 6500 }
              ]
            }
          ]
        },
        {
          "id": "airpods",
          "name": "AirPods",
          "subcategories": [
            {
              "id": "wired",
              "name": "Проводные",
              "products": [
                { "id": "earpods_lightning", "name": "EarPods с разъёмом Lighting", "description": "🇪🇺", "price": 2500 },
                { "id": "earpods_usbc", "name": "EarPods с разъёмом USB-C", "description": "🇪🇺", "price": 2700 }
              ]
            },
            {
              "id": "wireless",
              "name": "Беспроводные",
              "products": [
                { "id": "airpods_4_2024", "name": "AirPods 4 (2024)", "price": 11000 },
                { "id": "airpods_4_anc", "name": "AirPods (2024) с шумоподавлением", "price": 16000 },
                { "id": "airpods_pro2_usbc_2023", "name": "AirPods pro 2 USB-C кейс (2023) MagSafe", "description": "🇮🇳", "price": 15700 },
                { "id": "airpods_pro3", "name": "AirPods pro 3", "description": "🇰🇼", "price": 19500 },
                { "id": "airpods_max_midnight_refurb", "name": "AirPods Max Midnight UCB-C", "description": "Как новые, активированы", "price": 37000 },
                { "id": "airpods_max_midnight", "name": "AirPods Max Midnight", "price": 45000 },
                { "id": "airpods_max_purple", "name": "AirPods Max Purple", "price": 45000 },
                { "id": "airpods_max_blue", "name": "AirPods Max Blue", "price": 47000 },
                { "id": "airpods_max_starlight", "name": "AirPods Max Starlight", "price": 48500 },
                { "id": "airpods_max_orange", "name": "AirPods Max Orange", "price": 49000 }
              ]
            }
          ]
        },
        {
          "id": "pencil",
          "name": "Pencil",
          "products": [
            { "id": "pencil_2", "name": "Apple Pencil 2", "price": 8000 },
            { "id": "pencil_usbc", "name": "Pencil ✏️ USB-C", "price": 9000 },
            { "id": "pencil_pro", "name": "Apple Pencil Pro", "price": 10000 }
          ]
        },
        {
          "id": "airtag",
          "name": "AirTag",
          "products": [
            { "id": "airtag_single", "name": "AirTag 1 шт", "price": 4000 },
            { "id": "airtag_4pack", "name": "AirTag 4 pack", "price": 8500 }
          ]
        },
        {
          "id": "keyboards",
          "name": "Мыши и клавиатуры",
          "products": [
            { "id": "magic_mouse_white", "name": "Magic Mouse White USB-C", "price": 8500 },
            { "id": "magic_mouse_black", "name": "Magic Mouse Black USB-C", "price": 9500 },
            { "id": "magic_trackpad_white", "name": "Magic Trackpad White", "price": 14500 },
            { "id": "magic_trackpad_black", "name": "Magic Trackpad Black", "price": 14500 },
            { "id": "magic_keyboard_touch_id_white", "name": "Magic Keyboard Touch ID USB-C White", "price": 16500 },
            { "id": "magic_keyboard_touch_id_black", "name": "Magic Keyboard Touch ID USB-C Black", "price": 16500 },
            { "id": "magic_keyboard_numeric_white", "name": "Magic Keyboard Touch ID Numeric USB-C White", "price": 17800 },
            { "id": "magic_keyboard_numeric_black", "name": "Magic Keyboard Touch ID Numeric USB-C Black", "price": 18800 }
          ]
        },
        {
          "id": "appletv",
          "name": "Apple TV",
          "products": [
            { "id": "apple_tv_4k_64_2022", "name": "Apple TV 4K 64 2022", "price": 13200 },
            { "id": "apple_tv_4k_128_2022", "name": "Apple TV 4K 128 2022", "price": 15600 }
          ]
        }
      ]
    }
  ]
};

// Собираем все товары в один массив
let allProducts = [];

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
    console.log('Загружено товаров:', allProducts.length);
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

// Навигация по категориям
let navStack = [];
let currentNode = null;
let searchMode = false;

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
        } else {
            document.getElementById('catalog-content').innerHTML = '<div class="empty-cart">Нет товаров</div>';
            if (backBtn) backBtn.style.display = 'inline-block';
        }
    }
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
let cart = {};

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
                <div>${product.price.toLocaleString()} ₽ x ${qty} = ${itemTotal.toLocaleString()} ₽</div>
            </div>
            <div class="cart-item-controls">
                <button class="cart-decr" data-id="${id}" ${qty === 1 ? 'disabled' : ''}>−</button>
                <span>${qty}</span>
                <button class="cart-incr" data-id="${id}">+</button>
                <button class="cart-remove" data-id="${id}">🗑️</button>
            </div>
        `;
        container.appendChild(div);
    }
    
    // Добавляем обработчики для кнопок корзины
    document.querySelectorAll('.cart-decr').forEach(btn => {
        btn.addEventListener('click', (e) => changeQuantity(e.target.dataset.id, -1));
    });
    document.querySelectorAll('.cart-incr').forEach(btn => {
        btn.addEventListener('click', (e) => changeQuantity(e.target.dataset.id, 1));
    });
    document.querySelectorAll('.cart-remove').forEach(btn => {
        btn.addEventListener('click', (e) => removeFromCart(e.target.dataset.id));
    });
    
    if (totalSpan) totalSpan.innerText = `Итого: ${totalSum.toLocaleString()} ₽`;
}

// Отправка заказа
function sendOrder() {
    if (!tg) {
        alert('❌ Telegram WebApp не доступен');
        return;
    }
    
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
    
    // Очищаем корзину после отправки
    cart = {};
    saveCart();
    updateCartUI();
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    // Собираем все товары из каталога
    collectAllProducts();
    
    // Загружаем корзину
    loadCart();
    
    // Показываем категории
    renderCurrentLevel();
    
    // Настройка вкладок
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
    
    // Кнопка "Назад"
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
    
    // Поиск
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value;
            if (query.length >= 2) {
                searchMode = true;
                const results = searchProducts(query);
                showSearchResults(results);
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
        tg.MainButton.hide(); // Скрыта, пока корзина пуста
    }
});
