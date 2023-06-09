'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            tasks: [
                {
                    text: 'fare la spesa',
                    done: false
                },
                {
                    text: 'lavare la macchina',
                    done: false
                },
                {
                    text: 'stendere i panni',
                    done: false
                }
            ]
        }
    },
    methods: {
        doneStatus(index) {
            this.tasks[index].done = !this.tasks[index].done;
        }
    },
}).mount('#app');