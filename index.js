const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client()
client.comands = new Discord.Collection();

const prefix = process.env.BOT_PREFIX;
const token = process.env.BOT_TOKEN;

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
	if (command.aliases) {
		command.aliases.forEach(alias => {
			client.commands.set(alias, command);
		});
	}
};

client.on('ready', async () => {
    console.log(`${client.user.tag} is online!`);
	client.user.setActivity('Your Heart! ♥ ツ')
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const cmd = args.shift().toLowerCase();
	if (!client.commands.has(cmd)) return;
	try {
		console.log(`[Command] ${message.author.tag} : ${message.content}`);
		client.commands.get(cmd).execute(message, args, cmd);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.login(token);