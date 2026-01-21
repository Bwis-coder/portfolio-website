import instagram from '../../assets/instagram.jpg'
import twitter from '../../assets/twitter.jpg'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'


export function FormSection () {
const [status, setStatus] = useState('')
  const [subject, setSubject] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const form = useRef()

  const sendMail = (e) => {
    e.preventDefault()

    if (subject && name && email && message) {
      emailjs.sendForm(
        'service_02e4ytq',
        'template_slppopb',
        form.current,
        'L98-CtUMPv2pAtCxb'
      )
        .then(() => {
          setStatus('Message sent successfully')
          setSubject('')
          setName('')
          setEmail('')
          setMessage('')

          setTimeout(() => setStatus(''), 3000)
        })
        .catch(() => {
          setStatus('Failed to send message, please try again')
          setTimeout(() => setStatus(''), 3000)
        })
    } else {
      setStatus('Please fill in all fields')
      setTimeout(() => setStatus(''), 3000)
    }
  }

  return (
    <>
      <form ref={form} onSubmit={sendMail} className="section-input">
    
            <p className='contact-info'>Contact Me</p>
    
            <input
              name='subject'
              type='text'
              placeholder="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className='input-details'
            />
    
            <input
              type='text'
              placeholder='Name'
              name='user-name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='input-details'
            />
    
            <input
              type='text'
              placeholder='Email'
              name='user-email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='input-details'
            />
    
            <input
              type='text'
              placeholder='Message'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className='input-details-message'
            />
    
            <button>Submit</button>
            {status && <p className="feedback-message">{status}</p>}
    
            <div className='social-container'>
            <a href='https://www.instagram.com/bwis_tech?igsh=bzBqOHpvYXQwOWZO&ut-m_source=qr' target='_blank' rel='noopener noreferrer'>
              <img className='instagram-image' src={instagram} alt="Instagram profile link" />
            </a>
    
            <a href='https://x.com/bwis1010?s=21' target='_blank' rel='noopener noreferrer'>
              <img className='twitter-image' src={twitter}  alt="Twitter profile link"
     />
            </a>
    
          </div>
          </form>
    
    </>
  )
}