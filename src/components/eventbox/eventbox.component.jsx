import { motion } from "framer-motion";

const EventBox = ({ event }) => {
  const { photoUrl, link, name } = event;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex flex-col gap-1 justify-center items-center`}
      key={photoUrl}
    >
      <h3 className="text-lg font-semibold text-green">{name}</h3>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center hover:scale-105 duration-200 ease-in-out w-[200px]"
      >
        <img src={photoUrl} alt={`SSHP at ${name}`} className="w-80" />
      </a>
    </motion.div>
  );
};

export default EventBox;
