import Input from "./Input.jsx";
import { useRef, useState } from "react";
import Button from "./Button.jsx";

export default function ContactUs () {

    const [ userFormSubmission , setUserFormSubmission ] = useState({
        userStateName: '',
        userStateEmail: '', 
        userStateMessage: '',
        dataIsInvalid: false
    });

    function handleChangeInput(inputName, inputValue) {

        setUserFormSubmission(prevState => {
            return {
                ...prevState,
                [inputName]: inputValue
            }
        })
          
    }

    function handleMessageError () {
      setUserFormSubmission(prevState => {
        return {
          ...prevState,
          dataIsInvalid: false
        }
      })
    }

    function MessageError () {
        return (
          <div className="bg-beige absolute top-24 bottom-0 mx-6 z-10 grid items-center justify-center rounded-md">
            <p className="text-navy font-bold italic text-center uppercase">Impossível enviar!</p>
            <p className="text-navy font-bold italic text-center">Dados inválidos. Verifique os dados inseridos e tente novamente.</p>
            <Button onClick={handleMessageError}>Fechar</Button>
          </div>
        );
      
    }

    function onSubmitForm(event) {
        event.preventDefault();

        let name = userFormSubmission.userStateName;
        let email = userFormSubmission.userStateEmail;
        let message = userFormSubmission.userStateMessage;

        if(name.trim() === '' || 
            email.trim() === '' ||
            message.trim() === '') {
            // alert('Imposivel enviar, dados invalidos. Verifica os dados inseridos e envia novamente'  )
            setUserFormSubmission(prevState => {
              return {
                ...prevState,
                dataIsInvalid: true
              }
            })
        }

        alert('PEDIDO DE CONTACTO, ENVIADO COM SUCESSO!')

        setTimeout(() => {
          setUserFormSubmission(prevState => {
          return {
            ...prevState,
            userStateName: '',
            userStateEmail: '', 
            userStateMessage: '',
            dataIsInvalid: false
          }
        })}, 2000)
    }

    return (
      <>
      {userFormSubmission.dataIsInvalid && <MessageError />}
      <section className="p-12 bg-gray relative">
        
        <h1 className=" text-cream text-3xl font-bold text-center">
          Contacte-nos
        </h1>
        {/*  added a netlify-honeypot attribute to avoid showing a captcha when a user submits the form */}
        <form action="" className="my-10 grid gap-6" netlify netlify-honeypot="bot-field" method="post" name="Pedido-de-contacto">
          <input type='hidden' name='Pedido-de-Contacto' value='Pedido_de_Contacto'/>
          <Input
            type='text'          
            label="Nome"
            value={userFormSubmission.userStateName}
            stateName='userStateName'
            onChangeValue={handleChangeInput}
          />
          <Input
            type='email'
            label="Email"
            value={userFormSubmission.userStateEmail}
            stateName='userStateEmail'
            onChangeValue={handleChangeInput}
          />
          <Input
            type='text'
            label="Mensagem"
            textarea
            value={userFormSubmission.userStateMessage}
            stateName='userStateMessage'
            onChangeValue={handleChangeInput}
          />
          {/* botao Enviar */}
            <Button type='submit' onClick={(event) => onSubmitForm(event)}>Enviar</Button>
        </form>
        {/* form */}
      </section>
      </>
    );
}