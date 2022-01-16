import { formatDate } from './index';

test('change date format', () => {
  const date = new Date('12 Apr 2013').toISOString();
  const format = 'DD MMM YYYY';
  const formattedDate = formatDate(date, format);
  expect(formattedDate).toEqual('12 Apr 2013');
});

test('throw error for invalid date', () => {
  const date = '12 2013 LO';
  const format = 'DD MMM YYYY';
  const formatter = () => formatDate(date, format);
  expect(formatter).toThrowError();
});
