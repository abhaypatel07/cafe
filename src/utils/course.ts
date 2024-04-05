export const checkIfCourseIsPast = (endDate?: string): boolean => {
  return !!endDate && parseInt(endDate) * 1000 < Date.now();
}