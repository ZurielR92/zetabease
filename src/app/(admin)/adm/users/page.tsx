import React from 'react'
import { UsersTable } from './components/UsersTable'
import { PaginationZ } from '@/core/components/PaginationZ'

const AdmUsersPage = () => {
  return (
    <div className='flex flex-col gap-6 p-6 max-w-[1440px] m-auto'>

      <UsersTable/>
      <PaginationZ/>
    </div>
  )
}

export default AdmUsersPage