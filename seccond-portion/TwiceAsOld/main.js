function twiceAsOld(dadYearsOld, sonYearsOld) {
  let difference = dadYearsOld - sonYearsOld;
  return Math.abs(dadYearsOld - difference*2);
}