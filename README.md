# Pistache Marketplace [![Twitter](https://img.shields.io/twitter/url/https/twitter.com/cloudposse.svg?style=social&label=Follow%20%40XCodeCarlos)](https://twitter.com/XCodeCarlos)

<p align="center">
  <a href="#"><img src="public/assets/images/logo.png?raw=true" width="50%" alt="Pistache Marketplace"></a>
</p>

🚀 Streamline your decentralized applications with Pistache's web3 functions marketplace.

 ⚡ Web3 Functions are decentralized cloud functions that work similarly to AWS Lambda or Google Cloud, just for web3. They enable developers to execute on-chain transactions based on arbitrary off-chain data (APIs / subgraphs, etc) & computation.

Pistache marketplace allows for rich interactions. Web3 functions can be inspected through metadata and optionally code, their implementation downloaded if permitted, they can be tested in attached isolated execution environments (through temporary deployments), and finally they can be deployed in associated platforms.

## UPDATES IN PROGRESS

### Features

- Coming soon


### Requirements

- Node.js 18+/npm, yarn and metamask

### Getting started

1. Run the following command on your local environment to install all packages:

```shell
yarn install
```

2.  Then, you can run locally in development mode with live reload:

```shell
yarn run dev
```

Open http://localhost:3000 with your favorite browser to see your project.


### Deploy to production

You can see the results locally in production mode with:

```shell
$ yarn run build
$ yarn run start
```

### Testing

All tests are colocated with the source code inside the same directory. So, it makes it easier to find them. Unfortunately, it is not possible with the `pages` folder which is used by Next.js for routing. So, what is why we have a `pages.test` folder to write tests from files located in `pages` folder.

### Contributions

Everyone is welcome to contribute to this project. Feel free to open an issue if you have question or found a bug. Totally open to any suggestions and improvements.

### License

Licensed under the MIT License, Copyright © 2023

See [LICENSE](LICENSE) for more information.
