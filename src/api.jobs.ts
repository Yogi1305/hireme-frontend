import api from "./api"
import type { Job } from "./pages/Jobs"


// Fetch all jobs (admin/company view)
export const fetchAllJobs = async (): Promise<Job[]> => {
  const res = await api.get('/jobs/all')
  return res.data.data || res.data
}

// Toggle public/private for a job
export const toggleJobPublic = async (jobId: string) => {
  const res = await api.post(`/jobs/${jobId}/public`)
  return res.data
}
