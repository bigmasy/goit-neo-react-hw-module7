import { useDispatch } from "react-redux";
import styles from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";
import { deleteContact } from "../../redux/contactsOps.js";

const Contact = ({ data: { name, number, id } }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.contact}>
      <div className={styles.contactInfo}>
        <div className={styles.contactItem}>
          <FaUser />
          <span>{name}</span>
        </div>
        <div className={styles.contactItem}>
          <FaPhone />
          <span>{number}</span>
        </div>
      </div>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </div>
  );
};

export default Contact;
