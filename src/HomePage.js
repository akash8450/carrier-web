

import { useState, useMemo } from "react"
import JobDetails from "./components/JobDetails"
import ApplyJobModal from "./components/ApplyJobModal"








export  const jobs = [
    {
      title: "Senior Full Stack Developer",
      department: "Software Engineering",
      location: "Gurgaon, Haryana",
      workMode: "Hybrid",
      roleType: "Full Time",
      date: "2025-08-21",
      description:
        "Build scalable web applications using React, Node.js, and cloud technologies. Work with cross-functional teams to deliver innovative...",
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Gurgaon, Haryana",
      workMode: "Hybrid",
      roleType: "Full Time",
      date: "2025-08-20",
      description:
        "Create intuitive and delightful user experiences for our software products. Collaborate with engineering and product teams to craft...",
    },
    {
      title: "DevOps Engineer",
      department: "Software Engineering",
      location: "Gurgaon, Haryana",
      workMode: "On-site",
      roleType: "Full Time",
      date: "2025-08-19",
      description:
        "Manage CI/CD pipelines, cloud infrastructure, and monitoring systems. Ensure reliable, scalable, and secure deployment...",
    },
    {
      title: "Marketing Manager",
      department: "Sales & Marketing",
      location: "Gurgaon, Haryana",
      workMode: "Hybrid",
      roleType: "Full Time",
      date: "2025-08-14",
      description:
        "Lead marketing campaigns, analyze performance metrics, and drive brand awareness. Work with creative teams to develop compelling...",
    },
    {
      title: "Data Scientist",
      department: "Software Engineering",
      location: "Gurgaon, Haryana",
      workMode: "Hybrid",
      roleType: "Full Time",
      date: "2025-08-12",
      description:
        "Analyze complex datasets, build machine learning models, and provide data-driven insights to drive business decisions...",
    },
    {
      title: "Frontend Developer",
      department: "Software Engineering",
      location: "Remote",
      workMode: "Remote",
      roleType: "Full Time",
      date: "2025-08-10",
      description:
        "Develop responsive web interfaces using modern JavaScript frameworks. Perfect for developers passionate about user experience...",
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

  

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        searchTerm === "" ||
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesDepartment = selectedDepartment === "" || job.department === selectedDepartment
      const matchesWorkMode = selectedWorkMode === "" || job.workMode === selectedWorkMode
      const matchesLocation = selectedLocation === "" || job.location === selectedLocation
      const matchesRoleType = selectedRoleType === "" || job.roleType === selectedRoleType

      return matchesSearch && matchesDepartment && matchesWorkMode && matchesLocation && matchesRoleType
    })
  }, [searchTerm, selectedDepartment, selectedWorkMode, selectedLocation, selectedRoleType, jobs])

  const values = [
    {
      icon: (
        <img
          src="/carrier-growth.png" // 👈 place this in public/icons
          alt="Career Growth"
          className="w-8 h-8"
        />
      ),
      title: "Career Growth",
      description: "Continuous learning opportunities and clear advancement paths",
    },
    {
      icon: <img src="/global-impact.png" alt="Global Impact" className="w-8 h-8" />,
      title: "Global Impact",
      description: "Work on projects that reach millions of users worldwide",
    },
    {
      icon: <img src="/heart.png" alt="Work-Life Balance" className="w-8 h-8" />,
      title: "Work-Life Balance",
      description: "Flexible schedules, remote work options, and comprehensive benefits",
    },
    {
      icon: <img src="/humbleicons_certificate.png" alt="Recognition" className="w-8 h-8" />,
      title: "Recognition",
      description: "Performance-based bonuses and employee recognition programs",
    },
  ]

  const JobCard = ({ job }) => {
    const handleViewDetails = () => {
      setSelectedJob(job)
      setShowJobDetails(true)
    }

    const handleApplyNow = () => {
      setApplyingJob(job)
      setShowApplyModal(true)
    }

    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{job.title}</h3>
          <div className="flex items-center text-sm text-gray-600 space-x-4 mb-2">
            <span className="flex items-center">
              <img src="/department.png" alt="Department Icon" className="w-4 h-4 mr-1" />
              {job.department}
            </span>
            <span className="flex items-center">
              <img src="/lsicon_location-filled.png" alt="Department Icon" className="w-4 h-4 mr-1" />
              {job.location}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <img src="/date.png" alt="Department Icon" className="w-4 h-4 mr-1" />
            {job.date}
          </div>
        </div>
        <p className="text-gray-600 mb-4 text-sm">{job.description}</p>
        <div className="flex space-x-2">
          <button
            onClick={handleApplyNow}
            className="px-4 py-2 bg-[#1F712F] hover:bg-green-700 text-white rounded-md text-sm"
          >
            Apply Now
          </button>
          <button
            onClick={handleViewDetails}
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
    setApplyingJob(null) // No specific job for CTA button
    setShowApplyModal(true)
  }

  if (showJobDetails && selectedJob) {
    return <JobDetails job={selectedJob} onBack={handleBackToJobs} />
  }

  return (
    <main>
      <section
        className="relative py-16 overflow-hidden bg-gradient-to-b from-[#DFF5E0] to-white"
       
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Shape Your Future
                <br />
                With Us
              </h1>
              <p className="text-lg text-[#1F712F] mb-8">
                Join our team of innovators and help build the next generation of software solutions that impact
                millions of users worldwide.
              </p>
            </div>
          </div>
        </div>
        <div className="relative mx-auto mt-8 max-w-sm w-full 
                lg:absolute lg:bottom-0 lg:left-[70%] lg:-translate-x-1/2 lg:max-w-md lg:w-auto lg:mx-0 lg:mt-0">
  <img
    src="/Layer_1 (2).png"
    alt="Team celebration illustration"
    className="w-full h-auto object-contain lg:scale-150"
  />
</div>

      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Your Perfect Role</h2>
          </div>
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
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
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="">All Departments</option>
              <option value="Software Engineering">Software Engineering</option>
              <option value="Design">Design</option>
              <option value="Sales & Marketing">Sales & Marketing</option>
            </select>
            <select
              value={selectedWorkMode}
              onChange={(e) => setSelectedWorkMode(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="">All Work Modes</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
              <option value="On-site">On-site</option>
            </select>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="">All Locations</option>
              <option value="Gurgaon, Haryana">Gurgaon, Haryana</option>
              <option value="Remote">Remote</option>
            </select>
            <select
              value={selectedRoleType}
              onChange={(e) => setSelectedRoleType(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="">All Role Types</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Contract">Contract</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => <JobCard key={index} job={job} />)
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
              At Alprus Software, we don't just offer jobs – we believe in creating an environment where talented
              individuals can thrive and make a meaningful impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#1F712F0F] rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
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
          <p className="text-xl text-green-100 mb-8">
            Join our team and be part of something extraordinary.
            <br />
            Your future starts here.
          </p>
          <button
            
            className="px-8 py-3 text-lg bg-green-800 text-white  rounded-md font-medium"
          >
            Apply Now
          </button>
        </div>
      </section>
      <ApplyJobModal isOpen={showApplyModal} onClose={() => setShowApplyModal(false)} job={applyingJob} />
    </main>
  )
}

export default HomePage
