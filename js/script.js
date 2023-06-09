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
        },
        delateTask(index) {
            this.tasks.splice(index,1);
        },
        addTask() {
            if (this.inputText !== '') {
                let obj = {
                    text: this.inputText,
                    done: false
                }
                this.tasks.push(obj);
                this.inputText = '';
            }
        }
    },
}).mount('#app');