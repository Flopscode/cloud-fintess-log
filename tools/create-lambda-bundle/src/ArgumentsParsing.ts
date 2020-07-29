import * as yargs from 'yargs';

export function parseArguments() {
    return yargs
    .command('*', 'Initializes and adds a lambda bundle project to this monorepo.', (yargs: yargs.Argv) => {
        return yargs
            .option('n', {
                describe: 'The name for the new project.',
                require: true,
                type: 'string',
            })
            .option('d', {
                describe: 'The parent directory for the new project.',
                default: '.',
            });
    }).parse();
}
