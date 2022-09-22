import styled from "@emotion/styled"
import { ReactElement } from "react"

type Props = {
  title: string
  description?: string | ReactElement
}

const PageTitle = ({ title, description }: Props) => {
  return (
    <Container>
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
