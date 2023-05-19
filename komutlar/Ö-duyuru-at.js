const Discord = require('discord.js');

exports.run = (client, message, args) => {
      // Mesajı gönderecek yetkiye sahip misiniz diye kontrol edin
      if (!message.member.hasPermission('ADMINISTRATOR')) {
        return message.reply('Bu komutu kullanma yetkiniz yok.');
      }
  
      // Gönderilecek mesajı belirtmedinizse hata mesajı gösterin
      if (!args.length) {
        return message.reply('Lütfen duyuru metnini belirtin.');
      }
  
      // Sunucudaki tüm üyelere mesajı gönderin
      const messageToSend = args.join(' ');
      message.guild.members.cache.forEach(member => {
        if (member.user.bot) return; // Botları atlayın
        member.send(messageToSend).catch(err => {
          console.error(`Hata oluştu: ${err}`);
        });
      });
  
      // Duyuru yapıldı mesajını gösterin
      message.channel.send(`"${messageToSend}" Mesaj Gönderildi.`);
   
    };
  exports.help = {
    name: 'duyuru',
    description: 'Sunucuda duyuru yapar.',
    usage: 'duyuru <mesaj>',
  };
  
  