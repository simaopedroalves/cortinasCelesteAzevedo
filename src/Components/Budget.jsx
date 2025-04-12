import Button from "./Button.jsx";
import Input from "./Input.jsx";
import React, { useState } from "react";
import Dialog from "./Dialog.jsx";


export default function Budget () {

  const [userFormSubmission, setUserFormSubmission] = useState({
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
    courtainHeight: "",
    courtainWidth: "",
    courtainPlace: "",
    courtainColor: "",
    courtainType: "",
  });

  const [dialog, setDialog] = useState(false);
  const [thanksMessage, setThanksMessage] = useState(false);
 

  function handleChangeInput(inputName, inputValue) {
    
    inputName === "placePhotos" ?
    setUserFormSubmission((prevState) => {
      return {
        ...prevState,
        [inputName]: inputValue.name
      };
    })

    : setUserFormSubmission((prevState) => {
      return {
        ...prevState,
        [inputName]: inputValue,
      };
    });

  }

  // required to send form via netlify forms
  function encodeFormData(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function onSubmitForm (event) {

    event.preventDefault();

    const {
      name,
      email,
      address,
      phoneNumber,
      courtainHeight,
      courtainWidth,
      courtainPlace,
      courtainColor,
      courtainType,
    } = userFormSubmission;
    
    if (
      name.trim() === '' ||
      email.trim() === '' ||
      address.trim() === '' ||
      phoneNumber.trim() === '' ||
      courtainHeight.trim() === '' ||
      courtainWidth.trim() === '' ||
      courtainPlace.trim() === '' ||
      courtainColor.trim() === '' ||
      courtainType.trim() === ''
    ) {
      setDialog(true);
      return;
    }
    
    const formData = {
      "form-name": "budget",
      name: name,
      email: email,
      address: address,
      phoneNumber: phoneNumber,
      courtainHeight: courtainHeight,
      courtainWidth: courtainWidth,
      courtainPlace: courtainPlace,
      courtainColor: courtainColor,
      courtainType: courtainType,
      // placePhotos: placePhotos,
    }

      fetch("/", {
        method: "POST",
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
        },
        body: encodeFormData(formData),
      })
      .then(() => {
        setThanksMessage(true);
        // alert("Orçamento enviado com sucesso!");

        setUserFormSubmission({
          name: "",
          email: "",
          address: "",
          phoneNumber: "",
          courtainHeight: "",
          courtainWidth: "",
          courtainPlace: "",
          courtainColor: "",
          courtainType: "",
        });
      })
      .catch((error) => {
        setDialog(true);
        // alert("Ocorreu um erro ao enviar o seu Orçamento. Tente novamente.");

        console.error(error);
      });
  }

  return (
    <>
       {dialog && 
       <Dialog buttonDescription="Fechar" closeDialog={() => setDialog(false)}>
        <h1 className="font-bold">UPS!</h1>
        <h3>Parece que os dados necessários para o seu orçamento estão inválidos.</h3>
        <h3>Verifique, por favor, todos os dados inseridos e tente novamente.</h3>
      </Dialog>
     }

    {thanksMessage && 
    <Dialog  buttonDescription="Fechar" closeDialog={() => setThanksMessage(false)}>
      <h1 className="font-bold">OBRIGADO!</h1>
      <h3>O seu formulário foi enviado com sucesso!</h3>
      <h3>Em breve entraremos em contacto consigo.</h3>
    </Dialog>
     }


    <section className="p-12 bg-gray md:p-28 ">
      <h1 className="text-beige text-3xl font-bold text-center">Orçamento</h1>
      {/* <p> Descrição sobre o que é o pedido de orçamento </p> */}

      {/* form submission */}
      <form
        // action="/budget"
        name="budget"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="mt-10 grid gap-6 md:w-[50vw] mx-auto"
        onSubmit={onSubmitForm}
        encType="multipart/form-data"
      >
          <input type="hidden" name="form-name" value="budget" />


        <h2 className="underline text-beige italic">Informação Pessoal:</h2>
        <Input
          type="text"
          label="Nome"
          value={userFormSubmission.name}
          stateName="name"
          onChangeValue={handleChangeInput}
        />
        <Input
          type="email"
          label="Email"
          value={userFormSubmission.email}
          stateName="email"
          onChangeValue={handleChangeInput}
        />
        <Input
          type="text"
          label="Morada"
          value={userFormSubmission.address}
          stateName="address"
          onChangeValue={handleChangeInput}
        />
        <Input
          type="number"
          label="Telemóvel"
          value={userFormSubmission.phoneNumber}
          stateName="phoneNumber"
          onChangeValue={handleChangeInput}
        />

        <h2 className="underline text-beige italic">
          Informação sobre a(s) Cortina(s):
        </h2>

        <Input
          type="number"
          label="Altura"
          value={userFormSubmission.courtainHeight}
          stateName="courtainHeight"
          onChangeValue={handleChangeInput}
        />
        <Input
          type="number"
          label="Largura"
          value={userFormSubmission.courtainWidth}
          stateName="courtainWidth"
          onChangeValue={handleChangeInput}
        />
        <Input
          type="text"
          label="Divisão"
          value={userFormSubmission.courtainPlace}
          stateName="courtainPlace"
          onChangeValue={handleChangeInput}
          placeholder="Sala, Quarto, Escritório"
        />
        <Input
          type="text"
          label="Cor"
          value={userFormSubmission.courtainColor}
          stateName="courtainColor"
          onChangeValue={handleChangeInput}
        />
        <Input
          label="Tipo de Tecido"
          select
          selectOptions={["Selecionar", "Linho", "Seda", "Outro"]}
          value={userFormSubmission.courtainType}
          stateName="courtainType"
          onChangeValue={handleChangeInput}
        />

        {/* <Input
          type="file"
          label="Anexar fotos (local da cortina)"
          // value={userFormSubmission.placePhotos}
          stateName="placePhotos"
          // onChange={(event) => handleChangeFile(event.target.files)}
          onChangeValue={handleChangeInput}
          multiple
          accept="image/*"
        /> */}

      <Button type="submit" onClick={onSubmitForm}>Pedir Orçamento</Button>
      </form>
    </section>
    </>
  );
}