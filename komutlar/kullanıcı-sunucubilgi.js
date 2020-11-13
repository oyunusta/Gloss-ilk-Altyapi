
const Discord = require('discord.js');


exports.run = async (client, message, args) => {
    let botlar = message.guild.members.cache.filter(m => m.user.bot).size;
   const ss = message.guild.channels.cache.filter(c => c.type === 'category');
  var kate = ss.size.toString().replace(/ /g, " ") 
var ts = kate.match(/([0-9])/g) 
kate = kate.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase() 

if(ts) { 
kate = kate.replace(/([0-9])/g, d => { 
return { 
    '0': `<a:0_:743108341445689475>`,
    '1': `<a:1_:743108339625361429>`,
    '2': `<a:2_:743108341462597708>`,
    '3': `<a:3_:743109727348588658>`,
    '4': `<a:4_:743108341487632425>`,                       
    '5': `<a:5_:743108341718450247>`,
    '6': `<a:6_:743108341810593822>`,
    '7': `<a:7_:743108528201269378>`,
    '8': `<a:8_:743108530315329608>`,
    '9': `<a:9_:743108529518542891>`}[d];
 }) 
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  var metinkanal = message.guild.channels.cache.size.toString().replace(/ /g, " ") 
var ts = metinkanal.match(/([0-9])/g) 
metinkanal = metinkanal.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase() 

if(ts) { 
metinkanal = metinkanal.replace(/([0-9])/g, d => { 
return { 
    '0': `<a:0_:743108341445689475>`,
    '1': `<a:1_:743108339625361429>`,
    '2': `<a:2_:743108341462597708>`,
    '3': `<a:3_:743109727348588658>`,
    '4': `<a:4_:743108341487632425>`,                       
    '5': `<a:5_:743108341718450247>`,
    '6': `<a:6_:743108341810593822>`,
    '7': `<a:7_:743108528201269378>`,
    '8': `<a:8_:743108530315329608>`,
    '9': `<a:9_:743108529518542891>`}[d];
 }) 
}
  
  
  
  
  
   const s = message.guild.channels.cache.filter(c => c.type === 'voice');
  var seskanal = s.size.toString().replace(/ /g, " ") 
var ts = seskanal.match(/([0-9])/g) 
seskanal = seskanal.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase() 

if(ts) { 
seskanal = seskanal.replace(/([0-9])/g, d => { 
return { 
    '0': `<a:0_:743108341445689475>`,
    '1': `<a:1_:743108339625361429>`,
    '2': `<a:2_:743108341462597708>`,
    '3': `<a:3_:743109727348588658>`,
    '4': `<a:4_:743108341487632425>`,                       
    '5': `<a:5_:743108341718450247>`,
    '6': `<a:6_:743108341810593822>`,
    '7': `<a:7_:743108528201269378>`,
    '8': `<a:8_:743108530315329608>`,
    '9': `<a:9_:743108529518542891>`}[d];
 }) 
}
  
    let count = 0 
  const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
  for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;

    var sessayı = count.toString().replace(/ /g, " ") 
var ts = sessayı.match(/([0-9])/g) 
sessayı = sessayı.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase() 

if(ts) { 
sessayı = sessayı.replace(/([0-9])/g, d => { 
return { 
    '0': `<a:0_:743108341445689475>`,
    '1': `<a:1_:743108339625361429>`,
    '2': `<a:2_:743108341462597708>`,
    '3': `<a:3_:743109727348588658>`,
    '4': `<a:4_:743108341487632425>`,                       
    '5': `<a:5_:743108341718450247>`,
    '6': `<a:6_:743108341810593822>`,
    '7': `<a:7_:743108528201269378>`,
    '8': `<a:8_:743108530315329608>`,
    '9': `<a:9_:743108529518542891>`}[d];
 }) 
}
  
  
  

  var toplamsayı = message.guild.members.cache.size.toString().replace(/ /g, " ") 
var ts = toplamsayı.match(/([0-9])/g) 
toplamsayı = toplamsayı.replace(/([a-zA-Z])/g, "Bilinmiyor").toLowerCase() 

if(ts) { 
toplamsayı = toplamsayı.replace(/([0-9])/g, d => { 
return { 
    '0': `<a:0_:743108341445689475>`,
    '1': `<a:1_:743108339625361429>`,
    '2': `<a:2_:743108341462597708>`,
    '3': `<a:3_:743109727348588658>`,
    '4': `<a:4_:743108341487632425>`,                       
    '5': `<a:5_:743108341718450247>`,
    '6': `<a:6_:743108341810593822>`,
    '7': `<a:7_:743108528201269378>`,
    '8': `<a:8_:743108530315329608>`,
    '9': `<a:9_:743108529518542891>`}[d];
 }) 
}
let bölge = {
            "us-central": "Amerika :flag_us:",
            "us-east": "Doğu Amerika :flag_us:",
            "us-south": "Güney Amerika :flag_us:",
            "us-west": "Batı Amerika :flag_us:",
            "eu-west": "Batı Avrupa :flag_eu:",
            "eu-central": "Avrupa :flag_eu:",
            "singapore": "Singapur :flag_sg:",
            "london": "Londra :flag_gb:",
            "japan": "Japonya :flag_jp:",
            "russia": "Rusya :flag_ru:",
            "hongkong": "Hong Kong :flag_hk:",
            "brazil": "Brezilya :flag_br:",
            "singapore": "Singapur :flag_sg:",
            "sydney": "Sidney :flag_au:",
            "southafrica": "Güney Afrika :flag_za:",
            "europe": "Avrupa :flag_eu:"
    }
if(bölge) {
  
const oç = new Discord.MessageEmbed()
.setTitle(`${message.guild.name} Adlı Sunucunun Bilgileri.`)
.setDescription(`**<a:alevtacc:726390324347404328> Sunucunun Kurucusu: <@${message.guild.owner.id}> \n Sunucu Sahibinin İD'Si: ${message.guild.owner.id} \n\n\n :bust_in_silhouette: Sunucudaki Kişi Sayısı: ${toplamsayı} \n <:sesli:743115452841984043> Seslideki Kişi Sayısı: ${sessayı} \n <:sesli:743115452841984043> Sesli Kanal Sayısı: ${seskanal} \n <:kanal:743121546574561383> Toplam Kanal Sayısı: ${metinkanal} \n <:katekori:743123865105858661> Toplam Kategori Sayısı: ${kate} \n :earth_asia: Sunucnun Bölgesi: ${bölge[message.guild.region]} \n <a:boooooost:715166983439646800> Sunucu Takviye(Boost) Seviyesi Sayısı: ${message.guild.premiumTier}/3 \n <a:boooooost:715166983439646800> Sunucu Takive(Boost) Sayısı: ${message.guild.premiumSubscriptionCount} \n\n\n <:domda:709739242594631690> Çevrimiçi : ${message.guild.members.cache.filter(o => o.presence.status === 'online').size} \n <:ris:719162225486594098> Rahatsız Etmeyin : ${message.guild.members.cache.filter(dnd => dnd.presence.status === 'dnd').size} \n <:domda5:709739242972250183> Boşta: ${message.guild.members.cache.filter(i => i.presence.status === 'idle').size} \n <:domda3:709739242972250124> Görünmez/Çevrimdışı : ${message.guild.members.cache.filter(off => off.presence.status === 'offline').size} \n <a:dcbc:715166983359954964> Botlar : ${botlar}**`)
  message.channel.send(oç)
}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucu-bilgi","sb"],
  permLevel: 0
};

exports.help = {
  name: 'sunucubilgi',
  description: "Bot Sahibine Özel Komut."
};