import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaExternalLinkAlt, FaGithub, FaCheck, FaPlay, FaImage } from 'react-icons/fa'
import './ProjectModal.css'

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [activeImage, setActiveImage] = useState(0)

  if (!project) return null

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', damping: 25, stiffness: 300 }
    },
    exit: { opacity: 0, scale: 0.8, y: 50 }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="modal-content"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={onClose}>
              <FaTimes />
            </button>

            <div className="modal-body">
              <div className="modal-gallery">
                <div className="modal-main-image">
                  {activeImage === 3 && project.hasVideo ? (
                    <div className="modal-img-placeholder">
                      <FaPlay />
                      <span>Video Preview</span>
                    </div>
                  ) : project.images && project.images[activeImage] ? (
                    <img src={project.images[activeImage]} alt={`${project.title} - Screenshot ${activeImage + 1}`} />
                  ) : (
                    <div className="modal-img-placeholder">
                      <FaImage />
                      <span>Screenshot {activeImage + 1}</span>
                    </div>
                  )}
                </div>
                <div className="modal-thumbnails">
                  {project.images.map((image, index) => (
                    <div
                      key={index}
                      className={`thumbnail ${activeImage === index ? 'active' : ''}`}
                      onClick={() => setActiveImage(index)}
                    >
                      {image ? (
                        <img src={image} alt={`${project.title} - Thumbnail ${index + 1}`} />
                      ) : (
                        <div className="thumb-placeholder">
                          <FaImage />
                        </div>
                      )}
                    </div>
                  ))}
                  {project.hasVideo && (
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

              <div className="modal-info">
                <span className="modal-category">{project.categoryLabel}</span>
                <h2 className="modal-title">{project.title}</h2>
                <p className="modal-description">{project.fullDescription}</p>

                <div className="modal-features">
                  <h4>Key Features</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>
                        <FaCheck />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-tech">
                  <h4>Technologies Used</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, index) => (
                      <span key={index}>{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-links">
                  <a href={project.liveUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                  <a href={project.githubUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
