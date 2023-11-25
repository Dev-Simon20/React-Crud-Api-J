import { useForm } from "../../HOOKS/useForm";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};
const validations = (form) => {
  //   Destructuramos el form
  const { name, email, subject, comments } = form;
  //  creamos el objeto error
  let errors = {};
  // creamos las expresiones regulares para poder validar el formulario
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;
  if (!name.trim()) {
    errors.name = "El campo nombre es requerido";
  } else if (!regexName.test(name.trim())) {
    errors.name = "El campo Nombre solo acepta letras y espacios en blanco";
  }
  if (!email.trim()) {
    errors.email = "El campo Email es requerido";
  } else if (!regexEmail.test(email.trim())) {
    errors.email = "El campo Email es incorrecto";
  }
  if (!subject.trim()) {
    errors.subject = "El campo Asunto atratar es requerido";
  }
  if (!comments.trim()) {
    errors.comments = "El campo Comment es requerido";
  } else if (!regexComments.test(comments.trim())) {
    errors.comments = "El campo Comments no debe exceder los 255 caracteres";
  }

  return errors;
};

let styles = {
  fontWeight: "bold",
  color: "#dc3545",
};

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
        {error.name && <p style={styles}>{error.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Escribe tu email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.email}
        />
        {error.email && <p style={styles}>{error.email}</p>}
        <input
          type="text"
          name="subject"
          placeholder="Asunto a tratar"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.subject}
        />
        {error.subject && <p style={styles}>{error.subject}</p>}
        <textarea
          name="comments"
          cols="50"
          rows="2"
          placeholder="Escribe tus comnetarios"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.comments}
        ></textarea>
        {error.comments && <p style={styles}>{error.comments}</p>}

        <input type="submit" value="Enviar" />
      </form>
    </>
  );
};

export default ContactForm;
