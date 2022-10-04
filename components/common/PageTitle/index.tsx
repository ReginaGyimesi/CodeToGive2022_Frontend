import styled from "@emotion/styled"
import Link from "next/link"
import { ReactElement } from "react"

type Props = {
  title: string
  description?: string | ReactElement
  backURL?: string
}

const PageTitle = ({ title, description, backURL }: Props) => {
  return (
    <Container>
      {backURL ? (
        <Link href={backURL}>
          <Anchor>Back to Assessment</Anchor>
        </Link>
      ) : null}
      <Title>{title}</Title>
      <Description>{description ? description : ""}</Description>
    </Container>
  )
}

export default PageTitle

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 40px 0 60px 0;
`

const Title = styled.h2`
  font-size: 68px;
  font-weight: 600;
  color: #191e28;
`

const Description = styled.p`
  font-size: 24px;
  color: #6a6e77;
`

const Anchor = styled.a`
  color: #0068ff;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`
