const Discord = require('discord.js');
const { stripIndents } = require('common-tags');
const db = require("quick.db")
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, params) => {

          let prefix =  ayarlar.prefix

 if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("Bu komudu kullanabilmek için `Yönetici` yetkisine sahip olman gerekli.")
  message.channel.send("Sunucu kurulum işlemini onaylıyorsanız `evet` eğer onaylamıyorsanız `hayır` olarak belirtiniz.").then(() => {
  
 const filter = m => m.author.id === message.author.id;
    message.channel.awaitMessages(filter, {
      max: 1,
      time: 10000
    }).then(collected => {
      if (collected.first().content === 'hayır') {
        return message.reply("İşlem iptal edildi.");
      }});
  
    message.channel.awaitMessages(filter, {
      max: 1,
      time: 15000
    }).then((collected) => {
      if (collected.first().content === 'evet') {
      message.guild.channels.cache.filter(u => {
        u.delete()
     })
                    let every = message.guild.roles.cache.find(r => r.name === '@everyone')

    message.author.send(`${message.author}, Merhaba! ben ${client.user.username} sunucu kurulum botuyum.*${message.guild.name}* adlı sunucuyu şuan kuruyorum.`)
                                message.guild.channels.create('Sunucu Hakkında', { type: 'category', reason: 'Bilgi Kanalları!' }).then(kategori => {

    message.guild.channels.create("📌 kurallar", "text").then(kurallar => {
                    kurallar.createOverwrite(every, {
        SEND_MESSAGES: false
      })
    message.guild.channels.create("📢duyurular", "text").then(duyurular => {
                          duyurular.createOverwrite(every, {
        SEND_MESSAGES: false
      })
      kurallar.setParent(kategori.id)  
      duyurular.setParent(kategori.id)  

  
                          message.guild.channels.create('Topluluk', { type: 'category', reason: 'Topluluk Kanalları!' }).then(kategor => {

  message.guild.channels.create("genel-sohbet", "text").then(sohbet => {
  message.guild.channels.create('medya', "text").then(medya => {
  message.guild.channels.create('bot-kullanım', "text").then(bot => {
    sohbet.setParent(kategor.id)
    medya.setParent(kategor.id)
    bot.setParent(kategor.id)
      
//codare
 
                      message.guild.channels.create('Ses Kanalları', { type: 'category', reason: 'Ses Kanalları!' }).then(kategori => {

  message.guild.channels.create("🔊 Genel Sohbet 1", { type: 'voice', reason: 'Bilgi kanalı!' }).then(emirhan => {
      message.guild.channels.create("🔊 Genel Sohbet 2", { type: 'voice', reason: 'Bilgi kanalı!' }).then(emirhan2 => {
  message.guild.channels.create("🔊 Genel Sohbet 3", { type: 'voice', reason: 'Bilgi kanalı!' }).then(codare3 => {
  message.guild.channels.create("🔊 Genel Sohbet 4", { type: 'voice', reason: 'Bilgi kanalı!' }).then(codare62 => {
      message.guild.channels.create("🔊 Genel Sohbet 5", { type: 'voice', reason: 'Bilgi kanalı!' }).then(emmmirrrhaaann=> {
  message.guild.channels.create('🔊 Müzik Odası 1', { type: 'voice', reason: 'Bilgi kanalı!' }).then(music => {
      message.guild.channels.create('🔊 Müzik Odası 2', { type: 'voice', reason: 'Bilgi kanalı!' }).then(musicc => {
  message.guild.channels.create('AFK Odası', { type: 'voice', reason: 'Bilgi kanalı!' }).then(afkk => {
    emirhan.setParent(kategori.id)  
        emirhan2.setParent(kategori.id)  
    codare3.setParent(kategori.id)  
    codare62.setParent(kategori.id)  
    emmmirrrhaaann.setParent(kategori.id)  
    music.setParent(kategori.id)  
        musicc.setParent(kategori.id)  
    afkk.setParent(kategori.id)

     
})
})//codarev12

})
})//codarev12

})
})
})
})
})//codarev12

})
})//codarev12

})
})
})//codarev12

})

//codarev12//codarev12


      })

}})})
                    .catch(error => {
                    message.channel.send(`Bir hata oluştu Lütfen Destek Sunucusuna Gelip Bunu Bize Bildir!`);
                    console.error('Hata:', error);
                });

//codarev12

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hazırsunucu','hazır-sunucu','sunucu-kur'],
  permLevel: 0
};
//codarev12
exports.help = {
  name: 'sunucukur',
  description: 'Basit bir sunucu kurar.',
  usage: 'sunucukur'
};//codarev12

