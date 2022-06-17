const ContactsRepository = require('../../repositories/ContactsRepository');
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

  async store(request, response) {
    // Criar um registro
    const {
      name, email, phone, category_id,
    } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const contactsExists = await ContactsRepository.findByEmail(email);
    if (contactsExists) {
      return response.status(400).json({ error: 'This e-mail already in use' });
    }

    const contact = await ContactsRepository.create({
      name, email, phone, category_id,
    });

    response.json(contact);
  }

  async update(request, response) {
    // Editar um registro
    const { id } = request.params;
    const {
      name, email, phone, category_id,
    } = request.body;

    const contactExists = await ContactsRepository.findById(id);

    if (!contactExists) {
      return response.status(404).json({ error: 'User not found' });
    }
    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }
    const contactByEmail = await ContactsRepository.findByEmail(email);

    if (contactByEmail && contactByEmail.id !== id) {
      return response.status(400).json({ error: 'This e-mail is already in use' });
    }

    const contact = await ContactsRepository.update(id, {
      name, email, phone, category_id,
    });

    response.json(contact);
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
