import { useState } from "react";
import { Phone, MessageSquare, Instagram, MessageCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add form submission logic here
    alert("Message sent! We will get back to you soon.");
    setForm({ name: "", surname: "", email: "", phone: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 bg-white dark:bg-black px-4 sm:px-6 py-12 transition-colors duration-500 w-full"
    >
      {/* Left side - Contact Info */}
      <div className="w-full max-w-lg lg:flex-1">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-blue-700 dark:text-blue-300 lg:text-left">
          Contact Us
        </h2>

        <div className="bg-blue-50 dark:bg-gray-900 p-6 rounded-xl shadow-lg">
          {/* Phone & Messaging */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {/* Phone */}
            <a
              href="tel:+383043881061"
              className="flex items-center space-x-3 text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Phone size={24} className="text-blue-600 dark:text-blue-400" />
              <span>+383(0)43881061</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/383043881061"
              className="flex items-center space-x-3 text-lg hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              <MessageSquare size={24} className="text-green-600 dark:text-green-400" />
              <span>WhatsApp</span>
            </a>
            
            {/* Viber */}
            <a
              href="viber://chat?number=+383043881061"
              className="flex items-center space-x-3 text-lg hover:text-purple-600 dark:hover:text-purple-400 transition-colors sm:col-span-2"
            >
              <MessageCircle size={24} className="text-purple-600 dark:text-purple-400" />
              <span>Viber</span>
            </a>
          </div>

          {/* Social Media */}
          <div className="flex justify-start">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/evafacialclinic"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-lg hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
            >
              <Instagram size={28} className="text-pink-600 dark:text-pink-400" />
              <span>Instagram</span>
            </a>
          </div>

          {/* Google Maps */}
          <div className="mt-6">
            <div className="w-full h-[200px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.3022912373257!2d21.158595799999998!3d42.667755799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ee3d1c0c3e3%3A0xa9291183bcba2f48!2sEva%20Facial%20Clinic!5e0!3m2!1sen!2s!4v1709764800185!5m2!1sen!2s"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Eva Facial Clinic Location"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Contact Form */}
      <div className="w-full max-w-lg lg:flex-1">
        <form
          onSubmit={handleSubmit}
          className="w-full bg-blue-50 dark:bg-gray-900 p-4 sm:p-8 rounded-xl shadow-lg transition-colors duration-500"
        >
          <div className="flex flex-col sm:flex-row sm:space-x-4 mb-6">
            <div className="mb-4 sm:mb-0 w-full sm:w-1/2">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full px-4 py-3 rounded-md border border-blue-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <input
                type="text"
                name="surname"
                value={form.surname}
                onChange={handleChange}
                placeholder="Surname"
                required
                className="w-full px-4 py-3 rounded-md border border-blue-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full mb-6 px-4 py-3 rounded-md border border-blue-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full mb-6 px-4 py-3 rounded-md border border-blue-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your message..."
            required
            rows={5}
            className="w-full mb-6 px-4 py-3 rounded-md border border-blue-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
