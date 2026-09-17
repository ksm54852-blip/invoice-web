import { getBaseUrl } from '@/lib/env'

/**
 * 견적서 고유 URL 생성
 * @param invoiceId - 견적서 ID
 * @returns 견적서 전체 URL
 */
export function generateInvoiceUrl(invoiceId: string): string {
  return `${getBaseUrl()}/invoice/${invoiceId}`
}

/**
 * 짧은 URL 표시용 (선택사항)
 * @param invoiceId - 견적서 ID
 * @returns 짧게 표시할 ID
 */
export function generateShortUrl(invoiceId: string): string {
  const shortId = invoiceId.substring(0, 8)
  return `...${shortId}`
}
