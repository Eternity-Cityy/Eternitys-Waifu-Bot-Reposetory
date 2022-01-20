const Discord = require("discord.js")

const TOKEN = ("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "DIRECT_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "Hi Waifu") {
        message.reply("Hello <3")
    }
})

client.login(pricess.env.TOKEN)
