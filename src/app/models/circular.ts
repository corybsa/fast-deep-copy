export const circularObject = {
    deeply: {
        nested: {
            reference: {},
        },
    },
};

circularObject.deeply.nested.reference = circularObject;