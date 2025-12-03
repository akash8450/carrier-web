const WhoWeAre = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden bg-gradient-to-b from-[#DFF5E0] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "#1C1C1C" }}>
                Empowering Businesses
                <br />
                with Smarter Solutions
              </h1>
              <p className="text-base sm:text-lg mb-8" style={{ color: "#1F712F" }}>
                Akash Software delivers cutting-edge IT expertise and AI-powered solutions to transform your business
                operations and drive sustainable growth.
              </p>
            </div>
            <div className="hidden lg:block"></div>
          </div>

          {/* Blue geometric illustration */}
          <img
            src="/Group 2015.png"
            alt="Akash geometric illustration"
            className="
              absolute bottom-0 right-0 sm:right-4 lg:right-8 pointer-events-none
              object-contain
              w-auto
              max-h-[120px] sm:max-h-[160px] md:max-h-[200px] lg:max-h-[240px] xl:max-h-[300px]
              opacity-90 sm:opacity-100
            "
            draggable="false"
          />
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#1C1C1C" }}>
              Who We Are
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-base sm:text-lg mb-6" style={{ color: "#666666" }}>
                Akash is a dynamic tech startup dedicated to delivering comprehensive Information
                Technology and Software Engineering solutions. Our expertise spans a wide array of products, tools, and
                cutting-edge technologies. We specialize in providing tailored IT services and turnkey SaaS digital
                solutions, empowering businesses with innovative and scalable technology solutions.
              </p>
              <p className="text-base sm:text-lg" style={{ color: "#666666" }}>
                We specialize in IT application maintenance, modernization, and solving business challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4" style={{ color: "#1C1C1C" }}>
              Core Values
            </h2>
            <p className="text-base sm:text-lg" style={{ color: "#666666" }}>
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Innovation */}
            <div className="text-center p-4 sm:p-6 bg-white border border-gray-200 rounded-lg">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-4 sm:mb-6">
                <img
                  src="/Frame 427321020.png"
                  alt="Innovation icon"
                  className="w-full h-full object-contain"
                  draggable="false"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3" style={{ color: "#1C1C1C" }}>
                Innovation
              </h3>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#666666" }}>
                Continuously pushing boundaries with cutting-edge technology and creative solutions.
              </p>
            </div>

            {/* Collaboration */}
            <div className="text-center p-4 sm:p-6 bg-white border border-gray-200 rounded-lg">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-4 sm:mb-6">
                <img
                  src="/Frame 427321020 (1).png"
                  alt="Collaboration icon"
                  className="w-full h-full object-contain"
                  draggable="false"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3" style={{ color: "#1C1C1C" }}>
                Collaboration
              </h3>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#666666" }}>
                Working together with our clients as partners to achieve extraordinary results.
              </p>
            </div>

            {/* Excellence */}
            <div className="text-center p-4 sm:p-6 bg-white border border-gray-200 rounded-lg">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-4 sm:mb-6">
                <img
                  src="/Frame 427321020 (2).png"
                  alt="Excellence icon"
                  className="w-full h-full object-contain"
                  draggable="false"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3" style={{ color: "#1C1C1C" }}>
                Excellence
              </h3>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#666666" }}>
                Delivering the highest quality solutions with attention to every detail.
              </p>
            </div>

            {/* Integrity */}
            <div className="text-center p-4 sm:p-6 bg-white border border-gray-200 rounded-lg">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-4 sm:mb-6">
                <img
                  src="/Frame 427321020 (3).png"
                  alt="Integrity icon"
                  className="w-full h-full object-contain"
                  draggable="false"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3" style={{ color: "#1C1C1C" }}>
                Integrity
              </h3>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#666666" }}>
                Building trust through transparency, honesty, and ethical business practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Akash Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4" style={{ color: "#1C1C1C" }}>
              Why Choose Akash?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* End-to-End IT Solutions */}
            <div className="flex items-start space-x-4 sm:space-x-6 p-4 sm:p-6 border border-gray-200 rounded-lg">
              <div
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#1F712F" }}
              >
                <img
                  src="/material-symbols-light_electric-bolt-rounded.png"
                  alt="Lightning bolt icon"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  draggable="false"
                />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3" style={{ color: "#1C1C1C" }}>
                  End-to-End IT Solutions
                </h3>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#666666" }}>
                  Complete technology solutions from consultation to implementation and ongoing support.
                </p>
              </div>
            </div>

            {/* AI/GenAI Expertise */}
            <div className="flex items-start space-x-4 sm:space-x-6 p-4 sm:p-6 border border-gray-200 rounded-lg">
              <div
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#1F712F" }}
              >
                <img
                  src="/hugeicons_ai-brain-02.png"
                  alt="AI brain icon"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  draggable="false"
                />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3" style={{ color: "#1C1C1C" }}>
                  AI/GenAI Expertise
                </h3>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#666666" }}>
                  Leading-edge artificial intelligence and generative AI solutions for business transformation.
                </p>
              </div>
            </div>

            {/* Customer-Centric */}
            <div className="flex items-start space-x-4 sm:space-x-6 p-4 sm:p-6 border border-gray-200 rounded-lg">
              <div
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#1F712F" }}
              >
                <img src="/mynaui_heart.png" alt="Heart icon" className="w-6 h-6 sm:w-8 sm:h-8" draggable="false" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3" style={{ color: "#1C1C1C" }}>
                  Customer-Centric
                </h3>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#666666" }}>
                  Tailored solutions designed around your unique business needs and objectives.
                </p>
              </div>
            </div>

            {/* Proven Track Record */}
            <div className="flex items-start space-x-4 sm:space-x-6 p-4 sm:p-6 border border-gray-200 rounded-lg">
              <div
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#1F712F" }}
              >
                <img
                  src="/lets-icons_check-ring-round.png"
                  alt="Checkmark icon"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                  draggable="false"
                />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3" style={{ color: "#1C1C1C" }}>
                  Proven Track Record
                </h3>
                <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#666666" }}>
                  Successful delivery of 100+ projects across diverse industries worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/Frame 275.png')" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-16">
            Ready to Transform Your Business with Akash Software?
          </h2>
          <p className="text-base sm:text-lg text-white mb-16 max-w-2xl mx-auto">
            Let's discuss how our innovative solutions can drive your business forward.
          </p>
          <button
            className="bg-green-800 text-white text-base sm:text-lg font-semibold px-6 sm:px-8 py-3 rounded-lg hover:bg-green-600 transition-colors"
           
          >
            Let's Connect
          </button>
        </div>
      </section>
    </>
  )
}

export default WhoWeAre
