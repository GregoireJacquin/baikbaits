'use client'

import { usePathname } from 'next/navigation'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Icons } from './Icons'
import Link from 'next/link'

const Footer = () => {
  const pathname = usePathname()
  const pathsToMinimize = [
    '/verify-email',
    '/sign-up',
    '/sign-in',
  ]

  return (
    <footer className='bg-neutral-800 flex-grow-0'>
      <MaxWidthWrapper>
        <div className='py-10 md:flex md:items-center md:justify-between'>
          <div className='text-center md:text-left'>
            <p className='text-sm text-muted-foreground text-white'>
              Copyright &copy; {new Date().getFullYear()}
            </p>
          </div>

          <div className='mt-4 flex items-center justify-center md:mt-0'>
            <div className='flex space-x-8'>
              <Link
                href='#'
                className='text-sm text-muted-foreground hover:text-gray-600 text-white'>
                Mentions légales
              </Link>
              <Link
                href='#'
                className='text-sm text-muted-foreground hover:text-gray-600 text-white'>
                Politique de confidentialité
              </Link>
              <Link
                href='#'
                className='text-sm text-muted-foreground hover:text-gray-600 text-white'>
                Politique cookie
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer
