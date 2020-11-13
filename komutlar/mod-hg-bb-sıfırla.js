const { Discord, MessageEmbed } = require("discord.js");
const db = require("quick.db");


exports.run = async function(client, message, args) {
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
    if(await db.fetch(`hgbbKanalResim_${message.guild.id}`) == null) {
      const embed = new MessageEmbed()
      .setColor("#0AFF00")
      .setDescription(`Sunucudaki hoşgeldin sistemi aktif değil.`)
      .setFooter(`${client.user.username} Hoşgeldin  sistemi.`,message.guild.iconURL({ dynamic: true }))
      .setTimestamp();
    message.channel.send(embed)
    .then(a=>a.delete({timeout:10000}));
    return;
  
    }else{
    await db.delete(`hgbbKanalResim_${message.guild.id}`)
    const embed = new MessageEmbed()
      .setColor("#0AFF00")
      .setDescription(`Başarıyla hoşgeldin sistemi sıfırlandı.`)
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
  name: 'hg-bb-sıfırla',
  description: 'Sayaç kanalını ve sayısını ayarlarsınız.',
  usage: 'sayaç #Kanal <Sayı>'
};