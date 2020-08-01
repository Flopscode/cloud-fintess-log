<p align="center">
  <img width="250" src="./resources/logo.png">
</p>
<h1 align="center">cloud-fintess-log</h1>
<p align="center">
  <b>Lift and shift your goals.</b>
</p>
<br>

## Project Management

This project uses the monorepo manager [Rush](https://rushjs.io). Only [lambda bundle](./docs/project_structure.md#lambda-bundle) projects deviate from the default project folder depth as is advertised by Rush.

<small>Note: Due to the lambda bundle pattern, Rush "shamefully hoists" depedencies via pnpm.</small><br/>

See also the 

- [Project Structure](./docs/project_structure.md) 
- [Code Style](./docs/code_style.md)

documentation.

## Usage

### Development

```
rush update
```

```
rush build
```

```
rush test
```

https://rushjs.io/pages/best_practices/change_logs/

When publishing an NPM package, it is common practice to include a CHANGELOG.md file to inform your consumers about bug fixes, new features, and changed or removed functionality. Rush automates this using the rush change command. This command should be run once you are ready to merge your PR, after all your changes have been committed to the branch. It analyzes the changes in your branch and (when necessary) prompts you to write human-readable descriptions of your changes.

### Deployment

```
rush prepare-cloud-deployment
```

```
rush deploy-to-cloud
```

### CI/CD

See tools/ci-cd-scripts
