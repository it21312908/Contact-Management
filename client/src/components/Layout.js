import React from 'react'
import Navbar from './Navbar'

export default function Layout({children}) {
  return (
    <>
    <Navbar></Navbar>
    <div className="container mt-3">
      {children}
    </div>
    </>
  )
}
