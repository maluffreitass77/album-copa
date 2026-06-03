export interface User {
  nome: string
  email: string
  senha: string
}

export const users: User[] = [
  {
    nome: 'Maria',
    email: 'admin@copa.com',
    senha: '123456'
  }
]