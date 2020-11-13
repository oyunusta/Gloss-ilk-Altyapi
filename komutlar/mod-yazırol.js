const Discord = require('discord.js');
const db = require('wio.db')

const ayarlar = require('../ayarlar.json'),
      prefix = ayarlar.prefix
exports.run = async(client, message, args) =>{  

    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Yetkiniz Bulunmamaktadır!');
const data = await db.fetch(`yazı_${message.guild.id}`)
const rol = message.mentions.roles.first()
const msj = args[1]
if(data == null) await db.set(`yazı_${message.guild.id}`, [])
await db.push(`yazı_${message.guild.id}`,{mesaj:msj,rol:rol.id})
if(!rol) return;
if(!msj) return;
const embed = new Discord.MessageEmbed()
.setDescription(`Yazı Rol Sistemi Aktif Edildi :) Sınırsız Yazı Koyma Hakkınız Bulunmaktadır Yazı Rolün Bilgileri \n Rol : \`${rol.name}\` Yazı : \`g!${msj}\``)
message.channel.send(embed)
};  
exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'yazırol',
  description: '',
  usage: 'otorol rol kanal'
};