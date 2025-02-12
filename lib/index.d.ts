import { Buffer } from 'buffer';
/**
 * LZ4 Compression codec for the [KafkaJS](https://github.com/tulios/kafkajs) library.
 */
export default class LZ4Codec {
    constructor();
    private compress;
    private decompress;
    /**
     * KafkaJS CompressionType-compatible LZ4 codec.
     * @memberof LZ4Codec
     */
    codec: () => {
        compress: (encoder: {
            buffer: Buffer;
        }) => Promise<Buffer>;
        decompress: (buffer: Buffer) => Promise<Buffer>;
    };
}
