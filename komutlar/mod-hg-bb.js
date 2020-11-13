const { Discord, MessageEmbed } = require("discord.js");
const db = require('quick.db');
exports.run = async(client, message, args) => {
if (!message.member.hasPermission("MANAGE_GUILD")) {
    const embed = new MessageEmbed()
      .setColor("#0AFF00")
      .setDescription(`Bunun için yetkin yok.`)
      .setFooter(`${client.user.username} Hoşgeldin  sistemi.`,message.guild.iconURL({ dynamic: true }))
      .setTimestamp();
    message.channel.send(embed)
    .then(a=>a.delete({timeout:10000}));
    return;
  }else {
    if(await db.fetch(`hgbbKanalResim_${message.guild.id}`)) {
        const embed = new MessageEmbed()
      .setColor("#0AFF00")
      .setDescription(`Hoşgeldin kanalı sunuda zaten aktif.\nSıfırlamak için g!hg-bb-sıfırla`)
      .setFooter(`${client.user.username} Hoşgeldin  sistemi.`,message.guild.iconURL({ dynamic: true }))
      .setTimestamp();
    message.channel.send(embed)
    .then(a=>a.delete({timeout:10000}));
    return;
  
      return
    }
    const kanal = message.mentions.channels.first()
    if(!kanal) {
        const embed = new MessageEmbed()
      .setColor("#0AFF00")
      .setDescription(`Bir kanal etiketlemelisin.`)
      .setFooter(`${client.user.username} Hoşgeldin  sistemi.`,message.guild.iconURL({ dynamic: true }))
      .setTimestamp();
    message.channel.send(embed)
    .then(a=>a.delete({timeout:10000}));
    return;
   }else {
     await db.set(`hgbbKanalResim_${message.guild.id}`,kanal.id)
      const embed = new MessageEmbed()
      .setColor("#0AFF00")
      .setDescription(`Hoşgeldin kanalı başarıyla <#${kanal.id}> olarak ayarlandı.`)
      .setFooter(`${client.user.username} Hoşgeldin  sistemi.`,message.guild.iconURL({ dynamic: true }))
      .setTimestamp();
    message.channel.send(embed)
    .then(a=>a.delete({timeout:10000}));
    return;
   
   }
  }
};




exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3,
};

exports.help = {
  name: 'hg-bb-ayarla',
  description: 'Sayaç kanalını ve sayısını ayarlarsınız.',
  usage: 'sayaç #Kanal <Sayı>'
};