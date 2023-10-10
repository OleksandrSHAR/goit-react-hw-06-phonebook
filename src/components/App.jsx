import { Forms } from './Phonebook/Form/Form';
import { ContactList } from './Phonebook/Contactlist/ContactList';
import { Filter } from './Phonebook/Filter/Filter';
import { GlobalStyle } from 'components/GlobalStyle';
import { Wrap, Titel } from './App.style';

export const App = () => {
  return (
    <Wrap>
      <Titel>Phonebook</Titel>
      <Forms />
      <Titel>Contacts</Titel>
      <Filter />
      <ContactList />
      <GlobalStyle />
    </Wrap>
  );
};
