const Discord = require('discord.js');

exports.run = (client, message, args) => {

  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("Lütfen Bişey Yaz")
let link = "https://bcassetcdn.com/asset/logo/b198ca03-24ec-42ee-9731-e24d407b1823/logo?v=4&text="+isim
  const embed = new Discord.MessageEmbed()
  .setImage(link)
  message.channel.send(embed)
};
//Darkcode
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: 'logolar',
  permLevel: 0
};//Darkcode

exports.help = {
  name: 'm-logo',
  description: 'Logo Yaparsınız',
  usage: 'm-logo <yazı>'
};