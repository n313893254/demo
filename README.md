# global-monitoring-ui
--------

## Usage

Prerequisites:
* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) 8.x+ (with NPM)

If you're on a Mac and use Homebrew, you can follow these steps:
```bash
  brew install node
```

Setup:
```bash
  git clone 'https://github.com/cnrancher/global-monitoring-ui.git'
  cd 'global-monitoring-ui'
  npm install
  npm run dll
  SERVER_URL='http://127.0.0.1' API_TOKEN='passname:password' THANOS_URL='http://127.0.0.1' npm run dev
```

License
=======
Copyright (c) 2014-2019 [Rancher Labs, Inc.](http://rancher.com)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
