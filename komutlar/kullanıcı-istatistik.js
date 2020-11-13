const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
const db = require("quick.db");
let cpuStat = require("cpu-stat");
const { stripIndents } = require("common-tags");
require("moment-duration-format");

exports.run = async (bot, message, args, client, size) => {
     let iyi = bot.guilds.cache.get("706474969810599976").emojis.cache.find(emoji => emoji.name === 'domda2');
      let kotu = bot.guilds.cache.get("706474969810599976").emojis.cache.find(emoji => emoji.name === 'domda');
       let durum = ""
    if(700 > bot.ws.ping) {
      durum = `(${kotu})`
    }else{
      durum = `(${iyi})`
    }
    let x = Date.now() - message.createdTimestamp
    let d = ""
    if(700 > x) {
      d = `(${kotu})`
    }else{
      d = `(${iyi})`
    }
  
  var osType = await os.type();

  if (osType === "Darwin") osType = "macOS";
  else if (osType === "Windows") osType = "Windows";
  else osType = os.type();

  var osBit = await os.arch();

  if (osBit === "x64") osBit = "64 Bit";
  else if (osBit === "x86") osBit = "32 Bit";
  else osBit = os.arch();

  let cpuLol;
  cpuStat.usagePercent(function(err, percent, seconds) {
    if (err) {
      return console.log(err);
    }
    const duration = moment
      .duration(bot.uptime)
      .format("D [Gün], H [Saat], m [Dakika], s [Saniye]");
    const embed = new Discord.MessageEmbed()
      .setTitle("Gloss Bot İstatistikleri")
      .addField(
        "<:komut:715533434197508097> **Bottaki Komut Sayısı**",
        bot.commands.size
      )
      .addField(
        "**:alarm_clock: Çalışma Süresi**",
        `**Sistem ${duration} Zamandır Hizmette**`
      )
  
      .addField(
        "**:bookmark: Botun Hizmet Verdiği Sunucu Sayısı**",
        `**${bot.guilds.cache.size} Adet Sunucuya Hizmet Veriyor**`
      )
      .addField(
        "<:kullanc:715533434067353621> **Botun Hizmet Verdiği Kullanıcı Sayısı**",
        `**${bot.guilds.cache
          .reduce((a, b) => a + b.memberCount, 0)
          .toLocaleString()} Adet Kullanıcıya Hizmet Veriyor**`
      )
    .addField(
        ":bust_in_silhouette: **Aktif Olan Kullanıcılar**",
        `**${bot.users.cache.size} Adet Kullanıcı**`
      )
      .addField("**:cd: Discord.js Sürümü**", `${Discord.version}`)
      .addField(
        "<:nodejs:715910129299619891> **Node.js Sürümü**",
        `${process.version}`
      )
      .addField(
        "**:floppy_disk: Botun Kullandığı Ram**",
        `${(process.memoryUsage().rss / 8096 / 8096).toFixed(2)}`
      )
      .addField("<:islemci:715533434440908823> **Bit**", `${osBit}`)
      .addField(
        "<:isletim:715533434675789864> **İşletim Sistemi**",
        `Windows 10 Pro`
      )
      .addField(
        "<:Bakim:708395203102376000> **quick.db Versionu**",
        `${db.version}`
      )
.addField(
        "<a:677915431683620879:708395200430735380> **Pingim** / **Gecikme**",
        `${bot.ws.ping}'ms ${durum} / ${x}'ms ${d}`
      )

      .addField(
        "<:islemcii:716187916354715688> **CPU**",
        `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``
      )

      .setColor("PURPLE")
    .setImage("https://images-ext-1.discordapp.net/external/Bb032GyJs8yCJiUy7tWQ-YnNRPreLuPDo-xp66eOIeU/https/images-ext-2.discordapp.net/external/H1PQhcDr-EaEvwENT8cUxj8S2yonFZl351YbXXH5sGs/https/media.discordapp.net/attachments/697145772801785876/716671769355747348/1.gif");
    message.channel.send(embed);
  });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i", "İ"],
  permLevel: 0,
  kategori: "bot"
};

exports.help = {
  name: "istatistik",
  description: "Botun istatistiklerini gösterir.",
  usage: "istatistik"
};
