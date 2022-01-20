const cannonsReady = (gunners) => {
  for (let pirates in gunners) {
    if (gunners[pirates] === 'nay') {
      return 'Shiver me timbers!';
    }
  }
  
  return 'Fire!';
}