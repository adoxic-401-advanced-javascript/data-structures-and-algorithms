const bracketValidation = require('../multiBracketValidation/bracket-validation')

describe('validate', () => {
  it('true cases', () => {
    const thing1 = '{}[]';
    const actual1 = bracketValidation(thing1);
    expect(actual1).toBe(true);

    const thing2 = '()';
    const actual2 = bracketValidation(thing2);
    expect(actual2).toBe(true);

    const thing3 = '({}[])';
    const actual3 = bracketValidation(thing3);
    expect(actual3).toBe(true);

    const thing4 = '{[()]}';
    const actual4 = bracketValidation(thing4);
    expect(actual4).toBe(true);
  });

  it('false cases', () => {
    const thing1 = '}]}[]';
    const actual1 = bracketValidation(thing1);
    expect(actual1).toBe(false);

    const thing2 = '(';
    const actual2 = bracketValidation(thing2);
    expect(actual2).toBe(false);

    const thing3 = '})';
    const actual3 = bracketValidation(thing3);
    expect(actual3).toBe(false);

    const thing4 = '{)}}';
    const actual4 = bracketValidation(thing4);
    expect(actual4).toBe(false);
  });
});