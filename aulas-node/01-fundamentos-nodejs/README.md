<h1 align="center">
  🚀 Fundamentos do Node.js
</h1>

<p align="center">
  Construção de APIs HTTP e domínio de Streams no Node.js puro, sem o uso de frameworks externos.
</p>

<p align="center">
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-v24.x-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-ESM-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img alt="Rocketseat" src="https://img.shields.io/badge/Rocketseat-Ignite-8257E5?style=for-the-badge&logo=rocket&logoColor=white" />
  <img alt="License" src="https://img.shields.io/badge/License-ISC-blue?style=for-the-badge" />
</p>

---

## 📖 Sobre o Projeto

Este projeto faz parte da trilha de **Node.js** da Rocketseat. O objetivo é compreender profundamente a base e os princípios fundamentais da arquitetura do Node.js, construindo aplicações do zero utilizando apenas módulos internos nativos (`node:http`, `node:stream`, `node:buffer`).

### 🎯 Principais Objetivos e Conceitos:
- **API HTTP Pura**: Criação de servidores HTTP sem dependências externas (como Express ou Fastify).
- **Rotas e Métodos HTTP**: Manipulação de métodos (`GET`, `POST`, etc.), cabeçalhos (`Headers`) e status codes (`201`, `404`, etc.).
- **Persistência em Memória**: Gerenciamento de estado e recursos em memória durante o ciclo de vida do servidor.
- **Streams no Node.js**: Leitura, transformação e escrita de dados sob demanda com baixo uso de memória RAM.
- **Streams em Protocolos HTTP**: Compreensão de como o `req` (*Readable*) e o `res` (*Writable*) funcionam em conexões HTTP reais.

---

## 🗂️ Estrutura do Repositório

```text
01-fundamentos-nodejs/
├── src/
│   └── server.js                      # Servidor HTTP com rotas de usuários (GET/POST)
├── streams/
│   ├── README.md                      # Documentação detalhada e conceitos de Streams
│   ├── fundamentos.js                 # Exemplo de Readable, Writable e Transform com pipe()
│   ├── stream-http-server.js          # Servidor HTTP recebendo e devolvendo dados em Stream
│   └── fake-upload-to-http-Stream.js  # Cliente de envio de dados em fluxo contínuo via fetch
├── package.json                       # Configuração do projeto e scripts de execução
└── .gitignore                         # Arquivos e pastas ignorados pelo Git
```

---

## 🌊 Streams no Node.js

Para entender em detalhes o funcionamento de Streams (`Readable`, `Writable`, `Transform`, `Duplex`, encadeamento com `.pipe()` e a flag `duplex: 'half'`), acesse o guia dedicado:

👉 **[Consulte a documentação completa de Streams](./streams/README.md)**

---

## ⚙️ Como Executar o Projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/en/) instalado (versão 18 ou superior).
- [Git](https://git-scm.com/) configurado.

### 1. Clonar o repositório
```bash
git clone https://github.com/Richdssz/GrowUp-Unicap-Rocketseat.git
cd GrowUp-Unicap-Rocketseat/aulas-node/01-fundamentos-nodejs
```

### 2. Executar o Servidor Principal (Rotas HTTP)
```bash
npm run dev
```
O servidor iniciará na porta `3333` (`http://localhost:3333`).

---

### 3. Testar os Exemplos de Streams

#### A. Fundamentos de Streams no Terminal
```bash
node streams/fundamentos.js
```

#### B. Servidor HTTP com Streams
Em um terminal, inicie o servidor de streams na porta `3334`:
```bash
node streams/stream-http-server.js
```

#### C. Cliente de Envio em Streaming
Em outro terminal, execute o cliente para simular o upload de 100 números:
```bash
node streams/fake-upload-to-http-Stream.js
```

---

## 🏷️ Tópicos & Tags
`nodejs` • `javascript` • `streams` • `readable-stream` • `writable-stream` • `transform-stream` • `http` • `backend` • `rocketseat` • `ignite`

---

## 📄 Licença

Este projeto está sob a licença ISC.
