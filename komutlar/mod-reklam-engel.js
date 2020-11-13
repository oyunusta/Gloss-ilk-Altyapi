const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async (client, message, args) => {
 if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Yetkiniz Bulunmamaktadır!');
let reklam = db.fetch(`reklam.${message.guild.id}`)
if(!reklam) {
message.channel.send(`Reklam filtresi başarıyla açıldı.`)
db.set(`reklam.${message.guild.id}`, true)
} else {
message.channel.send(`Reklam filtresi başarıyla kapatıldı.`)
db.delete(`reklam.${message.guild.id}`)
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['reklam'],
  permLevel: 0
};

exports.help = {
  name: 'reklam-filtre',
  description: 'Only Code ait ağacı kökten çalanı g*tten',
  usage: 'reklam-filtre'
};