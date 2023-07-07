import {defineConfig} from 'vite'
import path, { resolve } from 'path'


export default defineConfig({
 resolve:{
    alias:{
        '@':path.resolve(__dirname,'./src'),
    }
 }
})