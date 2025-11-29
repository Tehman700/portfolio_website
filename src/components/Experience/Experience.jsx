import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import './Experience.css'

const experiences = [
  {
    title: 'Backend Engineer',
    company: 'Fiverr (Freelance)',
    location: 'Remote',
    duration: 'October 2024 - Present',
    description: 'Providing services for creating fully deployed backend systems. Specializing in error handling, troubleshooting on different platforms including AWS, Nginx servers, Docker etc. Main tech stack includes Python, Django, REST APIs, PostgreSQL, Django Channels, Websockets, and creating CI/CD pipelines for automated deployments on AWS cloud services',
    achievements: ['Level 1 Seller'],
    current: true
  },
  {
    title: 'Software Engineering Intern',
    company: 'Inara Technologies',
    location: 'Onsite',
    duration: 'June 2025 - September 2025',
    description: 'Developed a full-stack REST API from scratch that handles all Custom Exceptions, JWT authentication, CRUD, Nested Comments and replies, likes, dislikes, for every module, role-based permissions, subscriptions, and activity logging using signals in the Framework. Currently started on a new module - WebSockets Protocols for open communication from both ends.',
    current: false
  },
  {
    title: 'General Member',
    company: 'Taxilians Robotics and Automation Club',
    location: 'UET Taxila',
    duration: 'September 2023 - Present',
    description: 'Role related to learning new opportunities, internships, finding and solving problems',
    achievements: ['Winner OOP Course Semester Project'],
    current: true
  },
  {
    title: 'Frontend Web Developer',
    company: 'Interns Pakistan',
    location: 'Remote',
    duration: 'August 2023 - October 2023',
    description: 'Learnt Basic Skills as HTML5, CSS3, PHP and Backend Concepts',
    current: false
  }
]

const Experience = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">My Journey</span>
          <h2 className="section-title">Work Experience</h2>
        </motion.div>

        <motion.div
          className="experience-timeline"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-item"
              variants={itemVariants}
            >
              <div className="experience-dot">
                <FaBriefcase />
              </div>
              <div className="experience-content">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-title">{exp.title}</h3>
                    <h4 className="experience-company">{exp.company}</h4>
                  </div>
                  {exp.current && <span className="current-badge">Current</span>}
                </div>
                <div className="experience-meta">
                  <span className="experience-duration">
                    <FaCalendarAlt /> {exp.duration}
                  </span>
                  <span className="experience-location">
                    <FaMapMarkerAlt /> {exp.location}
                  </span>
                </div>
                <p className="experience-description">{exp.description}</p>
                {exp.achievements && (
                  <div className="experience-achievements">
                    <h5>Achievements:</h5>
                    <ul>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
