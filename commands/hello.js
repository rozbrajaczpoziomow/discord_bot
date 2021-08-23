const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	name: 'hello',
	comm: new SlashCommandBuilder().setName('hello').setDescription('Say hello'),
	exec: async (interaction, client, main) => {

		console.log(interaction);

		await interaction.reply({
				embeds: [
					main.exports.embed.setDescription(
						`Hello, ${interaction.user.username}`
					)
				]
			});

	}
}