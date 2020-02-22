const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: 'randomCurve.csv',
  header: [
    { id: 'value', 'title': 9251568 }
  ]
});

const number = 1000000;
const min = 9000000;
const max = 9999999;
const range = max - min;
const output = [];

var createRandomArray = () => {
  var output = [];
  for (var i = 0; i < range; i++) {
    output.push(Math.floor(Math.random() * (range)) + 1);
  }
  return output;
};

var weightedRandom = () => {
  var random = (Math.random() * (range)) + 1;
  var weighted = Math.round(Math.pow((range / random), 3));
  if (weighted > range) { weighted = range - random; }
  return (Math.round(weighted - 1));
};

var randArray = createRandomArray();
for (var i = 0; i < number; i++) {
  var weighted = weightedRandom();
  output.push({ value: randArray[weighted] + min });
}

// console.log(output);

csvWriter.writeRecords(output)
  .then(() => { console.log('done'); })
  .catch(err => { console.log(err); });