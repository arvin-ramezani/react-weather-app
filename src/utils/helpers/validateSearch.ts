export const validateSearch = (text: string | undefined): boolean => {
  if (text && text.trim() !== '') return true;

  return false;
};
