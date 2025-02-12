import { Buffer } from 'buffer';
import { compressFrame, decompressFrame } from 'lz4-napi';

/**
 * LZ4 Compression codec for the [KafkaJS](https://github.com/tulios/kafkajs) library.
 */
export default class LZ4Codec {
    constructor() {}

    private async compress(encoder: { buffer: Buffer }): Promise<Buffer> {
        return compressFrame(encoder.buffer);
    }

    private async decompress(buffer: Buffer): Promise<Buffer> {
        return decompressFrame(buffer);
    }

    /**
     * KafkaJS CompressionType-compatible LZ4 codec.
     * @memberof LZ4Codec
     */
    public codec = () => {
        return {
            compress: this.compress,
            decompress: this.decompress,
        };
    };
}

module.exports = LZ4Codec;
