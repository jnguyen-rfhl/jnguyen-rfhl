export function saveLocal(key: string, value: unknown) {
  localStorage.setItem(key, JSON.stringify(value));
}
export function readLocal(key: string) {
  const raw = localStorage.getItem(key);
  return raw ? JSON.parse(raw) : undefined;
}
export function removeLocal(key: string) {
  localStorage.removeItem(key);
}
