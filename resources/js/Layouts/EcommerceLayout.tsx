import NavBar from '@/Components/NavBar'
import React from 'react'

interface EcomerceLayoutProps {
  children: React.ReactNode;
}


export default function EcommerceLayout( {children}:EcomerceLayoutProps ) {
  return (
    <>
       <NavBar />  
       {children}
    </>
    
  )
}
