import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import Loader from '../components/Loader'
import toast from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <button onClick={() => {toast.success('Hello Toast!')}}>Toast Me</button>
    </>
  )
}
