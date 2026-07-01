# ⚽ Álbum Digital da Copa do Mundo

## Informações do Aluno

**Nome:** Maria Luiza Freitas

**Curso:** Desenvolvimento de Sistemas

**Unidade Curricular:** Desenvolvimento Mobile com Ionic e Vue

---

## Descrição do Projeto

Este projeto consiste no desenvolvimento de uma aplicação mobile utilizando **Ionic Vue com TypeScript**, que simula um álbum digital de figurinhas da Copa do Mundo.

O sistema permite que usuários realizem cadastro, login e recuperação de senha, além de visualizar, pesquisar e gerenciar uma coleção de figurinhas de jogadores de diferentes seleções.

Todos os dados são armazenados em memória utilizando vetores locais, sem utilização de banco de dados externo, conforme os requisitos da atividade.

---

## Funcionalidades Implementadas

### Autenticação

* Login com e-mail e senha
* Cadastro de usuário
* Recuperação de senha
* Validação de campos obrigatórios

### Álbum de Figurinhas

* Visualização de figurinhas da Copa do Mundo
* Exibição de foto, nome do jogador e seleção
* Marcação de figurinhas como coletadas ou pendentes
* Contador de progresso da coleção

### Pesquisa e Filtros

* Pesquisa por nome do jogador
* Pesquisa por seleção
* Filtro de todas as figurinhas
* Filtro de figurinhas coletadas
* Filtro de figurinhas pendentes

### Coleção

* Tela exclusiva para visualizar apenas as figurinhas coletadas

### Perfil

* Visualização das informações do usuário
* Navegação através de menu em abas (Tabs)

---

## Estrutura do Projeto

```text
src/
├── components/
├── composables/
├── data/
├── views/
├── router/
└── tabs/
```

### Componentes

* AppHeader
* LoginForm
* RegisterForm
* ResetPasswordForm
* StickerCard
* StickerList

### Composables

* useAuth
* useAlbum

---

## Tecnologias Utilizadas

* Ionic Framework
* Vue 3
* TypeScript
* Composition API
* Vue Router

---

## Objetivo da Atividade

Aplicar os conceitos de componentização, composables, navegação entre páginas, gerenciamento de estado local e desenvolvimento de interfaces utilizando Ionic Vue e TypeScript.

---

# Nova atividade do dia 01/07
## Sobre o projeto

Aplicativo mobile de álbum de figurinhas da Copa.

Possui:

- cadastro
- login
- banco SQLite
- coleção de figurinhas
- filtros
- pesquisa
- raridade das cartas


## Tecnologias

- Vue
- Ionic
- Capacitor
- SQLite