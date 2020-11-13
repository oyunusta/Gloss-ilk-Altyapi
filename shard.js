const { ShardingManager } = require("discord.js");
const manager = new ShardingManager("./gloss.js", {
    token: require("./ayarlar.json").token,
    totalShards: 4,
});

console.log("Selam, "+require("os").userInfo().username+". Teşekkürler.");
manager.spawn();