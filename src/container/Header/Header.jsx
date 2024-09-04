import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Header.scss";
import { forwardRef } from "react";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = forwardRef(function Header(props, ref) {
  return (
    <div id="home" className="app__container app__wrapper app__flex">
      <div className="app__header app__flex" ref={ref}>
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
        >
          <div className="app__header-badge">
            <div className="badge-cmp app__flex">
              <span>👋</span>
              <div style={{ marginLeft: 20 }}>
                <p className="p-text">Hello, I am</p>
                <h1 className="head-text">Churchill</h1>
              </div>
            </div>
            <div className="tag-cmp app__flex">
              <p className="p-text">Software Engineer </p>
              <p className="p-text">Full-Stack Developer</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__header-img"
        >
          <img src={images.profile} alt="profile_bg" />
          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="overlay_circle"
            src={images.circle}
          />
        </motion.div>
        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles"
        >
          {[images.mongodb, images.node, images.react].map((circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
});

export default Header;
