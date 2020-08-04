<h1 align="center">Cypress para Web</h1>
<p align="center">Projeto criado para estudar a aplicabilidade do cypress para testes web.</p>

--------------------------

<h2>Frameworks utilizados nos testes</h2>

- ChaiJs: para validações
- Mocha: para escrita dos cenários
- Allure Report: report dos testes executados
- Cypress File Upload: fazer upload de arquivos durante os testes
- Eyes-Cypress: scheenshoots 

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
- arquivo `.npmrc`: criar este arquivo e adicionar estas linhas de código para evitar erro ao realizar o download de pacotes 

```
strict-ssl=false
registry="http://registry.npmjs.org/"
``` 

<h2>Configuração de ambiente</h2>

<h3> Dependencias de desenvolvimento</h3>

- allure: http://allure.qatools.ru/#

- cypress-allure-plugin: https://www.npmjs.com/package/@shelex/cypress-allure-plugin 

- Cypress File upload: https://www.npmjs.com/package/cypress-file-upload 

- Eyes-Cypress: https://www.npmjs.com/package/@applitools/eyes-cypress e https://applitools.com/tutorials/cypress.html#_2-set-the-applitools-api-key



<h3>Instalar as dependencias</h3>

```
    npm install 
```

Se por aparecer o **erro**: 

```
    npm ERR! Unable to authenticate, need: Basic realm="Artifactory Realm"
```

adicionar ao final do pacote o seguinte comando instalar **--registry https://registry.npmjs.org** como no exemplo abaixo  

```
    npm install --registry https://registry.npmjs.org
```

<h3>Servidor para realizar os testes</h3> 

<p>Baixe o projeto no Github:</p>

https://github.com/samlucax/youtube-cypress 


<h3>Executar os testes</h3>

- Rodar os cenários em modo headless e emitir o Allure relatório no final 
````
    npm run test:headless:report
````

- Rodar os cenários no navegador Chrome e emitir o Allure relatório no final

````
    npm run test:chrome:report  
````

- Para mais comandos olhar o arquivos package.json na parte de scripts 




