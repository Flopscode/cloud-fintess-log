import * as cdk from '@aws-cdk/core';
import * as apigateway from "@aws-cdk/aws-apigateway";
import * as lambda from '@aws-cdk/aws-lambda';

const WEIGH_LOG_GET_BIN_PATH = './node_modules/weight-log-get/build'
const WEIGH_LOG_LAYER_BIN_PATH = './node_modules/weight-log-lambdas/build/layer'

export interface ApiStackProps extends cdk.StackProps {

}

export class ApiStack extends cdk.Stack {
  // api: apigateway.RestApi;

  constructor(scope: cdk.Construct, id: string, private readonly props: ApiStackProps) {
    super(scope, id, props);
    // this.api = this.createBaseApi();
    this.addWeightLogEndpoints();
  }

  // private createBaseApi(): apigateway.RestApi {
    // const { 
    //     config,
    //     backendApiEdgeCertificate,
    // } = this.props;
    // return new apigateway.RestApi(this,
    //     `DataIntegratorBackendApi${config.infrastructure.resourceSuffix}`, {
    //     defaultCorsPreflightOptions: {
    //         allowOrigins: apigateway.Cors.ALL_ORIGINS,
    //         allowMethods: apigateway.Cors.ALL_METHODS
    //     },
    //     domainName: {
    //         domainName: config.infrastructure.api.domainName,
    //         certificate: backendApiEdgeCertificate,
    //         securityPolicy: apigateway.SecurityPolicy.TLS_1_2,
    //         endpointType: apigateway.EndpointType.EDGE,
    //     },
    // });
  // }

  
  private addWeightLogEndpoints() {
    // if (!this.props.database.secret) {
    //     throw new Error('Database must have a secret.');
    // }

    // const { config } = this.props;

    // const serverlessLayer = new lambda.LayerVersion(this,
    //     `ServerlessApiLayer${config.infrastructure.resourceSuffix}`, {
    //     code: new lambda.AssetCode(SERVERLESS_API_LAYER_PATH),
    // });

    // const graphQlFunction = new lambda.Function(this,
    //     `GraphQLEndpoint${config.infrastructure.resourceSuffix}`, {
    //     runtime: lambda.Runtime.NODEJS_12_X,
    //     handler: GRAPHQL_ENDPOINT_HANDLER,
    //     code: lambda.Code.fromAsset(SERVERLESS_API_BIN_PATH),
    //     environment: {
    //         DB_SECRET_ARN: this.props.database.secret.secretArn,
    //     },
    //     layers: [
    //         serverlessLayer,
    //     ],
    //     timeout: cdk.Duration.minutes(1),
    //     vpc: this.props.vpc,
    //     securityGroups: [ this.props.databaseLambdaSG ],
    //     description: 'Provides a GraphQL endpoint',
    // });

    // this.props.database.secret.grantRead(graphQlFunction);
    // return graphQlFunction;
  }

  private createGraphQlFunction(resource: apigateway.IResource) {
    // const graphQlIntegration = new apigateway.LambdaIntegration(this.createGraphQlFunction());
    // resource.addMethod('ANY', graphQlIntegration);
    // resource.addProxy({
    //     defaultIntegration: graphQlIntegration,
    // });
  }
}
