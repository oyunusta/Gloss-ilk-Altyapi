const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
   if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Bu Komutu Kullanabilmek İçin **YÖNETİCİ** Yetkisine Sahip Olman Gerek.");
let limit = args[0]
if(!limit || isNaN(limit)) return message.channel.send(`:x: Bir Limit Girmelisin.`)
db.set(`onlycode.banlimit_${message.guild.id}`, limit)
message.channel.send(`Ban Limiti Başarıyla **${limit}** Olarak Ayarlandı.`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ban-limit',
  description: 'Üyeleri yasaklama limitini ayarlarsınız.',
  usage: 'ban-limit <Limit>'
};