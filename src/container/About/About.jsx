import { motion } from 'framer-motion'
import { useState, useEffect, forwardRef } from 'react'
import './About.scss'
import { about } from '../../Data'

const About = forwardRef(function About(props, ref) {
    const [abouts, setAbouts] = useState([])

    // UseEffect to set the local data
    useEffect(() => {
        setAbouts(about)
    }, [])

    return (
        <div id='about' className='app__container app__wrapper app__whitebg app__flex'>
            <motion.div
                ref={ref}
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.5 }}
            >
                <h2 className='head-text'>
                    My <span>Expertise</span>
                </h2>
                <div className="app__profiles">
                    {abouts.slice(0).reverse().map((about, index) => (
                        <motion.div
                            whileInView={{ opacity: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5, type: 'tween' }}
                            className='app__profile-item'
                            key={about.title + index}
                        >
                            <img src={about.imgUrl} alt={about.title} />
                            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
                            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
})

export default About
