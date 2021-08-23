const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	name: 'invite',
	comm: new SlashCommandBuilder().setName('invite').setDescription('Generate an invite for the server'),
	exec: async (interaction, client, main) => {

		let invite = await interaction.guild.invites.create(interaction.channel.id, { maxUses: 1, unique: true })

		await interaction.reply({
				embeds: [
					main.exports.embed.setDescription(
						invite.url
					)
				],
				ephemeral: true
			});

	}
}