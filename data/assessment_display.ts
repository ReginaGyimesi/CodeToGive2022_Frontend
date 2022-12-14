import { ITestDisplay } from "../types/assessment"

export const assessments: ITestDisplay[] = [
  {
    type: "MOTIVATION_TEST",
    title: "Work motivation test",
    description:
      "Tell more about your interests so you can find the most suitable job.",
    test_id: 21,
    assessment_uuid: "ecd10d3b-9c6c-4223-ae4f-6d6ff8a74f9b",
    questions: [],
    completed: false,
    progress: 0,
  },
  {
    type: "ENGLISH_TEST",
    title: "English test",
    description:
      "Tell more about your interests so you can find the most suitable job.",
    test_id: 19,
    assessment_uuid: "ecd10d3b-9c6c-4223-ae4f-6d6ff8a74f9b",
    questions: [],
    completed: true,
    progress: 100,
  },
  {
    type: "SOCIAL_SITUATION_TEST",
    title: "Interpretation of Social Situations test",
    description:
      "Tell more about your interests so you can find the most suitable job.",
    test_id: 23,
    assessment_uuid: "ecd10d3b-9c6c-4223-ae4f-6d6ff8a74f9b",
    questions: [],
    completed: true,
    progress: 100,
  },
  {
    type: "VISIO_PERCEPTUAL_TEST",
    title: "Measurement of Visio-perceptual abilities test",
    description:
      "Tell more about your interests so you can find the most suitable job.",
    test_id: 25,
    assessment_uuid: "ecd10d3b-9c6c-4223-ae4f-6d6ff8a74f9b",
    questions: [],
    completed: true,
    progress: 100,
  },
]
