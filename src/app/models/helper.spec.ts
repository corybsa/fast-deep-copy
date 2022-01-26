import * as moment from 'moment';
import { bigData } from './bigData';
import { circularObject } from './circular';
import { complexObject } from './complex';
import { Helper } from './helper';
import { simpleObject } from './simple';

describe('Helper', () => {
    it('should copy the string', () => {
        const string = 'the string';
        expect(Helper.copy(string)).toEqual('the string');
    });

    it('should copy the number', () => {
        const num = 123;
        expect(Helper.copy(num)).toEqual(123);
    });

    it('should copy the array', () => {
        const arr = [1, 2, 3];
        expect(Helper.copy(arr)).toEqual([1, 2, 3]);
    });

    it('should copy the date', () => {
        const date = moment().toDate();
        expect(moment(Helper.copy(date)).isSame(date)).toBeTrue();
    });

    it('should copy the simpleObject', () => {
        expect(Helper.copy(simpleObject)).toEqual(simpleObject);
    });

    it('should copy the complexObject', () => {
        expect(Helper.copy(complexObject)).toEqual(complexObject);
    });

    it('should copy the circularObject', () => {
        expect(Helper.copy(circularObject)).toEqual(circularObject);
    });

    it('should copy the bigData', () => {
        expect(Helper.copy(bigData)).toEqual(bigData);
    });

    it('should not be a reference to the original object', () => {
        const obj = { foo: 'bar' };
        expect(Helper.copy(obj) === obj).toBeFalse();
    });

    it('should copy the object', () => {
        const date = new Date();
        const obj = {
            string: 'a',
            date: date,
            number: 123,
            obj: {
                foo: 'bar'
            },
            arr: [1, 2, 3],
            a: {
                circular: {
                    reference: {}
                }
            }
        };

        obj.a.circular.reference = obj;

        const objCopy = Helper.copy(obj);

        expect(objCopy.string).toEqual('a');
        expect(moment(objCopy.date).isSame(date)).toBeTrue();
        expect(objCopy.number).toEqual(123);
        expect(objCopy.obj.foo).toEqual('bar');
        expect(objCopy.arr).toEqual([1, 2, 3]);
        console.log(objCopy.a, obj);
        expect(objCopy.a.circular.reference).toEqual(obj);
    });
});
