import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
try{ 
const { levelling } = '../lib/levelling.js'
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)

let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric' 
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money } = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),

exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,

level, limit, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
 
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let user = global.db.data.users[m.sender]
//user.registered = false

let pp = gataVidMenu.getRandom()
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let fsizedoc = '1'.repeat(10)
let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(gataMenu.getRandom())).buffer(), sourceUrl: redesMenu.getRandom() }}}

let str = `
╭═══〘 ✯✯✯✯✯✯✯✯✯ 〙══╮
║    ◉— *𝗦𝘂𝗽𝗲𝗿𝗶𝗼𝗿𝗶𝘁𝘆 𝗕𝗼𝘁* —◉
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *𝗛ola, Bienvenidx*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
╰═══╡✯✯✯✯✯✯✯✯✯╞═══╯

┏━━━━━━━━━━━━━━━━┓
┃ *<𝐌𝐄𝐍𝐔 𝐀𝐔𝐃𝐈𝐎𝐒/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣*- 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝙾 𝙵𝚁𝙰𝚂𝙴𝚂 𝚂𝙸𝙽 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, *, .)*
┣ ඬ⃟🔊 _Quien es tu sempai botsito 7w7_
┣ ඬ⃟🔊 _Te diagnostico con gay_
┣ ඬ⃟🔊 _No digas eso papu_
┣ ඬ⃟🔊 _A nadie le importa_
┣ ඬ⃟🔊 _Fiesta del admin_
┣ ඬ⃟🔊 _Fiesta del administrador_ 
┣ ඬ⃟🔊 _Vivan los novios_
┣ ඬ⃟🔊 _Feliz cumpleaños_
┣ ඬ⃟🔊 _Noche de paz_
┣ ඬ⃟🔊 _Buenos dias_
┣ ඬ⃟🔊 _Buenos tardes_
┣ ඬ⃟🔊 _Buenos noches_
┣ ඬ⃟🔊 _Audio hentai_
┣ ඬ⃟🔊 _Chica lgante_
┣ ඬ⃟🔊 _Feliz navidad_
┣ ඬ⃟🔊 _Vete a la vrg_
┣ ඬ⃟🔊 _Pasa pack Bot_
┣ ඬ⃟🔊 _Atencion grupo_
┣ ඬ⃟🔊 _Marica quien_
┣ ඬ⃟🔊 _Murio el grupo_
┣ ඬ⃟🔊 _Oh me vengo_
┣ ඬ⃟🔊 _tio que rico_
┣ ඬ⃟🔊 _Viernes_
┣ ඬ⃟🔊 _Baneado_
┣ ඬ⃟🔊 _Sexo_
┣ ඬ⃟🔊 _Hola_
┣ ඬ⃟🔊 _Un pato_
┣ ඬ⃟🔊 _Nyanpasu_
┣ ඬ⃟🔊 _Te amo_
┣ ඬ⃟🔊 _Yamete_
┣ ඬ⃟🔊 _Bañate_
┣ ඬ⃟🔊 _Es puto_
┣ ඬ⃟🔊 _La biblia_
┣ ඬ⃟🔊 _Onichan_
┣ ඬ⃟🔊 _Mierda de Bot_
┣ ඬ⃟🔊 _Siuuu_
┣ ඬ⃟🔊 _Epico_
┣ ඬ⃟🔊 _Shitpost_
┣ ඬ⃟🔊 _Rawr_
┣ ඬ⃟🔊 _UwU_
┣ ඬ⃟🔊 _:c_
┣ ඬ⃟🔊 _a_
┗━━━━━━━━━━━━━━━━┛`.trim()
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
/*let menuA = `🎶 ${lenguajeGB['smsConfi2']()} *${username}*`.trim()
let menuB = `
╭┄〔 *${wm}* 〕┄⊱
┊დ *${week}, ${date}*
┊დ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊დ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊დ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊დ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
╰┄┄┄┄〔 *𓃠 ${vs}* 〕┄┄┄┄⊱

⠇ *${lenguajeGB['smsTex16']()}* 🔊
⠇ ${lenguajeGB['smsTex17']()}
∘ _Noche de paz_
∘ _Buenos dias_
∘ _Audio hentai_
∘ _Fiesta del admin_
∘ _Fiesta del admin 2_
∘ _Fiesta del administrador_ 
∘ _Viernes_
∘ _Mierda de Bot_
∘ _Me olvidé_
∘ _Baneado_
∘ _Feliz navidad_
∘ _A nadie le importa_
∘ _Sexo_
∘ _Vete a la vrg_
∘ _Ara ara_
∘ _Hola_
∘ _Un pato_
∘ _Nyanpasu_
∘ _Te amo_
∘ _Yamete_
∘ _Te diagnostico con gay_
∘ _Quien es tu sempai botsito 7w7_
∘ _Bañate_
∘ _Vivan los novios_
∘ _Marica quien_
∘ _Es puto_
∘ _La biblia_
∘ _Onichan_
∘ _Bot puto_
∘ _Feliz cumpleaños_
∘ _Pasa pack Bot_
∘ _Atencion grupo_
∘ _Homero chino_
∘ _Oh me vengo_
∘ _Murio el grupo_
∘ _Siuuu_
∘ _Rawr_
∘ _UwU_
∘ _:c_
∘ _a_
∘ _Hey_
∘ _Enojado_
∘ _Enojada_
∘ _Chao_
∘ _Hentai_
∘ _Triste_
∘ _Estoy triste_
∘ _Me pican los cocos_
∘ _Contexto_
∘ _Me voy_
∘ _Tengo los calzones del admin_
∘ _Entrada épica_ 
∘ _Esto va ser épico papus_
∘ _Ingresa épicamente_
∘ _Bv_
∘ _Yoshi_
∘ _No digas eso papu_
∘ _Ma ma masivo_
∘ _Masivo_
∘ _Basado_
∘ _Basada_
∘ _Fino señores_
∘ _Verdad que te engañe_
∘ _Sus_
∘ _Ohayo_
∘ _La voz de hombre_
∘ _Pero esto_
∘ _Bien pensado Woody_
∘ _Jesucristo_
∘ _Wtf_
∘ _Una pregunta_
∘ _Que sucede_
∘ _Hablame_
∘ _Pikachu_
∘ _Niconico_
∘ _Yokese_
∘ _Omaiga_
∘ _Nadie te preguntó_
∘ _Bueno si_
∘ _Usted está detenido_
∘ _No me hables_
∘ _No chu_
∘ _El pepe_
∘ _Pokémon_
∘ _No me hagas usar esto_
∘ _Esto va para ti_
∘ _Abduzcan_
∘ _Joder_
∘ _Hablar primos_
∘ _Mmm_
∘ _Orale_
∘ _Me anda buscando anonymous_
∘ _Blackpink in your area_
∘ _Cambiate a Movistar_
∘ _Momento equisde | Momento XD_
∘ _Todo bien | 😇_
∘ _Te gusta el Pepino | 🥒_
∘ _El tóxico_
∘ _Moshi moshi_
∘ _Calla Fan de BTS_
∘ _Que tal grupo_
∘ _Muchachos_
∘ _Está Zzzz | 😴_
∘ _Goku Pervertido_
∘ _Potaxio | 🥑_
∘ _Nico nico_
∘ _El rap de Fernanfloo_
∘ _Tal vez_
∘ _Corte corte_
∘ _Buenas noches_
∘ _Porque ta tite_
∘ _Eres Fuerte_
∘ _Bueno Master | 🫂_
∘ _No Rompas más_
∘ _Traiganle una falda_
∘ _Se están riendo de mí_
∘ _Su nivel de pendejo_
∘ _Bienvenido/a 🥳 | 👋_
∘ _Elmo sabe donde vives_
∘ _tunometecabrasaramambiche_
∘ _Y este quien es_
∘ _Motivación_
∘ _En caso de una investigación_
∘ _Buen día grupo | 🙌_
∘ _Las reglas del grupo_
∘ _Oye | 🐔_
∘ _Ig de la minita_
∘ _Gaspi frase_
∘ _Vamos!!_
∘ _Se pudrio_
∘ _Gol!_`.trim()
  
await conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)
*/
const sections = [
{
title: `${lenguajeGB.smsTex18()}`,
rows: [
{title: lenguajeGB['smsLista2'](), description: null, rowId: `${usedPrefix}creadora`},
{title: lenguajeGB['smsLista5'](), description: null, rowId: `${usedPrefix}infomenu`},
{title: lenguajeGB['smsLista6'](), description: null, rowId: `${usedPrefix}allmenu`},  
  
{title: "➥🔊 Noche de paz", description: null, rowId: `Noche de paz`},
{title: "➥🔊 Buenos dias", description: null, rowId: `Buenos dias`},
{title: "➥🔊 Audio hentai", description: null, rowId: `Audio hentai`},
{title: "➥🔊 Fiesta del admin", description: null, rowId: `Fiesta del admin`},
{title: "➥🔊 Fiesta del admin 2", description: null, rowId: `Fiesta del admin 2`},
{title: "➥🔊 Fiesta del administrador", description: null, rowId: `Fiesta del administrador`},
{title: "➥🔊 Viernes", description: null, rowId: `Viernes`},
{title: "➥🔊 Me olvidé", description: null, rowId: `Me olvidé`},
{title: "➥🔊 Baneado", description: null, rowId: `Baneado`},
{title: "➥🔊 Feliz navidad", description: null, rowId: `Feliz navidad`},
{title: "➥🔊 A nadie le importa", description: null, rowId: `A nadie le importa`},
{title: "➥🔊 Sexo", description: null, rowId: `Sexo`},
{title: "➥🔊 Vete a la vrg", description: null, rowId: `Vete a la vrg`},
{title: "➥🔊 Ara ara", description: null, rowId: `Ara ara`},
{title: "➥🔊 Mierda de Bot", description: null, rowId: `Mierda de Bot`},
{title: "➥🔊 Hola", description: null, rowId: `Hola`},
{title: "➥🔊 Un pato", description: null, rowId: `Un pato`},
{title: "➥🔊 Nyanpasu", description: null, rowId: `Nyanpasu`},
{title: "➥🔊 Te amo", description: null, rowId: `Te amo`},
{title: "➥🔊 Yamete", description: null, rowId: `Yamete`},
{title: "➥🔊 Te diagnostico con gay", description: null, rowId: `Te diagnostico con gay`},
{title: "➥🔊 Quien es tu sempai botsito 7w7", description: null, rowId: `Quien es tu sempai botsito 7w7`},
{title: "➥🔊 Bañate", description: null, rowId: `Bañate`},
{title: "➥🔊 Vivan los novios", description: null, rowId: `Vivan los novios`},
{title: "➥🔊 Marica quien", description: null, rowId: `Marica quien`},
{title: "➥🔊 Es puto", description: null, rowId: `Es puto`},
{title: "➥🔊 La biblia", description: null, rowId: `La biblia`},
{title: "➥🔊 Onichan", description: null, rowId: `Onichan`},
{title: "➥🔊 Bot puto", description: null, rowId: `Bot puto`},
{title: "➥🔊 Feliz cumpleaños", description: null, rowId: `Feliz cumpleaños`},
{title: "➥🔊 Pasa pack Bot", description: null, rowId: `Pasa pack Bot`},
{title: "➥🔊 Atencion grupo", description: null, rowId: `Atencion grupo`},
{title: "➥🔊 Homero chino", description: null, rowId: `Homero chino`},
{title: "➥🔊 Oh me vengo", description: null, rowId: `Oh me vengo`},
{title: "➥🔊 Murio el grupo", description: null, rowId: `Murio el grupo`},
{title: "➥🔊 Siuuu", description: null, rowId: `Siuuu`},
{title: "➥🔊 Rawr", description: null, rowId: `Rawr`},
{title: "➥🔊 UwU", description: null, rowId: `UwU`},
{title: "➥🔊 :c", description: null, rowId: `:c`},
{title: "➥🔊 a", description: null, rowId: `a`},
{title: "➥🔊 Hey", description: null, rowId: `Hey`},
{title: "➥🔊 Enojado", description: null, rowId: `Enojado`},
{title: "➥🔊 Enojada", description: null, rowId: `Enojada`},
{title: "➥🔊 Chao", description: null, rowId: `Chao`},
{title: "➥🔊 Hentai", description: null, rowId: `Hentai`},
{title: "➥🔊 Triste", description: null, rowId: `Triste`},
{title: "➥🔊 Estoy triste", description: null, rowId: `Estoy triste`},
{title: "➥🔊 Me pican los cocos", description: null, rowId: `Me pican los cocos`},
{title: "➥🔊 Contexto", description: null, rowId: `Contexto`},
{title: "➥🔊 Me voy", description: null, rowId: `Me voy`},
{title: "➥🔊 Tengo los calzones del admin", description: null, rowId: `Tengo los calzones del admin`},
{title: "➥🔊 Entrada épica", description: null, rowId: `Entrada épica`},
{title: "➥🔊 Esto va ser épico papus", description: null, rowId: `Esto va ser épico papus`},
{title: "➥🔊 Ingresa épicamente", description: null, rowId: `Ingresa épicamente`},
{title: "➥🔊 Bv", description: null, rowId: `Bv`},
{title: "➥🔊 Yoshi", description: null, rowId: `Yoshi`},
{title: "➥🔊 No digas eso papu", description: null, rowId: `No digas eso papu`},
{title: "➥🔊 Ma ma masivo", description: null, rowId: `Ma ma masivo`},
{title: "➥🔊 Masivo", description: null, rowId: `Masivo`},
{title: "➥🔊 Basado", description: null, rowId: `Basado`},
{title: "➥🔊 Fino señores", description: null, rowId: `Fino señores`},
{title: "➥🔊 Verdad que te engañe", description: null, rowId: `Verdad que te engañe`},
{title: "➥🔊 Sus", description: null, rowId: `Sus`},
{title: "➥🔊 Ohayo", description: null, rowId: `Ohayo`},
{title: "➥🔊 La voz de hombre", description: null, rowId: `La voz de hombre`},
{title: "➥🔊 Pero esto", description: null, rowId: `Pero esto`},
{title: "➥🔊 Bien pensado Woody", description: null, rowId: `Bien pensado Woody`},
{title: "➥🔊 Jesucristo", description: null, rowId: `Jesucristo`},
{title: "➥🔊 Wtf", description: null, rowId: `Wtf`},
{title: "➥🔊 Una pregunta", description: null, rowId: `Una pregunta`},
{title: "➥🔊 Que sucede", description: null, rowId: `Que sucede`},
{title: "➥🔊 Hablame", description: null, rowId: `Hablame`},
{title: "➥🔊 Pikachu", description: null, rowId: `Pikachu`},
{title: "➥🔊 Niconico", description: null, rowId: `Niconico`},
{title: "➥🔊 Yokese", description: null, rowId: `Yokese`},
{title: "➥🔊 Omaiga", description: null, rowId: `Omaiga`},
{title: "➥🔊 Nadie te preguntó", description: null, rowId: `Nadie te preguntó`},
{title: "➥🔊 Bueno si", description: null, rowId: `Bueno si`},
{title: "➥🔊 Usted está detenido", description: null, rowId: `Usted está detenido`},
{title: "➥🔊 No me hables", description: null, rowId: `No me hables`},
{title: "➥🔊 No, chupala", description: null, rowId: `No, chupala`},
{title: "➥🔊 El pepe", description: null, rowId: `El pepe`},
{title: "➥🔊 Pokémon", description: null, rowId: `Pokémon`},
{title: "➥🔊 No me hagas usar esto", description: null, rowId: `No me hagas usar esto`},
{title: "➥🔊 Esto va para ti", description: null, rowId: `Esto va para ti`},
{title: "➥🔊 Abduzcan", description: null, rowId: `Abduzcan`},
{title: "➥🔊 Joder", description: null, rowId: `Joder`},
{title: "➥🔊 Hablar primos", description: null, rowId: `Hablar primos`},
{title: "➥🔊 Mmm", description: null, rowId: `Mmm`},
{title: "➥🔊 Orale", description: null, rowId: `Orale`},
{title: "➥🔊 Me anda buscando anonymous", description: null, rowId: `Me anda buscando anonymous`},
{title: "➥🔊 Blackpink in your area", description: null, rowId: `Blackpink in your area`},
{title: "➥🔊 Cambiate a Movistar", description: null, rowId: `Cambiate a Movistar`},
{title: "➥🔊 Momento equisde", description: null, rowId: `Momento equisde`},
{title: "➥🔊 Momento XD", description: null, rowId: `Momento XD`},
{title: "➥🔊 Todo bien", description: null, rowId: `Todo bien`},
{title: "➥🔊 😇", description: null, rowId: `😇`},
{title: "➥🔊 Te gusta el Pepino", description: null, rowId: `Te gusta el Pepino`},
{title: "➥🔊 🥒", description: null, rowId: `🥒`},
{title: "➥🔊 El tóxico", description: null, rowId: `El tóxico`},
{title: "➥🔊 Moshi moshi", description: null, rowId: `Moshi moshi`},
{title: "➥🔊 Calla Fan de BTS", description: null, rowId: `Calla Fan de BTS`},
{title: "➥🔊 Que tal grupo", description: null, rowId: `Que tal grupo`},
{title: "➥🔊 Muchachos", description: null, rowId: `Muchachos`},
{title: "➥🔊 Está Zzzz", description: null, rowId: `Está Zzzz`},
{title: "➥🔊 😴", description: null, rowId: `😴`},
{title: "➥🔊 Goku Pervertido", description: null, rowId: `Goku Pervertido`},
{title: "➥🔊 Potaxio", description: null, rowId: `Potaxio`},
{title: "➥🔊 🥑", description: null, rowId: `🥑`},
{title: "➥🔊 Nico nico", description: null, rowId: `Nico nico`},
{title: "➥🔊 El rap de Fernanfloo", description: null, rowId: `El rap de Fernanfloo`},
{title: "➥🔊 Tal vez", description: null, rowId: `Tal vez`},
{title: "➥🔊 Corte corte", description: null, rowId: `Corte corte`},
{title: "➥🔊 Buenas noches", description: null, rowId: `Buenas noches`},
{title: "➥🔊 Porque ta tite", description: null, rowId: `Porque ta tite`},
{title: "➥🔊 Eres Fuerte", description: null, rowId: `Eres Fuerte`},
{title: "➥🔊 Bueno Master", description: null, rowId: `Bueno Master`},
{title: "➥🔊 🫂", description: null, rowId: `🫂`},
{title: "➥🔊 No Rompas más", description: null, rowId: `No Rompas más`},  
{title: "➥🔊 Traiganle una falda", description: null, rowId: `Traiganle una falda`},
{title: "➥🔊 Se están riendo de mí", description: null, rowId: `Se están riendo de mí`},
{title: "➥🔊 Su nivel de pendejo", description: null, rowId: `Su nivel de pendejo`},
{title: "➥🔊 Bienvenido/a", description: null, rowId: `Bienvenido`},
{title: "➥🔊 🥳", description: null, rowId: `🥳`},
{title: "➥🔊 👋", description: null, rowId: `👋`},
{title: "➥🔊 Elmo sabe donde vives", description: null, rowId: `Elmo sabe donde vives`},
{title: "➥🔊 tunometecabrasaramambiche", description: null, rowId: `tunometecabrasaramambiche`},
{title: "➥🔊 Y este quien es", description: null, rowId: `Y este quien es`},
{title: "➥🔊 Motivación", description: null, rowId: `Motivación`},
{title: "➥🔊 En caso de una investigación", description: null, rowId: `En caso de una investigación`},
{title: "➥🔊 Buen día grupo", description: null, rowId: `Buen día grupo`},
{title: "➥🔊 🙌", description: null, rowId: `🙌`},
{title: "➥🔊 Oye", description: null, rowId: `Oye`},
{title: "➥🔊 Ig de la minita", description: null, rowId: `Ig de la minita`},
{title: "➥🔊 Gaspi frase", description: null, rowId: `Gaspi frase`},
{title: "➥🔊 Vamos!!", description: null, rowId: `Vamos`},
{title: "➥🔊 Se pudrio", description: null, rowId: `Se pudrio`},
{title: "➥🔊 Gol!", description: null, rowId: `Gol`},
{title: "➥🔊 Las reglas del grupo", description: null, rowId: `Las reglas del grupo`},
]}, ]

const listMessage = {
text: `${wm}`,
footer: `*${lenguajeGB['smsTex16']()}*
${lenguajeGB['smsTex19']()}`,
title: null,
buttonText: `🔊 ${lenguajeGB['smsTex16']()} 🔊`, 
sections }
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})	

} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}}

handler.help = ['infomenu'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu2|audios|menú2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|audio)$/i
handler.exp = 60
//handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
