import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { getAllContacts } from '../scripts/getAllContacts.js';

export const addOneContact = async () => {
  const contactList = await getAllContacts();
  contactList.push(createFakeContact());
  await fs.writeFile(PATH_DB, JSON.stringify(contactList, null, 2));
};

addOneContact();
