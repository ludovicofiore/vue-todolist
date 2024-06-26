// creo variabile per vue
const { createApp } = Vue;

createApp({
    data() {
        return {

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
        // funzione per rimuovere task
        removeTask(index) {
            this.tasks.splice(index, 1);
        }
    }

}).mount("#app");