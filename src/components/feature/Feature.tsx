import "./feature.css";

interface Props {
  title: string;
  text: string;
}

const Features = ({ title, text }: Props) => {
  return (
    <div className="one__features-container__feature">
      <div className="one__features-container__feature-title">
        <div></div>
        <h1>{title}</h1>
      </div>
      <div className="one__features-container__feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Features;
