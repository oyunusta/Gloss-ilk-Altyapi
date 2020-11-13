   const db = require('quick.db')
   const db2 = require('discord.js')
exports.conf = {
	enabled:false,
	guildOnly: false,
	aliases: [],
	permLevel: 3,
}

exports.help = {
	name: 'botizni', 
	description: '',
	usage: ''
}

exports.run = async (client, message, args) => {  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Bu Komutu Kullanabilmek İçin **YÖNETİCİ** Yetkisine Sahip Olman Gerek.");
   let bot_role = await db.fetch(`antiraid_${message.guild.id}`) 
if(!bot_role) return message.reply(`:x: Anti Raid Sistemi Kapalı Açmak İçin --> **g!anti-raid #kanal**`)
  
let arguman = args[0];
  
if (!arguman) return message.channel.send(`:x: Lütfen Bir Bot İD Si Girin. \n Eğer Botun Giriş İznini Kaldırmak İstiyorsanız g!botizni iptal botid`)

if (arguman === "iptal") {
 db.delete(`botizin_${args[1]}`) 
  message.channel.send(`\`${args[1]}\` ID Sine Saip Olan Botu Giriş İzni Kaldırıldı`)
       } else {    
db.set(`botizin_${arguman}`, "İzinli")
message.channel.send(`\`${arguman}\` ID Sine Sahip Olan Bot Artık Sunucuya Eklenebilir`)
         
   
	
  		
  
       }
}