/**
 * API client placeholder — wire to backend when ready.
 */
const BASE_URL = import.meta.env.VITE_API_URL ?? ''

export async function apiFetch(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  })
  if (!res.ok) throw new Error(`API ${res.status}`)
  return res.json()
}
