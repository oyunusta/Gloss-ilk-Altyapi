const Discord = require('discord.js');
const db = require('quick.db');
exports.run =  async(client, message, args) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Yetkiniz Bulunmamaktadır!');
      message.channel.send(`Star Board Kanalı Sıfırlandı.`)
   db.delete(`starboard.kanal_${message.guild.id}`)
};

exports.conf = {
 enabled: true,
 guildOnly: true,
 aliases: [],
 permLevel: 0,
};

exports.help = {
 name: 'starboard-kanal-sıfırla',
 description: 'daşak mert',
 usage: ''
};