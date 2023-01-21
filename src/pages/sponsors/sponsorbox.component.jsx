const SponsorBox = ({ name, image, description }) => {
  return (
    <div>
      <img src={image} alt="sponsor logo" width={'175px'}/>
      <p className="font-medium">{name} {description}</p>
    </div>
  );
};

export default SponsorBox;