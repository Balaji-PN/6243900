import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-4xl font-bold'>CTS DN4.0 React Excercise</h1>
        <div className='flex gap-4'>
        <Link to="/task1" className='bg-blue-500 text-white p-2 rounded-md'>Task1</Link>
        <Link to="/task2" className='bg-blue-500 text-white p-2 rounded-md'>Task2</Link>
        <Link to="/task3" className='bg-blue-500 text-white p-2 rounded-md'>Task3</Link>
        <Link to="/task4" className='bg-blue-500 text-white p-2 rounded-md'>Task4</Link>
        <Link to="/task5" className='bg-blue-500 text-white p-2 rounded-md'>Task5</Link>
        <Link to="/task6" className='bg-blue-500 text-white p-2 rounded-md'>Task6</Link>
        <Link to="/task7" className='bg-blue-500 text-white p-2 rounded-md'>Task7</Link>
        </div>
    </div>
  )
}

export default Home