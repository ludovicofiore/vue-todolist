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
                    done: false,
                },
                {
                    text: "buttare la spazzatura",
                    done: false,
                },
            ]

        }
    }
}).mount("#app");