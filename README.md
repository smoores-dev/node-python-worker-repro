# Reproducing hard crashes Node.js when a worker thread is terminated

[https://github.com/hmenyus/node-calls-python/issues/69](https://github.com/hmenyus/node-calls-python/issues/69)

To set up the environment:

- Run `npm install` to install npm dependencies (just `node-calls-python`)
- Install WhisperX and dependencies:
  - pip install -U pip setuptools
  - pip install fuzzysearch
  - pip install torch==2.2.1+cpu torchaudio==2.2.1+cpu --index-url https://download.pytorch.org/whl/cpu
  - pip install git+https://github.com/m-bain/whisperx.git

To run the test:

```
node index.mjs
```
