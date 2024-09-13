const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
     react: "📜",
    desc: "get cmd list.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}


let madeMenu = ` 
╭
│👋 *Hello ${pushname}* 
│👤Bot Owener: 𝐌𝐑 𝐒𝐞𝐧𝐞𝐬𝐡
│🤖Bot Name: 𝐊𝐄𝐍𝐙𝐎 𝐌𝐃
│🧬Prefix: [.]
│🔖Versions: 1.0.0
│🔮Whatsap Number: +94773673969
╰━━━━━━━━━━━━━━━━━━━ 
╭━━❮ MAIN COMMAND 🔧
━━━━━━━━━━━━━━━━━━━
${menu.main}
╰━━━━━━━━━━━━━━━━━━━
╭━━❮ DOWNLOAD COMMAND 📥
━━━━━━━━━━━━━━━━━━━
${menu.download}
╰━━━━━━━━━━━━━━━━━━━
╭━━❮ GROUP COMMAND 👥
━━━━━━━━━━━━━━━━━━━
${menu.group}
╰━━━━━━━━━━━━━━━━━━━
╭━━❮ OWNER COMMAND 🔒
━━━━━━━━━━━━━━━━━━━
${menu.owner}
╰━━━━━━━━━━━━━━━━━━━
╭━━❮ CONVERT COMMAND 🔄
━━━━━━━━━━━━━━━━━━━
${menu.convert}
╰━━━━━━━━━━━━━━━━━━━
╭━━❮ SEARCH COMMAND 🔎
━━━━━━━━━━━━━━━━━━━
${menu.search}
╰━━━━━━━━━━━━━━━━━━━

 𝗠𝗔𝗗𝗘 𝗕𝗬 𝗞𝗘𝗡𝗭𝗢
   `
   
await conn.sendMessage(from,{image:{url:"https://telegra.ph/file/3c64b5608dd82d33dabe8.jpg"},caption:madeMenu},{quoted:mek})


}catch(e){
console.log(e)
reply(`${e}`)
}
})

