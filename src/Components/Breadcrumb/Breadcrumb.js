import React from "react";
import "./Breadcrumb.css";
import { Link } from "react-router-dom";

export default function Breadcrumb({ links }) {
  return (
    <section class="breadcrumb">
      <div class="container">
        <div class="breadcrumb__content">
          <div class="breadcrumb__home-content-icon">
            <i class="fas fa-home breadcrumb__home-icon"></i>
          </div>
          <ul class="breadcrumb__list">
            {links.map((link) => (
              <li class="breadcrumb__item">
                <Link to={`/${link.to}`} class="breadcrumb__link">
                  {link.title}
                  {link.id != links.length ? (
                    <i class="fas fa-angle-left breadcrumb__icon"></i>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
