import { FaArrowRight } from "react-icons/fa6";
import "./article.css";

interface Props {
  imgUrl: string;
  date: string;
  text: string;
}

const Article = ({ imgUrl, date, text }: Props) => {
  return (
    <div className="one__blog-container__article">
      <div className="one__blog-container__article-image">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="one__blog-container__article-content">
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>
          Read Full Article <FaArrowRight size={16} />
        </p>
      </div>
    </div>
  );
};

export default Article;
