import React from 'react'
import './ArticleBox.css'

export default function ArticleBox({title, desc, cover}) {
  return (
    <div class="col-4">
              <div class="article-card">
                <div class="article-card__header">
                  <a href="#" class="article-card__link-img">
                    <img src={cover} class="article-card__img" alt="Article Cover" />
                  </a>
                </div>
                <div class="article-card__content">
                  <a href="#" class="article-card__link">
                    {title}
                  </a>
                  <p class="article-card__text">
                    {desc}
                  </p>
                  <a href="#" class="article-card__btn">بیشتر بخوانید</a>
                </div>
              </div>
    </div>
  )
}
