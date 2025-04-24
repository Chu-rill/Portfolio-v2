import { useState, useEffect, forwardRef } from 'react';
import { motion } from 'framer-motion';

import { skills } from '../../Data.js';
import './Skills.scss';

const Skills = forwardRef(function Skills(props, ref) {
    const [skillsList, setSkillsList] = useState([]);

    useEffect(() => {
        // Set the skills data from Data.js
        setSkillsList(skills);
    }, []);

    const boxVariants = {
        initial: { opacity: 0, scale: 0 },
        animate: {
            opacity: 1, scale: 1,
            transition: { staggerChildren: 0.05, ease: "easeInOut", duration: 0.3 },
        },
    }

    return (
        <div id='skills' className='app__container app__wrapper app__whitebg app__flex'>
            <div ref={ref}>
                <h2 className="head-text">My <span>Skills</span></h2>
                <div className="app__skills-container">
                    <motion.div
                        variants={boxVariants}
                        initial='initial'
                        whileInView='animate'
                        className="app__skills-list app__flex">
                        {skillsList.map((skill) => (
                            <motion.div
                                variants={boxVariants}
                                className="app__skills-item app__flex"
                                key={skill.name}
                            >
                                <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                                    <img src={skill.icon} alt={skill.name} />
                                </div>
                                <p className="p-text">{skill.name}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
})

export default Skills;
