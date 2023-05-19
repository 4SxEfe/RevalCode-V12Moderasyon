const Discord = require('discord.js')

exports.run = function(client, message, args) {
  
  
const kinda = new Discord.MessageEmbed() 
                            
.setTitle("💛ProBot Davet")
.setDescription("**Botun Davet Linki :** [Davet Et](https://discord.com/oauth2/authorize?client_id=1082747299735801967&scope=bot&permissions=8)\n**Botun Destek Sunucusu :** [Katıl](https://discord.gg/zqpdVnY5Sv)")
.setColor("GREEN")

return message.channel.send(kinda)
}

exports.conf = {
enabled: false,
guildOnly: false,
aliases: ["botu-ekle"],
permLevel: 0
  
};
  
exports.help = {
name: 'davet'
};
