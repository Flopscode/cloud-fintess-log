#!/usr/bin/env bash
set -e

PROJECT_NAME=${PWD##*/}
OUT_DIR=build
DEPLOY_OUT_DIR=deploy
LAYER_DIR=layer
LAYER_DEPLOY_SCENARIO=lambda-layer

# production deployment of dependencies
mkdir -p $OUT_DIR/$DEPLOY_OUT_DIR
rush deploy --project $PROJECT_NAME \
    --scenario $LAYER_DEPLOY_SCENARIO \
    --target-folder $OUT_DIR/$DEPLOY_OUT_DIR \
    --overwrite

# create layer referencing dependencies
cd $OUT_DIR
rm -rf $LAYER_DIR
mkdir -p $LAYER_DIR/nodejs && cd $_
ln -s ../../$DEPLOY_OUT_DIR/backend/$PROJECT_NAME/node_modules node_modules
