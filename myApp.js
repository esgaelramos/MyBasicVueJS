var miAppSexy = new Vue({
    el: '#miApp',
    data: {
        titulo: 'Nueva instancias: Directivas',
        aparecer: false,
        tituloenlace: 'Este es un enlace',
        num1: 4,
        num2: 6, 
        frutas: ['Manzana', 'Uva', 'Naranja', 'Melon'],
        ingredientes: [
            {'id': 001, 'name': 'Arroz'},
            {'id': 002, 'name': 'Aceite'},
            {'id': 003, 'name': 'Harina'},
        ],
        contador: 10,
        numero1: 0,
        numero2: 0,
    },
    methods: {
        saludar: function(){
            console.log('Saludando con Methods')
        },
        probrandoParametros: function(a, b){
            console.log(a + b)
            return a + b
        },
        incrementarContador: function(){
            this.contador = this.contador + 10
            //no sé para qué es el código de abajo:)
            return this.contador + 10
        },
        sumarNumeros: function(){
            return parseInt(this.numero1) + parseInt(this.numero2)              
        }
    },
})