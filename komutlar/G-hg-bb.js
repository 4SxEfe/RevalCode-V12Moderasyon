const Discord = require('discord.js')
const db = require('croxydb')

exports.run = async (client, message ,args) => {

if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply(" YETERSİZ YETKİ! YETKİN YOK")

if(!args[0]) return message.reply("** Hatalı Kullanım \nAyarlamak İçin: e!hg-bb log-ayarla #kanal\nSıfırlamak İçin: e!hg-bb log-sıfırla**")
  let kanal = message.mentions.channels.first()

  if(args[0] == 'log-ayarla') {
  db.set(`cshgbb.${message.guild.id}`, kanal.id)
if(!kanal) return message.reply("** Bir Kanal Belirtmedin!**")
  message.channel.send(`** Hoş Geldin - ByeBye Kanalı Başarıyla \`${kanal.name}\` Olarak Ayarlandı!**`)
    
  }

  if(args[0] == 'log-sıfırla') {
  db.delete(`cshgbb.${message.guild.id}`)
  message.channel.send(`** Sistem Başarıyla Sıfırlandı!**`)
 
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [], 
  permLevel: 0,
};

exports.help = {
  name: "hg-bb",
};