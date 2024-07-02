'use client'
import { AppLayout } from '@/core/components/AppLayout'
import React, { FC, ReactNode } from 'react'
import { HeaderAdmin } from './adm/core/components/HeaderAdmin'
import UIProvider from '@/core/context/ui/UIProvider'
import { NextUIProvider } from '@nextui-org/react'
import { SidebarAdmin } from './adm/core/components/SidebarAdmin'

interface AdminLayoutProps {
    children: ReactNode
}

const AdminLayout:FC<AdminLayoutProps> = ({children}) => {
  return (
    <UIProvider>
      <NextUIProvider>
          <AppLayout header={<HeaderAdmin/>} sidebar={<SidebarAdmin/>}>
              {children}
          </AppLayout>
      </NextUIProvider>
    </UIProvider>
  )
}

export default AdminLayout