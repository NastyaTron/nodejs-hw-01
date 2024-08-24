import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const removeLastContact = async () => {
  const contactList = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
  contactList.pop();
  await fs.writeFile(PATH_DB, JSON.stringify(contactList, null, 2));
};

removeLastContact();
