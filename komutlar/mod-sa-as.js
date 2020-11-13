const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'sa-as',
    description: 'Botun Sa Yazana Cevap Versin mi Vermesin mi?',
    usage: '<prefix>sa-as aç/kapat'
}

var p = ayarlar.prefix;

exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Yetkiniz Bulunmamaktadır!');

    if (!args[0]) return message.reply(`Kullanmak İçin : ${p}sa-as aç/kapat`);

    if (args[0] == 'aç') {
        var durum = await db.fetch(`saas_${message.guild.id}`)            
        if (durum == "aciki") return message.channel.send("Önceden Açılmış Bir Şeyi **Şimdi** __Açamazsın!__");
        db.set(`saas_${message.guild.id}`, 'aciki')
        message.channel.send(`Şuandan İtibaren Selam Verenlerin Selamı **Alıncaktır**.!`)
    }

    if (args[0] == 'kapat') {
        var durum = await db.fetch(`saas_${message.guild.id}`)            
        if (durum == "kapalii") return message.channel.send("Önceden Kapanmış Bir Şeyi **Şimdi** __Kapatamazsın!__");
        db.set(`saas_${message.guild.id}`, 'kapalii')
        message.channel.send(`Artık Selam Verilmeyecek`)
    }

}

