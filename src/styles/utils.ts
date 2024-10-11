export function doNotForwardTheseProps(...args: string[]) {
  return (prop: string) => !args.includes(prop);
}
