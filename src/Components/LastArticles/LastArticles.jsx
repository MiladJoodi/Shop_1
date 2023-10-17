import React from 'react'
import './LastArticles.css'
import SectionHeader from '../SectionHeader/SectionHeader'
import ArticleBox from '../ArticleBox/ArticleBox'

export default function LastArticles() {
  return (
    <section class="articles">
      <div class="container">

        <SectionHeader
        title='جدیدترین مقاله ها'
        desc='پیش به سوی ارتقای دانش'
        btnTitle="تمامی مقاله ها"
        />

          <div class="articles__content">
            <div class="row">
              <ArticleBox
                  title='نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون'
                  cover='images/blog/3.jpg'
                  desc='زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه های مختلفی برای تسریع...'
              />
              <ArticleBox
                  title='نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون'
                  cover='images/blog/3.jpg'
                  desc='زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه های مختلفی برای تسریع...'
              />
              <ArticleBox
                  title='نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون'
                  cover='images/blog/3.jpg'
                  desc='زبان پایتون هم مانند دیگر زبان­های برنامه نویسی رایج، دارای کتابخانه های مختلفی برای تسریع...'
              />
              
            </div>
          </div>

      </div>
    </section>
  )
}
