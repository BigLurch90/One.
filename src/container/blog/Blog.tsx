import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => {
  return (
    <div className="one__blog section__padding" id="blog">
      <div className="one__blog-heading">
        <h2 className="gradient__text">
          A lot is happening, <br /> We arnpme blogging about it.
        </h2>
      </div>
      <div className="one__blog-container">
        <div className="one__blog-container__groupA">
          <Article
            imgUrl={blog01}
            date="Sep 26, 2021"
            text="One. Can an AI become your personal hero?"
          />
        </div>
        <div className="one__blog-container__groupB">
          <Article
            imgUrl={blog02}
            date="Sep 26, 2021"
            text="The future of AI is here, and it's in your pocket."
          />
          <Article
            imgUrl={blog03}
            date="Sep 26, 2021"
            text="Beyond Siri: One. revolutionizes how we interact with AI."
          />
          <Article
            imgUrl={blog04}
            date="Sep 26, 2021"
            text="Meet your new AI companion who always has your back."
          />
          <Article
            imgUrl={blog05}
            date="Sep 26, 2021"
            text="The AI that not only learns, but understands you."
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
