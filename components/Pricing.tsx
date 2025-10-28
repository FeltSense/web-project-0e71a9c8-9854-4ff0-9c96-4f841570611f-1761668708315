export default function Pricing() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
  <div className="max-w-4xl mx-auto px-6">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        Simple, Transparent Pricing
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        Choose the perfect plan for your real estate needs. All plans include our commitment to excellence.
      </p>
    </div>

    {/* Pricing List */}
    <div className="space-y-6">
      {/* Starter Plan */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Starter</h3>
              <p className="text-slate-600">Perfect for first-time buyers</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-slate-900">2.5%</div>
              <div className="text-sm text-slate-600 mt-1">commission</div>
            </div>
          </div>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-slate-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Property search assistance
            </li>
            <li className="flex items-center text-slate-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Up to 5 property viewings
            </li>
            <li className="flex items-center text-slate-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Basic market analysis
            </li>
            <li className="flex items-center text-slate-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Email support
            </li>
          </ul>

          <button className="w-full bg-slate-100 text-slate-900 py-3 px-6 rounded-lg font-semibold hover:bg-slate-200 transition-colors duration-200">
            Get Started
          </button>
        </div>
      </div>

      {/* Professional Plan */}
      <div className="bg-white border-2 border-blue-600 rounded-lg shadow-md relative">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Professional</h3>
              <p className="text-slate-600">Comprehensive real estate services</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-slate-900">3.0%</div>
              <div className="text-sm text-slate-600 mt-1">commission</div>
            </div>
          </div>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-slate-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Unlimited property viewings
            </li>
            <li className="flex items-center text-slate-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Detailed market analysis & reports
            </li>
            <li className="flex items-center text-slate-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Professional photography & staging
            </li>
            <li className="flex items-center text-slate-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Negotiation expertise
            </li>
            <li className="flex items-center text-slate-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Priority phone & email support
            </li>
          </ul>

          <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
            Choose Professional
          </button>
        </div>
      </div>

      {/* Premium Plan */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Premium</h3>
              <p className="text-slate-600">White-glove luxury service</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-slate-900">3.5%</div>
              <div className="text-sm text-slate-600 mt-1">commission</div>
            </div>
          </div>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-slate-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Everything in Professional
            </li>
            <li className="flex items-center text-slate-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Dedicated senior agent
            </li>
            <li className="flex items-center text-slate-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Luxury property marketing
            </li>
            <li className="flex items-center text-slate-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Virtual tours & drone footage
            </li>
            <li className="flex items-center text-slate-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Exclusive off-market listings
            </li>
            <li className="flex items-center text-slate-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              24/7 concierge support
            </li>
          </ul>

          <button className="w-full bg-slate-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-slate-800 transition-colors duration-200">
            Choose Premium
          </button>
        </div>
      </div>

      {/* Enterprise Plan */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Enterprise</h3>
              <p className="text-slate-600">Custom solutions for investors & developers</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-slate-900">Custom</div>
              <div className="text-sm text-slate-600 mt-1">pricing</div>
            </div>
          </div>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-slate-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Portfolio management
            </li>
            <li className="flex items-center text-slate-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Investment analysis & forecasting
            </li>
            <li className="flex items-center text-slate-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Multi-property transactions
            </li>
            <li className="flex items-center text-slate-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Legal & financial consultation
            </li>
            <li className="flex items-center text-slate-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              Dedicated account team
            </li>
          </ul>

          <button className="w-full bg-slate-100 text-slate-900 py-3 px-6 rounded-lg font-semibold hover:bg-slate-200 transition-colors duration-200">
            Contact Sales
          </button>
        </div>
      </div>
    </div>

    {/* Footer Note */}
    <div className="text-center mt-12">
      <p className="text-slate-600">
        All plans include comprehensive closing support and transaction coordination.{' '}
        <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
          Compare plans →
        </a>
      </p>
    </div>
  </div>
</section>
  );
}