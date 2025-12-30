import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'secondary-dark' | 'ghost'
  size?: 'small' | 'medium' | 'large'
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export function Button({
  variant = 'primary',
  size = 'medium',
  href,
  onClick,
  children,
  className,
  type = 'button',
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center
    font-medium rounded-lg transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
  `

  const variants = {
    primary: `
      bg-gradient-to-r from-primary-500 to-primary-400 text-white
      hover:from-primary-600 hover:to-primary-500 hover:shadow-purple hover:-translate-y-0.5
      focus:ring-primary-400 focus:ring-offset-2
      shadow-lg
    `,
    secondary: `
      bg-white text-primary-600 border-2 border-primary-300
      hover:border-primary-400 hover:bg-primary-50 hover:shadow-md hover:-translate-y-0.5
      focus:ring-primary-300
    `,
    'secondary-dark': `
      bg-transparent text-white border-2 border-primary-400
      hover:border-primary-300 hover:bg-primary-900/20
      focus:ring-primary-400
    `,
    ghost: `
      bg-transparent text-neutral-700
      hover:bg-primary-50 hover:text-primary-600
      focus:ring-primary-300
    `,
  }

  const sizes = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  }

  const classes = cn(baseStyles, variants[variant], sizes[size], className)

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
