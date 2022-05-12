# FlowUs

An all-in-one social media network + fitness tools like a workout and jogging tracker.

Backend written in typescript using firebase cloud functions

## Setup

If you do no have firebase tools already:

```
$ npm install -g firebase-tools
```

To install all dependencies use:

```
$ yarn
```

To deploy everything use:
(Add --only functions at the end if only functions should be deployed)
(Append :functionName after the argument to only deploy a certain function)

```
$ firebase deploy
$ firebase deploy --only functions
$ firebase deploy --only functions:helloWorld
```

License
FlowUs (c) 2021 Lucas Goldner and contributors

SPDX-License-Identifier: AGPL-3.0
