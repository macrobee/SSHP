const SponsorBox = ({ name, image, description, reverse }) => {
  return (
    <div className={`flex justify-between items-center gap-2 ${reverse}`}>
      <img src={image} alt="sponsor logo" width={'175px'} className=""/>
      <p className="text-base text-justify">{name} {description}</p>
    </div>
  );
};

export default SponsorBox;