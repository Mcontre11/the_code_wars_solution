function expressionMatter(a, b, c) {
  var values = [(a*(b+c)), (a*b*c), (a+b*c), ((a+b)*c), (a+b+c)];
  return Math.max(...values);
}