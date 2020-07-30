#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkDeployInfrastructureStack } from '../lib/cdk-deploy-infrastructure-stack';

const app = new cdk.App();
new CdkDeployInfrastructureStack(app, 'CdkDeployInfrastructureStack');
