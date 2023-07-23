import {useState, } from 'react'

import './styles.scss'

interface IFormData {
  name: string,
  email: string,
  subject: string,
  message: string,
}

export default function Home() {
  const [formData, setFormData] = useState<IFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submittedData, setSubmittedData] = useState<IFormData>();

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (!isValidEmail(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    setSubmittedData(formData);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        <label className='form-item'>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label className='form-item'>
          E-mail:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label className='form-item'>
          Subject:
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
          />
        </label>
        <label className='form-item'>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div className='form'>
          <h2>Submitted Data:</h2>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Subject: {submittedData.subject}</p>
          <p>Message: {submittedData.message}</p>
        </div>
      )}
    </div>
  );
}