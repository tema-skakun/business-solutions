// src/utils/formatName.ts
export const formatName = (name: string): string => {
  const parts = name.split(' ');
  const lastName = parts[0];
  const firstNameInitial = parts[1]?.[0] || ''; // Первая буква первого имени, если она есть

  // Формируем строку с фамилией и, если есть, первой буквой имени
  if (firstNameInitial) {
    return `${lastName} ${firstNameInitial}.`;
  } else {
    return `${lastName}`;
  }
};
