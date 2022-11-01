const defineTerm = str => {
  const daysCoeff = 1 / 1000 / 3600 / 24;
  const daysFromNow = Date.now() * daysCoeff;
  const daysFromProps = new Date(str) * daysCoeff;
  const difference = Math.round(daysFromNow - daysFromProps);
  const term =
    difference < 365
      ? `${difference} days`
      : `${Math.round(difference / 365)} years`;
  return term;
};

export default defineTerm;
