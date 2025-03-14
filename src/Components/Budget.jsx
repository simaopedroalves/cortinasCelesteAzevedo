import Button from "./Button.jsx";
import Input from "./Input.jsx";
import { useState } from "react";


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
    placePhotos: [],
  });

  function handleChangeInput(inputName, inputValue) {
    setUserFormSubmission((prevState) => {
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

    const {name, email, address, phoneNumber, courtainHeight, courtainWidth, courtainPlace, courtainColor, courtainType, placePhotos} = userFormSubmission;
   
    const formData = {
      "form-name": 'budget',
      name: name,
      email: email,
      address: address,
      phoneNumber: phoneNumber,
      courtainHeight: courtainHeight,
      courtainWidth: courtainWidth,
      courtainPlace: courtainPlace,
      courtainColor: courtainColor,
      courtainType: courtainType,
      placePhotos: [placePhotos],
    }

    fetch("/", {
      method: "POST",
      headers: {
        "Countent-type": "application/x-www-form-urlencoded",
      },
      body: encodeFormData(formData),
    })
    .then(() => {
      alert("Orçamento enviado com sucesso!");

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
        placePhotos: [],
      });
    })
    .catch((error) => {
      alert("Ocorreu um erro ao enviar o seu Orçamento. Tente novamente.");

      console.error(error);
    });
  }

  return (
    <section className="p-12 bg-gray">
      <h1 className="text-beige text-3xl font-bold text-center">Orçamento</h1>
      {/* <p> Descrição sobre o que é o pedido de orçamento </p> */}

      {/* form submission */}
      <form
        action="/budget"
        name="budget"
        method="post"
        data-netlify="true"
        className="mt-10 grid gap-6"
        onSubmit={onSubmitForm}
      >
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
          selectOptions={["Linho", "Seda", "Outro"]}
          value={userFormSubmission.courtainType}
          stateName="courtainType"
          onChangeValue={handleChangeInput}
        />

        <Input
          type="file"
          label="Anexar fotos (local da cortina)"
          value={userFormSubmission.placePhotos}
          stateName="placePhotos"
          onChangeValue={handleChangeInput}
          multiple
          accept="image/*"
        />

        <Button type="submit">Pedir Orçamento</Button>
      </form>
    </section>
  );
}