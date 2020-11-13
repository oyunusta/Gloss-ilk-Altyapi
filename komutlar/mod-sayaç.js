const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async(client, message, args) => {
let sayaç = db.fetch(`onlycode.sayaç_${message.guild.id}`)
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Bu Komutu Kullanabilmek İçin **YÖNETİCİ** Yetkisine Sahip Olman Gerek.");
if(args[0] === 'sıfırla') {
if(!sayaç) return message.channel.send(`Sayaç sistemi bu sunucuda açılmamış.`)
db.delete(`onlycode.sayaç_${message.guild.id}`)
db.delete(`onlycode.sayaçk_${message.guild.id}`)
message.channel.send(`Sayaç sistemi başarıyla sıfırlandı.`)
return;
}

let kanal = message.mentions.channels.first()
let sayı = args[1]
if(!kanal) return message.channel.send(`Sayaç kanalı olarak ayarlanacak kanalı etiketlemelisin.`)
if(!sayı || isNaN(sayı)) return message.channel.send(`Sayaç sayısını belirtmelisin.`)
db.set(`onlycode.sayaç_${message.guild.id}`, sayı)
db.set(`onlycode.sayaçk_${message.guild.id}`, kanal.id)
message.channel.send(`Başarıyla sayaç kanalı ${kanal}, sayısı ise \`${sayı}\` olarak ayarlandı.`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3,
};

exports.help = {
  name: 'sayaç',
  description: 'Sayaç kanalını ve sayısını ayarlarsınız.',
  usage: 'sayaç #Kanal <Sayı>'
};