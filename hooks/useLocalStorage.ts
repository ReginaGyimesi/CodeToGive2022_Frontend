import { useEffect, useState } from "react"

/**
 * Use as HOC of useState, with added funcitonality to store in localStorage
 * Get the value from localStorage, or use the pass-in value as initialValue
 * @param key the name store in localStorage
 * @param initialValue the value if localStorage return null
 * @returns [value,setValue]
 * @example
 * const [bookmarked,setBookmarked] = useLocalStorage<any>("bookmarked-jobs",[])
 */

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const [value, setValue] = useState<T>(() => {
    let jsonValue
    if (typeof window !== "undefined") {
      jsonValue = localStorage.getItem(key)
    } else {
      jsonValue = null
    }

    if (jsonValue != null && !jsonValue) return JSON.parse(jsonValue)

    if (typeof initialValue === "function") {
      return (initialValue as () => T)()
    }
    return initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as [typeof value, typeof setValue]
}
