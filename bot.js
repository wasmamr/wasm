const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By WESO");


client.on("ready", () => {
let channel =     client.channels.get("574892363131125760")
setInterval(function() {
channel.send(`Credit Spam , Frame , Credit By WESO , Farm Credit By WESO, ez Farm - كردت اسبام اسبام اسبام اوف ءف اح اح نار ج [ " 37802 " ]
`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
