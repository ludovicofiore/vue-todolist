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
            this.tasks.unshift(this.newTask);
            console.log(this.tasks);
            // this.newTask.text = "";
            
        },

        // funzione per rimuovere task
        removeTask(index) {
            this.tasks.splice(index, 1);
        }
    }

}).mount("#app");