import React from 'react'
import './LastCourses.css'
import SectionHeader from '../SectionHeader/SectionHeader'
import CourseBox from '../CourseBox/CourseBox'

export default function LastCourses() {
  return (
    <>
        <div class="courses">
          <div class="container">

        <SectionHeader
        title="جدیدترین دوره ها"
        desc='سکوی پرتاب شما به سمت موفقیت'
        btnTitle='تمامی دوره ها'
        btnHref='courses'
        />

          <div class="courses-content">
          <div class="container">
            <div class="row">

            <CourseBox />
            <CourseBox />
            <CourseBox />
            <CourseBox />
            <CourseBox />
            <CourseBox />

          </div>
          </div>
          </div>
          </div>
          </div>
    </>

  )}