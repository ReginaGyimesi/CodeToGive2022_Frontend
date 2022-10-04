import type { NextPage } from "next"
import { useRouter } from "next/router"
import { useUUIDContext } from "../context/UUIDContext"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  const router = useRouter()
  const { uuid } = useUUIDContext()
  return (
    <div
      className={styles.container}
      onClick={() => {
        router.push(`${uuid}`)
      }}
    >
      To assessments page
    </div>
  )
}

export default Home
