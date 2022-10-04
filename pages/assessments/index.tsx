import { useEffect, useState } from "react"
import { AssessmentCard } from "../../components/Assessments/AssessmentCard/AssessmentCard"
import { AssessmentResultCard } from "../../components/Assessments/AssessmentResultCard/AssessmentResultCard"
import PageTitle from "../../components/common/PageTitle"
import Layout from "../../components/Layout"
import { useUUIDContext } from "../../context/UUIDContext"
import { assessments as mock_assessments_display } from "../../data/assessment_display"
import { ITestDisplay } from "../../types/assessment"

function rearrangedArray(from: number, to: number, arr: any) {
  const newArr = [...arr]

  const item = newArr.splice(from, 1)[0]
  newArr.splice(to, 0, item)

  return newArr
}

const AssessmentsPage = () => {
  const { uuid } = useUUIDContext()
  const [assessments, setAssessments] = useState<ITestDisplay[]>([])

  const incomplete = assessments?.filter(
    (assessment) => assessment.progress < 100
  )
  useEffect(() => {
    const fetchAssessmentData = async () => {
      try {
        const req = await fetch(
          `${process.env.HOST}/api/v1/assessments/${uuid}`
        )
        const res = await req.json()

        const testsArray = rearrangedArray(2, 0, res.tests)

        setAssessments(testsArray)
      } catch {
        setAssessments(mock_assessments_display)
      }
    }
    if (uuid) {
      fetchAssessmentData()
    }
  }, [uuid])

  return (
    <Layout>
      <PageTitle
        title="Assessments"
        description="Here you can find the assessments required to get a job. Please select the test you would like to do."
      />
      <div style={{ paddingBottom: "100px" }}>
        <AssessmentResultCard isCompleted={incomplete.length === 0} />
        {assessments.map((assessment, i) => (
          <AssessmentCard key={i} assessment={assessment} />
        ))}
      </div>
    </Layout>
  )
}

export default AssessmentsPage
