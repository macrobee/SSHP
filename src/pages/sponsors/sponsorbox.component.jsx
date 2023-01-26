import { motion } from "framer-motion";

const SponsorBox = ({ name, image, description, reverse }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col md:flex-row justify-between items-center gap-2 ${reverse}`}
    >
      <img src={image} alt="sponsor logo" width={"175px"} className="" />
      <p className="text-base text-justify">
        {name} {description}
      </p>
    </motion.div>
  );
};

export default SponsorBox;
