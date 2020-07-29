0. consistent File naming -> note in ReadMe doc file (sturcture required)
2. specify lamdba bundle definition in ReadMe doc file (sturcture required)
layer: link (which points to the fitlered node_modules in the deployment?)

->clean-tsc-build
  ->  "build:clean": "rushx clean:build && rushx build",,
    "clean": "rushx clean:build",
    "clean:build": "rm -rf lib"
-> build script per lambda package
3. create-lambda-bundle
    - add to rush.json
    - init
    - update
    - test build
    - create or add to deployment (scenario?)
- note shamefully hoist

- https://rushjs.io/pages/maintainer/deploying/
- https://rushjs.io/pages/advanced/api/
- https://rushstack.io/pages/api/rush-lib/
- eslint

rm -f ${PWD##*/}.build.log && rm -f ${PWD##*/}.build.error.log
