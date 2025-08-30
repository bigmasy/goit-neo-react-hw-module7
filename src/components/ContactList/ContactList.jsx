import { useSelector } from "react-redux";
import { selectVisibleContact } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
const ContactList = () => {
  const visibleContact = useSelector(selectVisibleContact);
  return (
    <ul className={styles.contactList}>
      {visibleContact.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact data={contact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
