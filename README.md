# ImageRepo – Frontend

Frontend de uma aplicação de **galeria e repositório de imagens**, desenvolvido com **Next.js**, **TypeScript** e **Tailwind CSS**, consumindo uma API REST dedicada.

O projeto foi construído com base em um **curso prático**, tendo como principal objetivo o **aprendizado e consolidação de conceitos de frontend moderno**, integração com backend e boas práticas de organização. Embora existam ideias de evolução (como atualização e exclusão de imagens), essas funcionalidades **não são o foco atual** e podem ou não ser implementadas no futuro.

---

## 🔗 Backend da aplicação

Este frontend consome a API disponível no repositório:

👉 **Backend (API + Docker Compose)**
[https://github.com/rookie-leo/imagerepoapi](https://github.com/rookie-leo/imagerepoapi)

O backend já conta com:

* API REST funcional
* Persistência de dados
* Upload e recuperação de imagens
* Ambiente configurável via **Docker Compose**

> **Importante:** Para que o frontend funcione corretamente, o backend deve estar em execução.

---

## 🚀 Visão geral

O ImageRepo permite:

* Enviar imagens para o backend
* Validar arquivos (tipo e tamanho)
* Visualizar imagens em formato de galeria
* Expandir imagens na própria tela
* Receber feedback visual de sucesso ou erro

A aplicação foi pensada como uma base sólida para aprendizado e futuras extensões.

---

## 🧠 Objetivos do projeto

* Praticar **Next.js com App Router**
* Trabalhar com **TypeScript** no frontend
* Consumir uma API REST real
* Validar formulários com **Formik + Yup**
* Estilizar a aplicação com **Tailwind CSS**
* Integrar notificações com **React Toastify**
* Aprender a lidar com erros comuns de CORS, build e configuração

---

## 🧰 Tecnologias utilizadas

### Frontend

* **Next.js**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **Formik**
* **Yup**
* **React Toastify**

### Backend (repositório separado)

* **Spring Boot**
* **API REST**
* **Docker / Docker Compose**
* **Persistência de dados**
* **Upload de arquivos**

---

## 🧱 Estrutura do frontend

```
/
├── public/
├── src/
│   ├── app/                   # App Router do Next.js
│   ├── components/            # Componentes reutilizáveis
│   ├── resources/             # Services, models e integrações com a API
│   ├── hooks/                 # Hooks customizados
│   ├── utils/                 # Funções utilitárias
│   └── styles/                # Estilos globais
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## ⚙️ Pré-requisitos

Antes de rodar o frontend, certifique-se de ter:

* **Node.js** (versão LTS recomendada)
* **npm** ou **yarn**
* **Docker e Docker Compose** (para o backend)

---

## ▶️ Executando o backend

Clone e suba o backend primeiro:

```bash
git clone https://github.com/rookie-leo/imagerepoapi.git
cd imagerepoapi
docker-compose up
```

O backend ficará disponível (por padrão) em:

```
http://localhost:8080
```

---

## ▶️ Executando o frontend

1. Clone o repositório do frontend:

```bash
git clone https://github.com/rookie-leo/imagerepo.git
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Inicie o projeto:

```bash
npm run dev
# ou
yarn dev
```

4. Acesse no navegador:

```
http://localhost:3000
```

---

## 🔄 Integração Frontend ↔ Backend

* O frontend consome diretamente os endpoints expostos pelo backend
* É necessário que o backend esteja rodando para:

  * Upload de imagens
  * Listagem da galeria
  * Visualização correta dos dados

Caso a API esteja em outra URL, o ajuste pode ser feito no **service responsável pela comunicação HTTP**.

---

## 🚧 Funcionalidades futuras (não prioritárias)

Algumas ideias de evolução:

* Atualização de imagens
* Exclusão de imagens
* Paginação e filtros
* Melhorias de UX/UI
* Autenticação

⚠️ **Essas funcionalidades não fazem parte do objetivo atual** e podem ser implementadas futuramente — ou não — conforme a necessidade de aprendizado.

---

## 📌 Observações importantes

* O projeto **não tem foco comercial**
* O código prioriza clareza e aprendizado
* Alguns pontos podem ser refinados conforme o avanço dos estudos
* A integração frontend/backend foi feita de forma explícita para fins didáticos

---

## 📄 Licença

Este projeto é distribuído sob a licença **MIT**.

---

## ✍️ Autor

Desenvolvido por [**Leonardo Paulino**](https://www.linkedin.com/in/leonardo-silva-paulino-6b3412191/)
Projeto criado com base em estudos e cursos práticos de desenvolvimento web moderno.

---

<sub>README ajustado e aprimorado com apoio de inteligência artificial.</sub>

