import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Google Form POST endpoint
    const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSexdNFSMN-D6Bt6kOfXGNNm5Op1YP79U2cC1v7dmWnvVKtiig/formResponse";

    // Updated entry IDs from your pre-filled link
    const formData = new FormData();
    formData.append("entry.210942479", form.name);    // Name
    formData.append("entry.767558775", form.email);   // Email
    formData.append("entry.901695748", form.subject); // Subject
    formData.append("entry.1255531902", form.message);  // Message

    fetch(googleFormURL, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    }).then(() => setSubmitted(true));
  }

  if (submitted) {
    return (
      <div className="px-4 py-10">
        <h1 className="text-5xl font-bold text-center mt-10">Thank you!</h1>
        <h2 className="text-lg text-center mt-5">Your message has been sent.</h2>
      </div>
    );
  }

  return (
    <div className="px-4 py-10">
      <h1 className="text-5xl font-bold text-center mt-10">
        Contact Form
      </h1>
      <h2 className="text-lg text-center mt-5 whitespace-pre-line">
        {'Please fill out the form with your personal information\nand tell us a bit about your concerns and required services.'}
      </h2>
      <form className="max-w-xl mx-auto mt-10 flex flex-col gap-5" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="px-6 py-3 bg-customColor rounded-2xl drop-shadow-lg w-full"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="px-6 py-3 bg-customColor rounded-2xl drop-shadow-lg w-full"
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Choose Subject"
          value={form.subject}
          onChange={handleChange}
          className="px-6 py-3 bg-customColor rounded-2xl drop-shadow-lg w-full"
          required
        /> 
        <textarea
          name="message"
          placeholder="Your Message"
          rows={6}
          value={form.message}
          onChange={handleChange}
          className="px-6 py-3 bg-customColor rounded-2xl drop-shadow-lg w-full resize-none"
          required
        ></textarea>

        <button
          type="submit"
          className="mt-5 bg-customColor2 text-white font-semibold py-3 rounded-2xl drop-shadow-lg transition"
        >
          SUBMIT HERE
        </button>
      </form>
    </div>
  );
}

export default Contact;
