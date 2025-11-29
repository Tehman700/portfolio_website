import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaHeart } from 'react-icons/fa'
import { SiFiverr, SiUpwork } from 'react-icons/si'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-logo">
            <span className="logo-text">TH</span>
          </div>

          <p className="footer-text">
            Hard Work beats talent when Talent doesn't work HARD.
          </p>

          <div className="footer-social">
            <motion.a
              href="https://github.com/Tehman700"
              className="social-link"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/tehman600/"
              className="social-link"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
            >
              <FaLinkedinIn />
            </motion.a>
            <motion.a
              href="https://www.fiverr.com/s/jjaE0xa"
              className="social-link"
              aria-label="Fiverr"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
            >
              <SiFiverr />
            </motion.a>
            <motion.a
              href="https://www.upwork.com/freelancers/~0168b9aa189284746f"
              className="social-link"
              aria-label="Upwork"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
            >
              <SiUpwork />
            </motion.a>
          </div>

          <div className="footer-divider"></div>

          <p className="copyright">
            &copy; {currentYear} Tehman Hassan. Made in React JS. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
