import styled from "@emotion/styled"
import { Button } from "@mui/material"

type AssessmentResultCardProps = {
  isCompleted: boolean
}

export const AssessmentResultCard = ({
  isCompleted,
}: AssessmentResultCardProps) => {
  return (
    <Container>
      <div>
        <Title>Assessment report</Title>
        <Description>
          Check out your assessment summary and pick your favorite job to apply
          to.
        </Description>
        <Flex>
          <Button variant="outlined" disabled={!isCompleted}>
            Learn more
          </Button>
          <Text>
            The results are available after finishing all questionnaires.
          </Text>
        </Flex>
      </div>
    </Container>
  )
}

const Flex = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 40px;
`

const Container = styled.div`
  background: 0px 0px 7px rgba(0, 0, 0, 0.04),
    0px 15px 17px -1px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.04),
    0px 15px 17px -1px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 24px;
  background-color: #0288d1;
`

const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  padding-bottom: 6px;
  color: white;
`

const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: white;
`

const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: white;
  margin-left: 10px;
  height: fit-content;
`