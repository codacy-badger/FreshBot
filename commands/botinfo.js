const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    
    let bicon = bot.user.displayAvatarURL
        let botembed = new Discord.RichEmbed()
        .setDescription("Botinfo")
        .setColor("#15f153")
        .setThumbnail(bicon)
        .addField("Bot Name", bot.user.username)
        .addField("Bot ID", bot.user.id)
        .addField("Bot Owner", "UnlegitHax#4850 , byBackfishه#4941  & Niklas#4949 ")
        .addField("Created On", bot.user.createdAt)   
        .setTimestamp()    

        message.channel.send(botembed)
}

module.exports.help = {
    name: "botinfo"
}
