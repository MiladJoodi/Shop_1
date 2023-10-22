import React from "react";

import "./Pagination.css";

export default function Pagination() {
  return (
    <div className="courses-pagination">
      <ul className="courses__pagination-list">
        <li className="courses__pagination-item">
          <a href="#" className="courses__pagination-link">
            <i className="fas fa-long-arrow-alt-right courses__pagination-icon"></i>
          </a>
        </li>
        <li className="courses__pagination-item">
          <a href="#" className="courses__pagination-link">
            1
          </a>
        </li>
        <li className="courses__pagination-item">
          <a href="#" className="courses__pagination-link">
            2
          </a>
        </li>
        <li className="courses__pagination-item">
          <a
            href="#"
            className="courses__pagination-link courses__pagination-link--active"
          >
            3
          </a>
        </li>
        <li className="courses__pagination-item">
          <a href="#" className="courses__pagination-link">
            <i className="fas fa-long-arrow-alt-left courses__pagination-icon"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
