const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	name: 'rules',
	comm: new SlashCommandBuilder().setName('rules').setDescription('Display the rules of the server'),
	exec: async (interaction, client, main) => {

		const rules = [
			'Be kind, civil and respectful to one another.',
			'Ask before self-promoting.',
			'Do not spam messages in the chats.',
			'List to the moderators.',
			'Don\'t argue with each other.',
			'Have fun!'
		]

		await interaction.reply({
				embeds: [
					main.exports.embed.setDescription(
						rules.map((rule, index) => `${index + 1}. ${rule}`).join`\n`
					)
				]
			});

	}
}

