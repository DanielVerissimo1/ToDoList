<h1 align="center"> 
  <img width="42" height="42" alt="logo" src="https://raw.githubusercontent.com/DanielVerissimo1/ToDoList/main/public/rocket.svg" />
  <br>
  ToDo List
  <p>
    <img src="https://img.shields.io/github/last-commit/DanielVerissimo1/ToDoList?style=for-the-badge&logo=git&logoColor=white&color=6B73FF" alt="Last Commit">
    <img src="https://img.shields.io/github/languages/top/DanielVerissimo1/ToDoList?style=for-the-badge&color=6B73FF" alt="Top Language">
    <img src="https://img.shields.io/github/languages/count/DanielVerissimo1/ToDoList?style=for-the-badge&color=000DFF" alt="Languages Count">
  </p>
</h1>

**ToDo List** é um projeto de gerenciamento de tarefas desenvolvido com **Next.js**, baseado nos conceitos fundamentais do React. O objetivo é aplicar na prática a construção de uma aplicação completa, moderna e performática.

---

## 📸 Visualização do Projeto

<p align="center">
  <img alt="preview" src="https://raw.githubusercontent.com/DanielVerissimo1/ToDoList/main/Thumbnail.png" style="border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
</p>

---

## 🚀 Funcionalidades

| Funcionalidade | Descrição |
|----------------|-----------|
| ➕ **Adicionar tarefas** | Crie novas tarefas na lista principal |
| ✅ **Concluir tarefas** | Marque tarefas como concluídas/ pendentes |
| ❌ **Remover tarefas** | Exclua tarefas indesejadas da lista |
| 📊 **Progresso** | Acompanhe o contador de tarefas criadas e concluídas |
| 🔄 **Atualização dinâmica** | Interface reage instantaneamente às ações do usuário |

---

## 🛠️ Tecnologias Utilizadas

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
</div>

---

## 📚 Conceitos aplicados

- Componentes funcionais com React e Next.js (App Router)
- Manipulação de estado com `useState` e hooks
- Tipagem estática com TypeScript
- Roteamento e estrutura de pastas do Next.js 14+
- Estilização com Tailwind CSS
- Deploy integrado com a plataforma Vercel

---

## 📁 Arquitetura do projeto

```bash
ToDoList
├── public/                     # Arquivos estáticos
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── rocket.svg              # Logo do projeto
│   ├── vercel.svg
│   └── window.svg
│
├── src/
│   └── app/                    # App Router do Next.js
│       ├── favicon.ico
│       ├── globals.css
│       ├── layout.tsx
│       ├── page.tsx
│       │
│       └── components/         # Componentes do projeto
│           ├── Header.tsx
│           ├── Task.tsx
│           ├── TaskInput.tsx
│           └── TaskList.tsx
│
├── Thumbnail.png               
├── .gitignore
├── components.json             
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── tailwind.config.js          # Configuração do Tailwind CSS
├── tsconfig.json
└── README.md
