import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { ApiStack } from './stacks/ApiStack';

const app = new cdk.App();
new ApiStack(app, 'ApiStack', {});
