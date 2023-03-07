import { motion } from "framer-motion";

const SponsorBox = ({ image, description, reverse, siteUrl }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col ${reverse} justify-between items-center gap-2`}
    >
      <a href={siteUrl} className="w-60 md:w-full hover:scale-110 duration-300 ease-in-out">
        <img src={image} alt="sponsor logo"/>
      </a>
      <p className="text-base text-justify">
        {description}
      </p>
    </motion.div>
  );
};

export default SponsorBox;
