var appRecetaSexy = new Vue({
    el: '#appReceta',
    data: {
        lista_recetas:  [
            {
              "id": "001",
              "nombre": "Receta de Tarta de manzana sin azúcar",
              "descripcion": "Descorazona dos de las manzanas y pélalas. Trocea en cubos grandes y ponlos en una olla al fuego con la ramita de canela. Una vez hierva, baja un poco el fuego, tapa la olla y deja cocer entre 20-30 min o hasta que las manzanas estén tiernas.",
              "chef": "Isabel Rescalvo",
              "ingredientes": [
                { 
                  "id": "i001",
                  "nombre": " 3 manzanas grandes",
                },
                { 
                  "id": "i002",
                  "nombre": " 1 rama de canela",
                },
                { 
                  "id": "i003",
                  "nombre": "1 plátano maduro",
                },
              ]
            },
            {
              "id": "002",
              "nombre": "Carlota de mango",
              "descripcion": "Corta la punta de los bizcochos de soletilla sin excederte y guárdala. Recuerda que también puedes hacer la receta de carlota de mango con galletas Marías.",
              "chef": "Isabel Rescalvo",
              "ingredientes": [
                { 
                  "id": "i004",
                  "nombre": "175 gramos de azúcar",
                },
                { 
                  "id": "i005",
                  "nombre": " 2 claras de huevo a temperatura ambiente",
                },
                { 
                  "id": "i006",
                  "nombre": "400 gramos de nata para montar o crema de leche",
                },
                { 
                  "id": "i007",
                  "nombre": "100 gramos de mango troceado",
                },
              ]
            },
            {
              "id": "003",
              "nombre": "Pie de parchita",
              "descripcion": "Tritura las galletas hasta hacerlas polvo en la licuadora o procesadora.",
              "chef": " Dani León.",
              "ingredientes": [
                { 
                  "id": "i008",
                  "nombre": " 3 yemas de huevo",
                },
                { 
                  "id": "i009",
                  "nombre": " 1 lata de leche condensada (397 grs)",
                },
              ]
            },
            {
              "id": "004",
              "nombre": "Dulce de leche reposteroa",
              "descripcion": "Tritura las galletas hasta hacerlas polvo en la licuadora o procesadora.",
              "chef": "Carolina. ",
              "ingredientes": [
                { 
                  "id": "i010",
                  "nombre": " 1 litro de leche entera",
                },
                { 
                  "id": "i011",
                  "nombre": "  300 gramos de azucar (1½ tazas)",
                },
                { 
                  "id": "i012",
                  "nombre": " 1 cucharadita de esencia de vainilla",
                },
              ]
            },
            {
              "id": "005",
              "nombre": "Mermelada de nísperos",
              "descripcion": "Limpia los nísperos, quítales el hueso y la piel..",
              "chef": " Montse Morote Ortega",
              "ingredientes": [
                { 
                  "id": "i013",
                  "nombre": "  1 kilogramo de nísperos sin piel y sin hueso",
                },
                { 
                  "id": "i014",
                  "nombre": " 200 gramos de azúcar (1 taza)",
                },
                { 
                  "id": "i015",
                  "nombre": "1 trozo de limón",
                },
                { 
                  "id": "i016",
                  "nombre": "2 cucharadas soperas de agua",
                },
              ]
            },
          ],
          search: '',
          show_add_receta: false,
          new_receta: {
                "id": "",
                "nombre": "",
                "descripcion": "",
                "chef": "",
                "ingredientes": []
          },
          nuevo_ingrediente: "",
          receta_seleccionada: null,
          show_deshacer: false,

    },
    computed: {
        lista_recetas_filtrada: function(){
            //usamos el truco de crear una variable self, para que el contexto se mantenga desde lo general, y no sea uno sobre otro
            var self = this
            return this.lista_recetas.filter(
                function (value) {
                    return value.nombre.includes(self.search)
                }
            )
        }
    },
    methods: {
        AgregarIngrediente: function() {
            //pusimos la variable fecha como un truco no recomendable para evitar consultar db y crear IDs únicos:)
            var new_date = new Date()
            var ingrediente = {
                "id": "i1000" + new_date.getTime(),
                "nombre": this.nuevo_ingrediente
            }
            this.new_receta.ingredientes.push(ingrediente)
            
            // console.log(this.nuevo_ingrediente)
            // new_receta.ingredientes.push(nuevo_ingrediente)
        },
        AgregarReceta: function() {
            this.lista_recetas.push(this.new_receta)
        },
        SeleccionarReceta: function(receta) {
            this.receta_seleccionada = receta
            //estos console.log nos ayudan a comprobar si la función y el hrml funcionan antes de seguir desarrollando
            // console.log(this.receta_seleccionada)
        },
        EliminarReceta: function () {
            id = this.lista_recetas.indexOf(this.receta_seleccionada)
            this.lista_recetas.splice(id,1)
            //Esto elimina la ultima receta:)
            // this.receta_seleccionada = receta
            // this.lista_recetas.pop(this.receta)
        },
        DeshacerBorrado: function () {
            this.lista_recetas.push(this.receta_seleccionada)
        }
    },
    
})