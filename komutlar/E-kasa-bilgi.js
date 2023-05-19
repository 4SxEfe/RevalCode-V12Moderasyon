const Discord = require('discord.js');
const db = require('quick.db')
const kasalar = require('.././kasalar');

exports.run = async (client, message, args) => {
  const kasaid = args[0];
  const kasasayisi = kasalar.length
  const kasaidembeds = new Discord.MessageEmbed()
  .setTitle(`Bir kasa İD si girmelisin!`)
  .setFooter(`Kasa listesine bakmak için: ${client.k4h1n.prefix}kasalar`)
  .setColor(client.k4h1n.renk)
  if(!kasaid) return message.channel.send(kasaidembeds)
  if(kasaid > kasasayisi) return message.channel.send(kasaidembeds)
  if(isNaN(kasaid)) return message.channel.send(kasaidembeds)
  
  const k4h1nfiltre = kasalar.filter(x => x.kasaid == kasaid).map(x => `🎁Kasa İsmi: **${x.isim}** \n 💸Kasa Fiyatı: **${x.fiyat}** \n 📜Kasa Açıklaması: **${x.açıklama}**`).join('\n ')
  const icindekiler = require(`.././kasa${kasaid}`)
  const kasalariçindekilerfilter = icindekiler.map(x => x).join(' ')
  const embed = new Discord.MessageEmbed()
  .addField(`Kasa Bilgisi (İD: ${kasaid})`, `${k4h1nfiltre}`)
  .addField(`İçindekiler;`, `${kasalariçindekilerfilter}`)
  .setFooter(`Kasa listesine bakmak için: ${client.k4h1n.prefix}kasalar`)
  .setColor(client.k4h1n.renk)
  message.channel.send(embed)
  
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kasabilgi', 'kasabilgisi', 'kasa'],
    permLevel: 0,
}

exports.help = {
    name: 'kasa-bilgi',
    description: 'Kasalar hakkında bilgi alırsınız.',
    usage: 'kasa-bilgi <Kasa-İD>'
}