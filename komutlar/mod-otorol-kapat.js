const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return;

  
  db.delete(`otorol_${message.guild.id}`)
  db.delete(`otorolkanal_${message.guild.id}`)
  message.channel.send(`Başarılı , Otorol Sistemi Deafktif Edildi.`)
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['otomatik-rol-kapat'],
    permLevel: 0
};
exports.help = {
    name: 'otorol-kapat',
    description: 'Sunucuya Yeni Katılanlara Ayarladığınız Rolü Verir',
    usage: 'otorol <@rol> <#kanal>'
}