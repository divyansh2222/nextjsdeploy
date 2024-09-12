// pages/contact.js
"use client"
import { useState } from 'react';
import Head from 'next/head';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, like sending it to an API or logging it
    console.log('Form data submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Get in touch with us." />
      </Head>
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              backgroundColor: '#0070f3',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
