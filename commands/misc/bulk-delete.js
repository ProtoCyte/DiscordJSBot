// Delete a channel's contents, as long as they are within 2 weeks old (Because discord doesnt want you to delete anything older)

module.exports = {
    commands: ['cc', 'clearchannel'],
    permissionError: 'You need admin permissions to run this command',
    callback: (message, arguments, text) => {
        if (message.member.hasPermission('ADMINISTRATOR')) {
                        message.channel.messages.fetch().then((results) => {
                            message.channel.bulkDelete(results);
                        })
    }},
    permissions: 'ADMINISTRATOR',
    requiredRoles: [],
  }