function lastSurvivor(letters, coords) {
  const parts = letters.split('')
  coords.forEach((e) => {
    parts.splice(e,1)
  })
  return parts.join('')
}