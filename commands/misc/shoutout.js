//Shoutout to any person listed in the command
module.exports = {
    commands: ['so', 'shoutout'],
    minArgs: 1,
    maxArgs: 1,
    callback: (message, arguments, text, client) => {
      message.channel.send(`Go check out ${arguments} over at twitch.tv/${arguments}!`);
    },
    permissions: 'ADMINISTRATOR',
    requiredRoles: [],
  }