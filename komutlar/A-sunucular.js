const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let embed = new Discord.MessageEmbed()
  .setAuthor('', message.author.displayAvatarURL())
  .setThumbnail(client.user.avatarURL())
  .setColor('#FFE800')
  .setDescription(`****`)

  .setFooter('')
  message.channel.send(embed)
}
exports.conf = {
  enabled: false,
  guildOnly: false,
  permLevel: 0,
  aliases: ['s', 'sc']
}

exports.help = {
  name: 'sunucular',
  description: 'Kinda Code & Only V12',
  usage: 'sunucular'
}
