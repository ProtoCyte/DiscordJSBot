//Change the status of the Bot 
module.exports = {
    commands: 'status',
    
    permissionError: 'You need admin permissions to run this command',
    minArgs: 1,
    callback: (message, arguments, text, client) => {
        var statusName = arguments.toString();
        var spaces = ' ';
        statusName = statusName.split(',').join(spaces);

        client.user.setPresence({  status: 'dnd',
              activity: {
                  name: statusName,
                  type: 'STREAMING',
                  url: 'https://github.com/ProtoCyte/DiscordJSBot'}})
              
       },
    permissions: 'ADMINISTRATOR',
    requiredRoles: [],
  }