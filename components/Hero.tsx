export default function Hero() {
  return (
    <section className="bg-white py-32 px-6">
  <div className="max-w-5xl mx-auto">
    <div className="text-center space-y-8">
      <div className="inline-block">
        <div className="w-16 h-16 bg-slate-100 rounded-lg mx-auto mb-8 flex items-center justify-center">
          <svg className="w-8 h-8 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </div>
      </div>
      
      <h1 className="text-5xl font-bold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
        Find Your Perfect Property with Expert Local Guidance
      </h1>
      
      <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
        Search thousands of listings with advanced filters, explore homes through immersive 3D virtual tours, and work with experienced agents who know your market inside out.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
        <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
          Browse Properties
        </button>
        <button className="px-8 py-4 bg-slate-100 text-slate-900 font-semibold rounded-lg hover:bg-slate-200 transition-colors">
          Schedule Consultation
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
        <div className="space-y-2">
          <div className="text-3xl font-bold text-slate-900">10,000+</div>
          <div className="text-sm text-slate-600">Active Listings</div>
        </div>
        <div className="space-y-2">
          <div className="text-3xl font-bold text-slate-900">50+</div>
          <div className="text-sm text-slate-600">Local Agents</div>
        </div>
        <div className="space-y-2">
          <div className="text-3xl font-bold text-slate-900">3D Tours</div>
          <div className="text-sm text-slate-600">Virtual Walkthroughs</div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}