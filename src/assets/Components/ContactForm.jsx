import { useForm } from "../../HOOKS/useForm";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};
const validations = () => {};

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
        <input
          type="email"
          name="email"
          placeholder="Escribe tu email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.email}
        />
        <input
          type="text"
          name="subject"
          placeholder="Asunto a tratar"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.subject}
        />
        <textarea
          name="comments"
          cols="50"
          rows="5"
          placeholder="Escribe tus comnetarios"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.comments }
        ></textarea>

        <input type="submit" value="Enviar" />
      </form>
    </>
  );
};

export default ContactForm;
