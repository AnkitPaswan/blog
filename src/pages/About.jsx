import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Our Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the story behind our passion for sharing ideas, insights, and inspiration through words.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            This is a modern blog website built using React and Tailwind CSS. Our mission is to provide high-quality, engaging content that informs, entertains, and inspires our readers. We cover a wide range of topics, from technology and lifestyle to personal development and beyond.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Founded with a vision to create a community of curious minds, we strive to deliver content that's not only informative but also visually appealing and easy to navigate. Join us on this journey as we explore the world one post at a time.
          </p>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">JD</span>
              </div>
              <h3 className="text-lg font-medium text-gray-800">Jane Doe</h3>
              <p className="text-gray-600">Founder & Editor</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">JS</span>
              </div>
              <h3 className="text-lg font-medium text-gray-800">John Smith</h3>
              <p className="text-gray-600">Content Writer</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">AL</span>
              </div>
              <h3 className="text-lg font-medium text-gray-800">Alice Lee</h3>
              <p className="text-gray-600">Designer</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Have questions or want to collaborate? We'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:contact@ourblog.com"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 text-center"
            >
              Email Us
            </a>
            <a
              href="#"
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition duration-300 text-center"
            >
              Follow on Social Media
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
