export const formatName = (name: string): string => {
  if (!name.trim()) return '';

  const parts = name.trim().split(/\s+/);
  const lastName = parts[0];
  const firstNameInitial = parts[1]?.[0] || '';

  if (firstNameInitial) {
    return `${lastName} ${firstNameInitial}.`;
  } else {
    return `${lastName}`;
  }
};
