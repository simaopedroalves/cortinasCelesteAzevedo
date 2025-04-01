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
    placePhotos: ""
  });

  function handleChangeInput(inputName, inputValue) {

    console.log(typeof(inputName), inputName, typeof(inputValue), inputValue);
    console.log(userFormSubmission);

    
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

  // const [file, setFile] = useState([]);

  // function handleChangeFile(event) {
  //   setFile(event.files);  
  // }


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
    

        // // Create FormData for file uploads
        // const formData = new FormData();
        // formData.append("form-name", "budget");
        
        // // Append all form fields
        // Object.entries(userFormSubmission).forEach(([key, value]) => {
        //   if (key === "placePhotos" && value) {
        //     // Handle multiple files
        //     for (let i = 0; i < value.length; i++) {
        //       formData.append(key, value[i]);
        //     }
        //   } else {
        //     formData.append(key, value);
        //   }
        // });

    fetch("/", {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
        //  "Accept": "application/x-www-form-urlencoded"
      },
      body: formData,
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
        // placePhotos: null
      });
      // setFile();
    })
    .catch((error) => {
      alert("Ocorreu um erro ao enviar o seu Orçamento. Tente novamente.");

      console.error(error);
    });
  }

  return (
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
          selectOptions={["Linho", "Seda", "Outro"]}
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

        <Button type="submit">Pedir Orçamento</Button>
      </form>
    </section>
  );
}