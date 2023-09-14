export const formatLastUpdateDate = (lastUpdate: string): string => {
  if (lastUpdate === '') return '';

  const dateParts = lastUpdate.split(' ')[0].split('-');
  const timeParts = lastUpdate.split(' ')[1].split(':');
  const date = new Date(
    +dateParts[0],
    +dateParts[1] - 1,
    +dateParts[2],
    +timeParts[0],
    +timeParts[1]
  );

  const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' });
  const dayOfMonth = date.getDate();
  const month = date.toLocaleDateString('en-US', { month: 'short' });

  const formattedDateAndTime =
    dayOfWeek +
    ', ' +
    dayOfMonth +
    ' ' +
    month +
    ' ' +
    timeParts[0] +
    ':' +
    timeParts[1];

  return formattedDateAndTime;
};
