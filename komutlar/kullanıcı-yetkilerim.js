const Discord = require('discord.js');
const { stripIndents } = require('common-tags');

exports.run = (client, msg, args) => {


let x;
    let x2;
    let x3;
    let x4;
    let x5;
    let x6;
    let x7;
    let x8;
    let x9;
    let x10;
    let x11;
    
    //yönetici
    if (msg.member.hasPermission("ADMINISTRATOR")) x = `<:dogru:712581613669580800>`
    if (!msg.member.hasPermission("ADMINISTRATOR")) x = `<:yanlis:712581613925433414>`
    
    //Denetim kaydı
    if (msg.member.hasPermission("VIEW_AUDIT_LOG")) x2 = `<:dogru:712581613669580800>`
    if (!msg.member.hasPermission("VIEW_AUDIT_LOG")) x2 = `<:yanlis:712581613925433414>`
    
    //Sunucuyu yönet
    if (msg.member.hasPermission("MANAGE_GUILD")) x3 = `<:dogru:712581613669580800>`
    if (!msg.member.hasPermission("MANAGE_GUILD")) x3 = `<:yanlis:712581613925433414>`
  
    //Rolleri yönet
    if (msg.member.hasPermission("MANAGE_ROLES")) x4 = `<:dogru:712581613669580800>`
    if (!msg.member.hasPermission("MANAGE_ROLES")) x4 = `<:yanlis:712581613925433414>`
    
    //Kanalları yönet
    if (msg.member.hasPermission("MANAGE_CHANNELS")) x5 = `<:dogru:712581613669580800>`
    if (!msg.member.hasPermission("MANAGE_CHANNELS")) x5 = `<:yanlis:712581613925433414>`
    
    //üyeleri at
    if (msg.member.hasPermission("KICK_MEMBERS")) x6 = `<:dogru:712581613669580800>`
    if (!msg.member.hasPermission("KICK_MEMBERS")) x6 = `<:yanlis:712581613925433414>`
    
    //üyeleri yasakla
    if (msg.member.hasPermission("BAN_MEMBERS")) x7 = `<:dogru:712581613669580800>`
    if (!msg.member.hasPermission("BAN_MEMBERS")) x7 = `<:yanlis:712581613925433414>`
    
    //mesajları yönet
    if (msg.member.hasPermission("MANAGE_MESSAGES")) x8 = `<:dogru:712581613669580800>`
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) x8 = `<:yanlis:712581613925433414>`
    
    //kullanıcı adlarını yönet
    if (msg.member.hasPermission("MANAGE_NICKNAMES")) x9 = `<:dogru:712581613669580800>`
    if (!msg.member.hasPermission("MANAGE_NICKNAMES")) x9 = `<:yanlis:712581613925433414>`
    
    //emojileri yönet
    if (msg.member.hasPermission("MANAGE_EMOJIS")) x10 = `<:dogru:712581613669580800>`
    if (!msg.member.hasPermission("MANAGE_EMOJIS")) x10 = `<:yanlis:712581613925433414>`
    
    //webhookları yönet
    if (msg.member.hasPermission("MANAGE_WEBHOOKS")) x11 = `<:dogru:712581613669580800>`
    if (!msg.member.hasPermission("MANAGE_WEBHOOKS")) x11 = `<:yanlis:712581613925433414>`
    
    const embed = new Discord.MessageEmbed()
    .setDescription(`${x} Yönetici\n${x2} Denetim Kaydını Görüntüle\n${x3} Sunucuyu Yönet\n${x4} Rolleri Yönet\n${x5} Kanalları Yönet\n${x6} Üyeleri At\n${x7} Üyeleri Yasakla\n${x8} Mesajları Yönet\n${x9} Kullanıcı Adlarını Yönet\n${x10} Emojileri Yönet\n${x11} Webhook'ları Yönet`)
    msg.channel.send(embed)
 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['izinlerim'],
  permLevel: 0,
    kategori: "kullanıcı"
};

exports.help = {
  name: 'yetkilerim',
  description: 'Komutu kullandığınız sunucudaki yetkilerinizi/izinlerinizi gösterir.',
  usage: 'yetkilerim'
};