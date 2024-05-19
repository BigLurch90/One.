import "./what-one.css";
import Feature from "../../components/feature/Feature";

const WhatOne = () => {
  return (
    <div className="one__whatone section__margin" id="whatone">
      <div className="one__whatone-featur">
        <Feature
          title="What is One."
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className="one__whatone-heading">
        <h2 className="gradient__text">
          The possibilities are beyond your imagination
        </h2>
        <p>Explore The Library</p>
      </div>
      <div className="one__whatone-container">
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
        />
        <Feature
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <Feature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </div>
    </div>
  );
};

export default WhatOne;
