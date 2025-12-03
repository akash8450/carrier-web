const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 xl:gap-28 mb-8">
          
          {/* Left Column */}
          <div className="text-center lg:text-left lg:pr-12">
            <p className="text-gray-300 mb-4 leading-relaxed">
              Skill Assessments help you showcase your real strengths and
              practical knowledge. They highlight your potential, boost
              confidence, and make it easier for employers to see why you're
              the right fit for the job.
            </p>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 block mb-8"
            >
              www.aiprus.com
            </a>

            <p className="text-gray-300 mb-4 leading-relaxed">
              Stay updated with the latest job openings, career tips, and skill
              insights. Subscribe now and never miss an opportunity!
            </p>
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-transparent border border-gray-600 text-white rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent pr-12"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Middle Column */}
          <div className="text-center lg:text-center px-6">
            <h4 className="font-semibold mb-4 text-white">
              Aiprus Software Pvt. Ltd.
            </h4>
            <div className="text-gray-300 text-sm space-y-1 mb-6">
              <p>Suite No.15, Ground Floor, Tower B3,</p>
              <p>Spaze ITech Park,</p>
              <p>Sector-49, Gurgaon, Haryana - 122018</p>
            </div>
            <p className="text-gray-300 text-sm mb-4">www.alprus.com</p>

            <div className="text-gray-300 text-sm space-y-2">
              <p className="hover:text-white cursor-pointer">Dashboard</p>
              <p className="hover:text-white cursor-pointer">Who We Are</p>
            </div>
            <div className="flex justify-center items-center gap-2 mt-8">
              <img
                src="/Skills (1).png"
                alt="Skill Assignment"
                className="w-6 h-6 object-contain"
              />
              <span className="text-gray-300 text-sm">Skill Assignment</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="text-center lg:text-left lg:pl-12">
            <div className="text-gray-300 text-sm space-y-3">
              <p className="font-semibold text-white">Work With Us</p>
              <p className="hover:text-white cursor-pointer">Get in Touch</p>
              <p className="hover:text-white cursor-pointer">Privacy Policy</p>
              <p className="hover:text-white cursor-pointer">Term & Service</p>
              <p className="mt-8 text-gray-400">© 2025 Skill Assessment</p>
            </div>

            <div className="mt-8 flex justify-center lg:justify-start gap-4">
              <a href="#" className="hover:opacity-80">
                <img
                  src="/prime_twitter (1).png"
                  alt="X / Twitter"
                  className="w-6 h-6"
                />
              </a>
              <a href="#" className="hover:opacity-80">
                <img src="/Group 87.svg" alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-80">
                <img src="/Group 85.svg" alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="#" className="hover:opacity-80">
                <img
                  src="/Group 88.svg"
                  alt="Twitter"
                  className="w-6 h-6 object-contain"
                />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
