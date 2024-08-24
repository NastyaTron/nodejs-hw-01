import { getAllContacts } from '../scripts/getAllContacts.js';

export const countContacts = async () => {
  const contactList = await getAllContacts();
  return contactList.length;
};

console.log(await countContacts());
