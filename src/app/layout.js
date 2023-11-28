import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
title: 'Create Next App',
description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
return (
  <html lang="en">
    <body className={inter.className}>
    <nav className='navbar'>
    <li>
      <Link href="/home">Home</Link>
    </li>
    <li>
      <Link href="/contact">Contact</Link>
    </li>
    <li>
      <Link href="/about">About</Link>
    </li>
    <li>
      <Link href="/tribute">Tribute</Link>
    </li>
    <li>
      <Link href="/">page-3</Link>
    </li>
    <li>
      <Link href="/">page-4</Link>
    </li>
    <li>
      <Link href="/">page-5</Link>
    </li>
    <li>
      <Link href="/">page-6</Link>
    </li>
      </nav>
      
      {children}
     
</body>
</html>
)
}