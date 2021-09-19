// Sends the first message in a channel

const addReactions = (message, reactions) => {

    if (reactions.length > 0) {
        message.react(reactions[0])
        reactions.shift()
      setTimeout(() => addReactions(message, reactions), 750)
    }
  }
  
  module.exports = async (client, id, text, reactions = []) => {
    const channel = await client.channels.fetch(id)
  
    channel.messages.fetch().then((messages) => {
      if (messages.size === 0) {
        // Send a new message
        channel.send(text).then((message) => {
          addReactions(message, reactions)
        })
      } else {
        // Edit the existing message
        for (const message of messages) {
          message[1].edit(text)
          addReactions(message[1], reactions)
        }
      }
    })
  }