module.exports = {
    name: "ping",
    description: "ping command",
    async execute(message, args, cmd){
        message.reply('Pong!');
    }
}