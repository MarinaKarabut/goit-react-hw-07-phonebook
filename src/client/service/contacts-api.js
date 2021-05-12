import instance from '../../shared/services/basic-http-service';

export const fetchContacts = () => {
  return instance.get('/contacts');
};

export const addContact = contact => {
  return instance.post('/contacts', contact);
};

export const deleteContact = id => {
  return instance.delete(`/contacts/${id}`);
};
