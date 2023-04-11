import { Component } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';
import { Container } from './App.styled';
import { Phonebook } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './ContactFilter/ContactFilter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  //зберігаємо контакти в локал сторедж після перезавантаження сторінки вони не зникають і виводяться на екран користувачу
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);
    if (parseContacts?.length) {
      this.setState({ contacts: parseContacts });
      return;
    }
    this.setState({ contacts: this.state.contacts });
  }

  //зберігаємо контакти в локал сторедж після додавання нового контакту вони не зникають і виводяться на екран користувачу
  componentDidUpdate(prevState, prevProps) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;
    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  //створюємо метод для додавання контактів в стейт, передаємо в пропси в компонент Phonebook
  addContact = (name, number) => {
    const { contacts } = this.state;
    const contact = {
      id: nanoid(3),
      name,
      number,
    };

    //перевіряємо чи є такий контакт в потоці, якщо немає то додаємо в потік інакше виводимо алерт що такий контакт вже є в списку контактів і нічого не робимо
    const checkName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (checkName) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  //створюємо метод для фільтрації контактів, коли вводимо в інпут значення то відбувається фільтрація і виводяться тільки ті контакти в яких є введені значення
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  //створємо метод для фільтрації контактів відповідно до введених значень в інпут
  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  //створюємо метод для видалення контактів, яку передаємо в пропси в компоненту ContactList для того щоб видалити контакт
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <Container>
        <GlobalStyle />
        <Section title="Phonebook">
          <Phonebook onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={this.filter} onChange={this.changeFilter} />
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </Container>
    );
  }
}
