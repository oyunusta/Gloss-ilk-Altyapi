const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
 if (message.author.id == "708746139092123679" || message.author.id == "713644490765893662" || message.author.id == "726062744687607916" || message.author.id == "721708890147782707") {
let sunucuid = args[0]
    if (!sunucuid) return message.channel.send(`⛔ Sunucunun ID'sini 2yazmalısın.`)
         message.delete()
 
   message.channel.send(`  **Bot Sunucudan Ayrıldı** `)
   client.guilds.cache.get(sunucuid).leave()
}
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4,
  kategori: "yapımcı"
};

exports.help = {
  name: 'gizli',
  description: 'Bot Sunucudan Ayrılır.',
  usage: 'gizli'
}; 