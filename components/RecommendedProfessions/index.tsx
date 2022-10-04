import styled from "@emotion/styled"
import JobCard from "./JobCard/JobCard"
import MinimizeIcon from "@mui/icons-material/Minimize"
import SvgIcon from "@mui/icons-material/Minimize"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { useBookmarkContext } from "../../context/BookmarkContext"
import IJob from "../../types/job"

type Props = {
  onClickCallBack: any
  data: IJob[]
}

const arrayMock = [
  [
    {
      id: 1,
      label: "shop assistance",
      match_value: 80,
      details: {
        company_name: "Inc",
        about: "this company is doing blah blah",
        description: "to success you should have:",
      },
    },
    {
      id: 2,
      label: "shop assistance",
      match_value: 70,
      details: {
        company_name: "Inc",
        about: "this company is doing blah blah",
        description: "to success you should have:",
      },
    },

    {
      id: 3,
      label: "shop assistance",
      match_value: 60,
      details: {
        company_name: "Inc",
        about: "this company is doing blah blah",
        description: "to success you should have:",
      },
    },
  ],
  [
    {
      id: 3,
      label: "shop assistance",
      match_value: 90,
      details: {
        company_name: "Inc",
        about: "this company is doing blah blah",
        description: "to success you should have:",
      },
    },
    {
      id: 2,
      label: "shop assistance",
      match_value: 80,
      details: {
        company_name: "Inc",
        about: "this company is doing blah blah",
        description: "to success you should have:",
      },
    },
    {
      id: 1,
      label: "shop assistance",
      match_value: 70,
      details: {
        company_name: "Inc",
        about: "this company is doing blah blah",
        description: "to success you should have:",
      },
    },
  ],
]

const RecommendedProfessions = ({ onClickCallBack, data }: Props) => {
  const { addBookmarkedJobs, removeBookmarkedJobs, bookmarkedJobs } =
    useBookmarkContext()
  //Test Animate Layout
  const [arrayIndex, setArrayIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setArrayIndex(arrayIndex + 1)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleBookmarkCallback = (job?: IJob) => {
    if (job) addBookmarkedJobs(job)
  }

  return (
    <Container>
      <ContentCont>
        <Title>Recommended professions</Title>
        <div onClick={() => onClickCallBack()}>
          <SvgIcon
            sx={{
              fontSize: "40px",
              color: "#0097F2",
              transform: "translateY(-5px)",
            }}
          >
            <MinimizeIcon />
          </SvgIcon>
        </div>
      </ContentCont>

      <InnerContainer layout>
        <AnimatePresence mode="wait">
          {data.map((e: any) => (
            <JobCard
              key={e.id}
              jobData={e}
              onClickBookmarkCallback={handleBookmarkCallback}
            />
          ))}
        </AnimatePresence>
      </InnerContainer>
    </Container>
  )
}

export default RecommendedProfessions

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  gap: 24px;
  background: #ffffff;
  border: 2px solid #0097f2;
  box-shadow: 0px 0px 7px rgba(7, 31, 54, 0.04),
    0px 15px 17px -1px rgba(5, 125, 236, 0.1);
  border-radius: 16px;
`

const Title = styled.p`
  font-weight: 700;
  font-size: 32px;
`
const ContentCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const InnerContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  gap: 20px;
`
