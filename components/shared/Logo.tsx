import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface LogoProps {
  variant?: 'dark' | 'light'
  className?: string
}

export function Logo({ variant = 'dark', className }: LogoProps) {
  return (
    <Link href="/" className={cn('flex items-center', className)}>
      <Image
        src="/lillia-logo.png"
        alt="Lillia"
        width={120}
        height={40}
        priority
        className="h-8 w-auto"
      />
    </Link>
  )
}
