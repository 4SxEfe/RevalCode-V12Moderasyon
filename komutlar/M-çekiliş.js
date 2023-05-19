const Discord = require('discord.js');
const moment = require('moment');
const ms = require('ms')

exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply(" Yetersiz Yetki Gereken => YÖNETİCİ")

var time = moment().format('Do MMMM YYYY , hh:mm');
var room;
var title;
var duration;
var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
var filter = m => m.author.id === message.author.id;

      message.channel.send(` :x: | **1- Çekilişin Yapılacağı Kanalın Adını Yaz. \n Örnek : 💬 |genel-sohbet**`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.cache.find(x => x.name ===  collected.first().content);
        if(!room) return message.channel.send(' :x: | **Böyle Bir Kanal Bulunmuyor ,Lütfen Tam İsmini Gir.**');
        room = collected.first().content;
        collected.first().delete();
        msg.edit(' :x: | **2- Çekilişin Süresini Belirle.(1s, 1m, 1h, 1d)** \n ** S = Saniye -&- M = Dakika** \n **H = Saat -&- D = Gün** ').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(!collected.first().content.match(/[1-60][s,m,h,d]/g)) return message.channel.send(' :x: | **Böyle Bir Süre Kayıtlı Değil.**');
            duration = collected.first().content
            collected.first().delete();
            msg.edit(' :x: | **3- Son Olarak Ödülü Yaz Ve Bitir Bu İşi.**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.MessageEmbed()
                  .setColor("RED")
                  .setDescription(`**Ödül: ${title}** \nAşağıda ki 🎁'a Basarak Katıl \nKalan Süre : ${duration} \n **Başlama Zamanı :** ${hours}:${minutes}:${seconds} ${suffix}`)
                  .setFooter(message.author.username + " Destiny Bot Çekiliş Sistemi", message.author.avatarURL);
                  message.guild.channels.cache.find(x => x.name ===  room).send(' :heavy_check_mark: **ÇEKİLİŞ BAŞLADI** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {
                     let re = m.react('🎁');
                     setTimeout(() => {
                       let users = m.reactions.cache.get("🎁").users
                       let list = users.cache.array().filter(u => u.id !== m.author.id !== client.user.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                       let endEmbed = new Discord.MessageEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .setColor("#f558c9")
                       .setFooter("ProBot Çekiliş Sistemi")
                       .addField('Çekiliş Bitti !',`Kazanan : ${gFilter}`)
                       .setTimestamp()
                       m.edit('** 🎉 ÇEKİLİŞ BİTTİ 🎉**' , {embed: endEmbed});

                       var embedLel = new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .setDescription(" Ödülünü Yetkilileri Etiketleyerek Veya Ticket Açarak Alabilirsin.").setFooter("ProBot Çekiliş Sistemi Sunar <3")
                        message.guild.channels.cache.find(x => x.name ===  room).send(`** Tebrikler ${gFilter} - \`${title}\` Kazandın. **` , embedLel)}, ms(duration));
            });
                } catch(e) {
                message.channel.send(`:x: | **Maalesef Gerekli Yetkilerim Bulunmamakta**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};
exports.help = {
  name: 'çekiliş',
  description: 'Çekiliş mi?? Sunucunda güzel şeyler olacak :3',
  usage: 'çekiliş'
};