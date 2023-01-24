// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    app:{
        head:{
            title:`Nuxt Practice App`,
            meta:[{
                name:'description',
                content:"NUXT 3 pratice for everything"
            }],
            link:[{rel:'stylesheet',href:'https://fonts.googleapis.com/icon?family=Material+Icons'}]
        }
    }
})
