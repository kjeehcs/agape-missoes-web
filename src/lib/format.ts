import type { PostalAddress } from '@/types'

export function formatAddressLines(address: PostalAddress): string[] {
  const cityLine = `${address.city} - ${address.state}${address.postalCode ? `, ${address.postalCode}` : ''}`
  return [address.street, address.district, cityLine]
}
