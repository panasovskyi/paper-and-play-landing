import type { ComponentPropsWithoutRef } from 'react'

type LinkProps = ComponentPropsWithoutRef<'a'> & { href: string }

const isExternal = (href: string) => /^https?:\/\//i.test(href)

export function Link({ href, ...rest }: LinkProps) {
  const external = isExternal(href)

  return (
    <a
      href={href}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      {...rest}
    />
  )
}
