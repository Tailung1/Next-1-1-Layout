import React from "react";
import Link from "next/link";
import About from "../about/page";

export default function Header() {
  return (
    <div>
      <nav>
        <ul className='flex gap-5'>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
