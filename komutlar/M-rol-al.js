const Discord = require('discord.js');

exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Bu komuta yetkin yok!")
const kisi = message.mentions.members.first()
if (!kisi) return message.channel.send("Kişi Etiketlemelisin.")

const rol = message.mentions.roles.first()
if (!rol) return message.channel.send("Rol Etiketlemelisin.")

const kisiyibul = message.guild.members.cache.get(kisi.id)

kisiyibul.roles.remove(rol.id).then(a=> {
message.channel.send("Rol Başarılı Bir Şekilde Alındı.")
}).catch(err => message.channel.send("Bilinmeyen Hata Rol Alınamadı."))
message.react('✅')

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rol-al',
  description: 'Rol alır.',
  usage: 'rolal'
};