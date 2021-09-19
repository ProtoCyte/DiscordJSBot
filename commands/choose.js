// Picks between any number of choices

const Discord = require('discord.js');

module.exports = {
    commands: ['choose', 'pick'],
    minArgs: 1,
    callback: (message, arguments, text, client) => {
// ~choose apple sauce;orange juice
// apple, sauce;orange, juice
// apple sauce;orange juice
        var choices = arguments.toString();
        var spaces = ' ';
        choices = choices.split(',').join(spaces);
        choices = choices.split(';');
        const {guild} = message;
        const {name} = guild;
        const icon = 'https://cdn.discordapp.com/emojis/794277715188252672.gif?v=1';

        const embed = new Discord.MessageEmbed()
            .setTitle(`${choices}`)
            .setThumbnail(icon)
            .addFields(
                        {
          name: 'Answer',
          value: choices[Math.floor(Math.random()*choices.length)],
        },


            )
            message.channel.send(embed);
       
      
    },
    permissions: 'ADMINISTRATOR',
    requiredRoles: [],
  }