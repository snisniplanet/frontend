export function error(err) {
  console.error('[ERROR]', err.response.status, err.response.data)
}
