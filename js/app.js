const eventbrite = new EventBrite();
const ui = new Interfaz();


//Event al buscador
document.getElementById('buscarBtn').addEventListener('click', (e) => {
  e.preventDefault();

  const textoBuscador = document.getElementById('evento').value;
  const categorias = document.getElementById('listado-categorias');
  const cantegoriasSeleccionada = categorias.options[categorias.selectedIndex].value;

  
  if (textoBuscador == '') {
    ui.mostrarMensaje('Soy el mejor de la clase', 'alert alert-danger mt-4');

  }else {
    console.log ('Pase la materia')
  }
})