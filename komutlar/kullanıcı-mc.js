const Discord = require('discord.js');
const request = require('request');
exports.run = async function (client, message, args) {

var mcIP = args[0]; 
var mcPort = 25565;
  var url = 'http://mcapi.us/server/status?ip=' + mcIP + '&port=' + mcPort;

   request(url, async function(err, response, body) {
      if(err) {
          console.log(err);
          return message.reply('Minecraft Sunucu Bulanamadı Bir Hata Meydana Geldi.');
      }
body = JSON.parse(body);



 var status = 'Sunucu Şu An Kapalı';

      if(body.online) {
          status = ':rocket: Minecraft Sunucu Açık \n\n';
          if(body.players.now) {
              status += ':dolls: **' + body.players.now + '** Oyuncu Sayısı!';
          } else {
              status += 'Sunucuda Kimse Yok.';
          }
      }
    let mcIP2 = args[0]; 
     const embed = new Discord.MessageEmbed()
     .setTitle("Sunucunun Bilgileri")
     .setDescription(`${status} \n\n :notepad_spiral: Sunucun Açıklaması MOTD : \n${body.motd}`) 
     .setThumbnail(`https://api.mcsrvstat.us/icon/${mcIP}`)
.setImage(`http://status.mclive.eu/Sunucu%20Durumu/${mcIP2}/25565/banner.png`)
     message.channel.send(embed)
  });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["minecraft-sunucu-istatatistik"],
  permLevel: 0
};

exports.help = {
  name: 'mc',
  description: 'Sunucu istatistiğini gösterir.',
  usage: 'istatistik <ip>'
};