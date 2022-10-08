# Tensorflow Installation

* Download and install [anaconda](https://www.anaconda.com/products/distribution)

* Install Microsoft [visual C++ Redisrubutable](https://support.microsoft.com/help/2977003/the-latest-supported-visual-c-downloads)

* Create virtual environment

```sh
conda create --name tf python=3.9

# activate virtual env
conda activate tf
```

* GPU setup

```sh
conda install -c conda-forge cudatoolkit=11.2 cudnn=8.1.0
```

* Install Tensorflow

```sh
pip install upgrade pip
pip install tensorflow
```

* Install ipykernel and register it to jupyter notebook

```sh
conda install -c anaconda ipykernel

# add ipykernel
python -m ipykernel install --user --name=tf
```

* Run the jupyter notebook

```sh
cd /your/working/directory # don't forgot to change the path

jupyter notebook
```