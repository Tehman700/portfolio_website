import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaDownload, FaAws, FaJava } from 'react-icons/fa'
import { SiDjango } from 'react-icons/si'
import { VscGithubAction } from 'react-icons/vsc'
import profileImage from '../../assets/Tehman Pic.png'
import resumePDF from '../../assets/Tehman CV.pdf'
import './About.css'

const skills = [
  { icon: FaPython, name: 'Python', color: '#3776ab' },
  { icon: FaJava, name: 'Java', color: '#007396' },
  { icon: SiDjango, name: 'Django REST Framework', color: '#092e20' },
  { icon: FaReact, name: 'React', color: '#61dafb' },
  { icon: FaNodeJs, name: 'NodeJS', color: '#339933' },
  { icon: FaDatabase, name: 'SQL', color: '#4479a1' },
  { icon: FaAws, name: 'AWS', color: '#ff9900' },
  { icon: VscGithubAction, name: 'CI/CD Pipelines', color: '#2088ff' }
]

const stats = [
  { number: 50, label: 'Projects Completed', suffix: '+' },
  { number: 20, label: 'Happy Clients', suffix: '+' },
  { number: 3, label: 'Years Experience', suffix: '+' }
]

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
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
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">Get To Know</span>
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div className="about-image" variants={leftVariants}>
            <div className="about-img-wrapper">
              <img src={profileImage} alt="Tehman Hassan" className="about-img" />
            </div>
          </motion.div>

          <motion.div className="about-text" variants={rightVariants}>
            <h3 className="about-heading">
              Backend Engineer focused on building robust, scalable systems
            </h3>

            <p className="about-description">
              I'm Tehman Hassan, a Backend Engineer specializing in
              Python, Django REST Framework, system design, APIs, and backend architectures. I’ve
              built numerous real-world projects across university work, freelancing, and contract-based
              development for clients including companies like Luther Medical LTD and clients in Canada.
            </p>

            <p className="about-description">
              My experience includes building secure authentication systems, scalable APIs, CI/CD pipelines,
              deployment automation, debugging, microservices, geolocation-based platforms, ML-powered systems,
              and IoT solutions using ESP32 and Arduino. I love solving complex engineering problems
              and turning ideas into production-level systems.
            </p>

            <div className="about-stats">
              {stats.map((stat, index) => (
                <div className="stat-item" key={index}>
                  <CountUp
                    end={stat.number}
                    suffix={stat.suffix}
                    inView={inView}
                  />
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="skills-section">
              <h4 className="skills-title">My Skills</h4>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <motion.div
                    className="skill-item"
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                  >
                    <div className="skill-icon" style={{ color: skill.color }}>
                      <skill.icon />
                    </div>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.a
              href={resumePDF}
              download="Tehman_Hassan_CV.pdf"
              className="btn btn-primary download-cv"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Download CV</span>
              <FaDownload />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

const CountUp = ({ end, suffix, inView }) => {
  const countRef = useRef(null)

  useEffect(() => {
    if (inView && countRef.current) {
      let start = 0
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          countRef.current.textContent = end + suffix
          clearInterval(timer)
        } else {
          countRef.current.textContent = Math.floor(start) + suffix
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [inView, end, suffix])

  return <span className="stat-number" ref={countRef}>0{suffix}</span>
}

export default About
