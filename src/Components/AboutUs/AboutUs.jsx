import React from 'react'
import './AboutUs.css'
import SectionHeader from '../SectionHeader/SectionHeader'
import AboutUsBox from '../AboutUsBox/AboutUsBox'

export default function AboutUs() {
  return (
    <div class="about-us">
      <div class="container">
        <SectionHeader
        title='ما چه کمکی بهتون می کنیم؟'
        desc= 'از اونجایی که آکادمی آموزشی سبزلرن یک آکادمی خصوصی هست'
        />

          <div class="container">
          <div class="row">
            
            <AboutUsBox 
            title='دوره های اختصاصی'
            desc='با پشتیبانی و کیفیت بالا'
            icon='far fa-copyright about-us__icon'
            />
            <AboutUsBox 
            title='اجازه تدریس'
            desc='به هر مدرسی رو نمیده. چون کیفیت براش مهمه !'
            icon='fas fa-leaf about-us__icon'
            />
            <AboutUsBox 
            title='دوره پولی و رایگان'
            desc='براش مهم نیست. به مدرسینش حقوق میده تا نهایت کیفیت رو در پشتیبانی و اپدیت دوره ارائه بده'
            icon='fas fa-gem about-us__icon'
            />
            <AboutUsBox 
            title='اهمیت به کاربر'
            desc='اولویت اول و آخر آکادمی آموزش برنامه نویسی سبزلرن اهمیت به کاربرها و رفع نیاز های آموزشی و رسوندن اونها به بازار کار هست'
            icon='fas fa-crown about-us__icon'
            />

          </div>
          </div>


        </div>
        </div>
  )
}
