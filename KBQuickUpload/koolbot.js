const commando = require("discord.js-commando");
const ytdl = require("ytdl-core");
const bot = new commando.Client();

bot.registry.registerGroup('simple');
bot.registry.registerGroup('random');
bot.registry.registerGroup('greetings');
bot.registry.registerGroup('imagecommands');
bot.registry.registerGroup('music');
bot.registry.registerCommandsIn(__dirname + "/commands")

bot.on('ready', () => {
    bot.user.setActivity("Club Penguin");
  });

bot.on ('message', (message) => { //Image commands (Have to leave here until the folder way is figured out)
    if (message.content.startsWith ('kfc')) {
      message.channel.send('You better order some popcorn chicken!', {files: ["./images/commandimages/KFC_0.png"]});
    }
    if (message.content.startsWith ('astroneer')) {
      message.channel.send('This a just a beautiful game', {files: ["./images/commandimages/astro.png"]});
    }
    if (message.content.startsWith ('lemon')) {
      message.channel.send('Lemonade?...Anyone?', {files: ["./images/commandimages/lemon.png"]});
    }
    if (message.content.startsWith ('mcdonalds')) {
      message.channel.send('Healthiest place to eat. Ever.', {files: ["./images/commandimages/mcdonalds.png"]});
    }
    if (message.content.startsWith ('minecraft')) {
      message.channel.send('Hope you do not get blocked from this server...', {files: ["./images/commandimages/Minecraft-Wallpaper-minecraft-37763094-2560-1600.png"]});
    }
    if (message.content.startsWith ('pizza')) {
      message.channel.send('There is no comment. This is just good.', {files: ["./images/commandimages/pizza.png"]});
    }
    if (message.content.startsWith ('rss')) {
      message.channel.send('No comment.', {files: ["./images/commandimages/rainbow-six-siege-4k-artwork-dz.png"]});
    }
    if (message.content.startsWith ('roblox')) {
      message.channel.send({files: ["./images/commandimages/roblox.png"]});
    }
    if (message.content.startsWith ('eggs')) {
      message.channel.send('Anyone order eggs?', {files: ["./images/commandimages/sunny-side-up-eggs-hero.png"]});
    }
    

});

bot.login("NTQ0NzI0MzgzNjcxNzc5MzU4.D0ZKvg.xf4RLQTd_lhhbqiNd5l8xSm8CTk"); //TOKEN