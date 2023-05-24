// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
    },
    modules: [
      [
        '@pinia/nuxt',
        {
          autoImports: ['defineStore', 'acceptHMRUpdate'],
        },
        
      ],
      "@nuxtjs/apollo"

    ],
    apollo: {
      autoImports: true,
      authType: 'Bearer',
      authHeader: 'Authorization',
      tokenStorage: 'cookie',
      proxyCookies: true,
      clients: {
        default: {
          httpEndpoint: "https://vue-shopping.hasura.app/v1/graphql"
        },
        client: './apollo/client.js' ,

      },
  
    },
    
    imports: {
      dirs: ['stores'],
    },
    
})



