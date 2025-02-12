"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lz4_napi_1 = require("lz4-napi");
/**
 * LZ4 Compression codec for the [KafkaJS](https://github.com/tulios/kafkajs) library.
 */
class LZ4Codec {
    constructor() { }
    async compress(encoder) {
        return (0, lz4_napi_1.compressFrame)(encoder.buffer);
    }
    async decompress(buffer) {
        return (0, lz4_napi_1.decompressFrame)(buffer);
    }
    /**
     * KafkaJS CompressionType-compatible LZ4 codec.
     * @memberof LZ4Codec
     */
    codec = () => {
        return {
            compress: this.compress,
            decompress: this.decompress,
        };
    };
}
exports.default = LZ4Codec;
module.exports = LZ4Codec;
