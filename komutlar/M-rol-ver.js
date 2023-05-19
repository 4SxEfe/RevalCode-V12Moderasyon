const Discord = require('discord.js');

exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Bu komuta yetkin yok!")
const kisi = message.mentions.members.first()
if (!kisi) return message.channel.send("Kişi Etiketlemelisin.")

const rol = message.mentions.roles.first()
if (!rol) return message.channel.send("Rol Etiketlemelisin.")

const kisiyibul = message.guild.members.cache.get(kisi.id)

kisiyibul.roles.add(rol.id).then(a=> {
message.channel.send(" Rol Başarılı Bir Şekilde Verildi.")
}).catch(err => message.channel.send("Bilinmeyen Hata Rol Verilmedi."))
message.react('✅')

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rol-ver',
  description: 'Rol verir.',
  usage: 'rolver'
};