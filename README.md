# kafkajs-lz4

[![Build Status](https://img.shields.io/github/workflow/status/@2l/kafkajs-lz4/Test?logo=github-actions&longCache=true&style=flat-square)](https://travis-ci.org/@2l/kafkajs-lz4) [![NPM Version](https://img.shields.io/npm/v/@2l/kafkajs-lz4.svg?longCache=true&style=flat-square)](https://www.npmjs.com/package/@2l/kafkajs-lz4) ![](https://img.shields.io/badge/typescript-5.3-blue.svg?longCache=true&style=flat-square)

TypeScript-ready [lz4](https://www.npmjs.com/package/lz4) compression codec for [KafkaJS](https://www.npmjs.com/package/kafkajs).

ℹ️ Requires Node v10 or above to work.

## Install

```bash
$ yarn add @2l/kafkajs-lz4
```

## Usage

```typescript
import { CompressionTypes, CompressionCodecs } from 'kafkajs';
import LZ4Codec from 'kafkajs-lz4';

CompressionCodecs[CompressionTypes.LZ4] = new LZ4Codec().codec;
```

## Development

```bash
$ yarn install
$ yarn test
```

## Author

Thanks to the original author: [indix](https://github.com/indix) for the initial implementation.

## Contributors

- [r3b-fish](https://github.com/r3b-fish)

## License

MIT

