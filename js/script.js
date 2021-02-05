/*TRACCIA:
Eseguire in Vue.js una chiamata ajax, generare 10 email e stamparle a schermo.
La chiamata ajax vi ritornerà ogni volta un'email random.
Endpoint: https://flynn.boolean.careers/exercises/api/random/mail*/

new Vue({
  el: '#root',
  data: {
    emailRand: ''
  },
  mounted() {
    //Definisco una const 'self' per bypassare il problema di scope interno alla FX (per il response) che farò eseguire per 10 volte attraverso il ciclo For che andrò a scrivere
    const self = this;
    //Verifica in console che l'app sia collegata
    console.log('app caricata');
    //Ciclo per 10 volte la get su axios all'url specificato
    for (var i = 0; i < 10; i++) {
      axios.get(' https://flynn.boolean.careers/exercises/api/random/mail')
      .then(function(resp) {
        //Se la chiamata ha successo, in termini di risposta, allora evadi il risultato in console, ad ogni iterazione.
        console.log('email: ', resp.data);
        //Col .response risalgo esattamente al valore dell'email interna all'object restituito
        self.emailRand = resp.data.response;
      });
    }
  }

});
Vue.config.devtools = true;
