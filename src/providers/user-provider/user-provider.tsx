import React, { PropsWithChildren } from 'react'


import { UserContext } from './user-context'
import { UserProps } from './user-provider.types'

export const UserProvider = ({ children, initialState }: PropsWithChildren<{ initialState: UserProps }>) => {
  return <UserContext.Provider value={initialState}>{children}</UserContext.Provider>
}
