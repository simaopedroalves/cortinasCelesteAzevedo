import Button from "./Button.jsx";
import Input from "./Input.jsx";
import { useState } from "react";


export default function Budget () {

        const [ userFormSubmission , setUserFormSubmission ] = useState({
                name: '',
                email: '', 
                address: '',
                phoneNumber: '',
                courtainHeight: '',
                courtainWidth: '',
                courtainPlace: '',
                courtainColor: '',
                courtainType: '',
                placePhotos: []
            });


            function handleChangeInput(inputName, inputValue) {

                setUserFormSubmission(prevState => {
                    return {
                        ...prevState,
                        [inputName]: inputValue
                    }
                })
                  
            } 
            
            function handleClick (event) {
              event.preventDefault()
            }
               

        return (
          <section className="p-12 bg-gray">
            <h1 className="text-beige text-3xl font-bold text-center">
              Orçamento
            </h1>
            {/* <p> Descrição sobre o que é o pedido de orçamento </p> */}

            {/* form submission */}
            <form action="" className="mt-10 grid gap-6">
              <h2 className="underline text-beige italic">
                Informação Pessoal:
              </h2>
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

              <Button onSubmit={(event) => handleClick(event)}>Pedir Orçamento</Button>
            </form>
          </section>
        );
}