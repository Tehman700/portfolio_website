import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaGithub, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa'
import { SiFiverr, SiUpwork } from 'react-icons/si'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 }
    }
  }

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Hire Me</h2>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            variants={leftVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <h3>Let's work together</h3>
            <p>
              I'm currently available for freelance work and full-time positions.
              If you have a project that you want to get started, think you need
              my help with something, or just want to say hi, feel free to reach out!
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-text">
                  <span>Email</span>
                  <a href="mailto:tehmanhassan@gmail.com">tehmanhassan@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaWhatsapp />
                </div>
                <div className="contact-text">
                  <span>WhatsApp</span>
                  <a href="https://wa.me/923111592151" target="_blank" rel="noopener noreferrer">+(92) 311-1592151</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-text">
                  <span>Location</span>
                  <p>Taxila, Pakistan</p>
                </div>
              </div>
            </div>

            <div className="contact-social">
              <a href="https://github.com/Tehman700" className="social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/tehman600/" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://www.fiverr.com/s/jjaE0xa" className="social-link" aria-label="Fiverr" target="_blank" rel="noopener noreferrer">
                <SiFiverr />
              </a>
              <a href="https://www.upwork.com/freelancers/~0168b9aa189284746f" className="social-link" aria-label="Upwork" target="_blank" rel="noopener noreferrer">
                <SiUpwork />
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            variants={rightVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label htmlFor="name">Your Name</label>
              <span className="focus-border"></span>
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label htmlFor="email">Your Email</label>
              <span className="focus-border"></span>
            </div>

            <div className="form-group">
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label htmlFor="subject">Subject</label>
              <span className="focus-border"></span>
            </div>

            <div className="form-group">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                placeholder=" "
              ></textarea>
              <label htmlFor="message">Your Message</label>
              <span className="focus-border"></span>
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary submit-btn"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <FaPaperPlane />
                </>
              )}
            </motion.button>

            {submitStatus === 'success' && (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✓ Message sent successfully!
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                className="error-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✗ Failed to send message. Please try again.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
