"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaDev, FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { useState } from "react";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      const res = await fetch("/api/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message })
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setError(data.error || "Failed to send message.");
      }
    } catch (err) {
      setError("Failed to send message.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <footer className="bg-zinc-900 text-gray-100">
  <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8 lg:px-16 pt-24 lg:min-h-screen flex flex-col justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          {/* About */}
          <div>
            <h2 className="text-xl font-bold mb-2">Aman Kr Pandey</h2>
            <p className="mb-4 text-gray-300">
              Creating elegant solutions to complex problems through clean, efficient code and user-centered design
            </p>
            <div className="flex flex-row gap-2 pt-2">
              <Link target="_blank" href={"https://www.linkedin.com/in/amanpandey09/"} className="hover:cursor-pointer text-gray-900 dark:text-gray-300">
                <FaLinkedin size={24} />
              </Link>
              <Link target="_blank" href={"https://github.com/AmanPandey0320"} className="hover:cursor-pointer text-gray-900 dark:text-gray-300">
                <FaGithub size={24} />
              </Link>
              <Link target="_blank" href={"https://x.com/_a_m_a_n_pandey/"} className="hover:cursor-pointer text-gray-900 dark:text-gray-300">
                <FaSquareXTwitter size={24} />
              </Link>
              <Link target="_blank" href={"https://dev.to/_a_m_a_n_pandey/"} className="hover:cursor-pointer text-gray-900 dark:text-gray-300">
                <FaDev size={24} />
              </Link>

            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-gray-300">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#skills" className="hover:text-white">Skills</a></li>
              <li><a href="#experience" className="hover:text-white">Experience</a></li>
              <li><a href="#education" className="hover:text-white">Education</a></li>
              <li><a href="#projects" className="hover:text-white">Projects</a></li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-2">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2"><MdEmail />2000amanpandey2@gmail.com</li>
              <li className="flex items-center gap-2"><MdLocationOn /> Bengaluru, India</li>
            </ul>
            <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 hover:cursor-pointer rounded text-white font-semibold">Get In Touch</button>
          </div>
          <div>
            {/* send me a message form */}
            <h3 className="text-lg font-bold mb-2">Send a Message</h3>
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-2 rounded bg-gray-800 text-gray-100 focus:outline-none"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 rounded bg-gray-800 text-gray-100 focus:outline-none"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <textarea
                placeholder="Your Message"
                className="px-4 py-2 rounded bg-gray-800 text-gray-100 focus:outline-none h-32 resize-none"
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
              ></textarea>
              <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
              {success && <span className="text-green-400 text-sm pt-1">{success}</span>}
              {error && <span className="text-red-400 text-sm pt-1">{error}</span>}
            </form>
          </div>
        </div>
        {/* Newsletter */}
        {/* <div className="py-8 border-b border-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h4 className="text-lg font-bold mb-1">Stay Updated</h4>
            <p className="text-gray-300">Subscribe to my newsletter for tech articles and updates.</p>
          </div>
          <form className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-l bg-gray-800 text-gray-100 focus:outline-none w-full md:w-72"
            />
            <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r text-white font-semibold">
              Subscribe
            </button>
          </form>
        </div> */}
        {/* Bottom bar */}
        <div className="mt-auto flex flex-col md:flex-row md:items-center md:justify-between py-6 text-gray-400 text-sm border-t border-gray-700">
          <div>© 2025 Aman Kr Pandey. All rights reserved.</div>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-gray-200">Privacy Policy</a>
            <a href="#" className="hover:text-gray-200">Terms of Service</a>
            <a href="#" className="hover:text-gray-200">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
