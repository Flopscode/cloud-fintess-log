import * as fs from 'fs';
import * as path from 'path';
import * as child_process from 'child_process';

import {
    depenencies,
    devDepenencies,
    getExampleLambdaCode,
    getLambdaTsConfig,
    getPackageJson,
} from './BundleResources';

export interface LambdaBundleCreatorProps {
    rootDirectory: string;
    packageName: string;
}

export default class LambdaBundleCreator {
    readonly #packageRoot: string;

    constructor(private readonly props: LambdaBundleCreatorProps) {
        const { rootDirectory, packageName} = props;
        this.#packageRoot = path.join(rootDirectory, packageName);
    }

    preparePackageRoot() {
        if (fs.existsSync(this.#packageRoot)) {
            console.log(`Directoy already exists: ${path.resolve(this.#packageRoot)}`);
            process.exit(1);
        }
        fs.mkdirSync(this.#packageRoot, { recursive: true });
    }

    preparePackageJson() {
        this.initPackageJson();
        for (const depenency of depenencies) {
            this.addDependency(depenency);
        }
        for (const depenency of devDepenencies) {
            this.addDevDependency(depenency);
        }
    }

    private addDependency(packageName: string) {
        child_process.execSync(`rush add -p ${packageName}@latest`, { cwd: this.#packageRoot, stdio: 'inherit' });
    }

    private addDevDependency(packageName: string) {
        child_process.execSync(`rush add -p ${packageName}@latest --dev`, { cwd: this.#packageRoot, stdio: 'inherit' });
    }

    prepareLayerStructure() {
        const layerDependenciesDir = path.join(this.#packageRoot, 'layer', 'nodejs');
        fs.mkdirSync(layerDependenciesDir, { recursive: true });
        child_process.execSync('ln -s ../../node_modules node_modules', { 
            cwd: layerDependenciesDir,
            stdio: 'inherit',
        });
    }

    prepareLambdas() {
        const lambdasDir = path.join(this.#packageRoot, 'lambdas');
        fs.mkdirSync(lambdasDir, { recursive: true });
        this.prepareExampleLambda(lambdasDir);
    }

    prepareExampleLambda(lambdasRoot: string) {
        const exampleLambdaDir = path.join(lambdasRoot, 'todo-get');
        fs.mkdirSync(exampleLambdaDir);
        fs.writeFileSync(
            path.join(exampleLambdaDir, 'tsconfig.json'),
            JSON.stringify(getLambdaTsConfig(), undefined, 2),
        );

        const srcDir = path.join(exampleLambdaDir, 'src');
        fs.mkdirSync(srcDir);
        fs.writeFileSync(path.join(srcDir, 'index.ts'), getExampleLambdaCode());
    }

    initPackageJson() {
        const packageJsonPath = path.join(this.#packageRoot, 'package.json');
        const packageJsonContent = JSON.stringify(
            getPackageJson(this.props.packageName),
            undefined,
            2,
        );
        fs.writeFileSync(packageJsonPath, packageJsonContent);
    }

    buildProject() {
        child_process.execSync('rushx build', {
            cwd: this.#packageRoot,
            stdio: 'inherit'
        });
    }
}



