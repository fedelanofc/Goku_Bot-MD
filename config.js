import { watchFile, unwatchFile } from 'fs';
import * as cheerio from 'cheerio';
import { getDevice } from '@whiskeysockets/baileys';
import yts from 'yt-search';
import axios from 'axios';
import fg from 'api-dylux';
import fs from 'fs';
import fetch from 'node-fetch';
import * as type from 'file-type';
import { fileURLToPath } from 'url';
import path from 'path';
import { es } from "./lib/total-idiomas.js";

global.botnumber = "";
global.confirmCode = "";
global.owner = [
  ['5491156178758', '>\`\` I\'𝘧𝘦𝘥𝘦𝘭𝘢𝘯𝘠𝘛 ~', true],
  ['13124976342', '>\` I\'m Fz ~', true]
];
global.colabs = [
  ['13124976342', '>\`\`\` I\'m Danny ~ 卐', true]
];
global.mods = [''];
global.prems = [''];

global.APIs = {
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
};

global.fgapis = ['ELhI4IG6', 'Ys3CfFTU', '6IbiVq6V', 'dEBWvxCY'];
global.fgkey = fgapis[Math.floor(fgapis.length * Math.random())];

global.APIKeys = {
  'https://api.fgmods.xyz': `${fgkey}`
};

// Sticker WM
global.packname = '𝐒𝐲𝐥𝐩𝐡𝐢𝐞𝐭𝐭𝐞 | 𝐁𝐨𝐭 - Multi Device';
global.footer = "тнe вeѕт wнaтѕapp вy 𝘧𝘦𝘥𝘦𝘭𝘢𝘯𝘠𝘛";
global.author = `𝘧𝘦𝘥𝘦𝘭𝘢𝘯𝘠𝘛 ~`;
global.wm = '┊ꦿ🎄⿻ 𝐒𝐲𝐥𝐩𝐡𝐢𝐞𝐭𝐭𝐞-𝐁𝐨𝐭 ❜ೃ';

global.insta = 'https://www.instagram.com/';

// Imágenes
global.imagen0 = fs.readFileSync('./src/Sylph_logo.jpg');
global.imagen = fs.readFileSync('./src/Sylph.jpg');
global.imagen3 = 'https://telegra.ph/file/62fa3e30dc861a3fde73b.jpg';

// Info
global.botName = '🧸𝐒𝐲𝐥𝐩𝐡𝐢𝐞𝐭𝐭𝐞-𝐁𝐨𝐭🧸';
global.menu = "https://files.catbox.moe/b1fhc9.jpg";
global.fglog = 'https://i.ibb.co/1zdz2j3/logo.jpgs';
global.link_ = 'https://chat.whatsapp.com/GYTJqKhf6z1HBsyyidsBUs';

// Subbots & Sesiones
global.jadi = "Sesiones/Subbots";
global.syl = "Sesiones/Principal";

// Otros
global.axios = axios;
global.fs = fs;
global.cheerio = cheerio;
global.fg = fg;
global.path = path;
global.yts = yts;
global.fetch = fetch;
global.fileType = type;

global.wait = '⌛ _Espera un momento . . ._';
global.rwait = '⌛';
global.dmoji = '🤭';
global.done = '✅';
global.error = '❌';
global.xmoji = '🔥';

global.multiplier = 69;
global.maxwarn = '2';

let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log("Update 'config.js'");
  import(`${file}?update=${Date.now()}`);
});
