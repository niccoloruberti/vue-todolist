'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            tasks: [
                {
                    text: 'fare la spesa',
                    done: false,
                    editEnabled: false
                },
                {
                    text: 'lavare la macchina',
                    done: false,
                    editEnabled: false
                },
                {
                    text: 'stendere i panni',
                    done: false,
                    editEnabled: false
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
        },
        editEnabledStatus(index) {
            this.tasks[index].editEnabled = !this.tasks[index].editEnabled
        }
    },
}).mount('#app');