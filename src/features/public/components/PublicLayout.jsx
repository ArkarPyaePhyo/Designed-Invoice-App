import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import PageLoading from '../../../components/PageLoading'

const PublicLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <Header/>
        <Suspense fallback={<PageLoading/>}>
            <Outlet/>
        </Suspense>
        <Footer />
    </div>
  )
}

export default PublicLayout