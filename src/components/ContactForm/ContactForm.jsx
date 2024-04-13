import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, 'Too short.')
    .max(50, 'Too long')
    .required('Required'),
  number: Yup.string()
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      'Invalid phone number format.Use xxx-xx-xx format.'
    )
    .required('Required'),
});

export default function SearchBox({ onAdd }) {
  const usernameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    onAdd(newContact);
    actions.resetForm();
    console.log(newContact);
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.group}>
          <label className={css.title} htmlFor={usernameId}>
            Name
          </label>
          <Field
            className={css.input}
            name="name"
            type="text"
            id={usernameId}
          ></Field>
          <ErrorMessage
            className={css.error}
            name="name"
            component="span"
          ></ErrorMessage>
        </div>

        <div className={css.group}>
          <label className={css.title} htmlFor={numberId}>
            Number
          </label>
          <Field
            className={css.input}
            name="number"
            type="text"
            id={numberId}
          ></Field>
          <ErrorMessage
            className={css.error}
            name="number"
            component="span"
          ></ErrorMessage>
        </div>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
