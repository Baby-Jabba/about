const mysql = require('mysql');
const load = require('./load.js');
const connection = mysql.createConnection({
  host: process.env.RDS_HOST || 'localhost',
  user: process.env.RDS_USERNAME || 'student',
  password: process.env.RDS_PASSWORD || 'student',
  database: 'HRR43_FEC'
});

var sql = 'INSERT INTO about (average, location, cleanliness, service, value, certOfExcellence, greenLeaders, aboutCopy, image0, image1, image2, image3, image4, image5, image6, amenityIcon0, amenityCopy0, amenityIcon1, amenityCopy1, amenityIcon2, amenityCopy2, amenityIcon3, amenityCopy3, amenityIcon4, amenityCopy4, amenityIcon5, amenityCopy5, amenityIcon6, amenityCopy6, amenityIcon7, amenityCopy7, amenityIcon8, amenityCopy8, amenityIcon9, amenityCopy9, amenityIcon10, amenityCopy10, amenityIcon11, amenityCopy11, amenityIcon12, amenityCopy12, amenityIcon13, amenityCopy13, amenityIcon14, amenityCopy14, amenityIcon15, amenityCopy15, amenityIcon16, amenityCopy16, amenityIcon17, amenityCopy17, amenityIcon18, amenityCopy18, amenityIcon19, amenityCopy19, amenityIcon20, amenityCopy20, amenityIcon21, amenityCopy21, amenityIcon22, amenityCopy22, amenityIcon23, amenityCopy23, amenityIcon24, amenityCopy24, amenityIcon25, amenityCopy25, amenityIcon26, amenityCopy26, amenityIcon27, amenityCopy27, amenityIcon28, amenityCopy28, amenityIcon29, amenityCopy29, amenityIcon30, amenityCopy30, amenityIcon31, amenityCopy31, roomFeatureIcon0, roomFeatureCopy0, roomFeatureIcon1, roomFeatureCopy1, roomFeatureIcon2, roomFeatureCopy2, roomFeatureIcon3, roomFeatureCopy3, roomFeatureIcon4, roomFeatureCopy4, roomFeatureIcon5, roomFeatureCopy5, roomFeatureIcon6, roomFeatureCopy6, roomFeatureIcon7, roomFeatureCopy7, roomTypeIcon0, roomTypeCopy0, roomTypeIcon1, roomTypeCopy1, roomTypeIcon2, roomTypeCopy2, roomTypeIcon3, roomTypeCopy3, hotelClass, hotelStyle, isSpecialOffered, special) VALUES ?';


var seed = function (number, loadNumber = 1, remaining = number) {
  if (remaining <= 0) {
    console.log(`${number} items inserted`);
    connection.end();
    return;
  }
  let values = load(loadNumber);
  connection.query(sql, [values], (err) => {
    if (err) { console.log(err); }
    return (seed(number, loadNumber, remaining - loadNumber));
  });
};

seed(10000000, 5000);

module.exports = sql;
