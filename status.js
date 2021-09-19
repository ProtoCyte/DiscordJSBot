// OLD STATUS COMMAND THAT DIDNT DO ANYTHING
module.exports = (client) => {
    client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`);
    
        client.user.setPresence({
            status: 'online',
            activity: {
                name: ".help",
                type: "PLAYING"
            }
        });
    })};
  
