export default function Services() {
  return (
    <section className="py-24 bg-slate-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="max-w-3xl mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        Comprehensive Real Estate Services
      </h2>
      <p className="text-lg text-slate-600">
        From advanced property search to expert guidance, we provide everything you need to make informed real estate decisions with confidence.
      </p>
    </div>

    {/* Bento Grid Layout */}
    <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
      {/* Large Feature - Spans 2 rows, 6 columns */}
      <div className="md:col-span-6 lg:col-span-6 md:row-span-2 bg-white border border-gray-200 shadow-sm rounded-lg p-8 hover:shadow-md transition-shadow">
        <div className="h-full flex flex-col">
          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Extensive Property Database
          </h3>
          <p className="text-slate-600 mb-6 flex-grow">
            Access thousands of listings with our advanced search platform. Filter by location, price, property type, amenities, and more. Our real-time database updates ensure you never miss an opportunity.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start text-slate-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Advanced filtering and saved searches</span>
            </li>
            <li className="flex items-start text-slate-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Real-time listing updates and alerts</span>
            </li>
            <li className="flex items-start text-slate-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Detailed property information and history</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Medium Feature - Top Right */}
      <div className="md:col-span-6 lg:col-span-6 bg-white border border-gray-200 shadow-sm rounded-lg p-8 hover:shadow-md transition-shadow">
        <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
          <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">
          Experienced Local Agents
        </h3>
        <p className="text-slate-600 mb-4">
          Work with seasoned professionals who know your market inside and out. Our agents bring proven track records and deep local expertise to every transaction.
        </p>
        <div className="flex items-center text-sm text-slate-700">
          <span className="font-semibold text-slate-900 mr-2">Average Experience:</span>
          <span>12+ years in real estate</span>
        </div>
      </div>

      {/* Small Feature - Bottom Right */}
      <div className="md:col-span-3 lg:col-span-3 bg-white border border-gray-200 shadow-sm rounded-lg p-6 hover:shadow-md transition-shadow">
        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">
          Virtual Tours & 3D Walkthroughs
        </h3>
        <p className="text-slate-600 text-sm">
          Explore properties from anywhere with immersive virtual tours and interactive 3D experiences.
        </p>
      </div>

      {/* Small Feature - Bottom Right 2 */}
      <div className="md:col-span-3 lg:col-span-3 bg-white border border-gray-200 shadow-sm rounded-lg p-6 hover:shadow-md transition-shadow">
        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
          <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">
          Market Insights & Data
        </h3>
        <p className="text-slate-600 text-sm">
          Make informed decisions with comprehensive market analysis, trends, and neighborhood statistics.
        </p>
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="mt-16 text-center">
      <p className="text-slate-600 mb-6">
        Ready to experience the PrimeHaven difference?
      </p>
      <button className="inline-flex items-center px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors">
        Get Started Today
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  </div>
</section>
  );
}