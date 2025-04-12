import Input from "./Input.jsx";
import { useState } from "react";
import Button from "./Button.jsx";

export default function ContactUs() {
  const [userFormSubmission, setUserFormSubmission] = useState({
    userStateName: "",
    userStateEmail: "",
    userStateMessage: "",
    dataIsInvalid: false,
  });

  const [message, setMessage] = useState("");

  function handleChangeInput(inputName, inputValue) {
    setUserFormSubmission((prevState) => {
      return {
        ...prevState,
        [inputName]: inputValue,
      };
    });
    console.log(userFormSubmission);
    
  }

  function handleMessage() {
    setUserFormSubmission((prevState) => {
      return {
        ...prevState,
        dataIsInvalid: false,
      };
    });
    setMessage(""); // Reset message
  }

  function Message() {
    return (
      <div className="bg-beige fixed top-0 bottom-0 left-0 right-0 z-10 grid items-center rounded-md">
        <p className="text-navy font-bold italic text-center uppercase">
          Impossível enviar!
        </p>
        <p className="text-navy font-bold italic text-center">
          {message}
        </p>
        <Button onClick={handleMessage}>Fechar</Button>
      </div>
    );
  }

  // required to send form via netlify forms
  function encodeFormData(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  function onSubmitForm(event) {
    event.preventDefault();

    let name = userFormSubmission.userStateName;
    let email = userFormSubmission.userStateEmail;
    let message = userFormSubmission.userStateMessage;

    // Validate inputs
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      message.trim() === ""
    ) {
      setMessage(
        "Dados inválidos. Verifique os dados inseridos e tente novamente."
      );
      setUserFormSubmission((prevState) => {
        return {
          ...prevState,
          dataIsInvalid: true,
        };
      });
      return;
    }

    // Prepare and submit data to Netlify
    const formData = {
      "form-name": "contact",
      userStateName: name,
      userStateEmail: email,
      userStateMessage: message,
    };

    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: encodeFormData(formData),
    })
      .then(() => {
        alert("Mensagem enviada com sucesso!");

        setUserFormSubmission({
          userStateName: "",
          userStateEmail: "",
          userStateMessage: "",
          dataIsInvalid: false,
        });
      })
      .catch((error) => {
        alert("Ocorreu um erro ao enviar sua mensagem. Tente novamente.");

        console.error(error);
      });
  }

  return (
    <>
      {userFormSubmission.dataIsInvalid && <Message />}
      <section className="py-12 px-[10vw] justify-center bg-gray relative md:py-20 md:px-[20vw] lg:py-30 lg:px-[30vw]">
        <h1 className="text-beige text-3xl font-bold text-center md:text-6xl">
          Contacte-nos
        </h1>
        <form
          onSubmit={onSubmitForm}
          className="my-10 grid gap-6"
          name="contact"
          method="POST"
          data-netlify="true"
          action="/contact"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name='subject' value={`Nova mensagem de ${userFormSubmission.userStateName}`} data-remove-prefix/>

          <Input
            type="text"
            label="Nome"
            value={userFormSubmission.userStateName}
            stateName="userStateName"
            onChangeValue={handleChangeInput}
          />
          <Input
            type="email"
            label="Email"
            value={userFormSubmission.userStateEmail}
            stateName="userStateEmail"
            onChangeValue={handleChangeInput}
          />
          <Input
            type="text"
            label="Mensagem"
            textarea
            value={userFormSubmission.userStateMessage}
            stateName="userStateMessage"
            onChangeValue={handleChangeInput}
          />
          <Button type="submit" onClick={onSubmitForm}>Enviar</Button>
        </form>
      </section>
    </>
  );
}

