import React, { useEffect, useState } from 'react';
import CourseCard from './CourseCard';

const CourseGrid = ({isHome}) =>{
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  const courseList = isHome ? courses.slice(0,3) : courses;

  useEffect(()=>{
    const fetchCourses = async () =>{
      try{
        const res = await fetch('http://localhost:5000/courses');
        const data = await res.json();
        setCourses(data)
      } catch(error){
      console.log("Error fetching courses:",error);
      
      } finally{
        setLoading(false)
      }
    } 
    fetchCourses();
  },[]);

  if(loading){
    return <h1 className='text-center mt-10'>Loading...</h1>
  }

  return (
    <>
    <h1 className='flex flex-col items-center font-bold text-2xl md:text-4xl text-puple-800 pt-10'> {isHome ? 'TopCourses' : 'All Courses'}</h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 my-10'>
        {courseList.map((course)=>(
            <CourseCard key={course.courseId} course={course} />
        ))}
    </div>

    </>
  );

};

export default CourseGrid;