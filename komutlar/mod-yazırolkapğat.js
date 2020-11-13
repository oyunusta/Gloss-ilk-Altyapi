const Discord = require('discord.js');
const db = require('wio.db')

const ayarlar = require('../ayarlar.json'),
      prefix = ayarlar.prefix
exports.run = async(client, message, args) =>{  

    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Yetkiniz Bulunmamaktadır!');

await db.delete(`yazı_${message.guild.id}`)

message.channel.send("Yazı Rol Sistemi Tamamen Kapandı.")
};  
exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'yazırol-kapat',
  description: '',
  usage: 'otorol rol kanal'
};