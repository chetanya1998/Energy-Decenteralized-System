**Activate the virtual environment**

```
source blockchain-env/bin/activate

```
**Install all packages**
```
pip3 install -r requirements.txt

```
**Run the tests**
Make sure to activate the virtual environment.

```
python3 -m pytest backend/tests
```
**Run the application and API**

Make sure to activate the virtual environment.

```
python3 -m backend.app
```
**Run a peer Instance**

Make sure to activate virtual environment.
```
export PEER=True&& python3 -m backend.app
```

**Run the frontend**

In the frontend directory:

```
yarn start
```
**Seed the backend with data**


Make sure to activate the virtual environment
```
export SEED_DATA=True && python3 -m backend.app
```
