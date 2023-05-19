const Discord = require('discord.js'); 

exports.run = (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("<a:iptal:1066297279193026610> Bu komutu sadece sunucu sahibi kullanabilir!"); //Yetkisini kontrol ediyoruz
        if (!message.member.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("<a:iptal:1066297279193026610> Bu komutu uygulamak için ``Kanalları Yönet`` yetkisine ihtiyacım var."); //Botun yetkisi kontrol ediyoruz
        
        var filter = m => m.author.id === message.author.id;
        message.guild.channels.cache.filter(channel => channel.delete()); //Bütün kanalları siliyoruz

        //Kategorileri oluşturuyoruz
        message.guild.channels.create("--GENEL KANALLAR--", {
            type: "category"
        }).then(c => {
            var legendbot = c.id;
            message.guild.channels.create("--YAZI KANALLARI--", {
                type: "category"
            }).then(c => {
                var yazıkanallari = c.id;
                    message.guild.channels.create("--OYUN KANALLARI--", {
                        type: "category"
                    }).then(c => {
                        var oyunkanalları = c.id;
                        message.guild.channels.create("--AFK ODASI--", {
                            type: "category"
                        }).then(c => {
                            var afkkalma = c.id;
                    //Kanalları oluşturuyoruz
                    message.guild.channels.create("📗║kurallar", {
                        type: "text",
                        parent: legendbot
                    })
                    message.guild.channels.create("📢║duyurular", {
                        type: "text",
                        parent: legendbot
                    })
                    message.guild.channels.create("💬║genel-sohbet", {
                        type: "text",
                        parent: yazıkanallari
                    })
                    message.guild.channels.create("📷║foto-video", {
                        type: "text",
                        parent: yazıkanallari
                    })
                    message.guild.channels.create("🤖║bot-komut", {
                        type: "text",
                        parent: yazıkanallari
                    })
                    message.guild.channels.create("💬║roblox-chat ", {
                        type: "text",
                        parent: yazıkanallari
                    })
                    message.guild.channels.create("🎮 ║ Doors", {
                        type: "voice",
                        parent: oyunkanalları
                    })
                    message.guild.channels.create("🎮 ║ PetSimülatör", {
                        type: "voice",
                        parent: oyunkanalları
                    })
                    message.guild.channels.create("🎮 ║ BloxFruit", {
                        type: "voice",
                        parent: oyunkanalları
                    })
                    message.guild.channels.create("🎮 ║ BrookHaven", {
                        type: "voice",
                        parent: oyunkanalları
                    })
                    message.guild.channels.create("🎮 ║ Parkour", {
                        type: "voice",
                        parent: oyunkanalları
                    })
                    message.guild.channels.create("🎮 ║ Diğer Oyunlar", {
                        type: "voice",
                        parent: oyunkanalları
                    })
                    message.guild.channels.create("💤 ║ A F K", {
                        type: "voice",
                        parent: afkkalma
                    })
                });
            });
        });
   });
 };
 exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: ['roblox-kur','roblox-sc'],
    permLevel: 0,
   }
   
   exports.help = {
    name: 'roblox-sc-kur', 
    description: 'Kinda Code & Only V12',
    usage: 'roblox-sc-kur'
   }
            