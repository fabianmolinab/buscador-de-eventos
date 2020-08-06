class Interfaz {
  constructor () {
    // Inicializa la app al instanciar
    this.init();
    // Leer el resultado
    this.listado = document.getElementById('resultado-eventos');
  }

  //Metodo para cuando inicialice la app
  init() {
    this.imprimirCategorias();
  }

  // Impirmir categorias
  imprimirCategorias() {
    const listaCategorias = eventbrite.obtenerCategorias()
      .then(categorias => {
        const cats = categorias.categories;      
        
        const selectCategoria = document.getElementById('listado-categorias');

        cats.forEach(cat => {
          const option = document.createElement('option');
          option.value = cat.id;
          option.appendChild(document.createTextNode(cat.name_localized));
          selectCategoria.appendChild(option);
        })
      })
      
  }
}