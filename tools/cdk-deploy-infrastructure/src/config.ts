import * as fs from 'fs';

export interface Config {
    readonly environment: string;
    readonly resourceSuffix: string;
    readonly aws: AwsConfig;
    readonly application: ApplicationConfig;
    readonly dns: DnsConfig;
    readonly api: ApiConfig;
    readonly frontend: FrontendConfig;
}

export interface AwsConfig {
    readonly region: string;
    readonly accountId: string;
}

export interface ApplicationConfig {
    readonly name: string;
    readonly nameShort: string;
    readonly resourceOwner: string;
}

export interface DnsConfig {
    readonly hostedZoneDomainName: string;
}

export interface ApiConfig {
    readonly domainName: string;
    readonly cfnOutput?: CfnOutputConfig;
}

export interface FrontendConfig {
    readonly domainName: string;
    readonly bucketDeploymentRoot: string;
    readonly cfnOutput?: CfnOutputConfig;
}

export type CfnOutputConfig = Readonly<Record<string, string>>

export const loadConfig = (configPath: string): Config => {
    console.log(`Loading config from '${configPath}'`);
    return JSON.parse(fs.readFileSync(configPath).toString()) as Config;
};
