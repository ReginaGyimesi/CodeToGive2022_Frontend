import styled from "@emotion/styled"
import { ReactElement, useState } from "react"
import AnswerButton from "./AnswerButton/AnswerButton"
import CheckIcon from "@mui/icons-material/Check"
import CloseIcon from "@mui/icons-material/Close"

type Props = {
  image?: string
  onClickCallBack: any
  index: number
  description: string | ReactElement
  totalLength: number
}

const FALL_BACK_IMAGE =
  "https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=742&q=80"

const QuestionCard = ({
  image,
  index,
  onClickCallBack,
  description,
  totalLength,
}: Props) => {
  const [selectedAnswer, setSelectedAnswer] = useState(0)
  return (
    <Container>
      <InnerContainer>
        <ContentContainer>
          {image ? <ImageCover image={image} /> : null}
          <Content>
            <Title>
              Question {index} of {totalLength}
            </Title>
            <Description>{description}</Description>
          </Content>
        </ContentContainer>
      </InnerContainer>
      <AnswerContainer>
        <AnswerButton
          onClick={() => {
            setSelectedAnswer(1)
            onClickCallBack()
          }}
          icon={<CheckIcon />}
          active={selectedAnswer === 1}
        >
          Agree
        </AnswerButton>
        <AnswerButton
          onClick={() => {
            setSelectedAnswer(2)
            onClickCallBack()
          }}
          icon={<CloseIcon />}
          active={selectedAnswer === 2}
        >
          Disagree
        </AnswerButton>
      </AnswerContainer>
    </Container>
  )
}

export default QuestionCard

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.04),
    0px 15px 17px -1px rgba(0, 0, 0, 0.05);
`

const ImageCover = styled.div<{ image?: string }>`
  background-image: url(${({ image }) => (image ? image : FALL_BACK_IMAGE)});
  background-position: center;
  background-size: cover;
  border-radius: 8px;
  width: 100%;
  min-height: 200px;
`

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 48px;
`
const ContentContainer = styled.div`
  display: flex;
  gap: 48px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
  padding-top: 20px;
`
const Title = styled.p`
  //font-family: "Open Sans";
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.15px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.6);
`
const Description = styled.p`
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: rgba(0, 0, 0, 0.87);
`
const AnswerContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px;
  gap: 12px;
`
