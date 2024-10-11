import { format } from 'date-fns';

export function getAvatarLetters(name: string) {
  if (!name || name.length === 1) return name;

  const words = name.split(' ').filter(i => !!i);

  if (words.length === 1) {
    return `${name[0]}${name[1]}`;
  }

  return `${words[0][0]}${words[1][0]}`;
}

export function formatDate(timestamp: Date | string | number, template: string) {
  if (!timestamp) return '';

  const original = timestamp instanceof Date ? timestamp : new Date(timestamp);
  const isoDate = new Date(original.valueOf() + original.getTimezoneOffset() * 60 * 1000);

  try {
    return format(isoDate, template);
  } catch {
    return '';
  }
}
