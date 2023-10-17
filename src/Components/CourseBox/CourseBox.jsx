import React from 'react'
import './CourseBox.css'

export default function CourseBox() {
  return (
    <div class="col-4">
    <div class="course-box">
      <a href="#">
        <img src="/images/courses/fareelancer.png" alt="Course img" class="course-box__img" />
      </a>
      <div class="course-box__main">
        <a href="#" class="course-box__title">دوره پروژه محور متخصص جنگو</a>

        <div class="course-box__rating-teacher">
          <div class="course-box__teacher">
            <i class="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
            <a href="#" class="course-box__teacher-link">رضا دولتی</a>
          </div>
          <div class="course-box__rating">
            <img src="/images/svgs/star.svg" alt="rating" class="course-box__star" />
            <img src="/images/svgs/star_fill.svg" alt="rating" class="course-box__star" />
            <img src="/images/svgs/star_fill.svg" alt="rating" class="course-box__star" />
            <img src="/images/svgs/star_fill.svg" alt="rating" class="course-box__star" />
            <img src="/images/svgs/star_fill.svg" alt="rating" class="course-box__star" />
          </div>
        </div>

        <div class="course-box__status">
          <div class="course-box__users">
            <i class="fas fa-users course-box__users-icon"></i>
            <span class="course-box__users-text">500</span>
          </div>
          <span class="course-box__price">1,000,000</span>
        </div>
      </div>

      <div class="course-box__footer">
        <a href="#" class="course-box__footer-link">
          مشاهده اطلاعات
          <i class="fas fa-arrow-left course-box__footer-icon"></i>
        </a>
      </div>

    </div>
  </div>
  )
}
