export const depenencies = [ 'aws-sdk' ];
export const devDepenencies = [ 
    '@types/aws-lambda',
    '@types/jest',
    '@types/node',
    'base-tsconfig',
    'build-lambda-bundle',
    'jest',
    'ts-jest',
    'ts-node',
    'typescript',
];

export function getExampleLambdaCode() {
    return `import { 
        APIGatewayProxyHandler, 
        APIGatewayProxyEvent,
        APIGatewayProxyResult,
        Context as LambdaContext,
    } from 'aws-lambda';
    
    export const handler: APIGatewayProxyHandler = (
        event: APIGatewayProxyEvent,
        context: LambdaContext,
    ): Promise<APIGatewayProxyResult> => {
        console.log(context.functionName);
        return Promise.resolve({
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            body: event.body 
                ?? JSON.stringify({ todo: 'replace this' }, undefined, 2),
        });
    }`;
}

export function getLambdaTsConfig() {
    return {
        extends: '../../node_modules/base-tsconfig/tsconfig.json',
            compilerOptions: {
            outDir: './build',
            declaration: false,
            typeRoots: [ '../../node_modules/@types' ],
        },
        include: [
            'src/**/*.ts'
        ],
        exclude: [
            'src/**/*.spec.ts'
        ],
    };
}

export function getPackageJson(packageName: string) {
    return {
        name: packageName,
        version: '0.1.0',
        scripts: {
            build: 'build-lambda-bundle --directory=lambdas --clean=true',
            watch: 'tsc -w',
            test: 'jest',
        },
    };
}
