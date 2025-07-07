"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "06322483-7ea8-42a5-8950-01e21c34a2c9",
        ...formData,
      }),
    });

    const result = await response.json();

    if (result.success) {
      setSubmitted(true);
      setFormData({ name: "", phone: "", email: "", message: "" });
    } else {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="layout-pt-sm  layout-pb-lg">
      <div className="container">
        <div className="row justify-center">
          <div
            className={`col-lg-8 mobileMargin`}
          >
            <h2 className="text-30 fw-700 text-center mb-30">
              Leave us your info
            </h2>

            <div className="contactForm">
              {submitted ? (
                <p className="text-success text-center">
                  Message sent successfully!
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="row y-gap-30">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="message"
                      placeholder="Message"
                      rows="6"
                      required
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  {error && <p className="text-danger text-center">{error}</p>}
                  <div className="col-12">
                    <button
                      type="submit"
                      className="button -md -dark-1 bg-accent-1 text-white col-12"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
        .mobileMargin {
  margin-top: 0;
}

@media (max-width: 768px) {
  .mobileMargin {
    margin-top: 10rem;
  }
}        `}
      </style>
    </section>
  );
}
