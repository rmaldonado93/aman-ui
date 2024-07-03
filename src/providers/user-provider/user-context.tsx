import { createContext, useContext } from 'react'

import { UserProps } from './user-provider.types'

export const UserContext = createContext<UserProps | undefined>(undefined)

const useUserContext = () => {
  const context = useContext(UserContext)

  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider')
  }

  return context
}

export { useUserContext }
