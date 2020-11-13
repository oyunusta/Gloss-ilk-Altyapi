const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async (client, message, args) => {
 if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Yetkiniz Bulunmamaktadır!');
let reklam = db.fetch(`kufurengel.${message.guild.id}`)
if(!reklam) {
message.channel.send(`Küfür filtresi başarıyla açıldı.`)
db.set(`kufurengel.${message.guild.id}`, true)
} else {
message.channel.send(`Küfür filtresi başarıyla kapatıldı.`)
db.delete(`kufurengel.${message.guild.id}`)
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['küfür'],
  permLevel: 0
};

exports.help = {
  name: 'küfür-filtre',
  description: 'Only Code ait ağacı kökten çalanı g*tten',
  usage: 'reklam-filtre'
};