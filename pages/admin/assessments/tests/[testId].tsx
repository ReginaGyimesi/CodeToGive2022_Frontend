import styled from "@emotion/styled"
import { Button } from "@mui/material"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import Table from "../../../../components/Admin/Table/Table"
import CustomButton from "../../../../components/common/CustomButton/CustomButton"
import CustomTextField from "../../../../components/common/CustomTextField/CustomTextField"
import PageTitle from "../../../../components/common/PageTitle"
import Layout from "../../../../components/Layout"
import { ITest, Question } from "../../../../types/assessment"
import CheckIcon from "@mui/icons-material/Check"
import AddIcon from "@mui/icons-material/Add"
import QuestionEditModal from "../../../../components/common/Modal/QuestionEditModal"

const filterQuestionType = (arrayAllQuestions: Question[], type: any) => {
  return arrayAllQuestions.filter((question) => question.type === type)
}

const filterTestType = (arrayAllTests: ITest[], type: any) => {
  return arrayAllTests.filter((test) => test.type === type)
}

const handleQueryRouteToTypeQuestion = (
  queryText: string | undefined | string[]
) => {
  switch (queryText) {
    case "work-motivation":
      return "MOTIVATION_QUESTION"
    default:
      return ""
  }
}

const handleQueryRouteToTypeTest = (
  queryText: string | undefined | string[]
) => {
  switch (queryText) {
    case "work-motivation":
      return "MOTIVATION_TEST"
    default:
      return ""
  }
}

const AssessmentTypeEdit = () => {
  const router = useRouter()
  const routerQuery = router.query.testId

  console.log("testID", routerQuery)
  const questionTypeRoute = handleQueryRouteToTypeQuestion(routerQuery)

  const testTypeRoute = handleQueryRouteToTypeTest(routerQuery)
  const [questionData, setQuestionData] = useState<Question[]>([])

  const [isSaved, setIsSaved] = useState(false)
  const { control, handleSubmit, setValue } = useForm()

  // const fetchData = async () => {
  //   try {
  //     // GET ALL QUESTION
  //     const reqQuestion = await fetch(`${process.env.HOST}/api/v1/questions/`)
  //     const resQuestion = await reqQuestion.json()
  //     const allTypeQuestionsData = resQuestion

  //     // GET ALL TEST
  //     const reqTest = await fetch(`${process.env.HOST}/api/v1/tests/`)
  //     const resTest = await reqTest.json()
  //     const allTypeTestData = resTest

  //     setValue("title", filterTestType(allTypeTestData, testTypeRoute)[0].title) //JUST A WORK AROUND, CAUSE NO GENERAL TEST TYPE

  //     setQuestionData(
  //       filterQuestionType(allTypeQuestionsData, questionTypeRoute)
  //     )
  //   } catch {
  //     setQuestionData([])
  //   }
  // }

  const fetchData = async () => {
    try {
      // GET TEST INFO
      const req = await fetch(`${process.env.HOST}/api/v1/tests/${routerQuery}`)
      const res = await req.json()

      setValue("title", res.title)
      setValue("description", res.description)

      setQuestionData(res.questions)
    } catch {
      setQuestionData([])
    }
  }

  const submitData = (data: any) => {
    console.log("submitData", data)
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit(submitData)}>
        <Flex>
          <PageTitle
            backURL="/admin/assessments"
            title={"Edit Test #" + routerQuery}
            description="Edit Test and modify Questions data"
          />
          <CustomButton
            type="submit"
            onClick={() => {
              setIsSaved(true)
            }}
            sx={{ width: "10%" }}
            variant="contained"
            disabled={isSaved} //COMMENT THIS TO HAVE IT SEND TO FORM FUNCTIONALLY
          >
            Save
            {isSaved ? "d" : null}
            {isSaved ? (
              <CheckIcon
                sx={{ color: "#A0A2A3", fontSize: "20px", marginLeft: "5px" }}
              />
            ) : null}
          </CustomButton>
        </Flex>

        <UpperContainerForm>
          <CustomButton
            onClick={fetchData}
            sx={{ width: "20%" }}
            variant="contained"
          >
            Fetch Data
          </CustomButton>
          <SubTitle>Test Information</SubTitle>
          <CustomTextField
            control={control}
            name="title"
            label="Title"
            type="text"
            variant="outlined"
            setValue={setValue}
          />
          <CustomTextField
            control={control}
            name="description"
            label="Description"
            type="text"
            variant="outlined"
            setValue={setValue}
          />
        </UpperContainerForm>
      </form>

      <SubTitle style={{ margin: "40px 0" }}>Questions</SubTitle>

      <Table questionsData={questionData} />

      <QuestionEditModal
        onClick={() => {
          setIsSaved(true)
        }}
      />
    </Layout>
  )
}

export default AssessmentTypeEdit

const UpperContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  gap: 30px;
`

const SubTitle = styled.h2`
  font-weight: 700;
  font-size: 32px;
`
const Flex = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`
const AddButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 40px 0;
`
