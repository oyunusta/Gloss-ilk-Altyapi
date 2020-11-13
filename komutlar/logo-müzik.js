const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("Lütfen Bişey Yaz")//Darkcode
let link = "https://bcassetcdn.com/asset/logo/545fa973-da1e-428a-bf78-f9f8b0717cdb/logo?v=4&text="+isim
  const embed = new Discord.MessageEmbed()
  .setImage(link)
  message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: 'logolar',
  permLevel: 0
};//Darkcode

exports.help = {
  name: 'müzik-logo',
  description: 'Logo Yaparsınız',
  usage: 'm-logo <yazı>'
};