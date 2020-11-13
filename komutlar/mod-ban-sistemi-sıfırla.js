const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
 if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Bu Komutu Kullanabilmek İçin **YÖNETİCİ** Yetkisine Sahip Olman Gerek.");
 db.delete(`onlycode.banlimit_${message.guild.id}`)
db.delete(`onlycode.banlog_${message.guild.id}`)
 db.delete(`onlycode.bansayı_${message.author.id}_${message.guild.id}`)
  const embd = new Discord.MessageEmbed()
  embd.setDescription(`Sistem Başarıyla Sıfırla.`)
  return message.channel.send(embd)
 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yasakla-sistemi-sıfırla'],
  permLevel: 0
};

exports.help = {
  name: 'ban-sistemi-sıfırla',
  description: 'Üye yasaklarsınız.',
  usage: 'ban @Kullanıcı [Sebep]'
};