const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let embed = new Discord.MessageEmbed()
  .setAuthor('</AloneDark-Yardım>', message.author.displayAvatarURL())
  .setThumbnail(client.user.avatarURL())
  .setColor('BLACK')
  .setDescription(`**<Yardım-Menüsü>**
  
<a:ta1:1101538335903719485> **\`e!yardım    \`** - ** Yardım Menüsünü Açar.**
<a:ta1:1101538335903719485> **\`e!moderasyon\`** - ** Moderasyon Menüsünü Açar.**
<a:ta1:1101538335903719485> **\`e!güvenlik  \`** - ** Güvenlik Menüsünü Açar.**
<a:ta1:1101538335903719485> **\`e!sunucular \`** - ** Sunucu Kurma Menüsünü Açar.**
<a:ta1:1101538335903719485> **\`e!eğlence   \`** - ** Eğlence Menüsünü Açar.**
<a:ta1:1101538335903719485> **\`e!bağlantı  \`** - ** Bağlantı Menüsünü Açar.**

<a:ta1:1101538335903719485> ** [Davet Et](https://discord.io/alonedark) ** *--* ** [Web Site]()
  `)

  .setFooter('')
  message.channel.send(embed)
}
exports.conf = {
  enabled: false,
  guildOnly: false,
  permLevel: 0,
  aliases: ['help']
}

exports.help = {
  name: 'yardım',
  description: 'Kinda Code & Only V12',
  usage: 'yardım'
}
