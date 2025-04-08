import React from 'react'
import Link from 'next/link'
import About from '../about/page'

export default function Header() {
  return (
    <div>
      <nav>
        <ul className='flex gap-5'>
          <li>
            <Link href={"/about"}>about</Link>
          </li>
          <li>
            <Link href={"/contact"}>about</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
