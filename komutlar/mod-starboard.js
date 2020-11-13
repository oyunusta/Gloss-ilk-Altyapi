const Discord = require('discord.js');
const db = require('quick.db');
exports.run =  async(client, message, args) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Yetkiniz Bulunmamaktadır!');    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Yetkiniz Bulunmamaktadır!');    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Yetkiniz Bulunmamaktadır!');
      let role = message.mentions.channels.first()
       if(!role) return;
      message.channel.send(`Star Board Kanalı ${role} Olarak Ayarandı :star2: Tepkisi Koyulduğunda Kanala Mesaj Atılacak. **Komudun Çalışması İçin Kanala Hiç Bir Mesaj Gönderilmemesi Gerekmektedir**`)
   db.set(`starboard.kanal_${message.guild.id}`,role.id)
};

exports.conf = {
 enabled: true,
 guildOnly: true,
 aliases: [],
 permLevel: 0,
};

exports.help = {
 name: 'starboard-kanal',
 description: 'daşak mert',
 usage: ''
};