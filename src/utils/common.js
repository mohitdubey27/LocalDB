const date = new Date();
export const fullDateTime = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.toLocaleString(
  'en-US',
  {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  },
)}`;
