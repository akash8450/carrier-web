import { useEffect, useMemo, useState } from "react"
import DOMPurify from "dompurify"
import JobDetails from "./components/JobDetails"
import ApplyJobModal from "./components/ApplyJobModal"

// static fallback jobs (sample)
export const jobsStatic = [
  {
    id: "s-1",
    title: "Senior Full Stack Developer",
    department: "Software Engineering",
    location: "Gurgaon, Haryana",
    workMode: "Hybrid",
    roleType: "Full Time",
    date: "2025-08-21",
    description:
      "Build scalable web applications using React, Node.js, and cloud technologies. Work with cross-functional teams to deliver innovative solutions across the stack. You will be designing, coding, and reviewing work as part of a small, focused team. Experience with cloud deployments and CI/CD is preferred.",
  },
  {
    id: "s-2",
    title: "UI/UX Designer",
    department: "Design",
    location: "Gurgaon, Haryana",
    workMode: "Hybrid",
    roleType: "Full Time",
    date: "2025-08-20",
    description:
      "Create intuitive and delightful user experiences for our software products. Collaborate with engineering and product teams to craft user journeys, wireframes, and high-fidelity designs. Strong visual design and prototyping skills required.",
  },
  {
    id: "s-3",
    title: "DevOps Engineer",
    department: "Software Engineering",
    location: "Gurgaon, Haryana",
    workMode: "On-site",
    roleType: "Full Time",
    date: "2025-08-19",
    description:
      "Manage CI/CD pipelines, cloud infrastructure, and monitoring systems. Ensure reliable, scalable, and secure deployments. Hands-on experience with Docker, Kubernetes and major cloud providers preferred.",
  },
  {
    id: "s-4",
    title: "Marketing Manager",
    department: "Sales & Marketing",
    location: "Gurgaon, Haryana",
    workMode: "Hybrid",
    roleType: "Full Time",
    date: "2025-08-14",
    description:
      "Lead marketing campaigns, analyze performance metrics, and drive brand awareness. Work with creative teams to develop compelling campaigns across channels.",
  },
  {
    id: "s-5",
    title: "Data Scientist",
    department: "Software Engineering",
    location: "Gurgaon, Haryana",
    workMode: "Hybrid",
    roleType: "Full Time",
    date: "2025-08-12",
    description:
      "Analyze complex datasets, build machine learning models, and provide data-driven insights to drive business decisions. Familiarity with Python ML stack and productionizing models is required.",
  },
  {
    id: "s-6",
    title: "Frontend Developer",
    department: "Software Engineering",
    location: "Remote",
    workMode: "Remote",
    roleType: "Full Time",
    date: "2025-08-10",
    description:
      "Develop responsive web interfaces using modern JavaScript frameworks. Perfect for developers passionate about user experience and performance.",
  },
]

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("")
  const [selectedWorkMode, setSelectedWorkMode] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("")
  const [selectedRoleType, setSelectedRoleType] = useState("")
  const [selectedJob, setSelectedJob] = useState(null)
  const [showJobDetails, setShowJobDetails] = useState(false)
  const [showApplyModal, setShowApplyModal] = useState(false)
  const [applyingJob, setApplyingJob] = useState(null)

  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // replace with real auth token from your app/store when available
  const token =  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjb2RpbmctcGxhdGZvcm0iLCJ1c2VySWQiOjEsImlhdCI6MTc1NzUwNTI4MiwibmJmIjoxNzU3NTA1MjgyLCJleHAiOjE3NTc1MDg4ODIsImlzcyI6Ii9hcGkvYXV0aC92MS9sb2dpbiIsImp0aSI6IjQ3ZGQzZDQ1LTAwNGItNDZjMS1iNDY4LWZkODRhNmZmNWQyZCJ9.idQCm8k5J53T2BdEdS0C0mFElEfBtCmmz-kmOGxTtrk"


  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch("http://localhost:8484/api/jobs", {
          headers: { Authorization: `Bearer ${token}` },
        })
        if (!res.ok) {
          setJobs(jobsStatic)
          setLoading(false)
          return
        }
        const data = await res.json()
        let backendJobs = []
        if (Array.isArray(data)) backendJobs = data
        else backendJobs = data.job || data.jobs || []

        if (!backendJobs || backendJobs.length === 0) {
          setJobs(jobsStatic)
        } else {
          const mapped = backendJobs.map((j, idx) => ({
            id: j.id ?? j._id ?? `b-${idx}`,
            title: j.title ?? j.jobTitle ?? "Untitled",
            department: j.department ?? j.departmentName ?? "N/A",
            location: j.location ?? j.city ?? "N/A",
            workMode: j.workMode ?? j.work_mode ?? "N/A",
            roleType: j.jobType ?? j.roleType ?? j.role_type ?? "Full Time",
            date:
              (j.createdAt && j.createdAt.split && j.createdAt.split("T")[0]) ||
              j.date ||
              j.createdAt ||
              j.updatedAt ||
              "",
            // prefer HTML fields if backend provides them
            descriptionHtml: j.companyDescriptionHtml || j.descriptionHtml || j.companyDescription || j.description || "",
            descriptionText:
              j.descriptionPlain ||
              j.shortDescription ||
              j.summary ||
              (j.description && typeof j.description === "string" ? j.description : "") ||
              "",
            company: j.company ?? "Aiprus Software",
            applicants: j.applicants ?? 0,
            views: j.views ?? 0,
            status: j.status ?? "Active",
            companyDescription: j.companyDescription ?? j.companyDescriptionHtml ?? "",
            jobSummary: j.jobSummary ?? "",
            rolesResponsibilities: j.rolesResponsibilities ?? "",
            requiredSkills: j.requiredSkills ?? "",
          }))
          setJobs(mapped)
        }
      } catch (err) {
        console.error("Error fetching jobs:", err)
        setError("Failed to load jobs, showing sample listings.")
        setJobs(jobsStatic)
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const title = (job.title || "").toLowerCase()
      const desc = (job.descriptionText || job.descriptionHtml || "").toString().toLowerCase()
      const matchesSearch = searchTerm === "" || title.includes(searchTerm.toLowerCase()) || desc.includes(searchTerm.toLowerCase())
      const matchesDepartment = selectedDepartment === "" || job.department === selectedDepartment
      const matchesWorkMode = selectedWorkMode === "" || job.workMode === selectedWorkMode
      const matchesLocation = selectedLocation === "" || job.location === selectedLocation
      const matchesRoleType = selectedRoleType === "" || job.roleType === selectedRoleType
      return matchesSearch && matchesDepartment && matchesWorkMode && matchesLocation && matchesRoleType
    })
  }, [searchTerm, selectedDepartment, selectedWorkMode, selectedLocation, selectedRoleType, jobs])

  const values = [
    {
      icon: <img src="/candidate-career/carrier-growth.png" alt="Career Growth" className="w-8 h-8" />,
      title: "Career Growth",
      description: "Continuous learning opportunities and clear advancement paths",
    },
    {
      icon: <img src="/candidate-career/global-impact.png" alt="Global Impact" className="w-8 h-8" />,
      title: "Global Impact",
      description: "Work on projects that reach millions of users worldwide",
    },
    {
      icon: <img src="/candidate-career/heart.png" alt="Work-Life Balance" className="w-8 h-8" />,
      title: "Work-Life Balance",
      description: "Flexible schedules, remote work options, and comprehensive benefits",
    },
    {
      icon: <img src="/candidate-career/humbleicons_certificate.png" alt="Recognition" className="w-8 h-8" />,
      title: "Recognition",
      description: "Performance-based bonuses and employee recognition programs",
    },
  ]

  // CSS for 3-line clamp (works in modern browsers)
  const clamp3Style = {
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "normal",
  }

  // helper to strip html to text if needed
  const stripHtml = (htmlString = "") => {
    if (!htmlString) return ""
    const tmp = document.createElement("DIV")
    tmp.innerHTML = htmlString
    return tmp.textContent || tmp.innerText || ""
  }

  const openDetails = (job) => {
    setSelectedJob(job)
    setShowJobDetails(true)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const JobCard = ({ job }) => {
    const handleApplyNow = () => {
      setApplyingJob(job)
      setShowApplyModal(true)
    }

    const hasHtml = Boolean(job.descriptionHtml && job.descriptionHtml.toString().trim())
    const plainText = job.descriptionText || (hasHtml ? stripHtml(job.descriptionHtml) : job.description || "")

    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow min-h-[220px] flex flex-col">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{job.title}</h3>
          <div className="flex items-center text-sm text-gray-600 space-x-4 mb-2">
            <span className="flex items-center">
              <img src="/candidate-career/department.png" alt="Department Icon" className="w-4 h-4 mr-1" />
              {job.department}
            </span>
            <span className="flex items-center">
              <img src="/candidate-career/lsicon_location-filled.png" alt="Location Icon" className="w-4 h-4 mr-1" />
              {job.location}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <img src="/candidate-career/date.png" alt="Date Icon" className="w-4 h-4 mr-1" />
            {job.date}
          </div>
        </div>

        {/* 3-line truncated description */}
        {hasHtml ? (
          // sanitize HTML then clamp the container
          <div className="text-sm text-gray-600 mb-2">
            <div style={clamp3Style} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(job.descriptionHtml) }} />
          </div>
        ) : (
          <p style={clamp3Style} className="text-sm text-gray-600 mb-2 whitespace-pre-line">
            {plainText}
          </p>
        )}

        {/* 'See more' navigates to details page */}
        <div className="mb-4">
          <button onClick={() => openDetails(job)} className="text-sm text-[#1F712F] font-medium hover:underline">
            See more
          </button>
        </div>

        <div className="mt-auto flex space-x-2">
          <button onClick={handleApplyNow} className="px-4 py-2 bg-[#1F712F] hover:bg-green-700 text-white rounded-md text-sm">
            Apply Now
          </button>
          <button
            onClick={() => openDetails(job)}
            className="px-4 py-2 border border-[#1F712F] text-[#1F712F] hover:bg-gray-50 rounded-md text-sm"
          >
            View Details
          </button>
        </div>
      </div>
    )
  }

  const handleBackToJobs = () => {
    setShowJobDetails(false)
    setSelectedJob(null)
  }

  const handleCTAApplyNow = () => {
    setApplyingJob(null)
    setShowApplyModal(true)
  }

  if (showJobDetails && selectedJob) {
    return <JobDetails job={selectedJob} onBack={handleBackToJobs} />
  }

  return (
    <main>
      <section className="relative py-16 overflow-hidden bg-gradient-to-b from-[#DFF5E0] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Shape Your Future
                <br />
                With Us
              </h1>
              <p className="text-lg text-[#1F712F] mb-8">
                Join our team of innovators and help build the next generation of software solutions that impact millions
                of users worldwide.
              </p>
            </div>
          </div>
        </div>
        <div className="relative mx-auto mt-8 max-w-sm w-full lg:absolute lg:bottom-0 lg:left-[70%] lg:-translate-x-1/2 lg:max-w-md lg:w-auto lg:mx-0 lg:mt-0">
          <img src="/candidate-career/Layer_1 (2).png" alt="Team celebration illustration" className="w-full h-auto object-contain lg:scale-150" />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Your Perfect Role</h2>
          </div>

          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search by role, skill, or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 py-3 text-lg border border-gray-300 rounded-md "
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            <select value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-md">
              <option value="">All Departments</option>
              <option value="Software Engineering">Software Engineering</option>
              <option value="Design">Design</option>
              <option value="Sales & Marketing">Sales & Marketing</option>
            </select>

            <select value={selectedWorkMode} onChange={(e) => setSelectedWorkMode(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-md">
              <option value="">All Work Modes</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
              <option value="On-site">On-site</option>
            </select>

            <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-md">
              <option value="">All Locations</option>
              <option value="Gurgaon, Haryana">Gurgaon, Haryana</option>
              <option value="Remote">Remote</option>
            </select>

            <select value={selectedRoleType} onChange={(e) => setSelectedRoleType(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-md">
              <option value="">All Role Types</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Contract">Contract</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {loading ? (
              <div className="col-span-full text-center py-12">Loading jobs...</div>
            ) : error ? (
              <div className="col-span-full text-center py-12 text-red-600">{error}</div>
            ) : filteredJobs.length > 0 ? (
              filteredJobs.map((job) => <JobCard key={job.id || job.title} job={job} />)
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">No jobs found matching your criteria.</p>
                <p className="text-gray-400 text-sm mt-2">Try adjusting your filters or search terms.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shaping Your Future – A Journey of Growth</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Alprus Software, we don't just offer jobs – we believe in creating an environment where talented individuals can thrive and make a meaningful impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#1F712F0F] rounded-full flex items-center justify-center mx-auto mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1F712F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to take the next step in your career?</h2>
          <p className="text-xl text-green-100 mb-8">Join our team and be part of something extraordinary. <br /> Your future starts here.</p>
          <button onClick={handleCTAApplyNow} className="px-8 py-3 text-lg bg-green-800 text-white rounded-md font-medium">
            Apply Now
          </button>
        </div>
      </section>

      <ApplyJobModal isOpen={showApplyModal} onClose={() => setShowApplyModal(false)} job={applyingJob} />
    </main>
  )
}

export default HomePage