const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')



exports.run = async (client, message, args) => {
  if(!client.k4h1n.admin.includes(message.author.id)) return message.reply(`bunu yapabilmek için gerekli yetkiye sahip değilsin!`)
  const silinecekkllnc = message.mentions.members.first();
  if(!silinecekkllnc) return message.channel.send(`Bir kullanıcı belirtmelisin!`)
  const bakiye = await db.fetch(`bakiyecdare-${silinecekkllnc.id}`);
  const hesapdurumu = await db.fetch(`hesapdurumuk4h1n-${silinecekkllnc.id}`);
  const hesapismi = await db.fetch(`hesapismik4h1n-${silinecekkllnc.id}`);
  
  if(!hesapdurumu) return message.channel.send(`Kayıtlı olan bir kullanıcı belirtmelisin!`)
  db.delete(`bakiyecdare-${silinecekkllnc.id}`)
  db.delete(`hesapdurumuk4h1n-${silinecekkllnc.id}`)
  db.delete(`hesapismik4h1n-${silinecekkllnc.id}`)
  message.channel.send(`:+1:`)
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'hesap-sil',
    description: 'Kullanıcıların kullanıcı adını tarar.',
    usage: 'hesap-sil'
}