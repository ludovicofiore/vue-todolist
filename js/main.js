// creo variabile per vue
const { createApp } = Vue;

createApp({
    data() {
        return {
            // creo oggetto per task aggiunta
            newTask: {
                text: "",
                done: false
            },

            // creo proprietà per messaggio errore
            errorMessage: false,

            // creo array con tasks
            tasks: [
                {
                    text: "fare la spesa",
                    done: true,
                },
                {
                    text: "portare fuori il cane",
                    done: false,
                },
                {
                    text: "controlla mail",
                    done: true,
                },
                {
                    text: "chiamare dentista",
                    done: true,
                },
                {
                    text: "buttare la spazzatura",
                    done: false,
                },
            ]

        }
    },

    methods: {
        // funzione per aggiungere task
        addTask() {

            // condizione di validità input
            if (this.newTask.text !== "" && this.newTask.text.length >= 4) {
                // creo oggetto da pushare in array
                const clonedTask = { ...this.newTask};

                // pusho il nuovo oggetto
                this.tasks.unshift(clonedTask);

                this.errorMessage = false;
            } else {
                this.errorMessage = true;
            }
            
            console.log(this.tasks);
        },

        // funzione per rimuovere task
        removeTask(index) {
            this.tasks.splice(index, 1);
        }
    }

}).mount("#app");