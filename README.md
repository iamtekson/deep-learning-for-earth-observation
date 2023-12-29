# Satellite imagery and deep learning

This is the repo for satellite imagery analysis using a deep-learning neural network. The content is part of my new course: [Deep Learning Application for Earth Observation](https://www.udemy.com/course/deep-learning-application-for-earth-observation/?referralCode=B4655A8A918826871A40)

If you enjoy this course, Please also support me by subscribing to my YouTube channel: [GeoDev](https://youtube.com/@geodev)

## Topic covered

[1. Convolution Neural Network (CNN)](#1-convolution-neural-network-cnn)

[2. Deep learning dataset preparation](#2-deep-learning-dataset-preparation)

[3. Land Use Land Cover Classification](#3-land-use-land-cover-classification)

[4. Swimming pool and car detection (object detection)](#4-swimming-pool-and-car-detection-object-detection)

[5. Building detection (image segmentation)](#5-building-detection-image-segmentation)

[6. Land Use Land Cover Mapping (multi-class image segmentation)](#6-land-use-land-cover-mapping-multi-class-image-segmentation)

[7. Landslide detection using SAR and Optical dataset](#7-landslide-detection-using-sar-and-optical-dataset)

[8. End-to-end Deep Learning and Google Earth Engine](#8-end-to-end-deep-learning-and-google-earth-engine)

[9. Flood mapping using Attention UNet](#9-flood-mapping-using-attention-unet)

### 1. Convolution Neural Network (CNN)
CNNs are a type of deep learning algorithm designed for processing visual data. They're adept at tasks like image recognition by using specialized layers to automatically and hierarchically learn patterns and features from images.

### 2. Deep learning dataset preparation 
Using **ArcGIS Pro**, you can organize and prepare geospatial datasets for deep learning tasks, while open-source methods like the **GeoTile Python library** offer alternative approaches to preprocess spatial data for deep learning models.

![image_dataset_preparation](./img/dataset_preparation.png 'Dataset Preparation')

### 3. Land Use Land Cover Classification
Image classification involves categorizing images based on their content, like distinguishing different land use and land cover types (e.g., forests, urban areas) within satellite or aerial imagery.

![eurosat dataset](./img/eurosat_dataset.png 'Image Classification')

### 4. Swimming pool and car detection (object detection)
Object detection in images involves identifying and locating specific objects, like detecting swimming pools and cars within images or video frames using deep learning techniques.

![Car detection](./img/car_detection.png 'Car Detection')

### 5. Building detection (image segmentation)

Image segmentation focuses on dividing an image into meaningful parts or segments. In the context of building detection, this technique delineates building boundaries within satellite or aerial imagery.

![Building detection](./img/building_detection.png 'building detection')

### 6. Land Use Land Cover Mapping (multi-class image segmentation)

This involves a more detailed image segmentation process, aiming to map various land use and land cover classes within an area, such as distinguishing between different types of vegetation, water bodies, and infrastructure.

![LULC classification](./img/lulc_classification.png 'LULC classification')

### 7. Landslide detection using SAR and Optical dataset

Combining Synthetic Aperture Radar (SAR) and Optical datasets enables the detection of potential landslide areas. SAR provides all-weather and day-and-night imaging, while optical datasets offer high-resolution imagery for identifying surface changes indicating potential landslides.

![Landslide4sense](./img/landslide4sense.png 'Landslide4sense')

### 8. End-to-end Deep Learning and Google Earth Engine

End-to-end deep learning in conjunction with Google Earth Engine involves leveraging deep learning models to directly process and analyze Earth Engine's vast collection of geospatial data.

![end2endDL](./img/gee_dl_methodology.png 'end2endDL')

### 9. Flood mapping using Attention UNet

Flood mapping using Attention U-Net involves employing a specialized neural network architecture called Attention U-Net for the purpose of accurately detecting and mapping flooded areas within images or remote sensing data. The Attention U-Net model integrates the U-Net architecture with attention mechanisms, allowing it to focus on important regions while processing the data. This technique helps enhance the model's ability to distinguish between flooded and non-flooded areas by selectively attending to critical features in the imagery, thereby improving the accuracy of flood mapping and aiding in disaster response and management efforts.

![flood mapping deep learning](./img/flood_mapping.png 'flood mapping deep learning')

