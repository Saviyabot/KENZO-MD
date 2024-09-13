const {cmd , commands} = require('../command')
const fg =arequre('api-dylux')
const yts = require('yt-search')

cmd({
    pattern: "song",
    ract: "🎵",
    desc: "Download songs",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return rply("Please give me url or song name")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc =`

*KENZO MD SONG DOWNLOADER*  📥

> title: ${data.title}
> description: ${data.description}
> time: ${data.timetamp}
> ago: ${data.ago}
> views: ${data.views}

*MADE BY KENZO  MD 🖥️*
`
await conn.sendMessage(from,{image:{url:data.thumbnail},caption:desc},{quoted:mek});

// download audio
let down = await fg.yta(url)
let downloadUrl = down.dl_url

// send audio message
await conn.sendMessage(from,{audio: {url:downloadUrl},mimetyoe:"audio/mpeg"},{quoted:mek});
await conn.sendMessage(from,{document: {url:downloadUrl},mimetyoe:"audio/mpeg",fileName:data.title + ".mp3",caption:"ᴹᴬᴰᴱ ᴮʸ ᴷᴱᴹᶻᴼ ᴹᴰ"},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})

//========video-dl=========

cmd({
    pattern: "video",
    react: "📽️",
    desc: "Download videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return rply("Please give me url or video name")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc =`

*KENZO MD VIDEO DOWNLOADER*  📥

> title: ${data.title}
> description: ${data.description}
> time: ${data.timetamp}
> ago: ${data.ago}
> views: ${data.views}

*POWERD BY KENZO  MD 🖥️*
`
await conn.sendMessage(from,{image:{url:data.thumbnail},caption:desc},{quoted:mek});

// download video
let down = await fg.ytv(url)
let downloadUrl = down.dl_url

// send video message
await conn.sendMessage(from,{video: {url:downloadUrl},mimetyoe:"video/mp4"},{quoted:mek});
await conn.sendMessage(from,{document: {url:downloadUrl},mimetyoe:"video/mp4",fileName:data.title + ".mp4",caption:"ᴹᴬᴰᴱ ᴮʸ ᴷᴱᴹᶻᴼ ᴹᴰ"},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
