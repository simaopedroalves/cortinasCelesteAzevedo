// import Input from "./Input.jsx";
// import { useState } from "react";
// import Button from "./Button.jsx";

// export default function ContactUs () {

//     const [ userFormSubmission , setUserFormSubmission ] = useState({
//         userStateName: '',
//         userStateEmail: '', 
//         userStateMessage: '',
//         dataIsInvalid: false
//     });

//     function handleChangeInput(inputName, inputValue) {

//         setUserFormSubmission(prevState => {
//             return {
//                 ...prevState,
//                 [inputName]: inputValue
//             }
//         })
          
//     }

//     function handleMessageError () {
//       setUserFormSubmission(prevState => {
//         return {
//           ...prevState,
//           dataIsInvalid: false
//         }
//       })
//     }

//     function MessageError () {
//         return (
//           <div className="bg-beige absolute top-24 bottom-0 mx-6 z-10 grid items-center justify-center rounded-md">
//             <p className="text-navy font-bold italic text-center uppercase">Impossível enviar!</p>
//             <p className="text-navy font-bold italic text-center">Dados inválidos. Verifique os dados inseridos e tente novamente.</p>
//             <Button onClick={handleMessageError}>Fechar</Button>
//           </div>
//         );
      
//     }

//     function onSubmitForm(event) {
//         event.preventDefault();

//         let name = userFormSubmission.userStateName;
//         let email = userFormSubmission.userStateEmail;
//         let message = userFormSubmission.userStateMessage;

//         if(name.trim() === '' || 
//             email.trim() === '' ||
//             message.trim() === '') {
//             // alert('Imposivel enviar, dados invalidos. Verifica os dados inseridos e envia novamente'  )
//             setUserFormSubmission(prevState => {
//               return {
//                 ...prevState,
//                 dataIsInvalid: true
//               }
//             })
//       }

//       // Prepare form data for Netlify
//       const formData = new URLSearchParams();
//       formData.append("form-name", "contact");
//       formData.append("userStateName", userStateName);
//       formData.append("userStateEmail", userStateEmail);
//       formData.append("userStateMessage", userStateMessage);

//       // Submit to Netlify
//       fetch("/", {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: formData.toString(),
//       })
//         .then(() => {
//           alert("PEDIDO DE CONTACTO, ENVIADO COM SUCESSO!");
//           // Reset form
//           setUserFormSubmission({
//             userStateName: "",
//             userStateEmail: "",
//             userStateMessage: "",
//             dataIsInvalid: false,
//           });
//         })
//         .catch((error) => {
//           console.error("Error submitting form:", error);
//           alert("Erro ao enviar o formulário. Tente novamente.");
//         });
    

//         // alert('PEDIDO DE CONTACTO, ENVIADO COM SUCESSO!')

//         // setTimeout(() => {
//         //   setUserFormSubmission(prevState => {
//         //   return {
//         //     ...prevState,
//         //     userStateName: '',
//         //     userStateEmail: '', 
//         //     userStateMessage: '',
//         //     dataIsInvalid: false
//         //   }
//         // })}, 2000)
//     }

//     return (
//       <>
//       {userFormSubmission.dataIsInvalid && <MessageError />}
//       <section className="p-12 bg-gray relative">
        
//         <h1 className=" text-cream text-3xl font-bold text-center">
//           Contacte-nos
//         </h1>
//         {/*  added a netlify-honeypot attribute to avoid showing a captcha when a user submits the form */}
//         {/* <form action="/mensagem" className="my-10 grid gap-6" netlify netlify-honeypot="bot-field" method="POST" name="mensagem"> */}
//         <form onSubmit={onSubmitForm} netlify='true' className="my-10 grid gap-6" name='contact' method="POST">
       
//           <input type='hidden' name='form-name' value='contact'/>
//           <input type="hidden" name="bot-field" />
//           <Input
//             type='text'          
//             label="Nome"
//             value={userFormSubmission.userStateName}
//             stateName='userStateName'
//             onChangeValue={handleChangeInput}
//           />
//           <Input
//             type='email'
//             label="Email"
//             value={userFormSubmission.userStateEmail}
//             stateName='userStateEmail'
//             onChangeValue={handleChangeInput}
//           />
//           <Input
//             type='text'
//             label="Mensagem"
//             textarea
//             value={userFormSubmission.userStateMessage}
//             stateName='userStateMessage'
//             onChangeValue={handleChangeInput}
//           />
//           {/* botao Enviar */}
//             {/* <Button type='submit' onClick={(event) => onSubmitForm(event)}>Enviar</Button> */}
//             <Button type='submit'>Enviar</Button>

//         </form>
//       </section>
//       </>
//     );
// }

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
      <div className="bg-beige absolute top-24 bottom-0 mx-6 z-10 grid items-center justify-center rounded-md">
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
          <Button  type="submit">Enviar</Button>
        </form>
      </section>
    </>
  );
}

