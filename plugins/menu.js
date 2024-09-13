const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    react: '📜',
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: '',
}


for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${config.PREFIX}${commands[i].pattern}\n`;
 }
}


let madeMenu = `
*👋 Hllo Broh ${pushname}*
 𝐌𝐀𝐈𝐍 𝐌𝐄𝐍𝐔
╭────────────────────●●►
│👤Bot Owener: 𝐌𝐑 𝐒𝐞𝐧𝐞𝐬𝐡
│🤖Bot Name: 𝐊𝐄𝐍𝐙𝐎 𝐌𝐃
│🧬Prefix: [.]
│🔖Versions: 1.0.0
│🔮Whatsap Number: +94773673969
╰─────────────────────●●►

╭──────────●●►
 🔧𝐌𝐚𝐢𝐧 𝐌𝐞𝐧𝐮
  ───────
${menu.main}
╰───────────●●►
╭──────────●●►
 📥 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞𝐧𝐮
  ───────
${menu.download}
╰───────────●●►
╭──────────●●►
 👥 𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮
  ───────
${menu.group}
╰───────────●●►
╭──────────●●►
 🔒 𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮
  ───────
${menu.owner}
╰───────────●●►
╭──────────●●►
 🔄 𝐂𝐨𝐧𝐯𝐞𝐫𝐭 𝐌𝐞𝐧𝐮
  ───────
${menu.convert}
╰───────────●●►
╭──────────●●►
 🔎𝐒𝐞𝐚𝐫𝐜𝐡 𝐌𝐞𝐧𝐮
  ───────
${menu.search}
╰───────────●●►

𝐌𝐀𝐃𝐄 𝐁𝐘 𝐊𝐄𝐍𝐙𝐎 𝐌𝐃
`
await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})
    
}catch(e){
console.log(e)
reply(`${e}`)
}
})
