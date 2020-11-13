const Discord = require('discord.js');
const db = require('quick.db')

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'kullanıcı',
  kategori: 'kullanıcı'
};

exports.run = async(client, message, args) => {
  const embed = new Discord.MessageEmbed()
  .setDescription(" <a:sagokk:726382567799914516> [Beni Sunucuna Davet Etmek İçin Tıkla](https://discord.com/oauth2/authorize?client_id=726040861602742324&permissions=2146958847&scope=bot) \n <a:sagokk:726382567799914516> [Destek  Sunucum İçin Tıkla](https://discord.gg/WFyxmpP) \n <a:sagokk:726382567799914516> [Website](http://gloss.ueuo.com)")
return message.channel.send(embed)
  };

