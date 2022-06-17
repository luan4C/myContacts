const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Mateus',
    email: 'mateus@email.com',
    phone: '123451234',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Luan',
    email: 'Luan@email.com',
    phone: '123461234789',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Maria',
    email: 'Mariah@email.com',
    phone: '1234512343541',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => { resolve(contacts); });
  }

  findById(id) {
    const [contact] = contacts.filter((contactObj) => contactObj.id === id);

    return new Promise((resolve) => { resolve(contact); });
  }

  findByEmail(email) {
    const [contact] = contacts.filter((contactObj) => contactObj.email === email);

    return new Promise((resolve) => { resolve(contact); });
  }

  create({
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      };
      contacts.push(newContact);
      resolve(newContact);
    });
  }

  update(id, {
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const updatedContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      };

      contacts = contacts.map((contact) => (contact.id === id ? updatedContact : contact));

      resolve(updatedContact);
    });
  }

  removeById(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contactObj) => contactObj.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
