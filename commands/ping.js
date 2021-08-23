const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'ping',
	comm: new SlashCommandBuilder().setName('ping').setDescription('Get client ping'),
	exec: async (interaction, client, main) => {

		const embed = new MessageEmbed().setColor('#ABCDEF').setFooter(`Made by ${client.application?.owner?.tag}`)

		let reply = await interaction.reply({ embeds: [ embed.setDescription('Pong!') ], fetchReply: true });
		await interaction.editReply({ embeds: [ embed.setDescription(String(Date.now() - reply.createdAt) + 'ms') ] });

	}
}