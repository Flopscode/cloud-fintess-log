import { APIGatewayProxyResult, APIGatewayProxyHandler } from 'aws-lambda';

import { generateData } from './getData';

export const handler: APIGatewayProxyHandler = (): Promise<APIGatewayProxyResult> => {
    return Promise.resolve({
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(generateData()),
    });
}
