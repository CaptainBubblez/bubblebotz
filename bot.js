var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: https://discordapp.com/api/oauth2/authorize?client_id=438103607716347914&permissions=8&scope=bot,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bubblebotz + ' - (' + 438103607716347914 + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == 'b!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // b!ping
            case 'ping':
                bot.sendMessage({
                    to: 414164000943636492,
                    message: 'Pong!'
                });
            break;
            // b!help
            case 'help':
                bot/sendMessage({
                    to: 414164000943636492,
                    message: 'Need help? Just talk to random people in the server... :P I know it is not that many but who cares...'
                });
            break;
            // b!rules
            case 'rules'
                bot/sendMessage({
                    to: 414164000943636492,
                    message: 'Specfic rules: Don't be rude, no PORN, no inappropriate images and words, don't spam in any room except only the room that says "spam", and CAN YOU JUST READ THE RULES IN THE INFO ROOM?'
                });
            break;
         }
     }
});
