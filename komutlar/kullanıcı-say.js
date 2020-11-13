const Discord = require('discord.js');

exports.run = async (client, message, args) => {
 let güvenlik = message.guild.verificationLevel
  if(güvenlik === "NONE") güvenlik = "Yok"
    if(güvenlik === "LOW") güvenlik = "Düşük"
      if(güvenlik === "MEDIUM") güvenlik = "Orta"
   if(güvenlik === "HIGH") güvenlik = "Yüksek"
     if(güvenlik === "VERY_HIGH") güvenlik = " En Yüksek"
  let pc = message.guild.members.cache.filter(m => !m.user.bot && (m.user.presence.status !== "offline")).filter(m => Object.keys(m.user.presence.clientStatus).includes("desktop")).size
let web = message.guild.members.cache.filter(m => !m.user.bot && (m.user.presence.status !== "offline")).filter(m => Object.keys(m.user.presence.clientStatus).includes("web")).size
let mobil = message.guild.members.cache.filter(m => !m.user.bot && (m.user.presence.status !== "offline")).filter(m => Object.keys(m.user.presence.clientStatus).includes("mobile")).size
    const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    let count = 0
  let guild = message.guild;
     let botlar = message.guild.members.cache.filter(m => m.user.bot).size;
    let textChannels = message.guild.channels.cache.filter(m => m.type == "text").size;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let  çevrimiçi = message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== "offline").size
    const embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setThumbnail(`https://cdn.discordapp.com/attachments/655459488236568597/655887650494087178/loading_1.gif`)
    
        .addField(`<a:Melmas:712616078399897610> **__Sunucudaki Toplam Üye Sayısı__**`,`**\`\`\`${message.guild.memberCount}\`\`\`**`)
    
        .addField(`<a:Melmas:712616078399897610> **__Toplam Çevrimiçi Üye Sayısı__**`, `**\`\`\`${çevrimiçi}\`\`\`**`) 
    
        .addField(`<a:Melmas:712616078399897610> **__Seslideki Üye Sayısı__**`,`**\`\`\`${count}\`\`\`**`)
    
      .addField(`<a:dcbc:715166983359954964> **__Güvenlik Seviyesi__**`,`**\`\`\`${güvenlik}\`\`\`**`)
    
        .addField(`<a:667811300763631636:708395199717703730>  **__Yazı Kanalları__**`, `» **${textChannels}**`)
    
        .addField(`<a:667811300763631636:708395199717703730>  **__Ses Kanalları__**`, `» **${voiceChannels.size}**`)
    
        .addField(`<a:667811300763631636:708395199717703730>  **__Roller__**`,`»  **${message.guild.roles.cache.size}**`)
    
        .addField(`<a:667811300763631636:708395199717703730>  **__Emojiler__**`,`»  **${message.guild.emojis.cache.size}**`)
    
       .addField(`<a:boooooost:715166983439646800>  **__Boost Seviyesi__**`,`»  **${message.guild.premiumTier}/3**`)
    
        .addField(`<a:boooooost:715166983439646800>  **__Boost Sayısı__**`,`»  **${message.guild.premiumSubscriptionCount}**`)
    
        .addField(`<a:sagsag:715167990068412449> **__Kullanıcılar__**`, ` <:domda:709739242594631690> Çevrimiçi : **${message.guild.members.cache.filter(o => o.presence.status === 'online').size}** \n <:ris:719162225486594098> Rahatsız Etmeyin : **${message.guild.members.cache.filter(dnd => dnd.presence.status === 'dnd').size}** \n <:domda5:709739242972250183> Boşta: **${message.guild.members.cache.filter(i => i.presence.status === 'idle').size}** \n <:domda3:709739242972250124> Görünmez/Çevrimdışı : **${message.guild.members.cache.filter(off => off.presence.status === 'offline').size}** \n <a:dcbc:715166983359954964> Botlar : **${botlar}**`, true)
    
     .addField(`<a:sagsag:715167990068412449> Üyelerin Bağlandığı Cihazlar:`, `**${pc}** Kişi **__Bilgisayardan__**\n**${web}** Kişi **__Webden__**\n**${mobil}** Kişi İse **__Mobilden__** Bağlanıyor!`, false)
    
         .addField(`<a:sagsag:715167990068412449>  **__Son Üyeler__**`,`\n»  Son 1 **Saatte** Giren Üyeler **•** **${message.guild.members.cache.filter(a => (new Date().getTime() - a.joinedTimestamp) < 3600000).size}** \n» Son 1 **Günde** Giren Üyeler **•** **${message.guild.members.cache.filter(a => (new Date().getTime() - a.joinedTimestamp) < 86400000).size}** \n»   Son 1 **Haftada** Giren Üyeler **•** **${message.guild.members.cache.filter(a => (new Date().getTime() - a.joinedTimestamp) < 604800000).size}** \n»   Son 1 **Ayda** Giren Üyeler **•** **${message.guild.members.cache.filter(a => (new Date().getTime() - a.joinedTimestamp) < 2629800000).size}**`)
        .setTitle(`<a:sagsag:715167990068412449> ${message.author.tag} - Tarafından istendi.`)
    .setImage("https://media.discordapp.net/attachments/697145772801785876/716671769355747348/1.gif")
        .setFooter(`© 2020 Gloss BOT Tüm Hakları Saklıdır.`, client.user.avatarURL)
    message.channel.send(embed);

} 


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['say'],
    permLevel: 0
};

exports.help = {
    name: 'say',
    description: 'Say',
    usage: 'say'
}