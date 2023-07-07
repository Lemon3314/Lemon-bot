import {SlashCommandBuilder} from 'discord.js'

export const comamnd = new SlashCommandBuilder()
 .setName('hello')
 .setDescription('hello command')

export const action = async (interaction) =>{
 await interaction.reply('hello!')
}
