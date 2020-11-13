const Discord = require('discord.js');
const db = require('wio.db');
exports.run = async(client, message, args) => {
 if (!message.member.hasPermission("ADMINISTRATOR")) return;


  
db.delete(`${message.guild.id}.yasaklı.kelime`)

const embed = new Discord.MessageEmbed()
.setDescription(`**Sistem Sıfırlandı.**`)
message.channel.send(embed)

}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yasaklı-kelime-kapat'],
  permLevel: 2
};

exports.help = {
  name: 'yasaklıkelime-kapat',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayısı>'
};