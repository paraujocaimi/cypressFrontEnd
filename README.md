<h1 align="center">Cypress para Web</h1>
<p align="center">Projeto criado para estudar a aplicabilidade do cypress para testes web.</p>


--------------------------

<h2>Frameworks utilizados nos testes</h2>

- Chance: utilizado para a utilização dos mocas

- Cypress File upload: realizar upload de arquivos 

- Cypress Cucumber Preprocessor: vincular cucumber ao projeto

- Mocha: lib para executar os testes

- Mochawesome: gerar relatórios no formato nativo do cypress

- Mochawesome-report-generator: gerar relatórios com base em um único arquivo json

- Mochawesome-merge: unificar o resultado de todos os tests em apenas um arquivo .json para assim alimentar o gerador de report 

- Cypress multi reporters: gerar vários tipos de relatório final de execução. 

- Cucumber Html Reporter: gera arquivo .json com os reports dos testes executados. 

<h2> Extensões VS Code</h2>

- Cucumber (Gherkin) Full Support

- Cuke Step Definition Generator

- Chai snippets

- ES6 Mocha Snippets


<h2>Estrutura do Projeto</h2>

```
├── Cypress
    ├── fixtures 
    ├── integration
    ├── plugins
        ├── index.js
    ├── screenshots
    ├── support
        ├── index.js
        ├── commans.js  
├── .gitignore
├── cypress.json
├── node_modules
├── README.md  
```

- **Plugins**: Declaração de todos os plugins que serão utilizados dentro do projeto
- **support**: `index.js` neste arquivo você irá adiconar tudo que precisa ser executado antes do teste iniciar. No arquivo `commands.js` você pode adicionar testes que precisam ser executadas em mais de um ponto na sua aplicação, criando assim um tipo de "alias" que pode ser utilizado em várias partes do projeto, não sendo necessário duplicar código. 

<h2>Configuração de ambiente</h2>

<h3> Dependencias de desenvolvimento</h3>

- Chance.js: https://chancejs.com/

- Cypress File upload: https://www.npmjs.com/package/cypress-file-upload

- Cypress Cucumber Preprocessor: https://www.npmjs.com/package/cypress-cucumber-preprocessor/v/1.12.0 

- Mocha awesome: https://www.npmjs.com/package/mochawesome

- Cucumber HTML Reporter: https://www.npmjs.com/package/cucumber-html-reporter 

<h3>Instalar as dependencias</h3>

```
    npm install 
```

<h3>Servidor para realizar os testes</h3> 

<p>Baixe o projeto no Github:</p>

https://github.com/samlucax/youtube-cypress 


<h3>Executar os testes</h3>

<h4> Testes sem Cucumber</h4>

- Rodar os cenários em modo headless e emitir o Allure relatório no final 
````
    npm run test:headless:report
````

- Rodar os cenários no navegador Chrome e emitir o Allure relatório no final

````
    npm run test:chrome:report  
````
- Para mais comandos olhar o arquivos package.json na parte de scripts 


<h4> Testes com Cucumber</h4>

- Para abrir o cypress rodar teste com o script Cucumber 

```
    npm run cy:open:cucumber
```

- Rodar todos os testes 
```
    npm run cy:run:cucumber
``` 

- Para gerar os relatórios: 

```
    npm run reporter:cucumber
```




