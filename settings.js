//═══════════════════════════════════════════════════════//
//
//                              𝙶𝙾𝙹𝙾-𝚂𝙰𝚃𝙾𝚁𝚄 𝓫𝔂 𝓷𝓮𝔁𝓾𝓼𝓝𝔀
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['+9660559851244']
global.premium = ['+9660559851244']
global.ownernomer = '+9660559851244'
global.ownername = '𝙰𝙽𝚇𝙰𝙸'
global.botname = '𝙰𝙽𝚇𝙰𝙸-𝙱𝙾𝚃'
global.footer = '©𝙰𝚗𝚡𝚊𝚒Inc.'
global.ig = 'https://instagram.com/rip.anzai'
global.region = 'Saudi Arabia, Riyadh, Riyadh'
global.sc = 'https://instagram.com/rip.anzai'
global.myweb = 'https://instagram.com/rip.anzai'
global.packname = 'Anxai-Bot'
global.author = 'Anxai'
global.sessionName = 'Anxai'
global.prefglobal.sessionName = 'Anxai'
global.prefaa = ['/','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'تم ✓',
    admin: 'هذا الخيار للمشرفين فقط! !',
    botAdmin: 'يجب ان يكون البوت مشرف اولا!',
    owner: 'هذا الخيار للمالك فقط!',
    group: 'هذا الخيار للمجموعات فقط؛!',
    private: 'هذا الخيار للخاص فقط! ',
    bot: 'هذا الخيار للبوت فقط',
    wait: 'انتظر لحظة... ',
    error: 'خطأ! ربما العنوان خاطئ🤔!',
    endLimit: 'حدك اليومي قد انتهى, الحد سيعاد تعيينه كل 12 ساعة',
}
    global.limitawal = {
    premium: "Infinity",
    free: Infinity,
    monayawal: 1000000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
