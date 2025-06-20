# 🛒 Carrinho de Compras com React Context

Este é um projeto simples de e-commerce desenvolvido em **React**, utilizando **React Context** e **useReducer** para gerenciar globalmente o estado do carrinho de compras.

## 🎯 Objetivo

Demonstrar como criar uma aplicação com gerenciamento de estado global usando Context API, permitindo que qualquer componente da árvore acesse e modifique o estado do carrinho, sem o uso de props.

---

## ⚙️ Funcionalidades

- ✅ Listagem de produtos estáticos
- ✅ Adição de produtos ao carrinho
- ✅ Remoção e ajuste de quantidade
- ✅ Visualização do resumo do carrinho
- ✅ Cálculo automático do total
- ✅ Mensagens de feedback ao adicionar
- ✅ Persistência dos dados no `localStorage`
- ✅ Interface responsiva com **tema escuro**

---

## 🧱 Estrutura de Componentes
src/
├── components/
│ ├── CartPage.js
│ ├── CartSummary.js
│ └── ProductList.js
├── context/
│ └── CartContext.js
├── App.js
├── index.css
└── index.js


---

## 📦 Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/caiquefrd/react-buy-cart.git

cd react-buy-cart

npm install

npm start
```
---

## 🛠️ Tecnologias Usadas
React

React Context API

useReducer

JavaScript (ES6+)

CSS Puro (Tema Escuro)

---

## 🧪 Melhorias Futuras
Integração com API externa para produtos

Autenticação de usuários

Finalização de compra e histórico

Estilização com Tailwind ou Material UI

---

## 👨‍💻 Autor
Desenvolvido por [caiquefrd] — @caiquefrd

---

