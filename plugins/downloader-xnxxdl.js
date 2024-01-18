import fetch from 'node-fetch';

let handler = async (m, {conn, args}) => {
if (!args[0]) throw 'Mana link nya anj?!';
m.reply('santai dong anj');
let url = encodeURIComponent(args[0]);
let apiUrl = `https://skizo.tech/api/xnxxdl?urlxnxx=${url}&apikey=yangtze`;

let res = await fetch(apiUrl);
let json = await res.json();

if(json.title) {
let message = `Judul: ${json.title}\nDurasi: ${json.duration}\nKualitas: ${json.quality}\nJumlah Views: ${json.views}\nURL: ${json.url}`;

await conn.sendFile(m.chat, json.thumb, 'coli-lu.jpg', message, m);

await conn.sendFile(m.chat, json.url, 'cocot.mp4', '', m);
} else {
throw 'Tidak ada';
}
};
handler.help = handler.command = ['xnxxdl'];
handler.tags = ['downloader'];
handler.limit = 5;
export default handler;