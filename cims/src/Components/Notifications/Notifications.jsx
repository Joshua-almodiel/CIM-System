import React, { useState, useEffect } from "react";
import axios from "axios";

const Notifications = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await axios.get(
          "https://cim-system-gvok.vercel.app/api/auth/emails",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (response.data.success) {
          setEmails(response.data.emails);
        }
      } catch (error) {
        console.error("Error fetching emails:", error);
      }
    };

    fetchEmails();
  }, []);

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus("");
      }, 3000);
  
      return () => clearTimeout(timer);
    }
  }, [status]);
  

  const handleSendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    try {
      const response = await axios.post(
        "https://cim-system-gvok.vercel.app/api/notifications/send-email",
        { email, subject, date, message },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
        setStatus("Email sent successfully!");
      }
    } catch (error) {
      setStatus("Failed to send email.");
      console.error("Email Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="bg-white-200 py-4 px-6">
            <h2 className="text-2xl font-bold text-gray-700">
              Send Email Notification
            </h2>
            <p className="text-gray-500 mt-1">
              Please choose an email for sending the reminder
            </p>
          </div>

          <form onSubmit={handleSendEmail} className="p-6 space-y-8">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-[#147190] mb-4 border-b border-blue-200 pb-2">
                Email Sending
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <select
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                    required
                  >
                    <option value="">Select Email</option>
                    {emails.map((email, index) => (
                      <option key={index} value={email}>
                        {email}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject<span className="text-red-500">*</span>
                </label>
                <input
                  type="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Reminder Date for vaccination
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message<span className="text-red-500">*</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black focus:outline-none focus:ring-[#147190] focus:border-[#148190]"
                  rows="4"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`px-4 py-2 rounded-md text-white flex items-center justify-center ${
                  loading
                    ? "bg-[#147190] cursor-not-allowed"
                    : "bg-[#147190] hover:bg-[#148190]"
                }`}
              >
                {loading ? (
                  <svg
                    className="animate-spin bg-[#147190] h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                ) : (
                  "Send Email"
                )}
              </button>
              
            </div>
          </form>
          {status && (
                <div
                  className={`mt-4 px-4 py-3 rounded-md text-sm flex items-center gap-2 ${
                    status === "Email sent successfully!"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {status === "Email sent successfully!" ? (
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                  <span>{status}</span>
                </div>
              )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
