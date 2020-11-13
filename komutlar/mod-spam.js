const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

var p = ayarlar.prefix;

exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Yetkiniz Bulunmamaktadır!');

    if (!args[0]) return message.reply(`Kullanmak İçin : ${p}spam aç/kapat`);

    if (args[0] == 'aç') {
        var durum = await db.fetch(`spamkorumasi_${message.guild.id}`)            
        if (durum == "acik") return message.channel.send("Önceden Açılmış Bir Şeyi **Şimdi** __Açamazsın!__");
        db.set(`spamkorumasi_${message.guild.id}`, 'acik')
        message.channel.send(`Spam Koruması Başarıyla Açıldı`)
    }

    if (args[0] == 'kapat') {
        var durum = await db.fetch(`spamkorumasi_${message.guild.id}`)            
        if (durum == "kapali") return message.channel.send("Önceden Kapanmış Bir Şeyi **Şimdi** __Kapatamazsın!__");
        db.set(`spamkorumasi_${message.guild.id}`, 'kapali')
       db.delete(`spamkorumasi_${message.guild.id}`, 'acik')
        message.channel.send(`Spam Koruması Kapatıldı`)
    }
 
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 3
}

exports.help = {
    name: 'spam',
    description: 'Botun Sa Yazana Cevap Versin mi Vermesin mi?',
    usage: '<prefix>sa-as aç/kapat'
}