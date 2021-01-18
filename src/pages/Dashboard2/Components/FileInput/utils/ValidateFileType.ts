export const validateFileType = (file: File, validTypes: string[]): boolean => {
  return validTypes.indexOf(file.type) !== -1;
};
