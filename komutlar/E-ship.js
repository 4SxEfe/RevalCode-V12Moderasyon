exports.run = async (client, msg, args) => {
    let ask=[
      "İle Sevginiz %0 Gösteriyor ,Sizi Sevmiyor 😕",
      "İle Sevginiz %6 Gösteriyor.💔",
      "İle Sevginiz %3 Gösteriyor.💔",
      "İle Sevginiz %9 Gösteriyor.💔",
      "İle Sevginiz %12 Gösteriyor.💔",
      "İle Sevginiz %23 Gösteriyor.💔",
      "İle Sevginiz %18 Gösteriyor.💔",
      "İle Sevginiz %20 Gösteriyor.💔",
      "İle Sevginiz %26 Gösteriyor.💛",
      "İle Sevginiz %29 Gösteriyor.💛",
      "İle Sevginiz %30 Gösteriyor.💛",
      "İle Sevginiz %50 Gösteriyor.💛",
      "İle Sevginiz %40 Gösteriyor.💛",
      "İle Sevginiz %60 Gösteriyor.🤍",
      "İle Sevginiz %70 Gösteriyor.🤍",
      "İle Sevginiz %73 Gösteriyor.🤍",
      "İle Sevginiz %76 Gösteriyor.🤍",
      "İle Sevginiz %79 Gösteriyor.🤍",
      "İle Sevginiz %82 Gösteriyor.❤",
      "İle Sevginiz %85 Gösteriyor.❤",
      "İle Sevginiz %88 Gösteriyor.❤",
      "İle Sevginiz %90 Gösteriyor.❤",
      "İle Sevginiz %91 Gösteriyor.❤",
      "İle Sevginiz %92 Gösteriyor.❤",
      "İle Sevginiz %93 Gösteriyor.❤",
      "İle Sevginiz %94 Gösteriyor.❤",
      "İle Sevginiz %95 Gösteriyor.💖",
      "İle Sevginiz %96 Gösteriyor.💖",
      "İle Sevginiz %97 Gösteriyor.💖",
      "İle Sevginiz %98 Gösteriyor.💖",
      "İle Sevginiz %99 Gösteriyor.💖",
      "İle Sevginiz %100 Gösteriyor.💖",
    ]
      let member = msg.mentions.members.first()
     if(!member)return msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (' :x: Bir Kişiyi Etiketlemelisin... Ör: .ship <@ProBot>')
  }});
 
    else{
    msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (`${member} ${ask[Math.floor(Math.random() * 30)]}.`)
    }})
    }
 
  }
 
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
   };
 
  exports.help = {
    name: 'ship',
    description: 'Aşk Ölçmeni sağlar.',
    usage: 'ship'
   }