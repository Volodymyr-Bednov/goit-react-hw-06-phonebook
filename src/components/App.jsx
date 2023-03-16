import { Section } from './Section/Section';
import { FormContact } from './FormContact/FormContact';
import { ListContacts } from './ListContacts/ListContacts';
import { Firter } from './Filter/Filter';

import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.wrap}>
      <Section title={'Phonebook'} children={<FormContact />} />
      <Section title={'Contacts'}>
        <Firter />
        <ListContacts />
      </Section>
    </div>
  );
};
