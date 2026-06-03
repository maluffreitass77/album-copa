import { ref } from 'vue'
import { users, User } from '../data/users'

const currentUser = ref<User | null>(null)

export function useAuth() {

  const login = (
    email: string,
    senha: string
  ): boolean => {

    const user = users.find(
      u =>
        u.email === email &&
        u.senha === senha
    )

    if (user) {
      currentUser.value = user
      return true
    }

    return false
  }

  const register = (
    nome: string,
    email: string,
    senha: string
  ): void => {

    users.push({
      nome,
      email,
      senha
    })
  }

  const logout = (): void => {
    currentUser.value = null
  }

  const resetPassword = (
    email: string
  ): boolean => {

    return users.some(
      u => u.email === email
    )
  }

  return {
    currentUser,
    login,
    register,
    logout,
    resetPassword
  }
}