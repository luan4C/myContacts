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
    const contact = contacts.filter((contactObj) => contactObj.id === id);

    return new Promise((resolve) => { resolve(contact); });
  }

  removeById(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contactObj) => contactObj.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
