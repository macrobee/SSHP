import { motion } from "framer-motion";

const EventBox = ({ event }) => {
  const { photoUrl, description, link, name } = event;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex flex-col md:flex-row justify-center items-center md:justify-between md:items-center w-full`}
      key={photoUrl}
    >
      <div className="flex flex-col justify-evenly items-center w-full md:w-[70%]">
        <h3 className="text-lg font-semibold text-green">{name}</h3>
        <p className="w-80 text-justify">{description}</p>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-105 duration-200 ease-in-out bg-background w-40 md:w-[30%] hover:shadow-lg"
      >
        <img src={photoUrl} alt={`${name} logo`} className="w-full" />
      </a>
    </motion.div>
  );
};

export default EventBox;
