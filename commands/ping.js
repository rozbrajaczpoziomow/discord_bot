const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	name: 'ping',
	comm: new SlashCommandBuilder().setName('ping').setDescription('Get client ping'),
	exec: async (interaction, client, main) => {

		let reply = await interaction.reply({ embeds: [ main.exports.embed.setDescription('Pong!') ], fetchReply: true });
		await interaction.editReply({ embeds: [ main.exports.embed.setDescription(String(Date.now() - reply.createdAt) + 'ms') ] });

	}
}