Status do Projeto: Em desenvolvimento :warning:

![[object Object]](https://socialify.git.ci/rafaelgeronimo/today-frontend/image?description=1&descriptionEditable=%5B%20T%20O%20D%20A%20Y%20%5D%20-%20%0AF%20R%20O%20N%20T%20E%20N%20D&font=KoHo&language=1&name=1&owner=1&pattern=Plus&theme=Light)

### Bem vindo ao repositório **frontend** do projeto [Today](https://github.com/rafaelgeronimo/today)!

### Para ter mais contexto sobre o desafio, [acesse o repositório inicial](https://github.com/rafaelgeronimo/today).

#### Se  você está procurando pelo repositório **backend**, [clique aqui para visitar o projeto **today-backend**](https://github.com/rafaelgeronimo/today-backend).


## :book: Sobre
O **Today Frontend** é onde se encontra todo o código necessário para execução do projeto através do navegador.

<figure>
    <img src="https://i.imgur.com/fjcTOVf.png" />
    <figcaption>Tela de login</figcaption>
</figure>

Ainda em desenvolvimento, o sistema possui três telas principais, onde é possível, após o **login**, realizar o cadastro de novas tarefas e consultar as tarefas cadastradas para a pessoa usuária logada na tela de **tarefas**. Também há uma página de **perfil** que apresenta mais informações sobre a pessoa usuária.

Outras captura de tela estão no fim dessa página.


## :art: Feito com 
As principais ferramentas utilizadas para o desenvolvimento desse projeto:
- [React](https://pt-br.reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/)
- [Sass](https://sass-lang.com/)

## :dash: Deploy da aplicação

### [https://today.geronimo.dev](https://today.geronimo.dev)
```
Email: admin@email.com
Senha: admin1
```

## :rocket: Executando o projeto
Para rodar o projeto em seu ambiente, primeiramente realize o clone desse repositório através do terminal com o comando:
```shell=
git clone git@github.com:rafaelgeronimo/today-frontend.git
```

Em seguinda, entre na pasta do projeto e instale as dependências do mesmo:
```shell=
cd today-frontend

yarn install
```

Agora é só executar com o comando:
```shell=
yarn start
```

Pronto, a aplicação está acessível através da rota [http://localhost:3000](http://localhost:3000).

O projeto está configurado para utilizar a API online desenvolvida no [today-backend](https://github.com/rafaelgeronimo/today-backend).
Para usar outro endereço, altere o conteúdo da chave `baseURL` no arquivo `src/services/api.jsx`.

## 🖼 Capturas de tela

<figure>
    <img src="https://i.imgur.com/1GSfOkU.png" />
    <figcaption>Tela de tarefas</figcaption>
</figure>

<figure>
    <img src="https://i.imgur.com/NLuIMXu.png" />
    <figcaption>Tela de perfil</figcaption>
</figure>
