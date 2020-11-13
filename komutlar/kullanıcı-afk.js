   const db = require('quick.db')
   const db2 = require('discord.js')
exports.conf = {
	enabled:false,
	guildOnly: false,
	aliases: [],
	permLevel: 0,
}

exports.help = {
	name: 'afk', 
	description: '',
	usage: ''
}

exports.run = async (client, message, args) => { 
  
var USER = message.author;
   const b = message.author.username
  var REASON = args.slice(0).join("  ");
  if(!REASON) return message.channel.send("AFK Olmak İçin Bir Sebep Belirtmelisin.");
  
  db.set(`afk_${USER.id}`, REASON);
  db.set(`afk_süre_${USER.id}`, Date.now());
  const embed = new db2.MessageEmbed()
  embed.setDescription("Başarıyla AFK(Away From Keyboard) Moduna Girdiniz.")
  message.channel.send(embed)
  message.member.setNickname(`[AFK] ` + b)

 };  
