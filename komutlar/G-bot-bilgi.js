const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
process.setMaxListeners(0);
require("moment-duration-format");

exports.run = async (bot, message, args) => {
  
   const seksizaman = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const istatistikler = new Discord.MessageEmbed()
   
  .setColor('BLACK')
  .setFooter('Bot İsmi', bot.user.avatarURL)
  .addField("» **Botun Sahibi**", "<@896668078904074250>")
  .addField("» **Geliştirici** ","<@896668078904074250>")
  .addField("» **Bellek kullanımı**", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true)  
  .addField("» **Çalışma süresi**", seksizaman)
  .addField("» **Kullanıcılar**" , bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("» **Discord.JS sürüm**", "v"+Discord.version, true)
  .addField("» **Node.JS sürüm**", `${process.version}`, true)
  .addField("» **Bit**", `\`${os.arch()}\``, true)
  .addField("**» Bot Davet**", " [Davet Et](https://discord.com/oauth2/authorize?client_id=1082747299735801967&scope=bot&permissions=8)", )
  .addField("**» Destek Sunucusu**", " [Sunucumuza Katıl](https://discord.gg/zAZYRRYeuF)", )
   
 return message.channel.send(istatistikler);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bot-bilgi","botbilgi","i"],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Kinda Code & Only V12",
  usage: "istatistik"
};
