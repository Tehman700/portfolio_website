import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaArrowRight, FaCode, FaTrophy, FaCoffee } from 'react-icons/fa'
import { SiFiverr, SiUpwork } from 'react-icons/si'
import './Hero.css'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
        <div className="gradient-sphere sphere-3"></div>
      </div>

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-text">
          <motion.p className="hero-greeting" variants={itemVariants}>
            Hello, I'm
          </motion.p>
          <motion.h1 className="hero-name" variants={itemVariants}>
            Tehman Hassan
          </motion.h1>
          <motion.div className="hero-title-wrapper" variants={itemVariants}>
            <span className="hero-title">Backend Engineer</span>
            <span className="typing-cursor">|</span>
          </motion.div>
          <motion.p className="hero-description" variants={itemVariants}>
              I engineer clean, maintainable backend systems and APIs that solve complex problems with efficiency and precision, turning complex problems into elegant solutions.
          </motion.p>
          <motion.div className="hero-buttons" variants={itemVariants}>
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              <span>View My Work</span>
              <FaArrowRight />
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              <span>Get In Touch</span>
            </button>
          </motion.div>
          <motion.div className="hero-social" variants={itemVariants}>
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
          </motion.div>
        </div>

        <motion.div
          className="hero-image"
          variants={itemVariants}
        >
          <div className="image-wrapper">
            <div className="image-bg"></div>
            <div className="profile-placeholder">
              <span>TH</span>
            </div>
          </div>

<motion.div
  className="floating-card card-1"
  animate={floatingAnimation}
>
  <FaCode />
  <span>50+ Projects</span>
</motion.div>

<motion.div
  className="floating-card card-2"
  animate={{
    ...floatingAnimation,
    transition: { ...floatingAnimation.transition, delay: 0.5 }
  }}
>
  <FaTrophy />
  <span>3+ Years Experience</span>
</motion.div>

<motion.div
  className="floating-card card-3"
  animate={{
    ...floatingAnimation,
    transition: { ...floatingAnimation.transition, delay: 1 }
  }}
>
  <FaGithub />
  <span>20+ Clients</span>
</motion.div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        className="scroll-indicator"
        onClick={(e) => {
          e.preventDefault()
          scrollToSection('about')
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span>Scroll Down</span>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </motion.a>
    </section>
  )
}

export default Hero
