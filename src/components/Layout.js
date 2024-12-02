import React from 'react'
import { Outlet } from 'react-router-dom' // An oulet should be used in Parent route top render the child routes
import Footer from './Footer'
import Header from './Header'
// The Outlet component is a placeholder that gets filled in with the child route's content when the URL matches the parent route.

const Layout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout
