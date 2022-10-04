import { useEffect } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"

const NAME = "uuid-store"

export default function useUUID() {
  const [UUID, setUUID] = useLocalStorage<any>(NAME, null)
  useEffect(() => {
    if (!UUID) {
      const fetchAssessmentData = async () => {
        try {
          const req = await fetch(
            `${process.env.HOST}/api/v1/assessments/generate`,
            {
              method: "POST",
            }
          )
          const res = await req.json()
          setUUID(res?.uuid)
          localStorage.setItem(NAME, res?.uuid)
        } catch {
          console.log("ERRORS: FETCH UUID")
          setUUID("1234")
        }
      }
      fetchAssessmentData()
    }
  }, [])

  return UUID
}
