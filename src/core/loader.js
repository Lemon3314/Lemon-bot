import {REST, Routes} from 'discord.js'
import fg from 'fast-glob'

const updateSlashCommands = () => {
   const rest = new REST({version:10}).setToken(process.env.TOKEN)
   rest.put(
     Routes.applicationGuildCommands(
        process.env.APPLICATION_ID,
        '984433887973371917'
     ),
     {
        body: {}
     }
   )
}


export const loadComamnds = async() => {
   const files = await fg('./src/commands/**/index.js')
   console.log(files)
   }
