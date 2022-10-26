// Function to mask the cloud
function maskS2clouds(image) {
  var qa = image.select('QA60');

  // Bits 10 and 11 are clouds and cirrus, respectively.
  var cloudBitMask = 1 << 10;
  var cirrusBitMask = 1 << 11;

  // Both flags should be set to zero, indicating clear conditions.
  var mask = qa.bitwiseAnd(cloudBitMask).eq(0)
      .and(qa.bitwiseAnd(cirrusBitMask).eq(0));

  return image.updateMask(mask).divide(10000);
}

//=============================================
//Change the required parameters here
//=============================================
var dataset = ee.ImageCollection('COPERNICUS/S2')
                  .filterDate('2021-01-01', '2022-01-01')
                  // Pre-filter to get less cloudy granules.
                  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',5)).filterBounds(aoi)
                  .map(maskS2clouds)
                  .map(function(image) {return image.clip(aoi)});

print(dataset)
// select the required bands
// var required_bands = ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10', 'B11', 'B12']
var required_bands = ['B2', "B3", "B4", "B8"]
dataset = dataset.median().select(required_bands)
print(dataset)


// visualization parameters 
var visualization = {
  min: 0.0,
  max: 0.3,
  bands: ['B4', 'B3', 'B2'],
};

// Visualization of layer to the map
Map.centerObject(aoi, 9);
Map.addLayer(dataset, visualization, 'RGB');


// Export the image
Export.image.toDrive({
  image: dataset,
  description: 'sent2',
  region: aoi,
  scale: 10,
});

