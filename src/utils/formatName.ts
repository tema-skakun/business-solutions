export const formatName = (name: string): string => {
  const parts = name.split(' ');
  const lastName = parts[0];
  const firstNameInitial = parts[1]?.[0] || '';

  if (firstNameInitial) {
    return `${lastName} ${firstNameInitial}.`;
  } else {
    return `${lastName}`;
  }
};
