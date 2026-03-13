from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Application, CommandHandler, MessageHandler, filters, ContextTypes
import json
import requests
import os

# Токен бота будет подставлен из переменных окружения на Bothost
BOT_TOKEN = os.environ.get('BOT_TOKEN', '')
APP_URL = os.environ.get('APP_URL', '')

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Отправляет ссылку на мини-приложение"""
    keyboard = [[
        InlineKeyboardButton("🛍 Открыть магазин", web_app={"url": f"{APP_URL}/"})
    ]]
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text(
        "Добро пожаловать в магазин техники!\n"
        "Нажмите кнопку ниже, чтобы открыть каталог.",
        reply_markup=reply_markup
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
        
        # Отправляем себе (укажите свой Telegram ID)
        # Как узнать свой ID: напишите @userinfobot в Telegram
        YOUR_ID = 123456789  # ЗАМЕНИТЕ НА СВОЙ ID!
        await context.bot.send_message(
            chat_id=YOUR_ID, 
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
    
    print("Бот запущен...")
    app.run_polling(allowed_updates=Update.ALL_TYPES)

if __name__ == "__main__":
    main()