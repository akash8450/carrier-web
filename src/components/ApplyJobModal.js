// ApplyJobModal.js
"use client"

import { useState } from "react"
import SuccessModal from "./SuccessModal"

const ApplyJobModal = ({ isOpen, onClose, job }) => {
  // KEEP token as a const as you requested — replace with your real token string
   const token ="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjb2RpbmctcGxhdGZvcm0iLCJ1c2VySWQiOjEsImlhdCI6MTc1NzUwNTI4MiwibmJmIjoxNzU3NTA1MjgyLCJleHAiOjE3NTc1MDg4ODIsImlzcyI6Ii9hcGkvYXV0aC92MS9sb2dpbiIsImp0aSI6IjQ3ZGQzZDQ1LTAwNGItNDZjMS1iNDY4LWZkODRhNmZmNWQyZCJ9.idQCm8k5J53T2BdEdS0C0mFElEfBtCmmz-kmOGxTtrk"


  const [email, setEmail] = useState("abhishek.singh@gmail.com")
  const [phone, setPhone] = useState("+91 8956 231 232")
  const [resume, setResume] = useState(null)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [errors, setErrors] = useState({})
  const [isUploading, setIsUploading] = useState(false)
  const [serverError, setServerError] = useState(null)

  if (!isOpen) return null

  const validateForm = () => {
    const newErrors = {}

    // Email
    if (!email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Phone
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^[+]?[0-9\s-]{10,}$/.test(phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number"
    }

    // Resume
    if (!resume) newErrors.resume = "Resume upload is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

// replace your existing handleSubmit with this
const handleSubmit = async (e) => {
  e.preventDefault()
  if (!validateForm()) return
  const jobId = job?.id
  if (!jobId) return setServerError("Job id not available")

  const url = `http://localhost:8484/api/jobs/${encodeURIComponent(jobId)}/apply`
  const fd = new FormData()
  fd.append("name", "Abhishek Singh") // temporary; backend currently requires it
  fd.append("email", email)
  fd.append("phone", phone || "")
  fd.append("resume", resume)

  const res = await fetch(url, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` }, // do NOT set Content-Type
    body: fd,
  })

  if (!res.ok) {
    const text = await res.text().catch(()=>"")
    setServerError(text || `Server ${res.status}`)
    return
  }
  setShowSuccessModal(true)
}



  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    setResume(file)
    if (file && errors.resume) setErrors((p) => ({ ...p, resume: null }))
  }

  const handleDragOver = (e) => e.preventDefault()

  const handleDrop = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    setResume(file)
    if (file && errors.resume) setErrors((p) => ({ ...p, resume: null }))
  }

  const handleSuccessClose = () => {
    setShowSuccessModal(false)
    onClose()
  }

  return (
    <>
      {showSuccessModal ? (
        <SuccessModal isOpen={showSuccessModal} onClose={handleSuccessClose} />
      ) : (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-2 sm:p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-[560px] md:max-w-[600px] overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200">
              <h2 className="text-base font-semibold text-gray-800 mx-auto text-center">
                Apply To Akash Software Private Limited
              </h2>
              <button
                onClick={onClose}
                className="ml-3 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 text-xl"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <div className="px-5 py-5">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-gray-300 rounded-full overflow-hidden mr-3">
                  <img src="//professional-headshot.png" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-base font-semibold text-gray-800 leading-tight">Abhishek Singh</h3>
                  <p className="text-xs text-gray-600 leading-tight">{job?.title || "Senior Java developer"}</p>
                  <p className="text-xs text-gray-600 leading-tight">5 years of experience</p>
                  <p className="text-xs text-gray-600 leading-tight">{job?.location || "Gurugram, Haryana"}</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (errors.email) setErrors((p) => ({ ...p, email: null }))
                    }}
                    className={`w-full px-3 py-2 text-sm text-gray-800 bg-gray-50 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Phone Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value)
                      if (errors.phone) setErrors((p) => ({ ...p, phone: null }))
                    }}
                    className={`w-full px-3 py-2 text-sm text-gray-800 bg-gray-50 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Upload Resume<span className="text-red-500">*</span>
                  </label>
                  <div
                    className={`w-full h-24 bg-gray-50 border-2 border-dashed rounded-md flex flex-col items-center justify-center cursor-pointer hover:border-gray-900 transition-colors relative ${
                      errors.resume ? "border-red-500" : "border-gray-300"
                    }`}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    onClick={() => document.getElementById("resume-upload").click()}
                  >
                    <div className="w-7 h-7 bg-[#1F712F] rounded-full flex items-center justify-center mb-1.5">
                      <img src="./upload.png" alt="" className="w-8 h-8" />
                    </div>
                    <p className="text-xs text-gray-600 text-center px-3">
                      {resume ? resume.name : "Drag & drop or click to upload (.pdf, .doc, .docx)"}
                    </p>
                    <input
                      id="resume-upload"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </div>
                  {errors.resume && <p className="mt-1 text-xs text-red-500">{errors.resume}</p>}
                </div>

                <div className="pt-1">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    You’re applying for <span className="font-semibold">{job?.title || "Senior Java developer"}</span>{" "}
                    at <span className="font-semibold">Akash Software</span>
                    {job?.department && (
                      <>
                        {" "}
                        in <span className="font-semibold">{job.department}</span>
                      </>
                    )}
                    {job?.workMode && <> ({job.workMode})</>}. Review your details before submitting.
                  </p>
                </div>

                {serverError && <p className="text-xs text-red-500">{serverError}</p>}

                <div className="flex gap-2 pt-1">
                  <button
                    type="submit"
                    disabled={isUploading}
                    className="flex-1 bg-[#1F712F] text-white py-2 rounded-md text-sm font-semibold hover:bg-green-700 transition-colors disabled:opacity-60"
                  >
                    {isUploading ? "Applying..." : "Confirm & Apply"}
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    disabled={isUploading}
                    className="flex-1 border-2 border-[#1F712F] text-[#1F712F] py-2 rounded-md text-sm font-semibold hover:bg-gray-50 transition-colors disabled:opacity-60"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ApplyJobModal
