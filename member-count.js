// Updates the name of a voice channel whenever a person joins/leaves
module.exports = (client) => {
    const channelId = '887472142202048553'
  
    const updateMembers = (guild) => {
      const channel = guild.channels.cache.get(channelId)
      channel.setName(`Members: ${guild.memberCount.toLocaleString()}`)
    }
  
    client.on('guildMemberAdd', (member) => updateMembers(member.guild))
    client.on('guildMemberRemove', (member) => updateMembers(member.guild))
  
    const guild = client.guilds.cache.get('887158731832459304')
    updateMembers(guild)
  }