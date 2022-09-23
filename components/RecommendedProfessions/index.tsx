import styled from "@emotion/styled"
import JobCard from "./JobCard/JobCard"

const RecommendedProfessions = () => {
  return (
    <Container>
      <Title>Recommended professions</Title>
      <InnerContainer>
        <JobCard match_value={70} />
        <JobCard match_value={68} />
        <JobCard match_value={55} />
      </InnerContainer>
    </Container>
  )
}

export default RecommendedProfessions

const Container = styled.div`
  position: fixed;
  bottom: 2vh;
  align-self: center;
  width: 80%;
  max-width: 1080px;
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

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`