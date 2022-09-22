import { GetStaticProps } from "next"
import Image from "next/image"
import { ReactElement } from "react"
import PageTitle from "../../components/common/PageTitle"

type Props = {
  data: any
}

const Test = ({ data }: Props): ReactElement | null => {
  console.log(data)
  return (
    <>
      <PageTitle
        title="Assessment"
        description={
          <>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            <br />
            minima nihil unde nulla, modi corporis iure libero soluta saepe rem!
          </>
        }
      />
      <div className="">This is another test page test 2</div>
      <h1>{data?.message}</h1>
      <Image src="" alt="test" layout="fill" />
    </>
  )
}

export default Test

export const getStaticProps: GetStaticProps = async () => {
  const request = await fetch(`${process.env.HOST}/api/v1/hello`)
  const response = await request.json()

  return {
    props: {
      data: response,
    },
  }
}
