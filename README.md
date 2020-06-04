# Cypress para Web

Projeto criado para estudar a aplicabilidade do cypress para testes web.

### Serviço utilizado para os testes: 
https://github.com/samlucax/youtube-cypress 

### Frameworks utilizados nos testes

- ChaiJs: para validações
- Mocha: para escrita dos cenários
- Allure Report: report dos testes executados

### Dependencias de desenvolvimento

- allure: http://allure.qatools.ru/#
```
brew install allure
```

- cypress-allure-plugin: https://www.npmjs.com/package/@shelex/cypress-allure-plugin 

````
npm i -D @shelex/cypress-allure-plugin
````


### Instalar o repositório 

```
npm install 
```

### Executar os testes

- Levar servidor no cypress 

```
npm start 
```

- Rodar os cenários em modo headless e emitir o Allure relatório no final 
````
npm run test:headless
````

- Rodar os cenários no navegador Chrome e emitir o Allure relatório no final

````
npm run test:chrome
````




