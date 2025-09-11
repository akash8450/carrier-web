"use client"

const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-md p-6 relative shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center text-gray-500 hover:text-gray-700 text-lg"
        >
          ×
        </button>

        {/* Document Icon */}
        <div className="flex justify-center mb-4">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/resume-XQP3GLeUFBKIGSLti78rF1EBzBwBfu.png"
            alt="Resume document"
            className="w-16 h-16"
          />
        </div>

        {/* Success Message */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-[#145323] mb-3">Application Submitted!</h2>
          <div className="text-gray-600 text-sm space-y-1">
            <p>Thank you for applying! Your application has been received.</p>
            <p>Our team will review your profile and get back to you soon.</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button className="w-full bg-[#0070E0] text-white py-2.5 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
            View My Applications
          </button>
          <button
            className="w-full text-[#0070E0] underline hover:text-blue-600 transition-colors text-sm"
            onClick={onClose}
          >
            Explore More Jobs
          </button>
        </div>
      </div>
    </div>
  )
}

export default SuccessModal
