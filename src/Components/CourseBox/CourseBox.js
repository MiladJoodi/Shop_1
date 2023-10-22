import React, { useState } from "react";
import CircleSpinner from "../CircleSpinner/CircleSpinner";

import "./CourseBox.css";

export default function CourseBox() {

  const [isImgShow, setIsImgShow] = useState(false)

  const onImageLoaded = () => setIsImgShow(true)

  const onImageError = () => {
    // Codes
  }

  return (
    <div className="col-4">
      <div className="course-box">
        <a href="#">
          <img
            src="/images/courses/fareelancer.png"
            // src="https://placeimg.com/295/295/any/tech?t=190129384"
            alt="Course img"
            className="course-box__img"
            onLoad={onImageLoaded}
            onError={onImageError}
          />
          {
            !isImgShow && (
              <CircleSpinner />
            )
          }
        </a>
        <div className="course-box__main">
          <a href="#" className="course-box__title">
            دوره پروژه محور متخصص جنگو
          </a>

          <div className="course-box__rating-teacher">
            <div className="course-box__teacher">
              <i className="fas fa-chalkboard-teacher course-box__teacher-icon"></i>
              <a href="#" className="course-box__teacher-link">
                رضا دولتی
              </a>
            </div>
            <div className="course-box__rating">
              <img
                src="/images/svgs/star.svg"
                alt="rating"
                className="course-box__star"
              />
              <img
                src="/images/svgs/star_fill.svg"
                alt="rating"
                className="course-box__star"
              />
              <img
                src="/images/svgs/star_fill.svg"
                alt="rating"
                className="course-box__star"
              />
              <img
                src="/images/svgs/star_fill.svg"
                alt="rating"
                className="course-box__star"
              />
              <img
                src="/images/svgs/star_fill.svg"
                alt="rating"
                className="course-box__star"
              />
            </div>
          </div>

          <div className="course-box__status">
            <div className="course-box__users">
              <i className="fas fa-users course-box__users-icon"></i>
              <span className="course-box__users-text">500</span>
            </div>
            <span className="course-box__price">1,000,000</span>
          </div>
        </div>

        <div className="course-box__footer">
          <a href="#" className="course-box__footer-link">
            مشاهده اطلاعات
            <i className="fas fa-arrow-left course-box__footer-icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
