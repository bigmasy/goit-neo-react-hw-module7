import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const phoneFieldId = useId();
  const initialValues = {
    name: "",
    number: "",
  };
  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.contactForm}>
        <label htmlFor={nameFieldId} className={css.contactLabel}>
          Name
        </label>
        <Field
          id={nameFieldId}
          type="text"
          name="name"
          className={css.contactInput}
        />
        <ErrorMessage name="name" component="span" className={css.error} />
        <label htmlFor={phoneFieldId} className={css.contactLabel}>
          Number
        </label>
        <Field
          id={phoneFieldId}
          type="phone"
          name="number"
          className={css.contactInput}
        />
        <ErrorMessage name="number" component="span" className={css.error} />
        <button type="submit" className={css.contactButton}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
