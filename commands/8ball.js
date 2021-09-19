//A Magic 8Ball
const Discord = require('discord.js');

module.exports = {
    commands: '8ball',
    minArgs: 1,
    callback: (message, arguments, text, client) => {

        var eightBallQuestion = arguments.toString();
        var spaces = ' ';
        eightBallQuestion = eightBallQuestion.split(',').join(spaces);
        const responses = ["As I see it, yes.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.",
        "Don’t count on it.", "It is certain.", "It is decidedly so.", "Most likely.", "My reply is no.", "My sources say no.",
        "Outlook not so good.", "Outlook good.", "Reply hazy, try again.", "Signs point to yes.", "Very doubtful.", "Without a doubt.",
        "Yes.", "Yes – definitely.", "You may rely on it."];
        const {guild} = message;
        const {name} = guild;
        const icon = 'https://media.istockphoto.com/vectors/billiard-black-eight-vector-id614744860?k=20&m=614744860&s=612x612&w=0&h=hl4EtO9_2oEzndtohCGqwUt6sxtxlvUHyhJlZ2YvVRk=';

        const embed = new Discord.MessageEmbed()
            .setTitle(`${eightBallQuestion}`)
            .setThumbnail(icon)
            .addFields(
                        {
          name: 'Answer',
          value: responses[Math.floor(Math.random()*responses.length)],
        },


            )
            message.channel.send(embed);
       
      
    },
    permissions: 'ADMINISTRATOR',
    requiredRoles: [],
  }