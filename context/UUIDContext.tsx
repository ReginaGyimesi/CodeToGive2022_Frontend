import { createContext, ReactNode, useContext } from "react"
import useUUID from "../hooks/useUUID"

type UUIDProviderProps = {
  children: ReactNode
}

type UUIDContext = {
  uuid: any
}

const UUIDContext = createContext({} as UUIDContext)

export function useUUIDContext() {
  return useContext(UUIDContext)
}

export function UUIDProvider({ children }: UUIDProviderProps) {
  const uuid = useUUID()

  return (
    <UUIDContext.Provider value={{ uuid }}>{children}</UUIDContext.Provider>
  )
}
