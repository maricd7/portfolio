import { Inter } from 'next/font/google'
import './globals.css'
import { Nav } from './components/Nav/Nav'
import { ThemeProvider } from './components/theme-provider'




const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dejan Maric',
  description: 'Dejan Maric portfolio.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
         attribute="class"
         defaultTheme="system"
         enableSystem
         disableTransitionOnChange
         >
          <Nav />
          {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
