import styled from "@emotion/styled"
import { Button, LinearProgress } from "@mui/material"
import DoneIcon from "@mui/icons-material/Done"
import { useRouter } from "next/router"
import { assessments } from "../../../data/assessment_display"

import WorkOutlineIcon from "@mui/icons-material/WorkOutline"
import TranslateIcon from "@mui/icons-material/Translate"
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined"
import CustomButton from "../../common/CustomButton/CustomButton"
import { ITestDisplay } from "../../../types/assessment"
import { HashedMapIcon } from "../Assessment.const"

type Props = {
  assessment: ITestDisplay
  key?: string | number
}

const handleIcon = (name: string) => {
  switch (name) {
    case "WorkOutlineIcon":
      return <WorkOutlineIcon />
    case "TranslateIcon":
      return <TranslateIcon />
    case "VisibilityOutlinedIcon":
      return <VisibilityOutlinedIcon />
    case "QuizOutlinedIcon":
      return <QuizOutlinedIcon />
  }
}

export const AssessmentCard = ({ assessment }: Props) => {
  const router = useRouter()

  return (
    <Container>
      <Justify>
        <div>
          <Title
            style={{
              color: assessment.completed
                ? "rgba(0, 0, 0, 0.4)"
                : "rgba(0, 0, 0, 0.87)",
            }}
          >
            {assessment.title}
          </Title>
          <Description
            style={{
              color: assessment.completed ? "rgba(0, 0, 0, 0.4)" : "#6a6e77",
            }}
          >
            {assessment.description}
          </Description>
        </div>
        <Flex>
          {assessment.completed && (
            <Flex>
              <SuccessText>Completed</SuccessText>
              <DoneIcon
                style={{
                  color: "#4dc46e",
                  marginLeft: "10px",
                  marginRight: "40px",
                }}
              />
            </Flex>
          )}
          <Icon
            style={{
              background: HashedMapIcon[assessment.type]?.icon?.color,
              opacity: assessment.completed ? "0.5" : 1,
            }}
          >
            {handleIcon(HashedMapIcon[assessment.type]?.icon?.name)}
          </Icon>
        </Flex>
      </Justify>
      {!assessment.completed && (
        <>
          <Flex style={{ marginTop: "20px" }}>
            <LinearProgress
              variant="determinate"
              value={assessment.progress}
              color="greyishColor"
              sx={{
                backgroundColor: "#EEEEEE",
                borderRadius: "12px",
                height: "8px",
                width: "112px",
              }}
            />

            <Text>{assessment.progress}% ready</Text>
          </Flex>
          <CustomButton
            style={{
              marginTop: "40px",
              boxShadow: "none",
              padding: "8px 22px",
              borderRadius: "8px",
            }}
            variant="contained"
            color="primary"
            onClick={() => {
              router.push(
                HashedMapIcon[assessment.type].url + "/" + assessment.test_id
              )
            }}
          >
            {assessment.progress > 0
              ? "Continue answering"
              : "Fill the questionnaire"}
          </CustomButton>
        </>
      )}
    </Container>
  )
}

const Flex = styled.div`
  display: flex;
  align-items: center;
`

const Justify = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const Container = styled.div`
  background: linear-gradient(
      270deg,
      rgba(77, 197, 110, 0.06) 1.98%,
      rgba(255, 255, 255, 0) 55.09%
    ),
    #ffffff;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.04),
    0px 15px 17px -1px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  padding: 24px;
  margin-top: 32px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`

const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  padding-bottom: 6px;
`

const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
`

const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  margin-left: 10px;
`

const SuccessText = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #4dc46e;
`

const Icon = styled.div`
  display: flex;
  min-width: 64px;
  height: 64px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  color: white;
`
