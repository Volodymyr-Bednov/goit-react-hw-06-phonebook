import { useEffect, useState } from 'react';
import { Section } from './Section/Section';
import { FormContact } from './FormContact/FormContact';
import { ListContacts } from './ListContacts/ListContacts';
import { Firter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import css from './App.module.css';


export const App =()=>{
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(()=>{
    const startDidMount = () =>{
      if (!localStorage.getItem('contacts')) {
        localStorage.setItem('contacts', JSON.stringify(contacts));
      }  
      if (!!JSON.parse(localStorage.getItem('contacts')).length) {
        setContacts([...JSON.parse(localStorage.getItem("contacts"))]);
      }
    }
    startDidMount ();

// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])



useEffect(()=>{
   localStorage.setItem('contacts', JSON.stringify(contacts));
}, [contacts])



  const addContactHandler = (evt) => {
    evt.preventDefault();
    const { name, number } = evt.target.elements;
    const nameValue = name.value;
    const numbervalue = number.value;
    if (!nameValue || !numbervalue) return;
    if (contacts) {
        const nameMatch = contacts.filter(item =>
      item.name.toLowerCase().includes(nameValue.toLowerCase())
    );

       if (nameMatch.length) return alert(`${nameValue} is already in contacts`);
    }
    setContacts([...contacts, { id: nanoid(), name: nameValue, number: numbervalue }])
    evt.target.reset()
  };

  const filterChahge = evt => {
    setFilter(evt.target.value)
  };


  useEffect(()=>{
    const filterFormatedText = filter.toLowerCase();

    const filterData = contacts.filter(item => item.name.toLowerCase().includes(filterFormatedText));
    setFilteredData(filterData)

  },[filter, contacts])

    const deleteContactHandler = evt => {
      setContacts(contacts.filter(item => item.id !== evt.target.dataset.id))
      localStorage.setItem('contacts', JSON.stringify(contacts));
  };
  
  return(
          <div className={css.wrap}>
        <Section
          title={'Phonebook'}
          children={
            <FormContact
              onAddContactHandler={addContactHandler}
              />
          }
        />
        <Section title={'Contacts'}>
          <Firter 
           onFilterChahge={filterChahge}
            valueFilter={filter} 
          />
           <ListContacts
            dataList={filteredData}
            // dataList={filteredData}
             onDeleteContactHandler={deleteContactHandler}
          />
        </Section>
      </div>
  )
}
