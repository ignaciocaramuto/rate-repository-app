
export const formatCount = (count) => {
  if (count < 1000) return `${count}`;

  const rounded = (count / 1000).toFixed(1);
  return rounded.endsWith('.0') ? `${parseInt(rounded)}k` : `${rounded}k`;
};
