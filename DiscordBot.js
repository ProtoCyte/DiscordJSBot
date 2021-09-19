//New Startup Command 
// Create a new Bot and give it a token cause you arent getting mine
// To startup the discord bot, type 'node DiscordBot.js' in the command line

const path = require('path')
const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const antiAd = require('./anti-ad')
const status = require('./status')
const firstMessage = require('./first-message')
const roleClaim = require('./role-claim');
const memberCount = require('./member-count');
const welcome = require('./welcome')
const persistantPoll = require('./persistant-poll');

client.on('ready', async () => {
  console.log('The client is ready!')
  roleClaim(client);
  antiAd(client);
  memberCount(client);
  welcome(client);
  persistantPoll(client);
  firstMessage(client, '887192331084767254', 'This is True Pain', ['🔥', '🍉','💡']);

  const baseFile = 'command-base.js'
  const commandBase = require(`./commands/${baseFile}`)

  const readCommands = (dir) => {
    const files = fs.readdirSync(path.join(__dirname, dir))
    for (const file of files) {
      const stat = fs.lstatSync(path.join(__dirname, dir, file))
      if (stat.isDirectory()) {
        readCommands(path.join(dir, file))
      } else if (file !== baseFile) {
        const option = require(path.join(__dirname, dir, file))
        commandBase(client, option)
      }
    }
  }

  readCommands('commands')
})

client.login(config.token)