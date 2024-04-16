import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => ({
        userFirstName: "",
        userLastName:"",
        userPseudo: "",
        userEmail: "",
        error: "",
    }),
    
    getters: {

    },

    actions:{
        async fetchUsers() {
            try {
                const response = await fetch("/users.json");
                const users = await response.json();
                return users.users;
            } catch (error) {
                this.error = "Quelque chose c'est mal passé";
                console.log(error);        
            }
        },

        register (firstName, lastName, email, pseudo) {
            this.userFirstName = firstName;
            this.userPseudo = pseudo;
            this.userLastName = lastName;
            this.userEmail = email;
        },

        async login(pseudo, password) {
            const users = await this.fetchUsers();

            const userAttempt = users.find((user) => {
               return user.pseudo == pseudo && user.password == password;
            })

            if (!userAttempt) {
                this.error = "Pseudo ou mot de passe incorrect";
            } else {
                this.userFirstName = userAttempt.firstName;
                this.userPseudo = userAttempt.pseudo;
                this.userLastName = userAttempt.lastName;
                this.userEmail = userAttempt.email;
            }

        },
        resetError() {
            this.error = "";
        }
    }
})