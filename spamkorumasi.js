const Discord = require("discord.js");
var MessageData = [];
module.exports = (client, msg) => {
  if (msg.channel.name === undefined){
  }else{
 if (msg.member.hasPermission("BAN_MEMBERS")) {
      return;
    
  if (MessageData[msg.author.id] === undefined) {
    MessageData[msg.author.id] = { MesssageNumber: 0, LastMessage: [] };
    setTimeout(() => {
      delete MessageData[msg.author.id];
    }, 4000);
  }
  MessageData[msg.author.id].MesssageNumber += 1;

  MessageData[msg.author.id].LastMessage.push(msg);


  if (MessageData[msg.author.id].MesssageNumber >= 5) {
    if (msg.deletable) msg.delete();
      const sendeddd = new Discord.MessageEmbed()
        .setColor("ORANGE")
      .setAuthor("Gloss", client.user.AvatarURL)
        .setDescription(msg.author.tag + " **\`Spam Yapmayı Kes Yoksa Susturulursun!\`**")
      .setThumbnail("https://images-ext-1.discordapp.net/external/WcOJUVbW15gkbqHScHgLgnTBsAub-oj5lsbNVFh1WeI/https/cdn.discordapp.com/emojis/715166977315962917.gif?format=png");
      msg.channel.send(sendeddd).then(stopspam => {
        setTimeout(() => {
          stopspam.delete();
        }, 7000);
      });
    var isFine = false;
    MessageData[msg.author.id].LastMessage.forEach(msgg => {
      if (msg.channel.id == msgg.channel.id) {
        if (msg.content == msgg.content) {
          isFine = true;
        } else {
          isFine = false;
        }
      }
    });
    if (isFine) {

        const spambed = new Discord.MessageEmbed()

          .setColor("ORANGE")
       .setAuthor("Gloss", client.user.AvatarURL)
        .setDescription(msg.author.tag + " **\`Sana Spam Yapmayı Kes Yoksa Susturulursun Demiştim!\`**")
      .setThumbnail("https://images-ext-1.discordapp.net/external/WcOJUVbW15gkbqHScHgLgnTBsAub-oj5lsbNVFh1WeI/https/cdn.discordapp.com/emojis/715166977315962917.gif?format=png");
        msg.channel.send(spambed);
        msg.channel.bulkDelete(5);
        msg.channel.createOverwrite(msg.author.id, {
                SEND_MESSAGES: false
});
      }
    }
  if (MessageData[msg.author.id] >= 3) {
    if (msg.deletable) msg.delete();
     msg.channel.bulkDelete(8);
      const spambed = new Discord.RichEmbed()
        .setColor("ORANGE") 
      .setAuthor("Gloss", client.user.AvatarURL)
      .setDescription(msg.author.tag + " **\`Sana Spam Yapmayı Kes yoksa Susturulursun Demiştim!\`**");
      msg.channel.send(spambed);
      msg.channel.createOverwrite(msg.author.id, {
                SEND_MESSAGES: false,
        
});
    }
  }
}
};