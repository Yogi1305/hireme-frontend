// Add an existing question to a test
export const addExistingQuestionToTest = async (testId: string, questionId: string) => {
  const res = await api.post(`/questions/tests/${testId}/add-existing/${questionId}`);
  return res.data;
};
// Question Set types
export interface Question {
  questionText: string;
  options: string[];
  correctAnswer: string;
}

export interface QuestionSet {
  id: string;
  setName: string;
  questions: Question[];
}

// Create a QuestionSet
export const createQuestionSet = async (setName: string) => {
  const res = await api.post('/questionset', { setName });
  return res.data;
};

// Fetch all QuestionSets with questions
export const fetchAllQuestionSets = async (): Promise<QuestionSet[]> => {
  const res = await api.get('/questionset');
  return res.data;
};

// Fetch a single QuestionSet with questions
export const fetchQuestionSet = async (id: string): Promise<QuestionSet> => {
  const res = await api.get(`/questionset/${id}`);
  return res.data;
};

// Add a question to a QuestionSet
export const addQuestionToSet = async (
  setId: string,
  question: Question
) => {
  // Use setId (UUID) in the endpoint as per backend API
  const res = await api.post(`/questionset/${setId}/question`, question);
  return res.data;
};
import axios from 'axios'

export const Baseurl = 'http://localhost:3000'
// export const Baseurl='https://hireme-i1re.onrender.com'

const api = axios.create({
  baseURL: Baseurl,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

// Profile types
export interface Education {
  name: string
  course: string
  startDate: string
  endDate: string
}

export interface UserProfile {
  github?: string
  linkedin?: string
  skills?: string[]
  education?: Education[]
}

// Profile API functions
export const getProfile = () => api.get<UserProfile>('/user/profile')

export const updateProfile = (data: UserProfile) =>
  api.post('/user/profile/update', data)

// Company Jobs with Applicants types
export interface ApplicantUser {
  id: string
  name: string
  email: string
  profile?: {
    github?: string
    linkedin?: string
    skills?: string[]
  }
}

export interface Applicant {
  applicationId: string
  status: string
  testScore: string
  correctAnswers: number
  incorrectAnswers: number
  appliedAt: string
  user: ApplicantUser
}

export interface JobWithApplicants {
  id: string
  title: string
  applicantCount: number
  applicants: Applicant[]
}

export interface CompanyJobsResponse {
  message: string
  data: {
    jobs: JobWithApplicants[]
  }
}

export const getCompanyJobsWithApplicants = () =>
  api.get<CompanyJobsResponse>('/applications/company/jobs')

export const updateApplicationStatus = (
  applicationId: string,
  status: string,
  notes?: string
) =>
  api.patch(`/applications/${applicationId}/status`, { status, notes })

// Employee types
export interface Employee {
  id: string
  name: string
  email: string
  phone: string
  role: string
  companyCode: string
  createdAt: string
}

export interface EmployeesResponse {
  message: string
  data: Employee[]
}

export const getCompanyEmployees = () =>
  api.get<EmployeesResponse>('/employees/company')

// User Application types
export interface ApplicationCompany {
  id: string
  name: string
  logo: string
}

export interface ApplicationJob {
  id: string
  title: string
  description: string
  location: string
  salary: number
  jobType: string
  jobCategory: string
  lastDateToApply: string
  company: ApplicationCompany
}

export interface UserApplication {
  id: string
  status: string
  formResponse: Record<string, string>
  testAnswered: boolean
  totalquestions: number
  correctedanswers: string[]
  incorrectanswers: string[]
  createdAt: string
  updatedAt: string
  job: ApplicationJob
  form: { id: string }
}

export const getUserApplications = () =>
  api.get<UserApplication[]>('/user/applications')

export default api
