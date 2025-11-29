import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCheck, FaImage, FaGithub, FaExternalLinkAlt, FaShoppingCart, FaHeartbeat, FaPalette, FaTasks, FaUtensils, FaLaptopCode, FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa'
import { projectsData } from '../../data/projects'
import './Projects.css'

const iconMap = {
  FaShoppingCart,
  FaHeartbeat,
  FaPalette,
  FaTasks,
  FaUtensils,
  FaLaptopCode
}

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeImage, setActiveImage] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  // Reset active image when project changes
  useEffect(() => {
    setActiveImage(0)
  }, [currentIndex])

  useEffect(() => {
    if (!isAutoPlaying || !inView || projectsData.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projectsData.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, inView])

  const handlePrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) =>
      prev === 0 ? projectsData.length - 1 : prev - 1
    )
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % projectsData.length)
  }

  const handleDotClick = (index) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const currentProject = projectsData[currentIndex]
  const IconComponent = currentProject ? iconMap[currentProject.icon] : null

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-subtitle">My Recent Work</span>
          <h2 className="section-title">Projects</h2>
        </motion.div>

        <div className="carousel-container">
          <button
            className="carousel-nav carousel-nav-left"
            onClick={handlePrevious}
            aria-label="Previous project"
          >
            <FaChevronLeft />
          </button>

          <div className="carousel-wrapper">
            <AnimatePresence mode="wait" custom={1}>
              {currentProject && (
                <motion.div
                  key={currentProject.id}
                  className="carousel-slide"
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  custom={1}
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                >
                  <div className="project-card-carousel">
                    <div className="project-gallery-section">
                      <div className="project-main-image">
                        {activeImage === 3 && currentProject.hasVideo ? (
                          <div className="project-img-placeholder-large">
                            <FaPlay />
                            <span>Video Preview</span>
                          </div>
                        ) : currentProject.images && currentProject.images[activeImage] ? (
                          <img
                            src={currentProject.images[activeImage]}
                            alt={`${currentProject.title} - Screenshot ${activeImage + 1}`}
                          />
                        ) : (
                          <div className="project-img-placeholder-large">
                            <FaImage />
                            <span>Screenshot {activeImage + 1}</span>
                          </div>
                        )}
                      </div>
                      <div className="project-thumbnails">
                        {currentProject.images.map((image, index) => (
                          <div
                            key={index}
                            className={`thumbnail ${activeImage === index ? 'active' : ''}`}
                            onClick={() => setActiveImage(index)}
                          >
                            {image ? (
                              <img src={image} alt={`${currentProject.title} - Thumbnail ${index + 1}`} />
                            ) : (
                              <div className="thumb-placeholder">
                                <FaImage />
                              </div>
                            )}
                          </div>
                        ))}
                        {currentProject.hasVideo && (
                          <div
                            className={`thumbnail video-thumb ${activeImage === 3 ? 'active' : ''}`}
                            onClick={() => setActiveImage(3)}
                          >
                            <div className="thumb-placeholder">
                              <FaPlay />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="project-info-carousel">
                      <span className="project-category">{currentProject.categoryLabel}</span>
                      <h3 className="project-title-large">{currentProject.title}</h3>
                      <p className="project-description-large">{currentProject.fullDescription}</p>

                      <div className="project-features-full">
                        <h4>Key Features</h4>
                        <ul>
                          {currentProject.features.map((feature, index) => (
                            <li key={index}>
                              <FaCheck />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="project-tech-carousel">
                        <h4>Technologies Used</h4>
                        <div className="tech-tags">
                          {currentProject.technologies.map((tech, index) => (
                            <span key={index}>{tech}</span>
                          ))}
                        </div>
                      </div>

                      <div className="project-links-carousel">
                        <a
                          href={currentProject.liveUrl}
                          className="link-btn btn-primary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaExternalLinkAlt />
                          <span>Live Demo</span>
                        </a>
                        <a
                          href={currentProject.githubUrl}
                          className="link-btn btn-secondary"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub />
                          <span>Source Code</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            className="carousel-nav carousel-nav-right"
            onClick={handleNext}
            aria-label="Next project"
          >
            <FaChevronRight />
          </button>
        </div>

        <div className="carousel-indicators">
          {projectsData.map((project, index) => (
            <button
              key={project.id}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {!isAutoPlaying && (
          <button
            className="autoplay-toggle"
            onClick={() => setIsAutoPlaying(true)}
          >
            Resume Auto-play
          </button>
        )}
      </div>
    </section>
  )
}

export default Projects
