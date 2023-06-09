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
    }
}).mount('#app');