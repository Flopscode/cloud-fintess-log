# Project Sturcture

## Project directories
- [/apps](#/apps)
- [/backend](#/backend)
  - [Lambda Bundle](#Lambda-Bundle)
- [/common](#/common)
- [/docs](#/docs)
- [/libraries](#/libraries)
- [/resources](#/resources)
- [/tools](#/tools)
- [/ (root)](#/-(root))

## /apps
// TODO

## /backend

// TODO
Lorem impsum, backend service code such lambda and IaC deployment code.

### Lambda Bundle
A project structure for a set of lambda functions sharing at least one layer.

#### Intention
Often lambda functions designed for the same domain share a large portion of their depecencies. 
This sturcture aims to adopt this pattern on project structure level and bundles a set of lambda functions.
As a result of this, there is only one ``package.json`` which can be used to create a lambda layer with all required depedencies.

#### Structure

```
example-bundle/
|
|--node_modules // automatically created
|--package.json
|
|--example-get/
|  |
|  |--src/
|  |--tsconfig.json
|  |--package.json
|
|--example-post/
|  |
|  |--src/
|  |--tsconfig.json
|  |--package.json
|
|--example-delete/
  |
  |--src/
  |--tsconfig.json
  |--package.json
```

Using this pattern, the functions _example-get_, _example-post_ and _example-delete_ can access the common _node_modules_ of the layer due to the module resolution strategy of NodeJs.


The ```package.json``` of the root (layer level) should contain at least the follwoing scripts.
```
  "scripts": {
    "build": "",
    "prepare-cloud-deployment": "prepare-layer-cloud-deployment"
  },
```
This way, the lambda layer content is automatically placed in _./build/layer_ during cloud deployment preparation phase.

If you want to add a dependency to only one specifc function within such a lambda bundle project, take care that the deployed function code has actually access to those.
For instance, you could create another layer or included directly into the code deployed to the specific lambda function.
In general, this should be only relevant if you want to avoid to inflate the size of the common layer and could also be a hint to move the function to antoher or new lambda bundle project.

## /common

Files used by rush. See https://rushjs.io.

## /docs
// TODO

## /libraries
// TODO

## /resources
// TODO

## /tools
// TODO

## / (root)
// TODO
