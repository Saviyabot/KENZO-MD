const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "xSkUkIwD#xnHDi1lZl8GgFTlkOUQklL811mNy0igBAEN3UEGRAAo",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/3c64b5608dd82d33dabe8.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello I am Kenzo-Md i am alive now..!",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
PREFIX: process.env.PREFIX || "."
};
