import type { Metadata } from "next";
import Image from "next/image";
import { FooterSection } from "@/components/FooterSection";

export const metadata: Metadata = {
  title: "About Us | Link Innovations",
  description: "We build fast, reliable software with modern tech. Learn about our team and mission.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Particle Background */}
      <div className="fixed inset-0 bg-black">
        <div className="absolute inset-0 opacity-30">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-orange-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        {/* Empowering Teams Section */}
        <section className="pt-20 pb-16 px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold text-center text-gray-300 mb-8">
              Empowering Teams
            </h1>
            <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto mb-12">
              Link Innovations helps businesses transform their digital presence with cutting-edge technology solutions.
              Our mission is to deliver fast, reliable software that drives real business value, from web applications
              to cloud solutions and mobile apps.
            </p>

            {/* Dashboard UI Mockup */}
            <div className="bg-gray-900 rounded-lg p-6 max-w-4xl mx-auto shadow-2xl border border-gray-700">
              <div className="flex">
                {/* Left Sidebar */}
                <div className="w-48 bg-gray-800 rounded-lg p-4 mr-6 border border-gray-700">
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-300 hover:text-orange-400 transition-colors cursor-pointer">
                      <div className="w-4 h-4 bg-orange-400 rounded mr-3"></div>
                      Dashboard
                    </div>
                    <div className="flex items-center text-gray-300 hover:text-orange-400 transition-colors cursor-pointer">
                      <div className="w-4 h-4 bg-gray-600 rounded mr-3"></div>
                      Search
                    </div>
                    <div className="flex items-center text-gray-300 hover:text-orange-400 transition-colors cursor-pointer">
                      <div className="w-4 h-4 bg-gray-600 rounded mr-3"></div>
                      Team
                    </div>
                    <div className="flex items-center text-orange-400 bg-orange-400/10 rounded p-2 border border-orange-400/20">
                      <div className="w-4 h-4 bg-orange-400 rounded mr-3"></div>
                      Workflow
                    </div>
                    <div className="flex items-center text-gray-300 hover:text-orange-400 transition-colors cursor-pointer">
                      <div className="w-4 h-4 bg-gray-600 rounded mr-3"></div>
                      Reports
                    </div>
                    <div className="flex items-center text-gray-300 hover:text-orange-400 transition-colors cursor-pointer">
                      <div className="w-4 h-4 bg-gray-600 rounded mr-3"></div>
                      Settings
                    </div>
                    <div className="flex items-center text-gray-300 hover:text-orange-400 transition-colors cursor-pointer">
                      <div className="w-4 h-4 bg-gray-600 rounded mr-3"></div>
                      API Keys
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4">Services Overview</h2>
                  <p className="text-gray-400 mb-6">Monday, 18 December 2023</p>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-gray-800 rounded-lg p-4">
                      <div className="w-8 h-8 bg-orange-400 rounded mb-3 flex items-center justify-center">
                        <span className="text-black font-bold">🌐</span>
                      </div>
                      <h3 className="font-semibold mb-2">Web Development</h3>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4">
                      <div className="w-8 h-8 bg-orange-400 rounded mb-3 flex items-center justify-center">
                        <span className="text-black font-bold">📱</span>
                      </div>
                      <h3 className="font-semibold mb-2">Mobile Apps</h3>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4">
                      <div className="w-8 h-8 bg-orange-400 rounded mb-3 flex items-center justify-center">
                        <span className="text-black font-bold">☁️</span>
                      </div>
                      <h3 className="font-semibold mb-2">Cloud Solutions</h3>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4">
                      <div className="w-8 h-8 bg-orange-400 rounded mb-3 flex items-center justify-center">
                        <span className="text-black font-bold">🎨</span>
                      </div>
                      <h3 className="font-semibold mb-2">UI/UX Design</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Revolutionizing Notification Management Section */}
        <section className="py-16 px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center text-gray-300 mb-16">
              Revolutionizing Digital Solutions
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - UI Screenshot */}
              <div className="bg-gray-900 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="bg-gray-800 rounded p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold">Workflows</h3>
                      <span className="text-sm text-gray-400">Status</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center py-2 border-b border-gray-700">
                        <span>E-commerce Platform</span>
                        <span className="text-orange-400">In Progress</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-700">
                        <span>Mobile Banking App</span>
                        <span className="text-green-400">Completed</span>
                      </div>
                    </div>
                  </div>

                  {/* Calendar Widget */}
                  <div className="bg-gray-800 rounded p-4">
                    <h4 className="font-semibold mb-2">November 2023</h4>
                    <div className="grid grid-cols-7 gap-1 text-sm">
                      {Array.from({ length: 30 }, (_, i) => (
                        <div key={i} className="text-center py-1 text-gray-400">
                          {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Popup */}
                  <div className="bg-gray-800 rounded p-4 border border-orange-400">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Cloud Migration</span>
                      <span className="text-sm text-orange-400">In Progress</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">2:30 PM</p>
                  </div>
                </div>
              </div>

              {/* Right - Text Content */}
              <div className="space-y-6">
                <p className="text-lg text-gray-300">
                  <strong>Our platform is designed to simplify development, ensuring that every project
                    reaches its full potential with cutting-edge technology, empowering businesses to focus on what matters most.</strong>
                </p>
                <p className="text-lg text-gray-300">
                  In today's fast-paced digital landscape, robust and scalable software solutions are essential.
                  Our goal is to streamline how businesses manage their digital infrastructure, both internally and externally,
                  with modern technology stacks. We equip development teams with robust tools to enhance
                  productivity and deliver exceptional user experiences.
                </p>

                {/* Feature Icons */}
                <div className="flex space-x-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center mb-2">
                      <span className="text-black text-xl">💡</span>
                    </div>
                    <span className="text-sm text-gray-300">Innovation</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center mb-2">
                      <span className="text-black text-xl">☁️</span>
                    </div>
                    <span className="text-sm text-gray-300">Clarity</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center mb-2">
                      <span className="text-black text-xl">🛡️</span>
                    </div>
                    <span className="text-sm text-gray-300">Reliability</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-16 px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center text-gray-300 mb-16">
              Our Team
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-gray-900 rounded-lg p-6 text-center hover:bg-gray-800 transition-colors border border-gray-700">
                <div className="w-32 h-32 bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-gray-700">
                  <span className="text-4xl">👨‍💼</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-300 mb-2">Adrian Hajdin</h3>
                <p className="text-gray-400 mb-4">Founder & Lead Developer</p>
                <div className="flex justify-end">
                  <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-orange-400 transition-colors cursor-pointer">
                    <span className="text-white text-sm font-bold">in</span>
                  </div>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="bg-gray-900 rounded-lg p-6 text-center hover:bg-gray-800 transition-colors border border-gray-700">
                <div className="w-32 h-32 bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-gray-700">
                  <span className="text-4xl">👩‍💻</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-300 mb-2">Sarah Chen</h3>
                <p className="text-gray-400 mb-4">Senior Full-Stack Developer</p>
                <div className="flex justify-end">
                  <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-orange-400 transition-colors cursor-pointer">
                    <span className="text-white text-sm font-bold">in</span>
                  </div>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="bg-gray-900 rounded-lg p-6 text-center hover:bg-gray-800 transition-colors border border-gray-700">
                <div className="w-32 h-32 bg-gray-800 rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-gray-700">
                  <span className="text-4xl">👩‍🎨</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-300 mb-2">Emily Watson</h3>
                <p className="text-gray-400 mb-4">UI/UX Designer</p>
                <div className="flex justify-end">
                  <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-orange-400 transition-colors cursor-pointer">
                    <span className="text-white text-sm font-bold">in</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <FooterSection />
    </main>
  );
}