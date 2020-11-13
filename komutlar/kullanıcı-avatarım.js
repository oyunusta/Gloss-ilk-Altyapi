
   const Discord = require('discord.js')
exports.conf = {
	enabled:false,
	guildOnly: false,
	aliases: [],
	permLevel: 0,
}

exports.help = {
	name: 'avatarım', 
	description: '',
	usage: ''
}

exports.run = async (client, message, args) => { 

let avatar = message.author;
    let embed = new Discord.MessageEmbed()
    .setImage(avatar.displayAvatarURL({dynamic: true,size:1024}), "gloss_bot.png")
  message.channel.send(embed)
  
}
 

 