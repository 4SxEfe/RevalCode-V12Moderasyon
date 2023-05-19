module.exports.run = async (client, message, args) => {

    if (!message.member.permissions.has("BAN_MEMBERS"))
    return message
      .channel.send({ content: "> **Yetersiz Yetkiye Sahipsin.**" })
      .catch((err) => {});
  if (!message.guild.me.permissions.has("BAN_MEMBERS"))
    return message
      .channel.send({ content: "> **Bana Banlama Yetkisi Vermeyi Unuttun.**"})
      .catch((err) => {});
  
  let sebep = args.slice(1).join(" ") || "Sebep Belirtilmemiş";
  
  let member;
  let member1 = message.mentions.members.first();
  let member2 = message.guild.members.cache.get(args[0]);
  if (member1) {
    member = member1.id;
  }
  if (member2) {
    member = member2.id;
  }
  if (!member1 && !member2) {
    member = args[0];
  }
  
  if (!member)
    return message
      .channel.send({
        content: "> **Ben Kimi Banlayacam Acaba ,Birini Etiketle.**"
      })
      .catch((err) => {});
  
  let kullanıcı = message.guild.members.cache.get(member);
  
  if (kullanıcı) {
  
    if (message.guild.owner.id === member)
      return message
        .channel.send({
          content: "> **Sunucu Sahibini Banlamak Bana Göre İş Değil.**"
        })
        .catch((err) => {});
    if (message.author.id === member)
      return message
        .channel.send({
          content: "> **Kendini mi Banlayacaksın Cidden ,Bari Sunucudan Çıkta Beni Yorma.**"
        })
        .catch((err) => {});
    if (client.user.id === member)
      return message 
        .channel.send({
          content: "> **Beni mi Banlayacaksın ,Üzüldüm Be Kanka :( **"
        })
        .catch((err) => {});
  
    if (kullanıcı.roles.highest.position >= message.guild.me.roles.highest.position)
      return message
        .channel.send({
          content: ">  **Kullanıcının Rolü Benim Rolümden Daha Yüksek.**"
        })
        .catch((err) => {});
  }
  
  message.guild.members
    .ban(member, {
      days: 7,
      reason: `By: ${message.author.tag} Reason: ` + sebep || "Belirtilmemiş",
    })
    .then(() => {
      message.channel.send({
        content: `> **Başarılı!** Kullanıcı Başarıyla Sunucudan Banlandı! `
      });
    })
    .catch((e) => {
      message
        .channel.send({
          content: `>  **Başarısız!** Böyle Bir Kullanıcı Varmı Bi Bak. \n**Hata:** \`\`\`${e.name + ": " + e.message}\`\`\``,
        })
        .catch((err) => {});
    });
  
  };
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ban','sq'],
    permLevel: 2
  };
  
  exports.help = {
    name: "üye-ban",
    description: "Kinda Code & Only V12",
    usage: "üye-ban"
  };
  