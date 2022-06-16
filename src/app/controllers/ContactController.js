const repository = require('../../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    // Listar todos os registros
    const contacts = await repository.findAll();
    response.json(contacts);
  }

  async show(request, response) {
    // Exibir UM registro
    const { id } = request.params;

    const contact = await repository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'Contact not found' });
    }

    response.json(contact);
  }

  store() {
    // Criar um registro
  }

  update() {
    // Editar um registro
  }

  async delete(request, response) {
    // Deletar um registro
    const { id } = request.params;

    const contact = await repository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'Contact not found' });
    }

    await repository.removeById(id);

    response.sendStatus(204);
  }
}

// Singleton
module.exports = new ContactController();
