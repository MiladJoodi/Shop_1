import React from 'react'

import './FooterItem.css'

export default function FooterItem({ title, children }) {
  return (
    <div className="col-4">
    <div className="footer-widgets__item">
      <span className="footer-widgets__title">
        {title}
      </span>

      {children}
    </div>
  </div>
  )
}
