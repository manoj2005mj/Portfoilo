import './Contactform.css';
import { useState } from 'react';
import axios from 'axios';

function Contactform() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/contact', form);
      setStatus(res.data.message);
    } catch (err) {
      setStatus('Message failed to send.');
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Your Name" onChange={handleChange} required />
        <input name="email" placeholder="Your Email" onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" onChange={handleChange} required />
        <button type="submit">Send Message</button>
      </form>
      {status && <p className="status">{status}</p>}
    </section>
  );
}

export default Contactform;
