import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactsContainer } from './Contacts.styled';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';

export const Contacts = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ContactsContainer>
        {contacts.map(elem => (
          <ContactItem key={elem.id} elem={elem} />
        ))}
      </ContactsContainer>
    </>
  );
};
