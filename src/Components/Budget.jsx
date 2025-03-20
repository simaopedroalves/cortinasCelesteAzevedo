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
    courtainType: ""
  });

  function handleChangeInput(inputName, inputValue) {
    setUserFormSubmission((prevState) => {
      return {
        ...prevState,
        [inputName]: inputValue,
      };
    });
  }

  const [file, setFile] = useState([]);

  function handleChangeFile(event) {
    setFile(event.target.files[0]);
    console.log(file);
    
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
      placePhotos: placePhotos,
    }
    console.log(name, email);
    

    fetch("/", {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
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
        method="POST"
        data-netlify="true"
        className="mt-10 grid gap-6"
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
          selectOptions={["Linho", "Seda", "Outro"]}
          value={userFormSubmission.courtainType}
          stateName="courtainType"
          onChangeValue={handleChangeInput}
        />

        <Input
          type="file"
          label="Anexar fotos (local da cortina)"
          value={file}
          stateName="placePhotos"
          onChange={(event) => handleChangeFile(event.target)}
          multiple
          accept="image/*"
        />

        <Button type="submit">Pedir Orçamento</Button>
      </form>
    </section>
  );
}