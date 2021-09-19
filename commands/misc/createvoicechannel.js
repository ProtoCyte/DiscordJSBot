// Creates a voice channel at the top of the discord


module.exports = {
    commands: 'createvoicechannel',
    permissionError: 'You need admin permissions to run this command',
    minArgs: 1,
    callback: (message, arguments, text, client) => {
        var name = arguments.toString();
        var spaces = ' ';
        name = name.split(',').join(spaces);
        
    message.guild.channels.create(name, {
        type: 'voice',
    })}       
       ,
    permissions: 'ADMINISTRATOR',
    requiredRoles: [],
  }