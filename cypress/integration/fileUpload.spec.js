/// <reference types="cypress"/>

const ARQUIVOS = [
    '2020-07-23_15h23_30.png',
    'Currículo_Brayan.pdf',
    'Defect Evolução 266486_teste.mp4',
    'example.json',
    'Illustration2.clip'
]

const ARQUIVOS_COM_ENCONDING = [
    {
        fileName: '2020-07-23_15h23_30.png',
        encondig: 'utf8'
    }
]


context(
    'Upload de arquivos', () => {
        it.skip('Deve aceitar arquivos no formato png', ()=>{
            cy.visit('https://dsheiko.github.io/react-html5-form/')
            const yourFixturePath = '2020-07-23_15h23_30.png'
            const fileInputElement = '#fileInput'

            cy.get(fileInputElement).attachFile(yourFixturePath)
            cy.pause()
        })

        it.skip('Deve aceitar arquivos no formato pdf', ()=>{
            cy.visit('https://dsheiko.github.io/react-html5-form/')
            const yourFixturePath = 'Currículo_Brayan.pdf'
            const fileInputElement = '#fileInput'

            cy.get(fileInputElement).attachFile(yourFixturePath)
            cy.pause()
        })

        it.skip('Deve aceitar arquivos no formato mp4', ()=>{
            cy.visit('https://dsheiko.github.io/react-html5-form/')
            const yourFixturePath = 'Defect Evolução 266486_teste.mp4'
            const fileInputElement = '#fileInput'

            cy.get(fileInputElement).attachFile(yourFixturePath)
            cy.pause()
        })

        it.skip('Deve aceitar arquivos no formato json', ()=>{
            cy.visit('https://dsheiko.github.io/react-html5-form/')
            const yourFixturePath = 'example.json'
            const fileInputElement = '#fileInput'

            cy.get(fileInputElement).attachFile(yourFixturePath)
            cy.pause()
        })

        it.skip('Deve aceitar arquivos no formato clip', ()=>{
            cy.visit('https://dsheiko.github.io/react-html5-form/')
            const yourFixturePath = 'Illustration2.clip'
            const fileInputElement = '#fileInput'

            cy.get(fileInputElement).attachFile(yourFixturePath)
            cy.pause()
        })

        it.skip('Deve anexar varios arquivos', ()=>{
            cy.visit('https://dsheiko.github.io/react-html5-form/')
            const yourFixturePath1 = '2020-07-23_15h23_30.png'
            const yourFixturePath2 = 'Currículo_Brayan.pdf'
            const yourFixturePath3 = 'Defect Evolução 266486_teste.mp4'
            const yourFixturePath4 = 'example.json'
            const yourFixturePath5 = 'Illustration2.clip'
            const fileInputElement = '#fileInput'

            cy.get(fileInputElement)
                .attachFile(yourFixturePath1)
                .attachFile(yourFixturePath2)
                .attachFile(yourFixturePath3)
                .attachFile(yourFixturePath4)
                .attachFile(yourFixturePath5)

            cy.pause()
        }),
        it.skip('Adicionando encode ao arquivo', ()=>{
            cy.visit('https://dsheiko.github.io/react-html5-form/')
            const yourFixturePath = 'Illustration2.clip'
            const fileInputElement = '#fileInput'

            cy.get(fileInputElement)
                .attachFile({
                    filePath: yourFixturePath,
                    encondig: 'utf8'
                })
            cy.pause()
        })

        ARQUIVOS.forEach(arquivo => {
            it(`Deve aceitar arquivos no formato ${arquivo.split('.')[1]}`, ()=>{
                const fileInputElement = '#fileInput'
                cy.get(fileInputElement).attachFile(arquivo)
            })
        })

        ARQUIVOS_COM_ENCONDING.forEach(arquivo => {
            it.only(`Deve aceitar arquivos no formato ${arquivo.fileName.split('.')[1]} com encondig ${arquivo.encondig}`, ()=>{
                const fileInputElement = '#fileInput'
                cy.get(fileInputElement)
                    .attachFile({
                        filePath: arquivo.fileName,
                        encondig: arquivo.encondig
                    })
            })
        })
    }
)