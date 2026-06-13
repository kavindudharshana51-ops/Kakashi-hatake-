const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/kavindudharshana51-ops/Kakashi-hatake-/blob/main/image/lv_0_20260614003155.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 I'm kakashi hatake-MD 🥷 Is Alive Now*",
BOT_OWNER: '94774022359',  // Replace with the owner's phone number



};
