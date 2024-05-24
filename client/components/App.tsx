import Header from './Header.tsx'

import { Outlet } from 'react-router-dom'
// import { useEffect, useState } from 'react'

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
