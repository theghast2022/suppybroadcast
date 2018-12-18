const Discord = require("discord.js");
const client = new Discord.Client();
var table = require('table').table
var ti={}  
,spee={}
,attentions={};
const googl = require('goo.gl');  
var prefix = "+";

client.on('message', message => { /// Mal Codes 
if (message.content.startsWith(prefix + 'help')) { /// This is The DMS Code Send The Help In DMS // Code By NotGucci /// Mal Codes 
    let pages = [`
***__وصف عن البوت__***  
**
:gem:  البوت فيه كثير ميزات حلوة و جميلة
 ا:rocket: البوت يعمل 24 ساعه 
بوت يمتلك مضد جحفله +سبام+نشر روابط+مضاد سب :gear: 
**
        ***__General orders__***
**
『#allbots/لعرض جميع البوتات الي بالسيرفر』
『#server/يعرض لك معلومات عن السيرفر』
『#bot/يعرض لك كل معلومات البوت』
『#skin <name>/يعرض لك سكنك بماين كرافت』
『#count/يعرض لك عدد الاشخاص بالسيرفر بدون بوتات』
『#invites/ يعرض لك  عدد انفايتاتك بالسيرفر 』
『#invite-codes/يعرض لك روابط الانفايتات حكك في السيرفر 』
『#cal/اله حاسبة』
『#trans <language> <any thing>/يترجم لك الي تبيه من اي لغة』
『#short/يختصر لك رابط كبير الى رابط صغير』
『#tag/يكتب لك الكلمة بشكل جميل وكبير』
『#google/للبحث في قوقل عن طريق الدسكورد』
『#perms/يعرض لك برمشناتك بالسيرفر』
『#yn/تسأل بوت والبوت يجاوبك بنعم او لا』
『#w/امر يخليك مثل بوت تكتب عبره مع امر ويسويك بوت』
『#za5/يزخرف لك كلمة او جملة』
『#rooms/يعرض لك كل الرومات الي بالسيرفر مع عددها』
『#roles/يعرض لك كل الرانكات بالسيرفر بشكل جميل』
『#emojilist/يعرض لك كل الايموجيات الي بالسيرفر』
『say/يكرر الكلام الي تكتبو』
『#image/صورة السيرفر』
『#members/��عرض لك عدد كل حالات الاشخاص وعدد البوتات وعدد الاشخاص』
『#id/معلومات عنك』
『#profile/عرض بروفايل حقك』
『#tc/انشاء روم مؤقت ويمكنك تحديد الاعدادات』
『#bans / عدد الاشخاص المبندة 』
『#voice /  يوم لك بكتابه مجموع عدد الاشخاص الموجودين برومات』
『#avatar/صورتك او صورة الي تمنشنو』
『#embed/يكرر الي تقولو بشكل حلو』
『#discrim/كود يضهر لك الاشخاص نفس تاقك』
『#emoji <any things>/لتحويل اي كلمه تقولها الي ايموجي』
『#support/سيرفر الدعم』
『#contact/ارسال اقتراح او لمراسلة صاحب البوت』
**
  `
,`
        ***__Administrative Orders__***
**
『#move @user /  لسحب الشخص الى روومك』
『#voiceonline /  لتفعيل خاصيه فويس اونلاين يسحب عدد الاشخاص موجودين برومات』
『#bc / رسالة جماعية الى كل اعضاء السيرفر』
『#bcrole / لارسال رساله جماعي لرتبه محدده يجب تمنشنها 』
『#role @user <rank> / لأعطاء رتبة لعضو معين』
『#roleremove @user <rank> / لازالة الرتبة من شخص معين』
『#role all <rank> / لأعطاء رتبة للجميع』
『#role humans <rank> / لأعطاء رتبة للاشخاص فقط』
『#role bots <rank> / لأعطاء رتبة لجميع البوتات』
『#hchannel / اخفاء الشات』
『#schannel / اضهار الشات المخفية』
『#clr <numbr> / مسح الشات بعدد』
『#clear / مسح الشات』
『#mute @user <reason> / اعطاء العضو ميوت لازم رتبة <Muted>』
『#unmute @user / لفك الميوت عن الشخص 』
『#kick @user <reason> / طرد الشخص من السيرفر』
『#ban @user <reason> / حضر الشخص من السيرفر』
『#mutechannel / تقفيل الشات』
『#unmutechannel / فتح الشات』
『#dc / مسح كل الرومات』
『#dr / <مسح كل الرانكات <لازم تكون رانك البوت فوق كل الرانكات』
『#ct <name> / انشاء شات』
『#cv <name> / انشاء رووم فويس』
『#delet <name> / مسح الشات او الرووم فويس』
『❖#ccolors <number> / ينشا لك الوان مع كم الوان تبي』
   `,`
        ***__Music orders__***
**
『${prefix}play / لتشغيل أغنية برآبط أو بأسم』
『${prefix}skip / لتجآوز الأغنية الحآلية』
『${prefix}pause / إيقآف الأغنية مؤقتا』
『${prefix}resume / لموآصلة الإغنية بعد إيقآفهآ مؤقتا』
『${prefix}vol / لتغيير درجة الصوت 100 - 0』
『${prefix}stop / لإخرآج البوت من الروم』
『${prefix}np / لمعرفة الأغنية المشغلة حآليا』
『${prefix}queue / لمعرفة قآئمة التشغيل』
**
        ***__Games orders__***
 **       
『#rps / حجر ورقة مقص』
『#speed / اسرع كتابة』
『#quas / اسئلة عامة』
『#نكت / نكت 』
『#لعبة فكك / فكك』
『#عواصم عشوائي/عواصم』
『#لعبة كت تويت / كت تويت』
『#roll <number> / قرعة』
『#لو خيروك بطريقة حلوة / لو خيروك』
『#لعبة مريم / مريم』
『#فوائد ونصائح  / هل تعلم』
『#يعطيك عقابات قاسية / عقاب 』
**
   
`]
    let page = 1;

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`) /// Mal Codes 
    .setDescription(pages[page-1])

    message.author.sendEmbed(embed).then(msg => { /// Mal Codes 

        msg.react('◀').then( r => {
            msg.react('▶')

 
        const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id; /// Mal Codes 
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id; /// Mal Codes 
 

        const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000}); /// Mal Codes 
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000}); /// Mal Codes 



        backwards.on('collect', r => {
            if (page === 1) return; /// Mal Codes  
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`); /// Mal Codes  
            msg.edit(embed)
        })
        forwards.on('collect', r => {  /// Mal Codes 
            if (page === pages.length) return; /// Mal Codes 
      
      page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        })
    })
    }
});  /// Mal Codes 
client.on('message', message => {
     if (message.content === (prefix + "help")) {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#8650a7")
  .addField("Done" , " تــــم ارســالك في الخــاص")
  message.channel.sendEmbed(embed);
    }
}); /// Mal Codes  
client.login("NTA4MjYwMzExMzU1MDk3MDk4.DvcmuA.OZP91zAb-jkzJ2sENTRLGzxdzaE"); 