import React from "react";
import AboutUsBox from "../AboutUsBox/AboutUsBox";
import SectionHeader from "./../SectionHeader/SectionHeader";

import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-us">
      <div className="container">
        <SectionHeader
          title="ما چه کمکی بهتون میکنیم؟"
          desc="از اونجایی که آکادمی آموزشی سبزلرن یک آکادمی خصوصی هست"
        />

        <div className="container">
          <div className="row">
              <AboutUsBox title="دوره های اختصاصی" desc="با پشتیبانی و کیفیت بالا ارائه میده !" />
              <AboutUsBox title="دوره های اختصاصی" desc="با پشتیبانی و کیفیت بالا ارائه میده !" />
              <AboutUsBox title="دوره های اختصاصی" desc="با پشتیبانی و کیفیت بالا ارائه میده !" />
              <AboutUsBox title="دوره های اختصاصی" desc="با پشتیبانی و کیفیت بالا ارائه میده !" />
          </div>
        </div>
      </div>
    </div>
  );
}
