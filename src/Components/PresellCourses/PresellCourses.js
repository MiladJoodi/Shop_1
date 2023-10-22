import React from "react";
import SectionHeader from "./../SectionHeader/SectionHeader";

import "./PresellCourses.css";

export default function PresellCourses() {
  return (
    <div className="popular">
      <div className="container">
        <SectionHeader
          title='دوره های در حال پیش فروش'
          desc='متن تستی برای توضیحات دوره های پیش فروش'
        />
      </div>
    </div>
  );
}
