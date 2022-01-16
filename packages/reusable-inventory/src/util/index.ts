import moment from 'moment';

export const formatDate = (date: string | Date, format: string): string => {
  const dateWrapper = typeof date === 'string' ? new Date(date) : date;
  const formattedDate = moment(dateWrapper).format(format);
  if (formattedDate.toLowerCase() === 'invalid date') {
    throw new Error(`"${date}" is an invalid date`);
  } else {
    return formattedDate;
  }
};
