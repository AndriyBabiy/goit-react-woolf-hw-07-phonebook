import Form from 'components/Form/Form';
import { Container } from './App.styled';
import { ComponentHeading } from 'components/ComponentHeading/ComponentHeading';
import { Contacts } from 'components/Contacts/Contacts';
import { ContactsSearch } from 'components/Contacts/Contacts.styled';
import { FilterInput } from 'components/FilterInput/FilterInput';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/operations';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <ComponentHeading size="xlarge" text={'Phonebook'} />
      <Form />
      <ContactsSearch>
        <FilterInput />
      </ContactsSearch>
      <ComponentHeading size="xlarge" text={'Contacts'} />
      {isLoading && !error && (
        <ComponentHeading size="medium" text={'Loading contacts ...'} />
      )}
      <Contacts />
    </Container>
  );
};

export default App;
