﻿const fs = require('fs');
const db = require('quick.db')
const wiodb = require('wio.db')
const ms2 = require('parse-ms')
const ms = require("ms")
const Canvas = require('canvas')
const ayarlar = require('./ayarlar.json');
require('./invite.js')
require('events').EventEmitter.prototype._maxListeners = 70;
require('events').defaultMaxListeners = 70;
  process.on('warning', function (err) {
    if ( 'MaxListenersExceededWarning' == err.name ) {
    process.exit(1); 

    }
  });
function foo() {
  return new Promise((resolve, reject) => {
  return resolve();
});
}
async function foobar() {
foobar();
foo().then(() => {}).catch(() => {});
foobar().catch(console.error);
}

var prefix = ayarlar.prefix

const Discord = require("discord.js");
const client = new Discord.Client({ partials: ['MESSAGE', 'REACTION']});
Discord.Role.prototype.toString = function() {
return `@${this.name}`
}
const log = message => {
  console.log(` ${message}`);
};
require('./util/eventLoader.js')(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
         reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};



client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
   if (ayarlar.sahip.includes(message.author.id)) permlvl = 4;
    return permlvl;
};

client.login(ayarlar.token).then(
  function() {
    console.log("[Token-Log] Token doğru bir şekilde çalışıyor.");
  },
  function(err) {
    console.log("[ERROR] Token'de bir hata oluştu: " + err);
    setInterval(function() {
      process.exit(0);
    }, 20000);
  }
);


client.on("message", async message => {
  
  if(message.author.bot) return;
  if(!message.guild) return;
  if(message.content.includes(`${prefix}afk`)) return;
  
  if(await db.fetch(`afk_${message.author.id}`)) {
    db.delete(`afk_${message.author.id}`);
    db.delete(`afk_süre_${message.author.id}`);
    message.reply("AFK Modundan Çıktınız!");
    message.member.setNickname(`${message.author.username}`)
  }
  
  var USER = message.mentions.users.first();
  if(!USER) return;
  var REASON = await db.fetch(`afk_${USER.id}`);
  
  if(REASON) {
    let süre = await db.fetch(`afk_süre_${USER.id}`);
    let timeObj = ms2(Date.now() - süre);
    const embed = new Discord.MessageEmbed()
    .setDescription(`
╔▬▬▬▬▬▬▬ <a:alevtacc:726390324347404328> ▬▬▬▬▬▬▬▬▬
║<a:sagokk:726382567799914516> ${USER} Adlı Kullanıcı AFK
║<a:sagokk:726382567799914516> AFK Olma Süresi : **${timeObj.hours} Saat ${timeObj.minutes} Dakika ${timeObj.seconds} Saniye**
║<a:sagokk:726382567799914516> AFK Olma Sebebi : ${REASON}
╚▬▬▬▬▬▬▬ <a:alevtacc:726390324347404328> ▬▬▬▬▬▬▬▬▬
`)
    message.channel.send(embed)
  }
});

client.on("guildMemberAdd", async member => {
  if (!member.guild) return
if (db.has(`antiraid_${member.guild.id}`) === false) return;
if (member.user.bot === false) return;
if (db.has(`botizin_${member.id}`) === true) return;
let antikanal = db.fetch(`antiraid_${member.guild.id}`)
member.kick(member)
  if(antikanal) {
    var embed = new Discord.MessageEmbed()
.setDescription(`**Sunucuya Bir Bot Eklendi Anti Raid Sistemi Aktif Olduğundan Bot Atıldı. Botu Sunucuya Sokmak İçin g!botizni botunid**`)
  member.guild.channels.cache.get(antikanal).send(embed) 
  }
})

client.on('guildMemberAdd', async member => {
let sayaç = db.fetch(`onlycode.sayaç_${member.guild.id}`)
let sayaçk = db.fetch(`onlycode.sayaçk_${member.guild.id}`)
if(!sayaç) return;
if(!sayaçk) return;
if(member.guild.memberCount >= sayaç) {

client.channels.cache.get(sayaçk).send(`Tebrikler! Sunucunuz başarıyla ayarlanmış olan \`${sayaç}\` kişiye ulaştı. Sayaç sistemi sıfırlandı.`)
db.delete(`onlycode.sayaç_${member.guild.id}`)
db.delete(`onlycode.sayaçk_${member.guild.id}`)
} else {
client.channels.cache.get(sayaçk).send(`╔▬▬▬▬▬▬▬ <a:alevtacc:726390324347404328> ▬▬▬▬▬▬▬▬▬
║<a:sagokk:726382567799914516> Sunucuya Katıldı **${member}**
║<a:sagokk:726382567799914516> **${sayaç}** Kişi Olmamıza **${sayaç - member.guild.memberCount}** Kişi Kaldı
║<a:sagokk:726382567799914516> Seninle Beraber **${member.guild.memberCount}** Kişiyiz !
╚▬▬▬▬▬▬▬ <a:alevtacc:726390324347404328> ▬▬▬▬▬▬▬▬▬`)


}
})

client.on('guildMemberRemove', async member => {
let sayaç = db.fetch(`onlycode.sayaç_${member.guild.id}`)
let sayaçk = db.fetch(`onlycode.sayaçk_${member.guild.id}`)
if(!sayaç) return;
if(!sayaçk) return;
if(member.guild.memberCount >= sayaç) {

client.channels.get(sayaçk).send(`Tebrikler! Sunucunuz başarıyla ayarlanmış olan \`${sayaç}\` kişiye ulaştı. Sayaç sistemi sıfırlandı.`)
db.delete(`onlycode.sayaç_${member.guild.id}`)
db.delete(`onlycode.sayaçk_${member.guild.id}`)
} else {
   
client.channels.cache.get(sayaçk).send(`╔▬▬▬▬▬▬▬ <a:alevtacc:726390324347404328> ▬▬▬▬▬▬▬▬▬
║<a:sagokk:726382567799914516> Sunucudan Ayrıldı **${member}**
║<a:sagokk:726382567799914516> **${sayaç}** Kişi Olmamıza **${sayaç - member.guild.memberCount}** Kişi Kaldı
║<a:sagokk:726382567799914516> Toplam **${member.guild.memberCount}** Kişiyiz !
╚▬▬▬▬▬▬▬ <a:alevtacc:726390324347404328> ▬▬▬▬▬▬▬▬▬`)
}


})

client.on("guildMemberAdd", async member => {
  let kanal = await db.fetch(`otorolkanal_${member.guild.id}`);

  let rol = await db.fetch(`otorol_${member.guild.id}`);
  if (!kanal) return;
  if (!rol) return;
  client.channels.cache.get(kanal).send(`╔▬▬▬▬▬▬▬ <a:alevtacc:726390324347404328> ▬▬▬▬▬▬▬▬▬
║<a:sagokk:726382567799914516> Sunucuya Hoşgeldin **${member}**
║<a:sagokk:726382567799914516> Otomatik Rolün Verildi
║<a:sagokk:726382567799914516> Seninle Beraber **${member.guild.memberCount}** Kişiyiz !
╚▬▬▬▬▬▬▬ <a:alevtacc:726390324347404328> ▬▬▬▬▬▬▬▬▬`)
  
  member.roles.add(rol)
});

client.on("message", async msg => {
   if(!msg.guild) return
  let saas = await db.fetch(`saas_${msg.guild.id}`);
  if (saas == 'kapalii') return;
  if (saas == 'aciki') {
  if (msg.content.toLowerCase() === 'sa') {
    msg.channel.send(`Aleyküm Selam Hoşgeldin. ${msg.author} <a:577677056876347403:708395193484968038>`);
    await msg.react('🇦');
    await msg.react('🇸');
  }
  }
});

client.on('messageDelete', async message => {
db.set(`onlycode.silinenmesaj_${message.channel.id}`, { kanal: message.channel.id, mesaj: message.content, sahip: message.author.id, tarih: message.createdAt })
})


client.on('ready', async () => {
  
      function destructMS(milli) {
        if (isNaN(milli) || milli < 0) {
          return null;
        }
      
        var d, h, m, s;
        s = Math.floor(milli / 1000);
        m = Math.floor(s / 60);
        s = s % 60;
        h = Math.floor(m / 60);
        m = m % 60;
        d = Math.floor(h / 24);
        h = h % 24;
        var yazi;
        if (d !== 0) yazi = `${d} gün`;
        if (h !== 0 && yazi) yazi = yazi + `, ${h} saat`;
        if (h !== 0 && !yazi) yazi = `${h} saat`;
        if (m !== 0 && yazi) yazi = yazi + `, ${m} dakika`;
        if (m !== 0 && !yazi) yazi = `${m} dakika`;
        if (s !== 0 && yazi) yazi = yazi + `, ${s} saniye`;
        if (s !== 0 && !yazi) yazi = `${s} saniye`;
        if (yazi) return yazi;
        if (!yazi) return `1 saniye`;
      };
  
      function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
}
  
      function cekme(message, array) {
      var eskikazananlar = db.fetch(`cekilis_${message.id}.kazananlar`) || []
      var cekilenkisi = array[Math.floor(Math.random() * array.length)]
      if (!client.users.cache.get(cekilenkisi.id)) {
        return cekme(message, array)
      }
      while (eskikazananlar.includes(cekilenkisi.id)) {
        return cekme(message, array)
      }
      if (!eskikazananlar.includes(cekilenkisi.id)) {
        if (db.has(`cekilis_${message.id}.kazananlar`)) {
          db.push(`cekilis_${message.id}.kazananlar`, cekilenkisi.id)
        }else{
          db.set(`cekilis_${message.id}.kazananlar`, [cekilenkisi.id])
        }
      }
    }
  
  let dasall = db.all().filter(i => i.ID.startsWith('cekilis_'))
  for (const ii of dasall) {
    const channel = client.channels.cache.get(db.fetch(`${ii.ID}.mesaj.kanal`))
    const mesaj = db.fetch(`${ii.ID}.mesaj.id`)
    const bitecegizamanms = db.fetch(`${ii.ID}.bitecek`)
    const kazanacak = db.fetch(`${ii.ID}.kazanacak`)
    const verilecek = db.fetch(`${ii.ID}.verilecek`)
    const cekilisid = db.fetch(`${ii.ID}.cekilisid`)
    let embed = new Discord.MessageEmbed()
    .setAuthor('🎉 Çekiliş 🎉')
    .setTitle('**' + verilecek + '**')
    .setDescription(`Aşağıdaki 🎉 emojisine tıklayarak çekilişe katılabilirsiniz!\n**Kalan süre:** Bekleniyor...`)
    .setFooter(`${kazanacak} kazanan | ID: ${cekilisid} | Bitecek:`)
    .setTimestamp(bitecegizamanms)
    .setColor("#2F3136")
    if(channel) {
channel.messages.fetch(mesaj).then(async msg => {
  msg.edit(embed)
  const reaction = msg.reactions.cache.first()
                const intervaley = setInterval(async function(){
                if (!db.has(ii.ID)) return clearInterval(intervaley)
                const kalanzaman = bitecegizamanms - Date.now()   
                if (kalanzaman <= 0) {
                  embed.setDescription(`Çekiliyor...`)
                  msg.edit(embed)
                  clearInterval(intervaley)
                  reaction.users.fetch().then(async kasiler => {
                    const gercekkisisayisi = kasiler.size - 1
                    if (gercekkisisayisi < kazanacak) {
                        let embed = new Discord.MessageEmbed()
                        .setAuthor('🎉 Çekiliş Bitti 🎉')
                        .setTitle('**' + verilecek + '**')
                        .setDescription(`Yeterli katılım olmadığından kazanan seçilemedi.`)
                        .setFooter(`${kazanacak} kazanan | Çağan#0552 Tarafından Sağlanmıştır | ID: ${cekilisid} | Bitti:`)
                        .setTimestamp(bitecegizamanms)
                        .setColor("#2F3136")
                        msg.edit(embed)
                        msg.reactions.removeAll()
                        db.delete(`cekilis_${msg.id}`)
                        let thall = db.all().filter(i => i.ID.includes(msg.id))
                        for (const uu of thall) {
                          db.delete(uu.ID)
                        }
                    }else{
                        var array = reaction.users.cache.array()
                        var ukuk;
                        for (ukuk = 0; ukuk < kazanacak; ukuk++) {
                          cekme(msg, array)
                        }
                      await sleep(50)
                        let kazananherkes = db.fetch(`cekilis_${msg.id}.kazananlar`)
                            let embed = new Discord.MessageEmbed()
                            .setAuthor('🎉 Çekiliş Bitti 🎉')
                            .setTitle('**' + verilecek + '**')
                            .setDescription(`**Kazananlar:** <@${kazananherkes.join('>, <@')}>`)
                            .setFooter(`${kazanacak} kazanan | Çağan#0552 Tarafından Sağlanmıştır | ID: ${cekilisid} | Bitti:`)
                            .setTimestamp(bitecegizamanms)
                            .setColor("#2F3136")
                            msg.edit(embed)
                            msg.channel.send(`**Tebrikler** <@${kazananherkes.join('>, <@')}>! **\`${verilecek}\` çekilişini kazandınız!**`)
                            db.set(`cekilisidsi_${cekilisid}.kazananlar`, kazananherkes)
                            db.delete(`cekilis_${msg.id}`)
                            let theall = db.all().filter(i => i.ID.includes(msg.id))
                            for (const ua of theall) {
                              db.delete(ua.ID)
                            }
                    }
                  })
                }else{
                const kalanzamanyazi = destructMS(kalanzaman)
                embed.setDescription(`Aşağıdaki 🎉 emojisine tıklayarak çekilişe katılabilirsiniz!\n**Kalan süre:** ${kalanzamanyazi}`)
                msg.edit(embed)
                }
            }, 5000)
         })
    }
  }
})

const AntiSpam = require("./spamkorumasi.js");
const cooldown = new Set();

client.on("message", async msg => {
    if(!msg.guild) return;


    let spamkorumasi = await db.fetch(`spamkorumasi_${msg.guild.id}`);
    if (spamkorumasi == 'kapali') return;
    if (spamkorumasi == 'acik') {
        if (client.user.id == msg.author.id) return;
  AntiSpam(client, msg);
  if (cooldown.has(msg.author.id)) {
    return;
}
 
    }
  });

client.on("message", async msg => {
  const request = require("node-superfetch");
  const db = require("quick.db");
  const ms2 = require("parse-ms");
  let timeout = ms("10m"); //süresini dilediğiniz gibi kısaltabilirsiniz.
  let dakdest = ms("1m");
  let i = db.fetch(`üyelikk_${msg.author.id}`);
  if (db.has(`üyelikk_${msg.author.id}`) == true) {
    if (dakdest !== null && timeout - (Date.now() - dakdest) > 0) {
      let time = ms2(timeout - (Date.now() - dakdest));
    } else {
      if (msg.author.bot) return;
if (msg.content.length > 60) {
      
        var embed = new Discord.MessageEmbed()
          .setAuthor(`Gloss Premium`,`${msg.author.avatarURL()}`)
          .setDescription(`Hizzaya Geçin! Burada Bir Gold Üye Belirdi! <@${msg.author.id}>`)
          .setColor("GOLD");
       msg.channel.send(embed).then(message => {
          message.delete({timeout: 4000});
       })
      }
    }
       
  } else if (i == undefined) {
  }
  if (!i) return;
});

client.on('guildDelete', guild => {

let rrrsembed = new Discord.MessageEmbed()

.setColor("RED")
.setTitle(" Bot Kickledi ")
.addField("Sunucu Adı:", guild.name)
.addField("Sunucu sahibi", guild.owner)
.addField("Sunucudaki Kişi Sayısı:", guild.memberCount)

   client.channels.cache.get('731936389578358802').send(rrrsembed);
  
});


client.on('guildCreate', guild => {

let rrrsembed = new Discord.MessageEmbed()

.setColor("GREEN")
.setTitle(" Bot Eklendi ")
.addField("Sunucu Adı:", guild.name)
.addField("Sunucu sahibi", guild.owner)
.addField("Sunucudaki Kişi Sayısı:", guild.memberCount)

   client.channels.cache.get('731936389578358802').send(rrrsembed);
  
});


client.on('guildMemberAdd', async member => {
  const ch = await db.fetch(`hgbbKanalResim_${member.guild.id}`)
  if(!ch || ch == null ) return
  const kanal = member.guild.channels.cache.get(ch)
  const canvas =  Canvas.createCanvas(1980,1080)
  const ctx =  canvas.getContext('2d')
  const userImage = await Canvas.loadImage(member.user.displayAvatarURL({format:'jpg',size:4096}))
  const bg = await Canvas.loadImage('https://cdn.discordapp.com/attachments/722966636558286899/729969400777539644/1594108611372.jpg')
  const door = await Canvas.loadImage('https://cdn.glitch.com/16c1f2c8-0b25-4605-89ff-c86675c38573%2F1594111765064.png?v=1594111792947')
  ctx.drawImage(bg,0,0,canvas.width,canvas.height)
  ctx.drawImage(door,0,915,150,150)
  ctx.font = '100px Candara'
  ctx.fillStyle ="#F0F8FF"
  ctx.textAlign ='center'
  ctx.fillText(member.user.username,1000,780)
  ctx.fillText('Sunucumuza Hoşgeldin.',1000,950)
  ctx.lineWidth = 10
  ctx.beginPath()
  ctx.shadowColor='black'
  ctx.shadowBlur =100
  ctx.arc(1020,350,270,0,Math.PI*2,true)
  ctx.closePath()
  ctx.stroke()
  ctx.clip()
  ctx.drawImage(userImage,725,55,590,590)
  const attachment = new Discord.MessageAttachment(canvas.toBuffer(),'hoşgeldin.png')
  if(!kanal)return;
  kanal.send(attachment)
  })
client.on('guildMemberRemove', async member => {
  const ch = await db.fetch(`hgbbKanalResim_${member.guild.id}`)
  if(!ch || ch == null ) return
  const kanal = member.guild.channels.cache.get(ch)
  const canvas =  Canvas.createCanvas(1980,1080)
  const ctx =  canvas.getContext('2d')
  const userImage = await Canvas.loadImage(member.user.displayAvatarURL({format:'jpg',size:4096}))
  const bg = await Canvas.loadImage('https://cdn.discordapp.com/attachments/722966636558286899/729969400777539644/1594108611372.jpg')
  const door = await Canvas.loadImage('https://cdn.glitch.com/16c1f2c8-0b25-4605-89ff-c86675c38573%2F1594111773688.png?v=1594111787318')
  ctx.drawImage(bg,0,0,canvas.width,canvas.height)
  ctx.drawImage(door,1829,915,150,150)
  ctx.font = '100px Candara'
  ctx.fillStyle ="#F0F8FF"
  ctx.textAlign ='center'
  ctx.fillText(member.user.username,1000,780)
  ctx.fillText('Sunucumuzdan Ayrıldı.',1000,950)
  ctx.lineWidth = 10
  ctx.beginPath()
  ctx.shadowColor='black'
  ctx.shadowBlur =100
  ctx.arc(1020,350,270,0,Math.PI*2,true)
  ctx.closePath()
  ctx.stroke()
  ctx.clip()
  ctx.drawImage(userImage,725,55,590,590)
  ctx.blur = 3
  const attachment = new Discord.MessageAttachment(canvas.toBuffer(),'gülegüle.png')
  if(!kanal) return;
  kanal.send(attachment)
  })

client.on('message', msg => {

if(!msg.guild) return//avatarda hazır var
const data = wiodb.fetch(`yazı_${msg.guild.id}`)
if(data == null) return
let map = []
  var x = data

for(var i in x) {
  if("g!"+x[i].mesaj == msg.content) {
    const rolId = x[i].rol
    const rol = msg.guild.roles.cache.get(rolId)
    msg.member.roles.add(rol)
    const embed = new Discord.MessageEmbed()
    .setDescription(`${rol} Adlı Rolü Başarıyla Aldın.`)
    msg.channel.send(embed)
  }
}

})

client.on("message",async message => {
        if (message.author.bot) return;
   const fetch = require("node-fetch");
  var args = message.content.split(" ");
  if(args[0] == "g!uptime") {
  var link = args[1]
if(!link) return;
const  links = wiodb.fetch("uptime");
if(!link.startsWith('https://')) return message.channel.send('Bu link değil?')
  if(links == null) await wiodb.set("uptime",[])
let map = []
  var x = links
for(var i in x) {
  if(x[i].url.includes(link)) return message.channel.send("Link Sistemde Bulunmakta")
   
}
    message.channel.send("Link Sisteme Eklenmiştir");
   
    
    wiodb.push("uptime",{url:link})

    fetch(link).catch(e => {

    console.log("Siteye Giremedim")
  
 })
 console.log("Siteye Bağlandım")
}                                                              
})


setInterval(() => {
const fetch = require("node-fetch");
  const  links = wiodb.fetch("uptime");
let map = []
  var x = links
for(var i in x) {
   
      fetch(x[i].url).catch(e => {


 })

}
}, 10000)




const isurl = require('is-url')
client.on('message', async message => {
if(message.author.bot || !message.guild) return;
let kontrol = db.fetch(`reklam.${message.guild.id}`)
if(!kontrol) return;
  if (message.member.hasPermission("BAN_MEMBERS")) {
      return;
    }
let reklam = isurl(message.content.toLowerCase().includes)
if(reklam || message.content.toLowerCase().includes("discord.gg","discord.com","top.gg",".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl",".ga",".cf", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party")) {
message.delete()
message.channel.send(`Hey ${message.author}, Bu Sunucuda Reklam Yapamazsın! :rage:`).then(x => x.delete({timeout: 6000}))
}
})


client.on('guildMemberAdd', async member => {
if(member.guild) return;
db.set(`giriş.${member.guild.id}.${member.id}`, member.guild.memberCount)  
})

client.on("message", async message => {
  let kanal = db.fetch(`görselengel.${message.guild.id}`);
  if(message.channel.id == kanal){
    if(!message.attachments.first()){

      if(message.author.bot) return;
      message.delete()
      const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`${message.author}, Bu Kanalda Sadece GIF & Resim Atabilirsiniz.`)
      .setFooter(`${message.author.tag} UYARI!`)
      .setTimestamp()
      message.channel.send(embed).then(x => x.delete({timeout: 6000}))

    };
  
  };
});

client.on('message', async message => {
let wictor = await db.fetch(`kufurengel.${message.guild.id}`)
if (!wictor) return;
if(!message.guild) return;
let küfürler = require('./küfürler.json')
let kelimeler = message.content.slice(" ").split(/ +/g)
if(küfürler.some(kufur => kelimeler.some(kelime => kelime === kufur))) {
if (message.member.hasPermission("BAN_MEMBERS")) return;
message.delete()
message.channel.send(`Hey ${message.author}, Bu Sunucuda Küfür Edemezsin! :rage:`).then(x => x.delete({timeout: 6000}))
}
});

const events = {
    MESSAGE_REACTION_ADD: 'messageReactionAdd',
    MESSAGE_REACTION_REMOVE: 'messageReactionRemove',
};
client.on('raw', async event => {
  if(events) {
    if (!events.hasOwnProperty(event.t)) return;
    const { d: data } = event;
    const anto = client.users.cache.get(data.user_id);
    const channel = client.channels.cache.get(data.channel_id) || await anto.createDM();
    if (channel.messages.cache.has(data.message_id)) return;
    const message = await channel.messages.fetch(data.message_id);
    const emojiKey = (data.emoji.id) ? `${data.emoji.name}:${data.emoji.id}` : data.emoji.name;
    const reaction = message.reactions.cache.get(emojiKey);
    client.emit(events[event.t], reaction, anto);
  }
  /*event.react(emojiKey)*/
});
client.on('messageReactionAdd', (reaction, user) => {
let map = []

  let sistem = wiodb.fetch(`${reaction.message.guild.id}.emoji`);
  if(sistem) {
  var x = sistem
  if(!sistem || null) return;
   if(!sistem || undefined) return;
  for(var i in x) {
  if(!x[i].mesaj || undefined) return;
  if(!x[i].emoji || undefined) return;
  if(!x[i].mesaj || null) return;
  if(!x[i].emoji || null) return;
  if (reaction.message.id == x[i].mesaj) {
    if (reaction.emoji.name == x[i].emoji) {
      
      const mem = reaction.message.guild.members.cache.get(user.id)
if(mem.user.bot) return
mem.roles.add(x[i].rol)
    }
    }
  }
}
});  
client.on('messageReactionRemove', (reaction, user) => {
 let map = [];
  let sistem = wiodb.fetch(`${reaction.message.guild.id}.emoji`);
  if(sistem) {
  var x = sistem
   if(!sistem || null) return;
if(!sistem || undefined) return;
  for(var i in x) {
 if(!x[i].mesaj || undefined) return;
  if(!x[i].emoji || undefined) return;
  if(!x[i].mesaj || null) return;
  if(!x[i].emoji || null) return;

  if (reaction.message.id == x[i].mesaj) {
    if (reaction.emoji.name == x[i].emoji) {
      
      const mem = reaction.message.guild.members.cache.get(user.id)
if(mem.user.bot) return
mem.roles.remove(x[i].rol)
    }
    }
  }
}
});

client.on("message", async  msg => {
let sistem = wiodb.fetch(`${msg.guild.id}.yasaklı.kelime`)
let map = []
  var x = sistem
  for(var i in x) {
  if(msg.content.toLowerCase().includes(x[i].yasak)) {
        
           if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                    return msg.channel.send('Bu Sunucuda Yasaklı Kelime Kullandın! :rage:').then(x => x.delete({timeout: 6000}))
                  }
                }
              }
            })  

client.on('messageReactionAdd', async (reaction, user) => {
let starboardiddd = db.fetch(`starboard.kanal_${reaction.message.guild.id}`)
    const handleStarboard = async () => {
        const starboard = client.channels.cache.find(channel => channel.id === starboardiddd);
        const msgs = await starboard.messages.fetch({ limit: 100 });
        const existingMsg = msgs.find(msg => 
            msg.embeds.length === 1 ?
            (msg.embeds[0].footer.text.startsWith(reaction.message.id) ? true : false) : false);
        if(existingMsg) existingMsg.edit(`${reaction.count} - 🌟`);
        else {
            const embed = new Discord.MessageEmbed()
                .setAuthor(reaction.message.author.tag, reaction.message.author.displayAvatarURL())
                .addField('Link', reaction.message.url)
                .setDescription(reaction.message.content)
                .setFooter(reaction.message.id + ' - ' + new Date(reaction.message.createdTimestamp));
            if(starboard)
                starboard.send('1 - 🌟', embed);
        }
    }
    if(reaction.emoji.name === '🌟') {
        if(reaction.message.channel.id === starboardiddd) return;
        if(reaction.message.partial) {
            await reaction.fetch();
            await reaction.message.fetch();
            handleStarboard();
        }
        else
            handleStarboard();
    }
});

client.on('messageReactionRemove', async (reaction, user) => {
  let starboardiddd = db.fetch(`starboard.kanal_${reaction.message.guild.id}`)
    const handleStarboard = async () => {
        const starboard = client.channels.cache.find(channel => channel.id === starboardiddd);
        const msgs = await starboard.messages.fetch({ limit: 100 });
        const existingMsg = msgs.find(msg => 
            msg.embeds.length === 1 ? 
            (msg.embeds[0].footer.text.startsWith(reaction.message.id) ? true : false) : false);
        if(existingMsg) {
            if(reaction.count === 0)
                existingMsg.delete({ timeout: 2500 });
            else
                existingMsg.edit(`${reaction.count} - 🌟`)
        };
    }
    if(reaction.emoji.name === '🌟') {
        if(reaction.message.channel.id === starboardiddd) return;
        if(reaction.message.partial) {
            await reaction.fetch();
            await reaction.message.fetch();
            handleStarboard();
        }
        else
            handleStarboard();
    }
});

client.on("guildMemberAdd", async(member) => {
  let sunucupaneli = await db.fetch(`sunucupanel_${member.guild.id}`)
  if(sunucupaneli) {
    let toplamuye = member.guild.channels.cache.find(x =>(x.name).startsWith("Toplam Üye •"))
   let aktifüye = member.guild.channels.cache.find(x =>(x.name).startsWith("Aktif Üye •"))
   let botlar = member.guild.channels.cache.find(x =>(x.name).startsWith("Botlar •"))
   let rekor = member.guild.channels.cache.find(x =>(x.name).startsWith("Rekor Aktiflik •"))
   let son = member.guild.channels.cache.find(x =>(x.name).startsWith("Son Üye •"))
   
    if(member.guild.members.filter(off => off.presence.status !== 'offline').size > rekor) {
      db.set(`panelrekor_${member.guild.id}`, member.guild.members.cache.filter(off => off.presence.status !== 'offline').size)
    }
    toplamuye.setName(`Toplam Üye • ${member.guild.members.size}`)
    aktifüye.setName(`Aktif Üye • ${member.guild.members.cache.filter(off => off.presence.status !== 'offline').size}`)
    botlar.setName(`Botlar • ${member.guild.members.cache.filter(m => m.user.bot).size}`)
    rekor.setName(`Son Üye • ${member.user.username}`)
  }
})

client.on("guildMemberRemove", async(member) => {
  let sunucupaneli = await db.fetch(`sunucupanel.${member.guild.id}`)
  if(sunucupaneli) {
    let toplamuye = member.guild.channels.cache.find(x =>(x.name).startsWith("Toplam Üye •"))
   let aktifüye = member.guild.channels.cache.find(x =>(x.name).startsWith("Aktif Üye •"))
   let botlar = member.guild.channels.cache.find(x =>(x.name).startsWith("Botlar •"))
   let rekor = member.guild.channels.cache.find(x =>(x.name).startsWith("Rekor Aktiflik •"))
   let son = member.guild.channels.cache.find(x =>(x.name).startsWith("Son Üye •"))
   
    if(member.guild.members.filter(off => off.presence.status !== 'offline').size > rekor) {
      db.set(`panelrekor_${member.guild.id}`, member.guild.members.cache.filter(off => off.presence.status !== 'offline').size)
    }
    toplamuye.setName(`Toplam Üye • ${member.guild.members.size}`)
    aktifüye.setName(`Aktif Üye • ${member.guild.members.cache.filter(off => off.presence.status !== 'offline').size}`)
    botlar.setName(`Botlar • ${member.guild.members.cache.filter(m => m.user.bot).size}`)
    rekor.setName(`Son Üye • ${member.user.username}`)
  }
})

client.on('voiceStateUpdate', async(oldMember, newMember) => {
let sunucupaneli = await db.fetch(`sunucupanel.${newMember.guild.id}`)
  if(sunucupaneli) {
let son = newMember.guild.channels.cache.find(x =>(x.name).startsWith("Seslideki Üye •"))
const voiceChannels = newMember.guild.channels.cache.filter(c => c.type === 'voice');
 let count = 0
   for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
son.setName(`Seslideki Üye • ${count}`)
  }
   })