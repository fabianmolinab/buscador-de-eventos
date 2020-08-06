class EventBrite {
  constructor() {
    this.token_auth = "SL72LNKMB7BPAPR3E4K2";
    this.ordenar = "date";
  }

  // Obtiene las categorias en init()
  async obtenerCategorias() {
    // Consultar la REST API
    const respuestaCategorias = await fetch(
      `https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`
    );

    //Resperar la respuesta de las categrias y devolver un JSON
    const categorias = await respuestaCategorias.json();

    // Devolvemos el resultado
    return categorias;
  }
}
