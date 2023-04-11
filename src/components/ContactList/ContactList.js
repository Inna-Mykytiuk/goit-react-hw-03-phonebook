import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { List, ListItem, ItemWrapper, Button } from './ContactList.styled';

//передаємо в змінну contacts масив об'єктів з контактами і функцію яка видаляє контакт
export const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {/*перебираємо масив контактів, деструктуризуємо його і беремо потрібні значення, також додаємо ключ до однотипних елементів у якості ідентифікатора */}
    {contacts.map(({ id, name, number }) => (
      <ListItem key={id}>
        <ItemWrapper>
          <p>{name}: </p>
          <p>{number}</p>
        </ItemWrapper>
        {/*перебираємо масив контактів, деструктуризуємо його і беремо потрібні значення, також додаємо ключ до однотипних елементів у якості ідентифікатора */}
        <Button type="button" onClick={() => onDeleteContact(id)}>
          <FaTrashAlt />
        </Button>
      </ListItem>
    ))}
  </List>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
