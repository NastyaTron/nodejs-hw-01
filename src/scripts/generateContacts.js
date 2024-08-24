import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import * as fs from 'node:fs/promises';
import { getAllContacts } from '../scripts/getAllContacts.js';

const generateContacts = async (number) => {
  const contactList = await getAllContacts();
  const newContactList = Array(number).fill(0).map(createFakeContact);
  contactList.push(...newContactList);
  await fs.writeFile(PATH_DB, JSON.stringify(contactList, null, 2));
};

generateContacts(3);
