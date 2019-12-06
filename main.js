const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "G/";

client.login('NjUyMjM4NTI4NzcxNzg0NzE0.XeljTQ.J2h4L2DDWqhTNt3QbrwogC0MkHI');


client.on('message', message => {
    if(message.content === "Galaxy ON"){
            message.reply('Je suis ON');
            console.log('répond é GON');
    }
})

lient.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + 'kick') {
       if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas kick cet utilisateur :x:")
       if (!member.kickable) return message.channel.send("Je ne peux pas exclure cet utilisateur :sunglass:")
       member.kick()
       message.channel.send('**' + member.user.username + '** a été exclu :white_check_mark:')
    }
})
 

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'ban' + number){
       if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas bannir cet utilisateur :x:")
       if (!member.bannable) return message.channel.send("Je ne peux pas bannir cet utilisateur :sunglass:")
       if (!number) return message.channel.send('__***Merci de mettre une duration !!!***__')
       message.guild.ban(member, {days: number})
       message.channel.send('**' + member.user.username + '** a été banni :white_check_mark:')
    }
})


client.on("message",  message => {

    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLowerCase() === prefix + "clear"){
        if (!message.member.hasPermission('MANAGE_MESSAGE')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
        let count = args[1]
        if (!count) return message.channel.send("Veuillez indiquer un nombre de message a supprimer")
        if (isNaN(count)) return message.channel.send("Veuillez indiquer un nombre valide")
        if (count < 1 || count > 900000) return message.channel.send("veuillez indiquer un nombre entre 1 et 900000")
        message.channel.bulkDelete(parseInt(count) + 1)
    }
})

client.on('message', message =>{
    if(message.content === "Yosh Goglixy !!!"){
        message.reply("Vas te faire... Yosh cv ___***" + member.user.member + "**___ ?");
        console.log("Répond a Yosh Me");
    }
});

client.on('message', message =>{
    if(message.content === "Oui et toi ?"){
        message.reply("Oui cv Merci :grin: :galaxy_logo:. Tu fais quand même la conversation avec un bot mdr :joy:");
        console.loog("Répond a UI ET TOI");
    }
});

client.on('message', message =>{
    if(message.content === "C claire XDDDD :joy:"){
        message.reply("MDR tu as que ça a faire :joy: :joy: :joy: XDDDDDDD (___***c'est un easterEGGG***___)");
        console.log("easterEGG 1");
    }
});

client.on('message', message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'Enjoy' + number){
        message.channel.send("I Love The Fairy Tail Annime")
    }
})

client.on('message', message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'surprise' + number){
        message.channel.send("I love GuiDon it's a typical Japanese dish")
    }
})