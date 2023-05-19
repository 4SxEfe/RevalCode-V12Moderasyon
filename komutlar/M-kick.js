const Discord = require('discord.js');

    exports.run = (client, message, args) => {

    if (!message.member.hasPermission('KICK_MEMBERS')) {
      return message.reply('Bu komutu kullanma yetkiniz yok.');
    }

    // Kullanıcı etiketi belirtilmediyse hata mesajı gösterin
    if (!message.mentions.users.size) {
      return message.reply('Atılacak kullanıcıyı belirtmediniz.');
    }

    // Kullanıcıyı etiketleyin ve kick işlemini gerçekleştirin
    const taggedUser = message.mentions.members.first();
    taggedUser.kick(args.slice(1).join(' ')).then(() => {
      message.reply(`${taggedUser.user.username} adlı kullanıcı başarıyla sunucudan atıldı.`);
    }).catch(err => {
      console.error(err);
      message.reply(`Bir hata oluştu ve ${taggedUser.user.username} adlı kullanıcı atılamadı.`);
  });
 }
  
  exports.help = {
    name: "kick",
    description: "yasaklama",
    usage: "kick <@kullanıcı> <sebep>"
  }