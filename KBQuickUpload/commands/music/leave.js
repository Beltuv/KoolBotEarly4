const commando = require("discord.js-commando");

class leaveChannelCommand extends commando.Command {
    constructor (client) {
        super(client, {
            name: "leave",
            group: "music",
            memberName: "leave",
            description: "Removes bot from voice channel"
        })
    }

    async run(message, args) {
        if (message.guild.voiceConnection) {
            message.guild.voiceConnection.disconnect();
        } else {
            message.reply("I must be in a voice channel to be removed.")
        }
    }
}

module.exports = leaveChannelCommand;