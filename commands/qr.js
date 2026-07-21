const qrGenerator = require('../utils/qrGenerator');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageAttachment } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('qr')
        .setDescription('Generate a QR Code')
        .addStringOption(option =>
            option
                .setName('url')
                .setDescription('URL to encode')
                .setRequired(true))
        .addIntegerOption(option =>
            option
                .setName('size')
                .setDescription('QR Code Size in pixels')),

    async execute(interaction) {

        const url = interaction.options.getString('url');
        const size = interaction.options.getInteger('size') || 200;

        try {

            const qrBuffer = await qrGenerator.generateQR(url, size);

            const attachment = new MessageAttachment(
                qrBuffer,
                'qrcode.png'
            );

            await interaction.reply({
                files: [attachment]
            });

        } catch (err) {

            console.error(err);

            await interaction.reply({
                content: 'Failed to generate QR Code.',
                ephemeral: true
            });

        }

    }
};