import React from 'react'
import MainLayout from '../layouts/Mainlayout'
import CourseGrid from '../components/CourseGrid'
// import coursesData from '../data/courses.json'

const Courses = () => {
  return (
    <MainLayout>
        {/* <h1 className='text-center text-2xl font-bold mt-10'>All Courses</h1> */}
        <CourseGrid isHome={false} />
    </MainLayout>
  )
}

export default Courses