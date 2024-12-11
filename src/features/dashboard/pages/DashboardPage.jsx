import React from 'react'
import {HiCircleStack, HiComputerDesktop, HiDocumentDuplicate, HiUser } from 'react-icons/hi2'
import Container from '../../../components/Container.jsx'
import ModuleButton from '../components/ModuleButton.jsx'
import Logout from '../../../components/Logout.jsx'

const DashboardPage = () => {

  return (
    <div>
        <Container>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="col-span-1 ">
                <ModuleButton icon={<HiCircleStack className='w-10 h-10'/>} name={"PRODUCT"} url={"/dashboard/product"}/>
                </div>
                <div className="col-span-1 ">
                <ModuleButton icon={<HiComputerDesktop className='w-10 h-10'/>} name={"SALE"} url={"/dashboard/sale"}/>
                </div>
                <div className="col-span-1 ">
                <ModuleButton icon={<HiDocumentDuplicate className='w-10 h-10'/>} name={"VOUCHER"} url={"/dashboard/voucher"}/>
                </div>
                <div className="col-span-1 ">
                <ModuleButton icon={<HiUser className='w-10 h-10'/>} name={"USER PROFILE"} url={"/dashboard/user-profile"}/>
                </div>
            </div>
            <div>
              <Logout/>
            </div>
        </Container>
    </div>
  )
}

export default DashboardPage