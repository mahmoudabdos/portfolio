import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleClose = () => setShowModal(false); // Function to close the modal
  const handleShow = () => setShowModal(true); // Function to open the modal

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Update these variables with your EmailJS credentials
  const serverId = 'service_7vfi578'; // Your EmailJS service ID
  const templateId = 'template_d5s1vom'; // Your EmailJS template ID
  const publicKey = 'OYfu_dSLlpsgu-Lfk'; // Your EmailJS public key

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Prepare the parameters for EmailJS
      const emailParams = {
        user_name: formData.name,
        user_email: formData.email,
        user_subject: formData.subject,
      };

      // Send email using EmailJS
      const emailResponse = await emailjs.send(serverId, templateId, emailParams, publicKey);
      console.log('EmailJS SUCCESS!', emailResponse.status, emailResponse.text);

      // Reset form after success and display success message
      setIsSuccess(true);
      setIsError(false);
      setFormData({ name: '', email: '', subject: '' }); // Clear the form

      setTimeout(() => {
        setIsSuccess(false); // Automatically close the success message after 3 seconds
        handleClose(); // Close the modal
      }, 3000);
      
    } catch (error) {
      console.error('Error occurred:', error);
      setIsError(true);
      setIsSuccess(false);
    }
  };

  return (
    <div id="contact" className="flex min-h-[70vh] min-w-full items-center justify-center">
      {/* Button to trigger modal */}
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
        <h1 className="text-center text-5xl md:text-7xl">
          <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
            Get in Touch
          </span>
        </h1>
        <p className="text-center text-lg font-semibold text-gray-500">
          Let’s build something exceptional together!
        </p>
        <button
          onClick={handleShow}
          className="text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:translate-y-2 hover:shadow-xl hover:shadow-indigo-600"
        >
          Contact Me
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
            <div className="relative w-full max-w-md mx-auto bg-gray-900 rounded-lg shadow-lg p-6">
              <button
                onClick={handleClose}
                className="absolute top-2 right-2 text-white text-lg focus:outline-none"
              >
                &times;
              </button>
              <h2 className="text-white text-2xl font-semibold mb-4 text-center">Contact Me</h2>
              {isSuccess && <div className="bg-green-500 p-3 rounded mb-4 text-center">Message sent successfully!</div>}
              {isError && <div className="bg-red-500 p-3 rounded mb-4 text-center">Failed to send message. Please try again.</div>}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition duration-300 ease-in-out"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Modal overlay */}
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={handleClose} />
        </>
      )}
    </div>
  );
}
