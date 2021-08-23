const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, Intents } = require('discord.js');
const Config = require('./.config.json');
const Refresh = require('./deploy_slash.js');
const { readdirSync } = require('fs');

const client = new Client({
	intents: [
		Intents.FLAGS.GUILDS
	]
});

const commands = [];
const interactions = [];

function Reload() {
	commands.length = 0;
	interactions.length = 0;

	console.log('[*] Loading commands')
	readdirSync('./commands/').forEach(file => {
		if(!file.endsWith('.js')) return;
		try {
			commands.push(require(`./commands/${file}`));
			console.log(`\t[+] Loaded ${file}`)
		} catch(e) {
			console.log(`\t[-] Failed loading ${file} - ${e}`)
		}
	});
	console.log('[+] Loading done!')

	commands.map(cmd => cmd.comm).forEach(cmd => interactions.push(cmd))

	Refresh(interactions, client);
}

client.on('ready', () => {
	console.log('Bot has logged in!');
	Reload();
	client.application?.fetch();
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	console.log(`Slash command used: ${interaction.commandName} by ${interaction.user.tag}`)

	commands.filter(cmd => cmd.name === interaction.commandName)[0]?.exec(interaction, client, module);
});

module.exports = {
	Reload: Reload
}

client.login(Config.token);