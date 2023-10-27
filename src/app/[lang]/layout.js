import './globals.css'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import Popup from '../../../components/common/Popup'

const inter = Inter({ subsets: ['latin'] })

export const Knockout34 = localFont({
  src: [
    {
      path: '../../fonts/Knockout-HTF34-JuniorSumo.woff2',
      weight: '400',
      style: 'normal',
      variable: '--font-knockoutjunior'
    },
  ],
})

export const Knockout54 = localFont({
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

export const GothamBook = localFont({
  src: [
    {
      path: '../../fonts/Gotham-Book.woff',
      weight: '400',
      style: 'normal',
      variable: '--font-gothambook'
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
        <Popup />
        
        {children}
      </body>
    </html>
  )
}
