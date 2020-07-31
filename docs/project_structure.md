# Project Sturcture

[back to main file](../README.md)

## Overview
- [/apps](#/apps)
- [/backend](#/backend)
  - [Lambda Bundle](#lambda-bundle)
- [/common](#/common)
- [/docs](#/docs)
- [/libraries](#/libraries)
- [/resources](#/resources)
- [/tools](#/tools)

## /apps
Applications which can be deployed.

For lambda functions following structure is used.

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

The ```package.json``` files of each function project reference the layer project as dev dependency. This ensures that the depedencies listed in the layer are build before the functions are build.
```
  "devDependencies": {
    "example-bundle": "~1.0.0"
  }
```

If you want to add a dependency to only one specifc function within such a lambda bundle project, take care that the deployed function code has actually access to those.
For instance, you could create another layer or included directly into the code deployed to the specific lambda function.
In general, this should be only relevant if you want to avoid to inflate the size of the common layer and could also be a hint to move the function to antoher or new lambda bundle project.

## /common

Files used by rush. See https://rushjs.io.

## /docs
Documentation files.

## /libraries
Extracted code bundle into projects used by more than one other project.

## /resources
A place for various resources.

## /tools
Scripts and utility projects which, for instane, help to build lambda layers or perform the deployment.
Those projects are never deployed but only used within the project for development purposes.
