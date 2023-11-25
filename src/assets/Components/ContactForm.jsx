import { useForm } from "../../HOOKS/useForm";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};
const validations = (form) => {
  const {name,email,subject,comments}=form;
  let errors={};
  if (!name.trim()) {
      errors.name="El campo nombre es requerido"
  }

  return errors;
};

let styles={
    fontWeight:'bold',
    color:'#dc3545'
}

const ContactForm = () => {
  const {
    form,
    error,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validations);

  return (
    <>
      <h2>Formulariio de Contacto </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Escribe tu nombre"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.name}
        />
        {error.name&&<p style={styles}>{error.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Escribe tu email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.email}
        />
        {error.email&&<p style={styles}>{error.email}</p>}
        <input
          type="text"
          name="subject"
          placeholder="Asunto a tratar"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.subject}
        />
        {error.subject&&<p style={styles}>{error.subject}</p>}
        <textarea
          name="comments"
          cols="50"
          rows="2"
          placeholder="Escribe tus comnetarios"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.comments }
        ></textarea>
        {error.comments&&<p style={styles}>{error.comments}</p>}

        <input type="submit" value="Enviar" />
      </form>
    </>
  );
};

export default ContactForm;
