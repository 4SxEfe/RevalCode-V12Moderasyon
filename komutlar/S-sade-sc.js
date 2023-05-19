const Discord = require('discord.js');

    exports.run = (client, message, args) => {

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Bu komutu sadece sunucu sahibi kullanabilir!"); //Yetkisini kontrol ediyoruz
        if (!message.member.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Bu komutu uygulamak için ``Kanalları Yönet`` yetkisine ihtiyacım var."); //Botun yetkisi kontrol ediyoruz

        var filter = m => m.author.id === message.author.id;
        message.guild.channels.cache.filter(channel => channel.delete()); //Bütün kanalları siliyoruz

        //Kategorileri oluşturuyoruz
        message.guild.channels.create("--BİLGİ--", {
            type: "category"
        }).then(c => {
            var bilgikanallari = c.id;
            message.guild.channels.create("--YAZI KANALLARI--", {
                type: "category"
            }).then(c => {
                var yazıkanallari = c.id;
                message.guild.channels.create("--SES KANALLARI--", {
                    type: "category"
                }).then(c => {
                    var seskanallari = c.id;
                    //Kanalları oluşturuyoruz
                    message.guild.channels.create("kurallar", {
                        type: "text",
                        parent: bilgikanallari
                    })
                    message.guild.channels.create("duyurular", {
                        type: "text",
                        parent: bilgikanallari
                    })

                    message.guild.channels.create("genel-sohbet", {
                        type: "text",
                        parent: yazıkanallari
                    })

                    message.guild.channels.create("foto-sohbet", {
                        type: "text",
                        parent: yazıkanallari
                    }) 
                     message.guild.channels.create("bot-komut", {
                        type: "text",
                        parent: yazıkanallari
                    })
                    message.guild.channels.create("söz-bırak", {
                        type: "text",
                        parent: yazıkanallari
                    })
                    message.guild.channels.create("oyun-sohbet", {
                        type: "text",
                        parent: yazıkanallari
                    })
                    message.guild.channels.create("Sohbet 1", {
                        type: "voice",
                        parent: seskanallari
                    })
                    message.guild.channels.create("Sohbet 2", {
                        type: "voice",
                        parent: seskanallari
                    })
                    message.guild.channels.create("Sohbet 3", {
                        type: "voice",
                        parent: seskanallari
                    })
                    message.guild.channels.create("Müzik 1", {
                        type: "voice",
                        parent: seskanallari
                    })
                    message.guild.channels.create("Müzik 2", {
                        type: "voice",
                        parent: seskanallari
                    })
                    message.guild.channels.create("Müzik 3", {
                        type: "voice",
                        parent: seskanallari
                    })
                    message.guild.channels.create("Oyun 1", {
                        type: "voice",
                        parent: seskanallari
                    })
                    message.guild.channels.create("Oyun 2", {
                        type: "voice",
                        parent: seskanallari
                    })
                    message.guild.channels.create("Oyun 3", {
                        type: "voice",
                        parent: seskanallari
                    })
                    message.guild.channels.create("A F K", {
                        type: "voice",
                        parent: seskanallari
                    })
                  });
                });
               })
              };
exports.conf = {
 enabled: false,
 guildOnly: false,
 aliases: ['sade-kur','sade-sc'],
 permLevel: 0,
}

exports.help = {
 name: 'sade-sc-kur', 
 description: 'Kinda Code & Only V12',
 usage: 'sade-sc-kur'
}
            