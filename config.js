const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ADEEL-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib05GdnJ1bTdZRnRXWXV5TUxpdDlsZkFDdUdYWisySmthTWQ4TnhQYUFFWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMS9yVHpvNjRuZnFZQUpURjFUSXZZMHB1TU5zT2o4QXB4VHZCUG5XWWRWTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTURzY3dxY0xoejRWTVpKaFJ5eGo5eStYNnFQN0RNV2dtb2k3RGZ4bkdrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2L0d1YXN5eG0vT1QxZkt0cS9CQVpvYnVHVkZadzdXSzZ2UEV3RlF5TlJRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVBeThEODlQNmxrVnh6d1pKQTNNeDlsRkVzaitYdm14bnd2V2pRVDE1MnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndZalRDc0VDVzJDbWY1SXk5R0tGK1VmZXhxSjJGbVRXVW8xUjZnakdPd2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0g0OGVNdElza2ZyWmtEWkx4a1Iwa084S0hVUlFSZ0pacGE0YnM0dS9tcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaW9xRGIzWHVEaXVEUkNiL1dIYjM2MlpyN1JhTmt5L0RMNG9JUWxpVGp3Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNwOG96ZWZOQ3lrZzZmSW1iTGhCdnRKVE1MemFBOE5INjdhbU1HbEg1Tmw3bC9rTTRONmJRc2lucUFKaktTdTZVQ2d1NXl4TmppNFJ4YWkzdVRiNmdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDMsImFkdlNlY3JldEtleSI6Im9kZXA3dmwvbTBucCtlUTJVR0RlcGxObU5GUDZUczZ3R050c1B2aUt1UlE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMTY0NzY5MjQ4NzlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMkFCMjQ3NjVDNEIxQTUxRTdBMDkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2NzA1NjM1NH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMTY0NzY5MjQ4NzlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMkE5MzcxQUI1NjQwMEJEMDZENEUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2NzA1NjM1NH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMTY0NzY5MjQ4NzlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMkFCNEYzNUY0MkQ5MjBDMDgyNTUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2NzA1NjM1OX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMTY0NzY5MjQ4NzlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMkEyQUZCMEY0MjVCODQ4QTlFOUYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2NzA1NjM2Mn1dLCJuZXh0UHJlS2V5SWQiOjgxMywiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjgxMywiYWNjb3VudFN5bmNDb3VudGVyIjoyLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJBREVFTDVNRCIsIm1lIjp7ImlkIjoiMTY0NzY5MjQ4Nzk6M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJ6b3JvWGNhcmRlciIsImxpZCI6IjIzNjc0NDgwNTMzNzAzOjNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPSHVuKzRCRU5QSHpNb0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ3TC80KzFHMmEwTVBXUHpWNXE3b3BjajZrRXU1OTRweDFBSjdnV04vZ0dFPSIsImFjY291bnRTaWduYXR1cmUiOiI3eFhhOVM2Z291U21XU0N0c2IwSGtaWmFabGVFT3JTeTlQQXNOTjlaYmhXRG5hRk8zcGVnMlh4QUIrWFowUVh3R3RZMXVTQkYrTUJ1bFZsejhMTWlBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYVpqK09QU0h5OXdObHRKR3NTdXhEeWhGNjJpYlQrRzI0MExoTm1OZ3ZIakdhS2dGT2lWam1iZGliV1Vua1YwTjMxQi9hL2tCRDg3ZUhLMGdNU0ZPZ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxNjQ3NjkyNDg3OTozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNDLytQdFJ0bXRERDFqODFlYXU2S1hJK3BCTHVmZUtjZFFDZTRGamY0QmgifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElFZ2dJIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2NzA1NjM1MywibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGV3EifQ==",
// ADEEL-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib05GdnJ1bTdZRnRXWXV5TUxpdDlsZkFDdUdYWisySmthTWQ4TnhQYUFFWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMS9yVHpvNjRuZnFZQUpURjFUSXZZMHB1TU5zT2o4QXB4VHZCUG5XWWRWTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTURzY3dxY0xoejRWTVpKaFJ5eGo5eStYNnFQN0RNV2dtb2k3RGZ4bkdrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2L0d1YXN5eG0vT1QxZkt0cS9CQVpvYnVHVkZadzdXSzZ2UEV3RlF5TlJRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVBeThEODlQNmxrVnh6d1pKQTNNeDlsRkVzaitYdm14bnd2V2pRVDE1MnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndZalRDc0VDVzJDbWY1SXk5R0tGK1VmZXhxSjJGbVRXVW8xUjZnakdPd2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0g0OGVNdElza2ZyWmtEWkx4a1Iwa084S0hVUlFSZ0pacGE0YnM0dS9tcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaW9xRGIzWHVEaXVEUkNiL1dIYjM2MlpyN1JhTmt5L0RMNG9JUWxpVGp3Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNwOG96ZWZOQ3lrZzZmSW1iTGhCdnRKVE1MemFBOE5INjdhbU1HbEg1Tmw3bC9rTTRONmJRc2lucUFKaktTdTZVQ2d1NXl4TmppNFJ4YWkzdVRiNmdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDMsImFkdlNlY3JldEtleSI6Im9kZXA3dmwvbTBucCtlUTJVR0RlcGxObU5GUDZUczZ3R050c1B2aUt1UlE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMTY0NzY5MjQ4NzlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMkFCMjQ3NjVDNEIxQTUxRTdBMDkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2NzA1NjM1NH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMTY0NzY5MjQ4NzlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMkE5MzcxQUI1NjQwMEJEMDZENEUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2NzA1NjM1NH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMTY0NzY5MjQ4NzlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMkFCNEYzNUY0MkQ5MjBDMDgyNTUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2NzA1NjM1OX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMTY0NzY5MjQ4NzlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMkEyQUZCMEY0MjVCODQ4QTlFOUYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2NzA1NjM2Mn1dLCJuZXh0UHJlS2V5SWQiOjgxMywiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjgxMywiYWNjb3VudFN5bmNDb3VudGVyIjoyLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJBREVFTDVNRCIsIm1lIjp7ImlkIjoiMTY0NzY5MjQ4Nzk6M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJ6b3JvWGNhcmRlciIsImxpZCI6IjIzNjc0NDgwNTMzNzAzOjNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPSHVuKzRCRU5QSHpNb0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ3TC80KzFHMmEwTVBXUHpWNXE3b3BjajZrRXU1OTRweDFBSjdnV04vZ0dFPSIsImFjY291bnRTaWduYXR1cmUiOiI3eFhhOVM2Z291U21XU0N0c2IwSGtaWmFabGVFT3JTeTlQQXNOTjlaYmhXRG5hRk8zcGVnMlh4QUIrWFowUVh3R3RZMXVTQkYrTUJ1bFZsejhMTWlBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYVpqK09QU0h5OXdObHRKR3NTdXhEeWhGNjJpYlQrRzI0MExoTm1OZ3ZIakdhS2dGT2lWam1iZGliV1Vua1YwTjMxQi9hL2tCRDg3ZUhLMGdNU0ZPZ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxNjQ3NjkyNDg3OTozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNDLytQdFJ0bXRERDFqODFlYXU2S1hJK3BCTHVmZUtjZFFDZTRGamY0QmgifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElFZ2dJIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2NzA1NjM1MywibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGV3EifQ==add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY ADEEL-MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/x2qij1.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ADEEL-MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "ADEEL-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923035512967",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ADEEL-MD",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀᴅᴇᴇʟ-ᴍᴅ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/x2qij1.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*ADEEL-MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923035512967",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
// make it true for auto recoding 
ANTI_CALL: process.env.ANTI_CALL || "false"
// make it true for auto call reject 
};
