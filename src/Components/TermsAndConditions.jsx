export default function TermsAndConditions () {
    
  const termsAndConditionsObject = {

        introduction: {
            title: 'Introdução',
            text: ['Bem-vindo(a) ao website Cortinas Celeste Azevedo (doravante designado como "Website"). Este Website é propriedade e gerido por Celeste Azevedo, residente em Vila Nova de Famalicão, Portugal, que atua a título individual, sem constituição de qualquer empresa ou sociedade.',
                ' Ao utilizar este Website, o utilizador (doravante designado como "Utilizador" ou "Você") aceita integralmente os presentes Termos e Condições de Utilização. Caso não concorde com estes termos, deverá abster-se de utilizar o Website.'
                ]
        },
        mainGoal: {
            title: 'Objetivo do Website',
            text: ['O Website tem como objetivo:'],
            list: [
                'Apresentar os trabalhos de costura e instalação de cortinados feitos à medida por Celeste Azevedo;',
                'Permitir que os Utilizadores entrem em contacto para solicitar informações ou orçamentos;',
                'Promover a visibilidade dos serviços prestados por Celeste Azevedo.'
            ]
        },
        forms: {
            title: 'Utilização do Website',
            text: ['O Website disponibiliza dois formulários distintos:'],
            subTitles: [{
                type: 'Formulário de contacto',
                subTitleList: [
                    'Campos obrigatórios: Nome, endereço de e-mail e mensagem.',
                    'Finalidade: Permitir que o Utilizador entre em contacto com Celeste Azevedo para esclarecer dúvidas ou solicitar informações.'
                ]},
                {
                type: 'Formulário de Pedido de Orçamento',
                subTitleList: [
                    'Campos obrigatórios: Nome, endereço de e-mail, morada, número de telemóvel, altura e largura do local da cortina, nome da divisão onde será instalada a cortina, cor e tipo de tecido pretendido, e imagens do local (formato de imagem).',
                    'Finalidade: Permitir que o Utilizador solicite um orçamento para a confeção e instalação de cortinados.'
                ]}
            ],
        },
        dataProtection: {
            title: 'Proteção de Dados Pessoais',
            text: ['A proteção dos dados pessoais dos Utilizadores é uma prioridade para Celeste Azevedo. Todos os dados fornecidos através dos formulários do Website são tratados de acordo com o Regulamento Geral sobre a Proteção de Dados (RGPD) (Regulamento (UE) 2016/679) e a legislação nacional aplicável em matéria de proteção de dados pessoais.'],
            subTitles: [
                {
                type: 'Responsável pelo Tratamento de Dados',
                subTitleList: ['O responsável pelo tratamento dos dados pessoais é Celeste Azevedo, residente em Vila Nova de Famalicão, Portugal.']
                },
                {
                type: 'Finalidades do Tratamento de Dados',
                subTitleList: [
                    'Responder a contactos e solicitações de informações;',
                    'Elaborar orçamentos personalizados;',
                    'Prestar os serviços solicitados pelo Utilizador.'
                ]
                },
                {
                type: 'Conservação dos Dados',
                subTitleList: ['Os dados pessoais serão conservados apenas durante o período necessário para a finalidade para a qual foram recolhidos, exceto se a lei exigir ou permitir um período de conservação mais longo.']
                },
                {
                type: 'Direitos dos Utilizadores',
                subTitleList: [
                    'Acesso: Pode solicitar acesso aos seus dados pessoais;',
                    'Retificação: Pode solicitar a correção de dados inexatos ou incompletos;',
                    'Eliminação: Pode solicitar a eliminação dos seus dados pessoais;',
                    'Limitação do Tratamento: Pode solicitar a limitação do tratamento dos seus dados;',
                    'Portabilidade: Pode solicitar a transferência dos seus dados para outro responsável pelo tratamento;',
                    'Oposição: Pode opor-se ao tratamento dos seus dados pessoais.'
                ],
                subTitleFooter: 'Para exercer estes direitos, o Utilizador deverá contactar Celeste Azevedo através do endereço de e-mail disponibilizado no Website.'
                },
                {
                type: 'Segurança dos Dados',
                subTitleList: ['Celeste Azevedo implementa medidas técnicas e organizativas adequadas para garantir a segurança e confidencialidade dos dados pessoais dos Utilizadores, protegendo-os contra acesso não autorizado, alteração, divulgação ou destruição.']
                }
            ]
        },
        property: {
            title: 'Propriedade Intelectual',
            text: ['Todo o conteúdo presente no Website, incluindo textos, imagens, logótipos e designs, é propriedade de Celeste Azevedo ou de terceiros que autorizaram a sua utilização. A reprodução, distribuição ou utilização não autorizada deste conteúdo é expressamente proibida.']
        },
        disclaimer: {
            title: 'Limitação de Responsabilidade',
            text: ['Celeste Azevedo não será responsável por:'],
            list: [
                'Danos diretos ou indiretos resultantes da utilização do Website;',
                'Interrupções, erros ou indisponibilidades do Website;',
                'Vírus informáticos ou outros elementos prejudiciais presentes no Website;',
                'Informações imprecisas ou desatualizadas presentes no Website.',
                'Conteúdos ou práticas de websites de terceiros ligados através de hiperligações no Website.'
            ]
        },
        changes: {
            title: 'Alterações aos Termos e Condições',
            text: ['Celeste Azevedo reserva-se o direito de alterar estes Termos e Condições a qualquer momento. As alterações entrarão em vigor após a sua publicação no Website. Recomenda-se que o Utilizador consulte periodicamente esta página para se manter informado.']
        },
        lawAndDispute: {
            title: 'Lei Aplicável e Resolução de Litígios',
            text: ['Estes Termos e Condições são regidos pela legislação portuguesa. Qualquer litígio resultante da utilização do Website será submetido à jurisdição dos tribunais competentes de Portugal.']
        },
        contact: {
            title: 'Contactos',
            text: ['Para quaisquer questões relacionadas com estes Termos e Condições ou com o tratamento de dados pessoais, o Utilizador poderá contactar Celeste Azevedo através do endereço de e-mail disponibilizado no Website.']
        },
        date: {
            title: 'Data de Entrada em Vigor',
            text: ['Estes Termos e Condições entram em vigor a partir de 24 de Março de 2025.']
        }
    };

    

    return (
      <section className="py-12 px-6 bg-gray grid gap-4 justify-center md:p-28 md:text-xl">
        <h1 className=" text-beige text-3xl font-bold text-center">
          Termos e condições
        </h1>
        
        {Object.keys(termsAndConditionsObject).map((term) => (
        <div
            key={term}
            className="border-2 border-beige p-4 my-2 rounded-lg grid gap-4 md:max-w-1/2 md:min-w-1/2 md:mx-auto"
        >
            <h3 className="text-beige font-bold underline text-lg">
              {termsAndConditionsObject[term].title}
            </h3>
            <p className="text-white text-justify">
              {termsAndConditionsObject[term].text}
            </p>
            {termsAndConditionsObject[term].list &&
              termsAndConditionsObject[term].list.map((item, index) => (
                <ul key={index} className="list-disc list-inside text-white">
                  <li>{item}</li>
                </ul>
              ))}
            {termsAndConditionsObject[term].subTitles &&
              termsAndConditionsObject[term].subTitles.map((subTerm, index) => (
                <div key={index} className="grid gap-4">
                  <h5 className="text-beige font-bold underline text-sm">
                    {subTerm.type}
                  </h5>
                  {subTerm.subTitleList.map((item, index) => (
                    <ul
                      key={index}
                      className="list-none list-inside text-white text-justify"
                    >
                      <li>{item}</li>
                    </ul>
                  ))}
                  {subTerm.subTitleFooter && (
                    <p className="text-white text-justify">
                      {subTerm.subTitleFooter}
                    </p>
                  )}
                </div>
              ))}
        </div>
        ))}
      </section>
    );
}