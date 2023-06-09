CONSEGNA: Rifare l'esercizio della to do list visto a lezione. Create un array di oggetti ( con proprietà text e done )che rappresentano le task e mostratele a schermo. Aggiungete poi le funzionalità di cambio dello stato del task (cambiate il valore di done), eliminazione di una task ed aggiunta di una nuova task.

- creo la struttura della pagina;
- creo un array di oggetti per i task;
- utilizzando un v-for ciclo gli oggetti dell'array per scrivere i task nel DOM;
- aggiungo un evento per modificare la proprietà done quando viene premuto il pulsante check;
- inserisco una condizione per cui quando viene premuto il pulsante check e quindi cambia lo stato di done viene modificata anche l'icona;
- inerisco un method per togliere dall'array un elemento tramite splice quando viene premuto il tasto elimina;
- aggiungo un nuovo metodo (addTask) che se il campo di input non è vuoto crea un nuovo oggetto e poi tramite la funzione push lo andrà ad aggiungere all'array;