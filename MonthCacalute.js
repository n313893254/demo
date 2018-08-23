function MonthCacalute(firstYear, secondYear) {
  const beginYear = firstYear.split('-')[0]
  const beginMonth = firstYear.split('-')[1]
  const endYear = secondYear.split('-')[0]
  const endMonth = secondYear.split('-')[1]
  return (endYear - beginYear - 1) * 12 + parseInt(12 - beginMonth) + parseInt(endMonth) + 1
}
