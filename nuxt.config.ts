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
      // "@nuxtjs/apollo"

    ],
    // apollo: {
    //   authType: "Bearer",
    //   authHeader: "Authorization",
    //   tokenStorage: "cookie",
    //   clients: {
    //     default: {
    //       tokenName: "github-token",
    //       httpEndpoint: "https://vue-shopping.hasura.app/v1/graphql",
    //       headers: {
    //         "x-hasura-admin-secret": "ym6arlrrdMol6MfV156smTMo8L72B6QBLxiyZtWUZl0w0YxctdVN9YTppWkYB5Gn"
    //       },
    //     },
    //   },
    // },
    
    imports: {
      dirs: ['stores'],
    },
    
})



