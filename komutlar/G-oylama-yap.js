const Discord = require("discord.js");
exports.run = (client, message, args) => {
  message.delete();
  let question = args.join(" ");
  let user = message.author.username;
  if (!question)
    return message.channel
      .send(
        new Discord.MessageEmbed()
.addField(` **Yazı Yazman Gerek**`)
  );
  message.channel
    .send(
      new Discord.MessageEmbed()
        .setColor("RED")
        .setThumbnail(client.user.avatarURL())
        .setTimestamp()
        .setFooter("Oylama Sistemi", client.user.avatarURL())
        .addField(`**ProBot Oylama :**`, `**${question}**`)
    )
    .then(function(message) {
      message.react("✅");
      message.react("❌");
      message.react("❓");
    });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oylama"],
  permLevel: 2
};
exports.help = {
  name: "oylama-yap",
  description: "Oylama yapmanızı sağlar.",
  usage: "oylama <oylamaismi>"
};