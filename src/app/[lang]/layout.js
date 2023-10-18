import './globals.css'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import Header from '../../../components/common/header'

const inter = Inter({ subsets: ['latin'] })

const Knockout54 = localFont({
  src: [
    {
      path: '../../fonts/Knockout-HTF54-Sumo.woff2',
      weight: '400',
      style: 'normal',
      variable: '--font-knockout'
    },
  ],
})

export const Knockout54UltraBold = localFont({
  src: [
    {
      path: '../../fonts/Knockout-HTF94-UltmtSumo.woff2',
      weight: '400',
      style: 'normal',
      variable: '--font-knockout'
    },
  ],
})

export const metadata = {
  title: 'Temple Beer',
  description: 'Temple Beer - Encuentro, Birra y Música',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      
      <body className={Knockout54.className}>
        <Header  />
        {children}
      </body>
    </html>
  )
}
