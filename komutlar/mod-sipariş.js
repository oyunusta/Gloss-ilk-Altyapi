const Discord = require('discord.js');
const db = require("quick.db");
const a = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  let p = a.prefix
  if (!args[0]) return message.channel.send("📛 | **Parametreler eksik!: `yap`, `sıfırla`, `ayarla`**").then(m => m.delete(10000))
  if (args[0] === "ayarla") {
    if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("**Bu komut için `sunucuyu yönet` izni gerekli!**").then(m => m.delete(10000))
    if (!args[1]) return message.channel.send(new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.avatarURL)
.setColor("RANDOM")
.addField("**Ayarlama komutları**", `${p}sipariş ayarla kanal \`#kanaletiketi\` = **Log kanalını ayarlar.**\n${p}sipariş ayarla soru-1 \`sorulacak 1.soru\` = **Sorulacak 1. soruyu ayarlar.**\n${p}sipariş ayarla soru-2 \`sorulacak 2.soru\` = **Sorulacak 2. soruyu ayarlar.**\n${p}sipariş ayarla soru-3 \`sorulacak 3.soru\` = **Sorulacak 3. soruyu ayarlar.**\n${p}sipariş ayarla soru-4 \`sorulacak 4.soru\` = **Sorulacak 4. soruyu ayarlar.**`)
.addField("**Sıfırlama komutları**", `${p}sipariş sıfırla <hepsi> = **Soruların/kanalların hepsini sıfırlar.**\n${p}sipariş sıfırla kanal = **Ayarlanan kanalı sıfırlar.**\n${p}sipariş sıfırla soru-1 = **Ayarlanan 1. soruyu sıfırlar.**\n${p}sipariş sıfırla soru-2 = **Ayarlanan 2. soruyu sıfırlar.**\n${p}sipariş sıfırla soru-3 = **Ayarlanan 3. soruyu sıfırlar.**\n${p}sipariş sıfırla soru-4 = **Ayarlanan 4. soruyu sıfırlar.**\n${p}sipariş sıfırla kanal = **Ayarlanan kanalı sıfırlar.**`)
.addField("__**NOT 1 **__", "Ayarları sıfırlarken yazdığınız değerleri tekrar yazmaya gerek yoktur.\nÖrneğin **"+p+"sipariş sıfırla kanal** yazarken kanalı etiketlemeye gerek yoktur.")
.addField("__**NOT 2 **__", `Eğer bütün herşey ayarlandıysa kullanıcı \`${p}sipariş yap\` yazdığında sorular sorulmaya başlanacaktır.`))
    if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("**Bu komut için `sunucuyu yönet` izni gerekli!**").then(m => m.delete(10000))
    if (args[1] === "kanal") {
     let ayarlıkanal = message.mentions.channels.first();
    if (!ayarlıkanal) return message.channel.send("📛 | **Siparişlerin gönderileceği kanalı belirlemek için bir kanal etiketlenmeli!**").then(m => m.delete(10000))
      message.channel.send(`✅ | **Sipariş kanalı başarıyla <#${ayarlıkanal.id}> olarak ayarlandı!**`).then(m => m.delete(10000))
       await db.set(`sipariskanal_${message.guild.id}`, ayarlıkanal.id)}
    if (args[1] === "soru-1") {
    let soru1 = args.slice(2).join(" ");
      if (!soru1) return message.channel.send("📛 | **1. Soruyu yaz!**").then(m => m.delete(10000))
      await db.set(`soru1siparis_${message.guild.id}`, `${soru1}`)
      message.channel.send("✅ | **Başarılı!**").then(m => m.delete(10000))}
    if (args[1] === "soru-2"){
    let soru2 = args.slice(2).join(" ");
      if (!soru2) return message.channel.send("📛 | **2. Soruyu yaz!**").then(m => m.delete(10000))
      await db.set(`soru2siparis_${message.guild.id}`, `${soru2}`)
      message.channel.send("✅ | **Başarılı!**").then(m => m.delete(10000))}
    if (args[1] === "soru-3"){
    let soru3 = args.slice(2).join(" ");
      if (!soru3) return message.channel.send("📛 | **3. Soruyu yaz!**").then(m => m.delete(10000))
      await db.set(`soru3siparis_${message.guild.id}`, `${soru3}`)
      message.channel.send("✅ | **Başarılı!**").then(m => m.delete(10000))}
    if (args[1] === "soru-4"){
    let soru4 = args.slice(2).join(" ");
      if (!soru4) return message.channel.send("📛 | **4. Soruyu yaz!**").then(m => m.delete(10000))
      await db.set(`soru4siparis_${message.guild.id}`, `${soru4}`)
      message.channel.send("✅ | **Başarılı!**").then(m => m.delete(10000))}}
  if (args[0] === "sıfırla") {
    if (!args[1]) return message.channel.send(new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.avatarURL)
.setColor("RANDOM")
.addField("**Ayarlama komutları**", `${p}sipariş ayarla kanal \`#kanaletiketi\` = **Log kanalını ayarlar.**\n${p}sipariş ayarla soru-1 \`sorulacak 1.soru\` = **Sorulacak 1. soruyu ayarlar.**\n${p}sipariş ayarla soru-2 \`sorulacak 2.soru\` = **Sorulacak 2. soruyu ayarlar.**\n${p}sipariş ayarla soru-3 \`sorulacak 3.soru\` = **Sorulacak 3. soruyu ayarlar.**\n${p}sipariş ayarla soru-4 \`sorulacak 4.soru\` = **Sorulacak 4. soruyu ayarlar.**`)
.addField("**Sıfırlama komutları**", `${p}sipariş sıfırla <hepsi> = **Soruların/kanalların hepsini sıfırlar.**\n${p}sipariş sıfırla kanal = **Ayarlanan kanalı sıfırlar.**\n${p}sipariş sıfırla soru-1 = **Ayarlanan 1. soruyu sıfırlar.**\n${p}sipariş sıfırla soru-2 = **Ayarlanan 2. soruyu sıfırlar.**\n${p}sipariş sıfırla soru-3 = **Ayarlanan 3. soruyu sıfırlar.**\n${p}sipariş sıfırla soru-4 = **Ayarlanan 4. soruyu sıfırlar.**\n${p}sipariş sıfırla kanal = **Ayarlanan kanalı sıfırlar.**`)
.addField("__**NOT 1 **__", "Ayarları sıfırlarken yazdığınız değerleri tekrar yazmaya gerek yoktur.\nÖrneğin **"+p+"sipariş sıfırla kanal** yazarken kanalı etiketlemeye gerek yoktur.")
.addField("__**NOT 2 **__", `Eğer bütün herşey ayarlandıysa kullanıcı \`${p}sipariş yap\` yazdığında sorular sorulmaya başlanacaktır.`))
    if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("**Bu komut için `sunucuyu yönet` izni gerekli!**").then(m => m.delete(10000))
    if (args[1] === "hepsi"){
      await db.delete(`sipariskanal_${message.guild.id}`)
      await db.delete(`soru1siparis_${message.guild.id}`)
      await db.delete(`soru2siparis_${message.guild.id}`)
      await db.delete(`soru3siparis_${message.guild.id}`)
      await db.delete(`soru4siparis_${message.guild.id}`)
      message.channel.send("✅ | **Başarılı!**").then(m => m.delete(10000))}
    if (args[1] === "kanal"){
    await db.delete(`sipariskanal_${message.guild.id}`)
      message.channel.send("**✅ | Başarılı!**").then(m => m.delete(10000))}
    if (args[1] === "soru-1"){
    await db.delete(`soru1siparis_${message.guild.id}`)
       message.channel.send("**✅ | Başarılı!**").then(m => m.delete(10000))}
    if (args[1] === "soru-2"){
    await db.delete(`soru2siparis_${message.guild.id}`)
     message.channel.send("**✅ | Başarılı!**").then(m => m.delete(10000))}
    if (args[1] === "soru-3"){
    await db.delete(`soru3siparis_${message.guild.id}`)
     message.channel.send("**✅ | Başarılı!**").then(m => m.delete(10000))}
    if (args[1] === "soru-4"){
    await db.delete(`soru4siparis_${message.guild.id}`)
   message.channel.send("**✅ | Başarılı!**").then(m => m.delete(10000))}}
  if (args[0] === "yap") { 
   let kanall = await db.fetch(`sipariskanal_${message.guild.id}`)
   let soru1asil = await db.fetch(`soru1siparis_${message.guild.id}`)
   let soru2asil = await db.fetch(`soru2siparis_${message.guild.id}`) 
   let soru3asil = await db.fetch(`soru3siparis_${message.guild.id}`) 
   let soru4asil = await db.fetch(`soru4siparis_${message.guild.id}`)
   if (!kanall && !soru1asil && !soru2asil && !soru3asil && !soru4asil) return message.channel.send(`📛 | **Sipariş parametrelerinden herhangi biri ayarlanmamış. Hemen ayarlamak için \`${p}sipariş ayarla\` yaz!**`)
  let filtre = mes => mes.author.id === message.author.id;
  let embed = new Discord.MessageEmbed()
  .setTitle("Soruları Cevaplamak İçin Verilen Süre: 30 Saniye!")
    .addField(`**${soru1asil}**`, "Cevap Bekleniyor...")
    .setColor("#ffff18")
  let abc = await message.channel.send(embed)
  message.channel.awaitMessages(filtre, {max: 1,time: 30000}).then(async(cevap1) => {
  let kim3rtd = cevap1.first().content;
    if (kim3rtd === "iptal") return message.channel.send("✅ | **İşlem İptal Edildi!**").then(sa => abc.delete(50))
    let embed1 = new Discord.MessageEmbed()
     .setTitle("Soruları Cevaplamak İçin Verilen Süre: 30 Saniye!")
    .addField(`**${soru1asil}**`, `${kim3rtd}`)
    .addField(`**${soru2asil}**`, "Cevap Bekleniyor...")
    .setColor("#ffff18")
    abc.edit(embed1)
    message.channel.awaitMessages(filtre, {max: 1,time: 30000}).then(async(cevap2) => {
    let kid2 = cevap2.first().content;
      if (kid2 === "iptal") return message.channel.send("✅ | **İşlem İptal Edildi!**").then(() => abc.delete(50))
    let embed2 = new Discord.MessageEmbed()
    .setTitle("Soruları Cevaplamak İçin Verilen Süre: 30 Saniye!")
    .addField(`**${soru1asil}**`, `${kim3rtd}`)
    .addField(`**${soru2asil}**`, `${kid2}`)
    .addField(`**${soru3asil}**`, "Cevap Bekleniyor...")
    .setColor("#ffff18")
      abc.edit(embed2) 
       message.channel.awaitMessages(filtre, {max: 1,time: 30000}).then(async(cevap3) => {
    let kid3 = cevap3.first().content; 
if (kid3 === "iptal") return message.channel.send("✅ | **İşlem İptal Edildi!**").then(() => abc.delete(50))
    let embed3 = new Discord.MessageEmbed()
    .setTitle("Soruları Cevaplamak İçin Verilen Süre: 30 Saniye!")
    .addField(`**${soru1asil}**`, `${kim3rtd}`)
    .addField(`**${soru2asil}**`, `${kid2}`)
    .addField(`**${soru3asil}**`, `${kid3}`)
    .addField(`**${soru4asil}**`, "Cevap Bekleniyor...")
    .setColor("#ffff18")
      abc.edit(embed3)
         message.channel.awaitMessages(filtre, {max: 1,time: 30000}).then(async(cevap4) => {
    let km3rtid4 = cevap4.first().content;
      if (km3rtid4 === "iptal") return message.channel.send("✅ | **İşlem İptal Edildi!**").then(() => abc.delete(50))
    let embed4 = new Discord.MessageEmbed()
    .addField(`**${soru1asil}**`, `${kim3rtd}`)
    .addField(`**${soru2asil}**`, `${kid2}`)
    .addField(`**${soru3asil}**`, `${kid3}`)
    .addField(`**${soru4asil}**`, `${km3rtid4}`)
    .setAuthor(`${message.author.tag} Kullanıcısından Bir Sipariş!`, message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .setColor("#ffff18")
      await abc.edit(embed4)
           client.channels.cache.get(kanall).send(embed4)
           abc.delete();
           let mesajlar = cevap1.first().content + cevap2.first().content + cevap3.first().content + cevap4.first().content
           message.author.send("**Verdiğin Cevapların Logları Burada!**")
          message.author.send(embed4)
.catch(err => {message.channel.send("📛 | **Mesaja Verilen Süre İçinde Cevap Verilmedi!**").then(r => r.delete(10000)
 )})})})})})}}
exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'sipariş', 
  description: '(Gelişmiş) sipariş komutu. Herşeyi ayarlanabilir.',
  usage: 'sipariş yap&ayarla&sıfırla' 
}; 