import { simpleObject } from "./simple";

export const complexObject = Object.assign({}, simpleObject, {
    array: ['foo', { bar: 'baz' }],
    arrayBuffer: new ArrayBuffer(8),
    dataView: new DataView(new ArrayBuffer(16)),
    date: new Date(),
    error: new Error('boom'),
    fn() {
        return 'foo';
    },
    map: new Map().set('foo', { bar: { baz: 'quz' } }),
    nan: NaN,
    object: { foo: { bar: 'baz' } },
    promise: Promise.resolve('foo'),
    regexp: /foo/,
    set: new Set().add('foo').add({ bar: { baz: 'quz' } }),
    typedArray: new Uint8Array([12, 15]),
    undef: undefined,
    weakmap: new WeakMap([[{}, 'foo'], [{}, 'bar']]),
    weakset: new WeakSet([{}, {}]),
    [Symbol('key')]: 'value',
});