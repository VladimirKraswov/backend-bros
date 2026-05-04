function doPost(e) {
  const botToken = "8460113456:AAHpbf02lu69yUCwOP0PuXXXG1IA4-rIhJA";
  const chatId = "2087445591";

  const params = JSON.parse(e.postData.contents);
  const name = params.name;
  const contact = params.contact;

  const message = `🔔 *НОВАЯ ЗАЯВКА!* 🔔\n\n👤 *Имя:* ${name}\n📞 *Контакт:* ${contact}`;

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
  const payload = {
    chat_id: chatId,
    text: message,
    parse_mode: 'Markdown'
  };

  const options = {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    payload: JSON.stringify(payload)
  };

  UrlFetchApp.fetch(url, options);
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}
