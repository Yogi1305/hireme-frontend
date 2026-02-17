import axios from 'axios'

// export const Baseurl = 'http://localhost:3000'
export const Baseurl='https://hireme-i1re.onrender.com'

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

export const updateApplicationStatus = (applicationId: string, status: string) =>
  api.patch(`/applications/${applicationId}/status`, { status })

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

export default api
