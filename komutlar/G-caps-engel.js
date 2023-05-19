const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
////////
  if (!message.member.permissions.has("MANAGE_GUILD")) return message.channel.send(`❌ Bu Komutu Kullana Bilmek İçin \`Mesajları Yönet\` Yetkisine Sahip Olmalısın.`)
///////

///////
   if (!args[0]) {
 message.channel.send(`**Örnek Kullanım:** e!capslock-engel aç/kapat`)
  }
///////


///////
  if(args[0] === 'aç') {
    db.set(`capslock_${message.guild.id}`, true)
    message.channel.send(`Capslock Engel Sistemi Aktif`)
  return
}
///////


///////
if (args[0] === 'kapat') {
  db.delete(`capslock_${message.guild.id}`)
message.channel.send(`Capslock Engel Sistemi Devre Dışı`)
return
}
///////

  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['capsengel'],
  permLevel: 0
};
exports.help = {
  name: 'caps-engel',
  description: 'capsengel oyş',
  usage: 'capsengel'
};