const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	name: 'coin-flip',
	comm: new SlashCommandBuilder().setName('coin-flip').setDescription('Flips a coin'),
	exec: async (interaction, client, main) => {

		await interaction.reply({
				embeds: [
					main.exports.embed.setDescription(
						['Heads', 'Tails'][Math.floor(Math.random() * 2)]
					)
				]
			});

	}
}