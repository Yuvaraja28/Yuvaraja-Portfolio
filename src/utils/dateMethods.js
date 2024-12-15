export function relativeDate(date) {
  const options = { year: 'numeric', month: 'short' };
  return date.toLocaleDateString('en-US', options);
}

/**
 * Calculates the difference between two dates in years and months.
 * @param {Date} startDate - The start date.
 * @param {Date} endDate - The end date.
 * @return {string} - The formatted difference in years and months.
 */
export function getDateDifference(startDate, endDate) {
  // Ensure startDate is before endDate
  if (startDate > endDate) {
    [startDate, endDate] = [endDate, startDate];
  }

  const startYear = startDate.getFullYear();
  const startMonth = startDate.getMonth();
  const endYear = endDate.getFullYear();
  const endMonth = endDate.getMonth();

  // Calculate the total difference in months
  const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth);

  // Convert total months to years and remaining months
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  // Format the result
  const yearsStr = years > 0 ? `${years} yr${years > 1 ? 's' : ''}` : '';
  const monthsStr = months > 0 ? `${months} mo${months > 1 ? 's' : ''}` : '';

  // Combine the result with a separator
  return [yearsStr, monthsStr].filter(Boolean).join(' · ');
}