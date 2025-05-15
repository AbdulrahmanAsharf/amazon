import { ShoppingCartIcon, UserIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function menu() {
  return (
    <div className='flex justify-end'>
        <nav className='flex gap-3 w-full'>
            <Link href={'/Cart'} className='header-button'>
                <UserIcon className='w-8 h-8' />
                <span className='font-bold'>Sign in</span>
            </Link>
            <Link href={'/Cart'} className='header-button'>
                <ShoppingCartIcon className='w-8 h-8' />
                <span className='font-bold'>Cart</span>
            </Link>
        </nav>
      
    </div>
  )
}

export default menu
