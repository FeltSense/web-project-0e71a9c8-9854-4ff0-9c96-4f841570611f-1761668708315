'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  if (submitted) {
    return (
      <section className="py-24 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
            <p className="text-gray-600">Thank you for reaching out. We'll get back to you soon.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      {/* Hero Content */}
      <div>
        <h2 className="text-4xl font-bold text-slate-900 mb-6">
          Find Your Dream Home with PrimeHaven Realty
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Our experienced team is ready to help you navigate the real estate market. Whether you're buying, selling, or investing, we're here to make your journey seamless.
        </p>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Expert Local Knowledge</h3>
              <p className="text-gray-600">Deep understanding of neighborhood markets and trends</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Personalized Service</h3>
              <p className="text-gray-600">Tailored solutions to meet your unique real estate goals</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Proven Track Record</h3>
              <p className="text-gray-600">Thousands of successful transactions and satisfied clients</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-slate-50 rounded-2xl p-8 shadow-sm border border-gray-200">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Get Started Today</h3>
        <p className="text-gray-600 mb-8">Fill out the form and we'll be in touch within 24 hours</p>
        
        <div className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Smith"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(555) 123-4567"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Tell us about your real estate needs..."
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-slate-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-shadow"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-sm"
          >
            Send Message
          </button>

          <p className="text-xs text-gray-500 text-center">
            By submitting this form, you agree to our privacy policy and terms of service.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}