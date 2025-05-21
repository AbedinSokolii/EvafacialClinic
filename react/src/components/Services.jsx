import { motion } from "framer-motion";
import { useInstagramBio } from "../hooks/useInstagramBio";
import { Loader2 } from "lucide-react";

export default function Services() {
  const { bioData, loading, error } = useInstagramBio();

  return (
    <section id="services" className="relative py-16 bg-blue-50 dark:bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-15 dark:opacity-10"
        style={{
          backgroundImage: `url(/eva-profile.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(4px)'
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Instagram Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="max-w-3xl mx-auto bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-lg p-8">
            {loading ? (
              <div className="flex items-center justify-center h-32">
                <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
              </div>
            ) : error ? (
              <div className="text-red-500">
                Unable to load clinic information. Please try again later.
              </div>
            ) : (
              <>
                <div className="flex items-center justify-center mb-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-500">
                    <img
                      src="/eva-profile.jpg"
                      alt={bioData.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://placehold.co/200x200/e5e7eb/a3a3a3?text=Eva';
                      }}
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {bioData.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {bioData.biography}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left text-gray-600 dark:text-gray-300">
                  <div>
                    <h4 className="font-semibold mb-2">Business Hours</h4>
                    <p>Mon-Fri: {bioData.business_hours.mon_fri}</p>
                    <p>Saturday: {bioData.business_hours.saturday}</p>
                    <p>Sunday: {bioData.business_hours.sunday}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Contact</h4>
                    <p>📞 {bioData.contact.phone}</p>
                    <p>📍 {bioData.contact.location}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </motion.div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Our Advanced Treatments
          </h2>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* HIFU Treatment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="h-16 w-16 bg-rose-100 dark:bg-rose-900 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-rose-600 dark:text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-rose-600 dark:text-rose-400 mb-4">
              8D HIFU Treatment
            </h3>
            <div className="text-gray-600 dark:text-gray-300 space-y-4">
              <p>
                A non-surgical radio frequency procedure that rejuvenates your skin, smooths, tightens, and contours while decreasing sagging skin on both face and body.
              </p>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h4 className="font-semibold mb-2">Key Benefits:</h4>
                <ul className="space-y-2">
                  <li>• Stimulates natural collagen production</li>
                  <li>• Reaches 4.5mm depth (SMS layer) and 3mm</li>
                  <li>• Creates 400℉+ temperature for immediate tightening</li>
                  <li>• Non-surgical skin lifting</li>
                  <li>• Zero downtime</li>
                  <li>• 8D Hifu Treatment</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* LED Therapy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="h-16 w-16 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
              LED Light Therapy
            </h3>
            <div className="text-gray-600 dark:text-gray-300 space-y-4">
              <p>
                One of the most effective and non-invasive ways to rejuvenate and repair the skin using Light Emitting Diode technology that stimulates cellular regeneration.
              </p>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h4 className="font-semibold mb-2">Treatment Benefits:</h4>
                <ul className="space-y-2">
                  <li>• Increases collagen and elastin production</li>
                  <li>• Creates firmer, younger-looking skin</li>
                  <li>• Reduces wrinkles and fine lines</li>
                  <li>• Improves blood circulation</li>
                  <li>• Treats mild to moderate acne</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Hydra Facial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="h-16 w-16 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
              Hydra Facial 7-in-1
            </h3>
            <div className="text-gray-600 dark:text-gray-300 space-y-4">
              <p>
                An innovative 7-in-1 facial treatment device that revolutionizes traditional skincare through intelligent vacuum suction technology and advanced product integration.
              </p>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <h4 className="font-semibold mb-2">System Benefits:</h4>
                <ul className="space-y-2">
                  <li>• Deep skin hydration</li>
                  <li>• Professional skin cleansing</li>
                  <li>• Wrinkle reduction</li>
                  <li>• Enhanced skin texture</li>
                  <li>• Removes aging factors</li>
                  <li>• Improves moisture retention</li>
                  
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 