<h1 align="center">
  🚀 Fundamentos do Node.js
</h1>

<p align="center">
  Construção de uma API HTTP do zero utilizando os módulos nativos do Node.js, sem dependência de frameworks externos.
</p>

<p align="center">
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-v24.x-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-ESM-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img alt="Rocketseat" src="https://img.shields.io/badge/Rocketseat-Ignite-8257E5?style=for-the-badge&logo=rocket&logoColor=white" />
  <img alt="License" src="https://img.shields.io/badge/License-ISC-blue?style=for-the-badge" />
</p>

---

## 📖 Sobre o Módulo

Este projeto aborda os **fundamentos essenciais do Node.js**, com foco em entender o funcionamento interno da plataforma e como a comunicação HTTP opera na camada mais baixa, sem abstrações de bibliotecas como Express, Fastify ou NestJS.

### 🎯 Conceitos e Recursos Abordados:
- **Servidor HTTP Nativo**: Criação e configuração de servidor usando o módulo `node:http`.
- **Roteamento Manual**: Identificação de rotas e métodos HTTP (`GET`, `POST`, etc.) através do objeto `req` (Request).
- **Headers & Metadados**: Manipulação de cabeçalhos de requisição e resposta (ex: `Content-Type: application/json`).
- **HTTP Status Codes**: Aplicação de códigos de status semânticos (`200 OK`, `201 Created`, `404 Not Found`).
- **Persistência em Memória (Stateful)**: Gerenciamento e armazenamento de dados em arrays/estruturas em memória durante o ciclo de vida da aplicação.
- **ES Modules (ESM)**: Uso da sintaxe moderna `import/export` nativa no Node.js (`"type": "module"`).

---

## 🗂️ Estrutura de Pastas

```text
01-fundamentos-nodejs/
├── src/
│   └── server.js      # Servidor HTTP principal e rotas da aplicação
├── streams/           # Módulo prático e arquivos de Streams
│   └── streams.md     # Documentação detalhada sobre Streams
├── outros/            # Arquivos auxiliares e rascunhos (ignorado no Git)
├── package.json       # Configuração e scripts do projeto
├── .gitignore         # Arquivos e pastas ignorados no versionamento
└── README.md          # Documentação principal do projeto
```

---

## ⚙️ Como Executar

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado (versão 18 ou superior).
- [Git](https://git-scm.com/) instalado.

### 1. Clonar o Repositório
```bash
git clone https://github.com/Richdssz/GrowUp-Unicap-Rocketseat.git
cd GrowUp-Unicap-Rocketseat/aulas-node/01-fundamentos-nodejs
```

### 2. Iniciar o Servidor em Modo Desenvolvimento
O projeto utiliza a flag nativa `--watch` do Node.js para recarregar automaticamente a cada alteração:
```bash
npm run dev
```

O servidor estará rodando em: `http://localhost:3333`

---

## 🛣️ Rotas da Aplicação

| Método | Rota | Descrição | Status Code |
| :--- | :--- | :--- | :--- |
| `GET` | `/users` | Lista todos os usuários cadastrados na memória | `200 OK` |
| `POST` | `/users` | Cria um novo usuário em memória | `201 Created` |

---

## 🏷️ Tags & Tópicos
`nodejs` • `javascript` • `http` • `backend` • `esm` • `api-rest` • `rocketseat` • `ignite`

---

## 📄 Licença

Este projeto está licenciado sob a licença ISC.
