import { createContext } from 'react'

export interface IResponsiveContext {
  isMobile: boolean
}

export const ResponsiveContext = createContext<IResponsiveContext>({ isMobile: true })
