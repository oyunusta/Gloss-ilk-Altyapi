const Discord = require('discord.js');
const db = require('quick.db');
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'snipe',
 description: 'Son silinen mesajı gösterir.',
 usage: 'snipe'
};

exports.run = (client, message, args) => {
   if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Bu Komutu Kullanabilmek İçin **YÖNETİCİ** Yetkisine Sahip Olman Gerek.");
let onlycode = db.get(`onlycode.silinenmesaj_${message.channel.id}`)
if(!onlycode) return message.channel.send(`:x: Bu Kanalda Önceden Bir Mesaj Silinmemiş.`)
const embed = new Discord.MessageEmbed()
 .setColor('GRAY')
 .setAuthor(client.users.cache.get(onlycode.sahip).tag, client.users.cache.get(onlycode.sahip).avatarURL)
 .addField(`Mesaj İçeriği`, onlycode.mesaj)
 .setFooter(`Gloss - Snipe`, client.user.avatarURL)
 .setTimestamp(onlycode.tarih) 
message.channel.send(embed)
  .catch(error => {
    message.channel.send(`**Bu Kanalda Hiç Bir Mesaj Silinmemiş `)
  });
};

