var propiedadesAppSexy = new Vue({
    el: '#propiedadesApp',
    data: {
        //lo mejor sería tener los siguientes 3 en un objeto, pero supongamos que debemos trabajar con esto
        precios: [100.2, 300, 300.5, 400.5],
        cantidades: [20, 10, 40, 90],
        productos: [
            'zapatos',
            'camisetas',
            'gorras',
            'lentes',
        ],
        dolar: 20,
        kwarg: '',
        full_name: '',
        direccion: '',
        comprobante: '',
           
    },
    computed: {
        montoPagar: function(){
            var total = 0
            for (let i = 0; i < this.precios.length; i++) {
                const monto = this.precios[i] * this.cantidades[i]
                total = total + monto
            }
            return total*this.dolar
        },
    },
    watch: {
        // kwarg: function () {
        //     console.log('Se escibió:', this.kwarg)
        // }
        //O al ser una función con parametros más fácil
        // kwarg: function (val) {
        //     console.log('Se escibió:', val)
        // }
        //Y para imprimir el valor antiguo y el nuevo:
        kwarg: function (antes, ahora) {
            console.log('Antes dijo:', antes)
            console.log('Ahora dices:', ahora)
        },
        full_name: function (nuevo) {
            this.comprobante = 'Comprobante para ' + nuevo + ' con dirección de ' + this.direccion
        },
        direccion: function (nuevo) {
            this.comprobante = 'Comprobante para ' + this.full_name + ' con dirección de ' + nuevo
        }
        
    },
    methods: {
        sumarVentas: function() {
            var total = 0
            for (let i = 0; i < this.precios.length; i++) {
                const monto = this.precios[i] * this.cantidades[i]
                total = total + monto
            }
            return total*this.dolar
        },
        buscarProducto: function() {
            var clave_busqueda = this.kwarg
            return this.productos.filter(
                function (valor) {
                    return valor.includes(clave_busqueda)
                }
            )
        },
    }

})