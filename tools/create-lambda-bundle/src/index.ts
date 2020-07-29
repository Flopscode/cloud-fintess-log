#!/usr/bin/env node

import { parseArguments } from './ArgumentsParsing';
import LambdaBundleCreator from './LambdaBundleCreator';

const argv = parseArguments();

const rootDirectory = argv.d;
const packageName = argv.n;

const creator = new LambdaBundleCreator({
    rootDirectory,
    packageName,
});

creator.preparePackageRoot();
creator.preparePackageJson();
creator.prepareLayerStructure();
creator.prepareLambdas();
creator.buildProject();
