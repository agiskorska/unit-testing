const { getLargest, getSmallest } = require('./numberFunctions');
const each = require('jest-each').default;

describe( "getLargest", () => {

    test("It is a function", () => {
        expect(typeof getLargest).toBe("function");
    })

    describe("It handles normal inputs succesfully", () => {
        each([
            [[1,2,3], 3],
            [[1000000000,2,3], 1000000000],
            [[-1,-2,-3], -1],
            [[0.1, 0.02, 0.003], 0.1],
        ]).test("%s -> %s", (arr, expected) => {
            expect(getLargest(...arr)).toEqual(expected);
        })  
    })
    describe("It handles extreme inputs succesfully", () => {
        each([
            [["a",2,3], NaN],

        ]).test("%s -> %s", (arr, expected) => {
            expect(getLargest(...arr)).toEqual(expected);
        })  
    })
})

describe ("getSmallest", () => {
    test("It is a function", () => {
        expect(typeof getSmallest).toBe("function");
    })

    describe('It handles normal inputs succesfully', () => { 
        each([
            [[1,2,3], 1],
            [[1000000000,2,3], 2],
            [[-1,-2,-3], -3],
            [[0.1, 0.02, 0.003], 0.003],
        ]).test("%s -> %s", (arr, expected) => {
            expect(getSmallest(...arr)).toEqual(expected);
        }) 
     })
})