const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Bu Komutu Kullanabilmek İçin **YÖNETİCİ** Yetkisine Sahip Olman Gerek.");
  let kanal = message.mentions.channels.first()
if(kanal) {
  db.set(`görselengel.${message.guild.id}`, kanal.id)

message.channel.send(`${kanal}'da Sadece GIF & Resimlere İzin Vereceğim`)

}
 if(args[0] === "kapat") {
db.delete(`görselengel.${message.guild.id}`)
message.channel.send("Sistem Sıfırlandı.")
}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
}
exports.help = {
  name: "görsel-engel",
  description: "Tag ayarlama komutudur.",
  usage: "tag <tag>"
}