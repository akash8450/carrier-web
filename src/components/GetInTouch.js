

import { useState } from "react"

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    queryType: "",
    message: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission logic here
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-16 overflow-hidden bg-gradient-to-b from-[#DFF5E0] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "#1C1C1C" }}>
                Get in Touch
                <br />
                with US
              </h1>
              <p className="text-base sm:text-lg mb-8" style={{ color: "#1F712F" }}>
                Have a question or idea? We're just a message away. Our team is ready to help you succeed and bring your
                vision to life.
              </p>
            </div>
            <div className="hidden lg:block"></div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 sm:right-4 lg:right-8 pointer-events-none">
          <img
            src="/get-newsletter-updates.png"
            alt="Team celebration illustration"
            className="
              object-contain
              w-auto
              max-h-[100px] sm:max-h-[140px] md:max-h-[180px] lg:max-h-[220px] xl:max-h-[280px]
              opacity-90 sm:opacity-100
            "
            draggable="false"
          />
        </div>

        {/* Professional Support Team Badge */}
        <div className="flex absolute top-1/3 lg:top-1/2 right-2 lg:right-96 xl:right-96 transform -translate-y-1/2 bg-white rounded-full px-2 lg:px-4 py-1.5 lg:py-2 shadow-lg border border-gray-100 items-center gap-1.5 lg:gap-2 z-10 max-w-[180px] lg:max-w-none">
          <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
          <span className="text-xs lg:text-sm font-medium text-gray-700 whitespace-nowrap">
            Professional support team
          </span>
        </div>

        {/* 24 Hour Response Badge */}
        <div className="flex absolute bottom-8 lg:bottom-16 right-1 lg:right-56 xl:right-56 bg-white rounded-full px-2 lg:px-4 py-1.5 lg:py-2 shadow-lg border border-gray-100 items-center gap-1.5 lg:gap-2 z-10 max-w-[200px] lg:max-w-none">
          <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-green-500 rounded-full flex-shrink-0"></div>
          <span className="text-xs lg:text-sm font-medium text-gray-700 whitespace-nowrap">
            Usually responds within 24 hours
          </span>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8" style={{ color: "#1C1C1C" }}>
                Let's Start a Conversation
              </h2>

              {/* Business Hours */}
              <div className="mb-8">
                <h3 className="font-semibold mb-3" style={{ color: "#1C1C1C" }}>
                  Business hours:
                </h3>
                <p className="mb-1" style={{ color: "#666666" }}>
                  10:00 AM - 21:00 PM Monday - Friday
                </p>
                <p style={{ color: "#666666" }}>Day off - Saturday & Sunday</p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4 mb-12">
                <div className="flex items-center">
                  <img src="/fe_phone.png" className="h-5 w-5 mr-3" />
                  <span style={{ color: "#666666" }}>+91 9876 7889 88</span>
                </div>
                <div className="flex items-center">
                  <img src="/material-symbols-light_mail.png" className="w-5 h-5 mr-3" />
                  <span style={{ color: "#666666" }}>sales@aiprus.com</span>
                </div>
                <div className="flex items-start">
                  <img src="/ion_location-sharp.png" className="w-5 h-8 mr-3" />
                  <div style={{ color: "#666666" }}>
                    <p>Spaze IT Park, Sohna Road,</p>
                    <p>Sector - 49, Gurugram</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2" style={{ color: "#0070E0" }}>
                    24h
                  </div>
                  <div className="text-sm" style={{ color: "#666666" }}>
                    Response Time
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2" style={{ color: "#0070E0" }}>
                    100+
                  </div>
                  <div className="text-sm" style={{ color: "#666666" }}>
                    Happy Client
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2" style={{ color: "#0070E0" }}>
                    24/7
                  </div>
                  <div className="text-sm" style={{ color: "#666666" }}>
                    Support
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: "#1C1C1C" }}>
                Send us a message
              </h3>
              <p className="mb-8" style={{ color: "#666666" }}>
                Fill out the form below and we'll get back to you soon.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "#1C1C1C" }}>
                    Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "#1C1C1C" }}>
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="abc@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "#1C1C1C" }}>
                    Subject*
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What is this regarding?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "#1C1C1C" }}>
                    Query Type*
                  </label>
                  <select
                    name="queryType"
                    value={formData.queryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select the query type</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="business">Business Partnership</option>
                    <option value="careers">Career Opportunities</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "#1C1C1C" }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your enquiry..."
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white font-semibold py-3 px-6 rounded-lg transition-colors hover:opacity-90"
                  style={{ backgroundColor: "#1F712F" }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="">
        <div className="h-96 w-full bg-gray-200 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.6539797524196!2d77.03745931508857!3d28.4129033824963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d229ad2a7ddb7%3A0x7f0ac02a4b5b8c0!2sSpaze%20iTech%20Park!5e0!3m2!1sen!2sin!4v1653395000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Aiprus Office Location"
          ></iframe>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/Frame 275.png')" }}>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Connect with Us</h2>
          <p className="text-green-100 mb-8">
            Follow us on social media for the latest updates, insights,
            <br />
            and behind-the-scenes content.
          </p>

          {/* Social icons */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-6 mb-8">
            <a
              href="#"
              aria-label="Instagram"
              className="inline-flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/60 rounded-xl"
            >
              <img
                src="/Frame 427321000.png"
                alt="Instagram"
                className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain select-none"
                loading="lazy"
                draggable="false"
              />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/60 rounded-xl"
            >
              <img
                src="/Frame 427320998.png"
                alt="LinkedIn"
                className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain select-none"
                loading="lazy"
                draggable="false"
              />
            </a>

            <a
              href="#"
              aria-label="X (Twitter)"
              className="inline-flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/60 rounded-xl"
            >
              <img
                src="/Frame 427320999.png"
                alt="X (Twitter)"
                className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain select-none"
                loading="lazy"
                draggable="false"
              />
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="inline-flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/60 rounded-xl"
            >
              <img
                src="/Frame 427320997.png"
                alt="Facebook"
                className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain select-none"
                loading="lazy"
                draggable="false"
              />
            </a>
          </div>

          <div className="text-center text-green-100 space-y-3">
            <div className="flex items-center justify-center gap-2">
              <img
                src="/si_phone-fill.png"
                alt="Phone"
                className="w-5 h-5 md:w-6 md:h-6 object-contain"
                loading="lazy"
                draggable="false"
              />
              <p>Our team usually responds within 24 hours.</p>
            </div>
            <p>We look forward to connecting with you and discussing how we can help bring your ideas to life.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GetInTouch
