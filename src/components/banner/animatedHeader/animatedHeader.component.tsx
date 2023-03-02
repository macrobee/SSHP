import {motion} from 'framer-motion';
import uniqid from 'uniqid';

const bannerAnimation = {
    animate: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };
  const letterAnimation = {
    initial: {
      y: 200,
    },
    animate: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
  };

  type HeaderProps = {
    text: string;
  }
  const AnimatedHeader = ({text}:HeaderProps)=>{

    return (<motion.span
        className="flex justify-center items-center text-background text-5xl font-bold overflow-hidden pb-1/2"
        variants={bannerAnimation}
        initial="initial"
        animate="animate"
      >
        {[...text].map((letter) => {
            const extraSpace = letter === " " ? true : false;
          return (
            <motion.span className={`min-w-1/2 ${extraSpace ? "px-1/2": ""}`} variants={letterAnimation} key={uniqid()}>{letter}</motion.span>
          );
        })}
      </motion.span>)
  }

  export default AnimatedHeader;