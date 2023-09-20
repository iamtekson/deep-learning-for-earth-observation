var aoi = ee.FeatureCollection("projects/ee-teksondada/assets/aoi_test");

//filter dataset based on the time, cloud cover and aoi
// var dataset = landsat7
//                   .filterDate('2015-01-01', '2015-12-30')
//                   .filter(ee.Filter.lt('CLOUD_COVER',10))
//                   .filterBounds(aoi)
//                   .map(function(img) {return img.clip(aoi)})

var dataset = landsat8
                  .filterDate('2020-01-01', '2020-12-30')
                  .filter(ee.Filter.lt('CLOUD_COVER',5))
                  .filterBounds(aoi)
                  .map(function(img) {return img.clip(aoi)})

var trueColor321 = dataset.select(['B4', 'B3', 'B2']);
var trueColor321Vis = {};
Map.addLayer(trueColor321, trueColor321Vis, 'True Color (321)');
         
// extract the required bands
var required_bands = ['B4', "B3", "B2"]
dataset = dataset.median().select(required_bands)

Map.centerObject(aoi, 9);

Map.addLayer(dataset, trueColor321Vis, 'dataset');

// Export the image
Export.image.toDrive({
  image: dataset,
  description: 'landsat',
  region: aoi,
  scale: 30,
});