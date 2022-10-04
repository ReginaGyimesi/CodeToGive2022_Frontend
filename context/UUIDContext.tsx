import { createContext, ReactNode, useContext, useEffect } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"
//import useUUID from "../hooks/useUUID"

type UUIDProviderProps = {
  children: ReactNode
}

type UUIDContext = {
  UUID: any
  setUUID: any
}

const UUIDContext = createContext({} as UUIDContext)

export function useUUIDContext() {
  return useContext(UUIDContext)
}

const NAME = "uuid-store"

export function UUIDProvider({ children }: UUIDProviderProps) {
  const [UUID, setUUID] = useLocalStorage<any>(NAME, null)

  return (
    <UUIDContext.Provider value={{ UUID, setUUID }}>
      {children}
    </UUIDContext.Provider>
  )
}
