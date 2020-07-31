<p align="center">
  <img width="250" src="./resources/logo.png">
</p>
<h1 align="center">cloud-fintess-log</h1>
<p align="center">
  <b>Lift and shift your goals.</b>
</p>
<br>

## Project Management

This project uses the monorepo manager [Rush](https://rushjs.io).<br/>
Only [lambda bundle](./docs/project_structure.md#lambda-bundle) projects deviate from the default project folder depth as is advertised by Rush.
<small>Note: Due to the [lambda bundle pattern](./docs/project_structure.md#lambda-bundle), Rush also shamefully hoists depedencies.</small><br/>

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


### Deployment

```
rush prepare-cloud-deployment
```

```
rush deploy-to-cloud
```

### CI/CD

See tools/ci-cd-scripts
