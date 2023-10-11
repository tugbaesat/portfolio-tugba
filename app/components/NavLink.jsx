import React from 'react'
import Link from 'next/link'

const NavLink = ({href, title, onClick}) => {
  return (
    <Link href={href} onClick={onClick} className='block py-2 pl-3 pr-4 text-blue-700 rounded sm-text-xl md:p-0 hover:text-slate-400 '>{title}</Link>
  )
}

export default NavLink