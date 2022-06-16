class ContactController {
  index(request, response) {
    // Listar todos os registros

    response.send('Send from controller');
  }

  show() {
    // Exibir UM registro
  }

  store() {
    // Criar um registro
  }

  update() {
    // Editar um registro
  }

  delete() {
    // Deletar um registro
  }
}

// Singleton
module.exports = new ContactController();
