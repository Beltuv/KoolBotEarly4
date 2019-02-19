const commando = require("discord.js-commando");

//function Play(connection, message) {
    //var server = servers[message.guild.id];
   // server.dispatcher = connection.playStream(ytdl(server.queue[0], {filter: "audioonly"}));
   // server.queue.shift();
   // server.dispatcher.on ("end", function(){
       // if (server.queue[0]){
       //     Play(connection, message);
      //  } else {
     //       connection.disconnect();
      //  }
   // })
//}


class JoinChannelCommand extends commando.Command {
    constructor (client) {
        super(client, {
            name: "join",
            group: "music",
            memberName: "join",
            description: "Joins bot into message author's channel"
        })
    }

    async run(message, args) 
    {
        if (message.member.voiceChannel) 
        {
            if (!message.guild.voiceConnection) 
            {

                message.member.voiceChannel.join().then(connection => 
                    {
                     //var server = servers[message.guild.id]
                     message.reply("I have successfully joined.");
                    //server.queue.push(args)
                   // Play(connection, message);})
                    });
            }
        } else {
        message.channel.send("You do not have permission for this command.")
        }    
    }
}

module.exports = JoinChannelCommand;