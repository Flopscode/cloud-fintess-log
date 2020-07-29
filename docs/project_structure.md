# Project Sturcture

## Table of Contents
- [Lambda Bundle](#Lambda-Bundle)

## Lambda Bundle
A project structure for a set of lambda functions sharing at least one layer.

#### Intention
Often lambda functions designed for the same domain share a large portion of their depecencies. 
This sturcture aims to adopt this pattern on project structure level and bundles a set of lambda functions.
As a result of this, there is only one ``package.json`` which can be used to create a lambda layer with all required depedencies.

#### Structure

```
example-bundle/
|
|--package.json
|
|--lambdas/
   |
   |--example-get/
   |  |
   |  |--src/
   |  |--tsconfig.json
   |
   |--example-post/
   |  |
   |  |--src/
   |  |--tsconfig.json
   |
   |--example-delete/
      |
      |--src/
      |--tsconfig.json
```
Each lambda function has its own subdirectory in ```lambdas```. The tool ```build-lambda-bundle``` helps to start the build process and should be used as build script action in the ```package.json``` of the bundle project.

E.g.
```
  "scripts": {
    "build": "build-lambda-bundle --directory=lambdas --clean=true"
  }
```

#### Notes
- the tool ```create-lambda-bunlde``` can be used to initialize a new bunlde project
