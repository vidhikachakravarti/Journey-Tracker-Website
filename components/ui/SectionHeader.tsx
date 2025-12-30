import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  tag?: string
  title?: string
  description?: string
  alignment?: 'left' | 'center'
  children?: React.ReactNode
  className?: string
}

export function SectionHeader({
  tag,
  title,
  description,
  alignment = 'center',
  children,
  className,
}: SectionHeaderProps) {
  const alignmentClass = alignment === 'center' ? 'text-center' : 'text-left'

  return (
    <div className={cn('mb-12', alignmentClass, className)}>
      {tag && (
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-200/50 text-primary-600 text-sm font-medium mb-4 border border-primary-300">
          {tag}
        </div>
      )}

      {title && (
        <h2 className="text-4xl font-semibold tracking-tight text-neutral-900 mb-4">
          {title}
        </h2>
      )}

      {description && (
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          {description}
        </p>
      )}

      {children}
    </div>
  )
}
