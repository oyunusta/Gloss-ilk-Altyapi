const Discord = require('discord.js');
const db = require('wio.db');
exports.run = async(client, message, args) => {
 if (!message.member.hasPermission("ADMINISTRATOR")) return;
let yasak = args.slice(0).join(" ");
let yasak2 = db.fetch(`${message.guild.id}.yasaklı.kelime`)
if(yasak2 == null) await db.set(`${message.guild.id}.yasaklı.kelime`,[])

  
db.push(`${message.guild.id}.yasaklı.kelime`, {yasak:yasak})

const embed = new Discord.MessageEmbed()
.setDescription(`**Yasaklı Kelime \`${yasak}\` Olarak Ayarlandı.**`)
message.channel.send(embed)

}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yasaklı-kelime'],
  permLevel: 2
};

exports.help = {
  name: 'yasaklıkelime',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayısı>'
};