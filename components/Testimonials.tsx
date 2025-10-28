export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        Trusted by Homeowners & Investors
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        Hear from clients who found their perfect property with PrimeHaven Realty
      </p>
    </div>

    <div className="relative overflow-hidden">
      <div className="flex gap-6 animate-scroll">
        {/* First Set */}
        <div className="flex-shrink-0 w-96 bg-slate-50 rounded-lg p-8 border border-slate-200">
          <div className="flex items-center mb-4">
            <div className="flex text-blue-600">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </div>
          <p className="text-slate-700 mb-6 leading-relaxed">
            "PrimeHaven helped us find our dream home in just three weeks. Their market knowledge and negotiation skills saved us $45,000 below asking price. The entire process was seamless and stress-free."
          </p>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center text-slate-700 font-semibold mr-4">
              MJ
            </div>
            <div>
              <p className="font-semibold text-slate-900">Michael Johnson</p>
              <p className="text-sm text-slate-600">First-Time Homebuyer</p>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 w-96 bg-slate-50 rounded-lg p-8 border border-slate-200">
          <div className="flex items-center mb-4">
            <div className="flex text-blue-600">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </div>
          <p className="text-slate-700 mb-6 leading-relaxed">
            "As an investor, I've worked with many agencies. PrimeHaven's data-driven approach and portfolio analysis helped me identify properties with 18% ROI potential. They truly understand investment real estate."
          </p>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center text-slate-700 font-semibold mr-4">
              SC
            </div>
            <div>
              <p className="font-semibold text-slate-900">Sarah Chen</p>
              <p className="text-sm text-slate-600">Real Estate Investor</p>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 w-96 bg-slate-50 rounded-lg p-8 border border-slate-200">
          <div className="flex items-center mb-4">
            <div className="flex text-blue-600">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </div>
          <p className="text-slate-700 mb-6 leading-relaxed">
            "Selling our family home was emotional, but PrimeHaven made it easy. Professional staging, strategic pricing, and we had multiple offers within 5 days. Sold for 12% above market value."
          </p>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center text-slate-700 font-semibold mr-4">
              RP
            </div>
            <div>
              <p className="font-semibold text-slate-900">Robert Patterson</p>
              <p className="text-sm text-slate-600">Home Seller</p>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 w-96 bg-slate-50 rounded-lg p-8 border border-slate-200">
          <div className="flex items-center mb-4">
            <div className="flex text-blue-600">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </div>
          <p className="text-slate-700 mb-6 leading-relaxed">
            "Relocating from across the country was daunting. PrimeHaven's virtual tours and detailed neighborhood reports helped us make confident decisions remotely. Found the perfect home before we even arrived."
          </p>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center text-slate-700 font-semibold mr-4">
              EW
            </div>
            <div>
              <p className="font-semibold text-slate-900">Emily Williams</p>
              <p className="text-sm text-slate-600">Corporate Relocation</p>
            </div>
          </div>
        </div>

        {/* Duplicate Set for Seamless Loop */}
        <div className="flex-shrink-0 w-96 bg-slate-50 rounded-lg p-8 border border-slate-200">
          <div className="flex items-center mb-4">
            <div className="flex text-blue-600">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </div>
          <p className="text-slate-700 mb-6 leading-relaxed">
            "PrimeHaven helped us find our dream home in just three weeks. Their market knowledge and negotiation skills saved us $45,000 below asking price. The entire process was seamless and stress-free."
          </p>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center text-slate-700 font-semibold mr-4">
              MJ
            </div>
            <div>
              <p className="font-semibold text-slate-900">Michael Johnson</p>
              <p className="text-sm text-slate-600">First-Time Homebuyer</p>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 w-96 bg-slate-50 rounded-lg p-8 border border-slate-200">
          <div className="flex items-center mb-4">
            <div className="flex text-blue-600">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </div>
          <p className="text-slate-700 mb-6 leading-relaxed">
            "As an investor, I've worked with many agencies. PrimeHaven's data-driven approach and portfolio analysis helped me identify properties with 18% ROI potential. They truly understand investment real estate."
          </p>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center text-slate-700 font-semibold mr-4">
              SC
            </div>
            <div>
              <p className="font-semibold text-slate-900">Sarah Chen</p>
              <p className="text-sm text-slate-600">Real Estate Investor</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="text-center mt-12">
      <div className="inline-flex items-center gap-8 text-slate-600">
        <div className="text-center">
          <p className="text-3xl font-bold text-slate-900">500+</p>
          <p className="text-sm">Happy Clients</p>
        </div>
        <div className="w-px h-12 bg-slate-300"></div>
        <div className="text-center">
          <p className="text-3xl font-bold text-slate-900">4.9/5</p>
          <p className="text-sm">Average Rating</p>
        </div>
        <div className="w-px h-12 bg-slate-300"></div>
        <div className="text-center">
          <p className="text-3xl font-bold text-slate-900">98%</p>
          <p className="text-sm">Client Satisfaction</p>
        </div>
      </div>
    </div>
  </div>

  <style jsx>{`
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
    .animate-scroll {
      animation: scroll 40s linear infinite;
    }
    .animate-scroll:hover {
      animation-play-state: paused;
    }
  `}</style>
</section>
  );
}