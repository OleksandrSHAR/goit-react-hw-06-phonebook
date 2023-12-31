import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormikWrap, FormWrap, ButForm, FormTitel } from './Form.styles';
import toast from 'react-hot-toast';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'components/redux/contactSlice';
import { getContacts } from 'components/redux/selectors';
const validationSchema = Yup.object({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name must not contain characters'
    )
    .required(''),
  number: Yup.string()
    .min(5, 'Too short  number')
    .max(10, 'Too long number')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Must have only numbers'
    )
    .required(''),
  contacts: Yup.array(),
});

export const Forms = () => {
  const dispatch = useDispatch();
  const contact = useSelector(getContacts);
  const onSubmit = ({ name, number }) => {
    if (
      contact.find(
        contact => contact.number === number || contact.name === name
      )
    ) {
      toast.error("This didn't work.");
      return;
    }
    const newContacts = { name, number };
    dispatch(addContact(newContacts));
  };

  return (
    <FormikWrap>
      <Formik
        validationSchema={validationSchema}
        onSubmit={(value, actions) => {
          onSubmit(value);
          actions.resetForm();
        }}
        initialValues={{
          name: '',
          number: '',
        }}
      >
        <Form>
          <FormWrap>
            <FormTitel>Name</FormTitel>
            <Field
              type="text"
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMessage name="name" component="p" />
            <FormTitel>Number</FormTitel>
            <Field
              type="tel"
              name="number"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <ErrorMessage name="number" component="p" />
            <ButForm type="submit">Add contact</ButForm>
          </FormWrap>
        </Form>
      </Formik>
    </FormikWrap>
  );
};
