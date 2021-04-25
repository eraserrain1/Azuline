module.exports = {
    name: "avatar",
    description: "avatar command",
    async execute(message, args, cmd){
        let member;
        if(args[1]) {
            member = message.mentions.users.first();
        } else { member = message.author; }
        let avatar = member.displayAvatarURL();
        message.channel.send(avatar);
    }
}