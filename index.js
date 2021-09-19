// Old bot startup

// const Discord = require('discord.js')
// const client = new Discord.Client()

// const config = require('./config.json')
// const command = require('./commands.js')
// const firstMessage = require('./first-message');
// const privateMessage = require('./private-message')
// const roleClaim = require('./role-claim')
// const poll = require('./poll')
// const welcome = require('./welcome');
// const memberCount = require('./member-count')
// const sendMessage = require('./send-message');


// client.on('ready',  () => {
//   console.log('The client is ready!')
//   poll(client);
//   welcome(client);
//   memberCount(client);
//   const whowap = client.guilds.cache.get('887158731832459304')
//   const hehexd = whowap.channels.cache.get('887417048852987904')

//   sendMessage(hehexd, 'hello world', 10)

//   roleClaim(client)
//   command(client, 'ban', (message) => {
//     const { member, mentions } = message

//     const tag = `<@${member.id}>`

//     if (
//       member.hasPermission('ADMINISTRATOR') ||
//       member.hasPermission('BAN_MEMBERS')
//     ) {
//       const target = mentions.users.first()
//       if (target) {
//         const targetMember = message.guild.members.cache.get(target.id)
//         targetMember.ban()
//         message.channel.send(`${tag} That user has been`)
//       } else {
//         message.channel.send(`${tag} Please specify someone to ban.`)
//       }
//     } else {
//       message.channel.send(
//         `${tag} You do not have permission to use this command.`
//       )
//     }
//   })

//   command(client, 'kick', (message) => {
//     const { member, mentions } = message

//     const tag = `<@${member.id}>`

//     if (
//       member.hasPermission('ADMINISTRATOR') ||
//       member.hasPermission('KICK_MEMBERS')
//     ) {
//       const target = mentions.users.first()
//       if (target) {
//         const targetMember = message.guild.members.cache.get(target.id)
//         targetMember.kick()
//         message.channel.send(`${tag} That user has kicked`)
//       } else {
//         message.channel.send(`${tag} Please specify someone to kick.`)
//       }
//     } else {
//       message.channel.send(
//         `${tag} You do not have permission to use this command.`
//       )
//     }
//   })
  
//   command(client, ['ping', 'test'], (message) => {
//     message.channel.send('Pong!')
//   })
//   privateMessage(client, 'ping', 'Pong!')
//   command(client, 'createtextchannel', (message) => {
//     const name = message.content.replace('~createtextchannel ', '')

//     message.guild.channels
//       .create(name, {
//         type: 'news',
//       })
//       .then((channel) => {
//         const categoryId = '887158731832459305'
//         channel.setParent(categoryId)
//       })
//   })
//   command(client, 'createvoicechannel', (message) => {
//     const name = message.content.replace('~createvoicechannel ', '')

//     message.guild.channels
//       .create(name, {
//         type: 'voice',
//       })
//       .then((channel) => {
//         const categoryId = '887158731832459305'
//         channel.setParent(categoryId)
//         channel.setUserLimit(10)
//       })
//   })
  
//   command(client, 'serverinfo', (message) => {
//     const { guild } = message

//     const { name, region, memberCount, owner, afkTimeout } = guild
//     const icon = guild.iconURL()

//     const embed = new Discord.MessageEmbed()
//       .setTitle(`Server info for "${name}"`)
//       .setThumbnail(icon)
//       .addFields(
//         {
//           name: 'Region',
//           value: region,
//         },
//         {
//           name: 'Members',
//           value: memberCount,
//         },
//         {
//           name: 'Owner',
//           value: owner.user.tag,
//         },
//         {
//           name: 'AFK Timeout',
//           value: afkTimeout / 60,
//         }
//       )

//     message.channel.send(embed)
//   })
//   command(client, 'embed', (message) => {
//     const logo =
//       'https://cdn.discordapp.com/emojis/794277715188252672.gif?v=1'

//     const embed = new Discord.MessageEmbed()
//       .setTitle('Example text embed')
//       .setURL('https://www.youtube.com/channel/UChPrh75CmPP9Ig6jISPnfNA')
//       .setAuthor(message.author.username)
//       .setImage(logo)
//       .setThumbnail(logo)
//       .setFooter('This is a footer')
//       .setColor('#00AAFF')
//       .addFields(
//         {
//           name: 'Field 1',
//           value: 'Hello world',
//           inline: true,
//         },
//         {
//           name: 'Field 2',
//           value: 'Hello world',
//           inline: true,
//         },
//         {
//           name: 'Field 3',
//           value: 'Hello world',
//           inline: true,
//         },
//         {
//           name: 'Field 4',
//           value: 'Hello world',
//         }
//       )

//     message.channel.send(embed)
//   })

//   client.users.fetch('302485530036142082').then((user) => {
//     user.send('Hello World!')
//   })
//   firstMessage(client, '887192331084767254', 'hello world!!!', ['🔥', '🍉'])
//   command(client, 'servers', (message) => {
//       client.guilds.cache.forEach((guild) => {
//           message.channel.send(`${guild.name} has a total of ${guild.memberCount} members`);
//       })
//   })
//   command(client, ['cc', 'clearchannel'], (message) => {
//         if (message.member.hasPermission('ADMINISTRATOR')) {
//             message.channel.messages.fetch().then((results) => {
//                 message.channel.bulkDelete(results);
//             })
//         }
//   })
//   command(client, 'status', (message) => {
//       const content = message.content.replace('~status', '');
//       client.user.setPresence({ status: 'dnd',
//       activity: {
//           name: content,
//           type: 'STREAMING',
//           url: 'https://twitch.tv/korena4'}})
//       })
//   }
// )

// client.login(config.token)