//Wwelcomes the newest user that joins the discord
module.exports = (client) => {
    const channelId = '887417048852987904' // welcome channel
    const targetChannelId = '887158731832459307' // rules and info
  
    client.on('guildMemberAdd', (member) => {
      const message = `Please welcome <@${
        member.id
      }> to the server! Please check out ${member.guild.channels.cache
        .get(targetChannelId)
        .toString()}`
  
      const channel = member.guild.channels.cache.get(channelId)
      channel.send(message)
    })
  }