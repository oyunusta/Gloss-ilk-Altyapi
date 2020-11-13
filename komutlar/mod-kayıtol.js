const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args, member) => {
  let sistem = db.fetch(`kayitsistem_${message.guild.id}`)
let kanal = db.fetch(`kanalkayit_${message.guild.id}`)
let verr = db.fetch(`verkayit_${message.guild.id}`)
let user = message.mentions.users.first()
  let isim = args[0]
  let yas = args[1]
  if(kanal) {
  let kaid = kanal.id
 
    
if(!sistem || sistem == null || sistem == undefined || sistem == 'kapat') return;
  if(message.channel.id !== kaid) return message.channel.send('Sadece Kayıt Kanalından Kayıt Olabilirsiniz.')

  let verrt = message.guild.roles.cache.get(verr)

  if(!isim) return message.channel.send('Seni Kayıt Etmem İçin Bir İsim Girmelisin : `g!kayıtol Mert 18`')
if(!yas) return message.channel.send('Yaş İçin En Az 1 Basamak Belirtebilirsin. Örnek: `g!kayıtol Mert 18`')
  if(yas.length >= 3) return message.channel.send('Yaş İçin En Fazla 2 Basamak Belirtebilirsin. Örnek: `g!kayıtol Mert 18`')
  if(isNaN(yas)) return message.channel.send('Yaş İçin Sayı Girmelisin. Örnek: `g!kayıtol Mert 18`')
  
  
  message.member.setNickname(`${isim} | ${yas}`)
  message.channel.send(`:scroll: <@${message.author.id}> Kaydınız Oluşturuldu.`)
  setTimeout(() => {
   message.member.roles.add(verrt)
}, 3000); 
message.member.roles.cache.forEach(onlycode => {
message.member.roles.remove(onlycode)

  })
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıt-ol'],
  permLevel: 0
};

exports.help = {
  name: 'kayıtol',
  usage: 'kayıt',
  description: 'kayıt eder'
};