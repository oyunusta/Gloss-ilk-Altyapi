const Discord = require('discord.js');


exports.run = async (client, message, args) => {
const TikTok = require('tiktok-status-api')

let user = args.slice(0).join("  ");
const tiktok = new TikTok();
 
/*console.log(tiktok.getUsername(user))
 
console.log(tiktok.getFollowers(user))
 
console.log(tiktok.getFollowing(user))
 
console.log(tiktok.getLikes(user)) 
 
console.log(tiktok.getDescription(user))*/
  const msg = new Discord.MessageEmbed()
  .setTitle("TikTok")
  .addField(`Adı:`, tiktok.getUsername(user))
  .addField(`Takipçi Sayısı:`, tiktok.getFollowers(user))
  .addField(`Takip Ettiği Kişi Sayısı:`, tiktok.getFollowing(user))
  .addField(`Toplam Beğeni Sayısı:`, tiktok.getLikes(user))
  .addField(`Bio:`, tiktok.getDescription(user))
  message.channel.send(msg)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tiktok',
  description: "Bot Sahibine Özel Komut."
};