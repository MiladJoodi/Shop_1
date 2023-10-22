import React from "react";

import "./CourseDetailBox.css";

export default function CourseDetailBox({ title, text, icon }) {
  return (
    <div className="col-4">
      <div className="course-boxes__box">
        <div className="course-boxes__box-right">
          <i class={`course-boxes__box-right-icon fas fa-${icon}`}></i>
        </div>
        <div className="course-boxes__box-left">
          <span className="course-boxes__box-left-title">{title}</span>
          <span className="course-boxes__box-left--subtitle">{text}</span>
        </div>
      </div>
    </div>
  );
}
