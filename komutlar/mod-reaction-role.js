const fs = require('wio.db');
const Discord = require('discord.js');


exports.run = async (client, message, args, member) => {
 if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Bu Komutu Kullanabilmek İçin **YÖNETİCİ** Yetkisine Sahip Olman Gerek.");
  let data = fs.fetch(`${message.guild.id}.emoji`)
let kanal = message.mentions.channels.first()
 let emoji = args[2] 
 let rol = message.mentions.roles.first()
 let mesaj = args[1]
 if(emoji) {
  if(rol) {
if(mesaj) {
if(kanal) {
  if(data == null) await fs.set(`${message.guild.id}.emoji`,[])
 fs.push(`${message.guild.id}.emoji`,{emoji:emoji, mesaj:mesaj, rol:rol.id})
kanal.messages.fetch(mesaj).then(m => 
m.react(emoji)
)
  
  message.channel.send("Başarılı")  
}
}
}
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'reaction-role',
  description: "Bot Sahibine Özel Komut."
};