import React from 'react'
import './Courses.css'
import Topbar from '../../Components/Topbar/Topbar'
import Navbar from '../../Components/Navbar/Navbar'
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb'
import Footer from '../../Components/Footer/Footer'


export default function Courses() {
  return (
    <>
    <Topbar />
    <Navbar />
    
    <Breadcrumb
        links={[
          { id: 1, title: "خانه", to: "/" },
          {
            id: 2,
            title: "تمامی دوره ها",
            to: "category-info/fontend",
          }
        ]}
      />

      <Footer />

    </>
  )
}
