const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: './database/cassandra/destinations.csv',
  header: [
    { id: 'id', title: 'id' },
    { id: 'data', title: 'data' }
  ],
  fieldDelimiter: ';'
});

const records = 10000000;
const batch = 20000;

const load = function (number, startingId) {
  let data = [];
  for (var i = 0; i < number; i++) {
    let average = faker.finance.amount(3, 5, 1);
    let location = faker.finance.amount(3, 5, 1);
    let cleanliness = faker.finance.amount(3, 5, 1);
    let service = faker.finance.amount(3, 5, 1);
    let value = faker.finance.amount(3, 5, 1);
    let certOfExcellence = faker.random.number(1);
    let greenLeaders = faker.random.number(1);
    let aboutCopy = faker.lorem.paragraphs(5, '\n');

    let folder = Math.floor(Math.random() * (99 - 1)) + 1;

    let image0 = `https://joelsdcphotos.s3.us-east-2.amazonaws.com/images/${folder}/0.jpeg`;
    let image1 = `https://joelsdcphotos.s3.us-east-2.amazonaws.com/images/${folder}/1.jpeg`;
    let image2 = `https://joelsdcphotos.s3.us-east-2.amazonaws.com/images/${folder}/2.jpeg`;
    let image3 = `https://joelsdcphotos.s3.us-east-2.amazonaws.com/images/${folder}/3.jpeg`;
    let image4 = `https://joelsdcphotos.s3.us-east-2.amazonaws.com/images/${folder}/4.jpeg`;
    let image5 = `https://joelsdcphotos.s3.us-east-2.amazonaws.com/images/${folder}/5.jpeg`;
    let image6 = `https://joelsdcphotos.s3.us-east-2.amazonaws.com/images/${folder}/6.jpeg`;

    let amenityIcon0 = faker.random.number(9);
    let amenityCopy0 = faker.lorem.sentence(2);
    let amenityIcon1 = faker.random.number(9);
    let amenityCopy1 = faker.lorem.sentence(2);
    let amenityIcon2 = faker.random.number(9);
    let amenityCopy2 = faker.lorem.sentence(2);
    let amenityIcon3 = faker.random.number(9);
    let amenityCopy3 = faker.lorem.sentence(2);
    let amenityIcon4 = faker.random.number(9);
    let amenityCopy4 = faker.lorem.sentence(2);
    let amenityIcon5 = faker.random.number(9);
    let amenityCopy5 = faker.lorem.sentence(2);
    let amenityIcon6 = faker.random.number(9);
    let amenityCopy6 = faker.lorem.sentence(2);
    let amenityIcon7 = faker.random.number(9);
    let amenityCopy7 = faker.lorem.sentence(2);

    let amenityIcon8 = faker.random.number(9);
    let amenityCopy8 = faker.lorem.sentence(2);
    let amenityIcon9 = faker.random.number(9);
    let amenityCopy9 = faker.lorem.sentence(2);
    let amenityIcon10 = faker.random.number(9);
    let amenityCopy10 = faker.lorem.sentence(2);
    let amenityIcon11 = faker.random.number(9);
    let amenityCopy11 = faker.lorem.sentence(2);
    let amenityIcon12 = faker.random.number(9);
    let amenityCopy12 = faker.lorem.sentence(2);
    let amenityIcon13 = faker.random.number(9);
    let amenityCopy13 = faker.lorem.sentence(2);
    let amenityIcon14 = faker.random.number(9);
    let amenityCopy14 = faker.lorem.sentence(2);
    let amenityIcon15 = faker.random.number(9);
    let amenityCopy15 = faker.lorem.sentence(2);

    let amenityIcon16 = faker.random.number(9);
    let amenityCopy16 = faker.lorem.sentence(2);
    let amenityIcon17 = faker.random.number(9);
    let amenityCopy17 = faker.lorem.sentence(2);
    let amenityIcon18 = faker.random.number(9);
    let amenityCopy18 = faker.lorem.sentence(2);
    let amenityIcon19 = faker.random.number(9);
    let amenityCopy19 = faker.lorem.sentence(2);
    let amenityIcon20 = faker.random.number(9);
    let amenityCopy20 = faker.lorem.sentence(2);
    let amenityIcon21 = faker.random.number(9);
    let amenityCopy21 = faker.lorem.sentence(2);
    let amenityIcon22 = faker.random.number(9);
    let amenityCopy22 = faker.lorem.sentence(2);
    let amenityIcon23 = faker.random.number(9);
    let amenityCopy23 = faker.lorem.sentence(2);

    let amenityIcon24 = faker.random.number(9);
    let amenityCopy24 = faker.lorem.sentence(2);
    let amenityIcon25 = faker.random.number(9);
    let amenityCopy25 = faker.lorem.sentence(2);
    let amenityIcon26 = faker.random.number(9);
    let amenityCopy26 = faker.lorem.sentence(2);
    let amenityIcon27 = faker.random.number(9);
    let amenityCopy27 = faker.lorem.sentence(2);
    let amenityIcon28 = faker.random.number(9);
    let amenityCopy28 = faker.lorem.sentence(2);
    let amenityIcon29 = faker.random.number(9);
    let amenityCopy29 = faker.lorem.sentence(2);
    let amenityIcon30 = faker.random.number(9);
    let amenityCopy30 = faker.lorem.sentence(2);
    let amenityIcon31 = faker.random.number(9);
    let amenityCopy31 = faker.lorem.sentence(2);

    let roomFeatureIcon0 = faker.random.number(9);
    let roomFeatureCopy0 = faker.lorem.sentence(2);
    let roomFeatureIcon1 = faker.random.number(9);
    let roomFeatureCopy1 = faker.lorem.sentence(2);
    let roomFeatureIcon2 = faker.random.number(9);
    let roomFeatureCopy2 = faker.lorem.sentence(2);
    let roomFeatureIcon3 = faker.random.number(9);
    let roomFeatureCopy3 = faker.lorem.sentence(2);
    let roomFeatureIcon4 = faker.random.number(9);
    let roomFeatureCopy4 = faker.lorem.sentence(2);
    let roomFeatureIcon5 = faker.random.number(9);
    let roomFeatureCopy5 = faker.lorem.sentence(2);
    let roomFeatureIcon6 = faker.random.number(9);
    let roomFeatureCopy6 = faker.lorem.sentence(2);
    let roomFeatureIcon7 = faker.random.number(9);
    let roomFeatureCopy7 = faker.lorem.sentence(2);

    let roomTypeIcon0 = faker.random.number(3);
    let roomTypeCopy0 = faker.lorem.sentence(2);
    let roomTypeIcon1 = faker.random.number(3);
    let roomTypeCopy1 = faker.lorem.sentence(2);
    let roomTypeIcon2 = faker.random.number(3);
    let roomTypeCopy2 = faker.lorem.sentence(2);
    let roomTypeIcon3 = faker.random.number(3);
    let roomTypeCopy3 = faker.lorem.sentence(2);

    let hotelClass = faker.finance.amount(3, 5, 1);
    let hotelStyle = faker.lorem.sentences(4, '\n');

    let isSpecialOffered = faker.random.number(1);
    let special = faker.lorem.sentence(2);

    let params = {
      average,
      location,
      cleanliness,
      service,
      value,
      certOfExcellence,
      greenLeaders,
      aboutCopy,
      image0,
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
      amenityIcon0,
      amenityCopy0,
      amenityIcon1,
      amenityCopy1,
      amenityIcon2,
      amenityCopy2,
      amenityIcon3,
      amenityCopy3,
      amenityIcon4,
      amenityCopy4,
      amenityIcon5,
      amenityCopy5,
      amenityIcon6,
      amenityCopy6,
      amenityIcon7,
      amenityCopy7,
      amenityIcon8,
      amenityCopy8,
      amenityIcon9,
      amenityCopy9,
      amenityIcon10,
      amenityCopy10,
      amenityIcon11,
      amenityCopy11,
      amenityIcon12,
      amenityCopy12,
      amenityIcon13,
      amenityCopy13,
      amenityIcon14,
      amenityCopy14,
      amenityIcon15,
      amenityCopy15,
      amenityIcon16,
      amenityCopy16,
      amenityIcon17,
      amenityCopy17,
      amenityIcon18,
      amenityCopy18,
      amenityIcon19,
      amenityCopy19,
      amenityIcon20,
      amenityCopy20,
      amenityIcon21,
      amenityCopy21,
      amenityIcon22,
      amenityCopy22,
      amenityIcon23,
      amenityCopy23,
      amenityIcon24,
      amenityCopy24,
      amenityIcon25,
      amenityCopy25,
      amenityIcon26,
      amenityCopy26,
      amenityIcon27,
      amenityCopy27,
      amenityIcon28,
      amenityCopy28,
      amenityIcon29,
      amenityCopy29,
      amenityIcon30,
      amenityCopy30,
      amenityIcon31,
      amenityCopy31,
      roomFeatureIcon0,
      roomFeatureCopy0,
      roomFeatureIcon1,
      roomFeatureCopy1,
      roomFeatureIcon2,
      roomFeatureCopy2,
      roomFeatureIcon3,
      roomFeatureCopy3,
      roomFeatureIcon4,
      roomFeatureCopy4,
      roomFeatureIcon5,
      roomFeatureCopy5,
      roomFeatureIcon6,
      roomFeatureCopy6,
      roomFeatureIcon7,
      roomFeatureCopy7,
      roomTypeIcon0,
      roomTypeCopy0,
      roomTypeIcon1,
      roomTypeCopy1,
      roomTypeIcon2,
      roomTypeCopy2,
      roomTypeIcon3,
      roomTypeCopy3,
      hotelClass,
      hotelStyle,
      isSpecialOffered,
      special
    };
    let record = { id: startingId + i, data: JSON.stringify(params) };
    data.push(record);
  }
  return data;
};

const write = function (number, loadNumber, remaining = number) {
  if (remaining <= 0) {
    console.log(`write csv file complete`);
    return;
  }
  console.log(number - remaining);
  let data = load(loadNumber, number - remaining);
  csvWriter.writeRecords(data)
    .then(() => {
      return (write(number, loadNumber, remaining - loadNumber));
    })
    .catch(err => console.log(err));
};


write(records, batch);