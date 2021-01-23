const YEARS = Array.from(
  new Array(20),
  (val, index) => new Date().getFullYear() - index,
);

export default YEARS;
