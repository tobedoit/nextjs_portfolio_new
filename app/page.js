// // https://www.youtube.com/watch?v=KvoFvmu5eRo
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <Hero />
      </div>
    </section>
  )
}
