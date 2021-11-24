import addDays from 'date-fns/addDays';
import format from 'date-fns/format';

export const getAddDayString = (createAt, distance) => {
  return format(addDays(new Date(createAt), distance), 'yyyy/MM/dd hh:mm');
};
