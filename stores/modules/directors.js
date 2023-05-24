
import { defineStore } from 'pinia'
export const useDirectorStore = defineStore({   
    id: 'directors',
    state: () => ({ 
        directors:[
            {
                id: 'tjasIR987654V',
                first_name: 'John',
                last_name: 'Doe',
                image: '',
            },
            {
                id: 'tjaczlLSASJLsIR987654V',
                first_name: 'Selemon',
                last_name: 'Alemayehu',
                image: '',
            },
            {
                id: 'tj45aCFNZvJasIR987654V',
                first_name: 'Meron',
                last_name: 'Getenet',
                image: '',
            },
            {
                id: 'tj45aCFNZadSFVFGvJasIR987654V',
                first_name: 'Abebe',
                last_name: 'Emran',
                image: '',
            },
            {
                id: 'tj45aCFNZadSFVFGvJasIR987654V',
                first_name: 'Bezabi',
                last_name: 'Yakob',
                image: '',
            }
        ],
       
        // ...state
    }),

    // ...getters
    getters: {
        getDirectors() {
            return this.directors
        }
    },

    actions: {
        addDirector(director) {
           console.log('Director is added')   
        },
        removeDirector(director) {
            console.log('Director is removed')
        },
        updateDirector(director) {
            console.log('Director is updated')
        },

        async loadDirectors() {
            console.log('Directors are loaded')
        },
        async loadDirector() {
           console.log('Director is loaded')
        }
        // ...actions
    }
})


