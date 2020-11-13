const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Bu Komudu Kullana Bilmen İçin Yönetici Yetkisi Gerekmektedir.')
  let kanallar = await db.get(`kanalengel_${message.guild.id}`)
  let kanal = message.mentions.channels.first() || message.channel;
  

  
  if(kanallar && kanallar.some(id => `k${kanal.id}` === id)) {
    db.delete(`kanalengel_${message.guild.id}`, `k${kanal.id}`)
      kanallar.forEach(v => {
      if (!v.includes(`k${kanal.id}`)) {
        db.push(`kanalengel_${message.guild.id}`, v)
      }
      })
    message.channel.send(`**${kanal} Kanalında Bot Çalışacak!**`)
  } else {
    db.push(`kanalengel_${message.guild.id}`, `k${kanal.id}`)
    message.channel.send(`**${kanal} Kanalında Bot Çalışmayacak**`)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kanalengel'],
  permLevel: 0,
};

exports.help = {
  name: 'cevaplama',
  description: 'Artık belirlenen kanallarda bot çalışmaz.',
  usage: 'kanalengel #kanal/liste',
  kategori: 'yetkili'
};