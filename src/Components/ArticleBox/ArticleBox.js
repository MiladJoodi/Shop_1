import React from "react";

import "./ArticleBox.css";

export default function ArticleBox({ title, desc, cover }) {
  return (
    <div className="col-4">
      <div className="article-card">
        <div className="article-card__header">
          <a href="#" className="article-card__link-img">
            <img
              src={cover}
              className="article-card__img"
              alt="Article Cover"
            />
          </a>
        </div>
        <div className="article-card__content">
          <a href="#" className="article-card__link">
            {title}
          </a>
          <p className="article-card__text">
            {desc}  
          </p>
          <a href="#" className="article-card__btn">
            بیشتر بخوانید
          </a>
        </div>
      </div>
    </div>
  );
}
