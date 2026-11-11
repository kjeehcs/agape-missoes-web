import { cn } from '@/lib/cn'
import type { ImageAsset } from '@/types'

interface ResponsiveImageProps {
  image: ImageAsset
  className?: string
  /** Above-the-fold images load eagerly; everything else is lazy. */
  priority?: boolean
}

export function ResponsiveImage({ image, className, priority = false }: ResponsiveImageProps) {
  return (
    <img
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      className={cn('object-cover', className)}
    />
  )
}
