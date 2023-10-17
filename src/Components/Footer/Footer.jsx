import React from "react";
import "./Footer.css";
import FooterItem from "../FooterItem/FooterItem";

export default function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <div class="footer-widgets">
          <div class="row">
                <FooterItem
                title='درباره ما'
                >
                <p class="footer-widgets__text">
                  وقتی تازه شروع به یادگیری برنامه نویسی کردم. یکی از مشکلاتی که در فرآیند یادگیری داشتم، کمبود آموزش های خوب با پشتیبانی قابل قبول بود که باعث شد اون موقع تصمیم بگیرم اگر روزی توانایی مالی و فنی قابل قبولی داشتم یک وب سایت برای حل این مشکل راه اندازی کنم! و خب امروز آکادمی آموزش برنامه نویسی سبزلرن به عنوان یک آکادمی خصوصی فعالیت میکنه و این به این معنی هست که هر مدرسی اجازه تدریس در اون رو نداره و باید از فیلترینگ های خاص آکادمی سبزلرن رد شه! این به این معنی هست که ما برامون فن بیان و نحوه تعامل مدرس با دانشجو بسیار مهمه! ما در آکادمی سبزلرن تضمین پشتیبانی خوب و با کیفیت رو به شما میدیم . چرا که مدرسین وب سایت سبزلرن حتی برای پشتیبانی دوره های رایگان شون هم هزینه دریافت میکنند و متعهد هستند که هوای کاربر های عزیز رو داشته باشند !
                </p>
                </FooterItem>

                <FooterItem
                title='آخرین مطالب'
                >
                    <div class="footer-widgets__links">
                  <a href="#" class="footer-widgets__link">
                    نحوه نصب کتابخانه در پایتون | آموزش نصب کتابخانه پایتون
                  </a>
                  <a href="#" class="footer-widgets__link">
                    چگونه پایتون را آپدیت کنیم؟ | آموزش صفر تا صد آپدیت کردن پایتون      
                  </a>
                  <a href="#" class="footer-widgets__link">
                    آموزش نصب پایتون ( Python ) در در مک، ویندوز و لینوکس | گام به گام و تصویری
                  </a>
                  <a href="#" class="footer-widgets__link">
                    بهترین فریم ورک های فرانت اند | 16 فریم ورک Front end بررسی معایب و مزایا
                  </a>
                  <a href="#" class="footer-widgets__link">
                    معرفی بهترین سایت آموزش جاوا اسکریپت [ تجربه محور ] + آموزش رایگان
                  </a>
                </div>
                </FooterItem>

                <FooterItem
                title='دسترسی سریع'
                >
                    <div class="row">
                  <div class="col-6">
                    <a href="#" class="footer-widgets__link">
                      آموزش HTML
                    </a>
                    </div>

                  <div class="col-6">
                    <a href="#" class="footer-widgets__link">
                      آموزش CSS
                    </a>
                  </div>
                    
                  <div class="col-6">

                    <a href="#" class="footer-widgets__link">
                      آموزش جاوا اسکریپت
                    </a>
                  </div>
                  <div class="col-6">

                    <a href="#" class="footer-widgets__link">
                      آموزش بوت استرپ
                    </a>
                  </div>
                  <div class="col-6">

                    <a href="#" class="footer-widgets__link">
                      آموزش ریکت
                    </a>
                  </div>

                  <div class="col-6">

                    <a href="#" class="footer-widgets__link">
                      آموزش پایتون
                    </a>
                  </div>

                  </div>
                </FooterItem>
          </div>
        </div>
      </div>

      <div class="footer__copyright">
        <span class="footer__copyright-text">
          کلیه حقوق برای آکادمی آموزش <a href="#">برنامه نویسی سبز لرن</a> محفوظ است.
        </span>
      </div>
      
    </footer>
  );
}
