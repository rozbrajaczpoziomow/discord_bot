const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	name: 'coc-gamemode',
	comm: new SlashCommandBuilder().setName('coc-gamemode').setDescription('Choose a random COC Gamemode'),
	exec: async (interaction, client, main) => {

		await interaction.reply({
				embeds: [
					main.exports.embed.setDescription(
						['Fastest', 'Shortest', 'Reverse'][Math.floor(Math.random() * 3)]
					)
				]
			});

	}
}