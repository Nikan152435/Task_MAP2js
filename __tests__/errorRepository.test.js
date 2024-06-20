const ErrorRepository = require('../src/errorRepository');

test('translate existing error code', () => {
    const repo = new ErrorRepository();
    repo.addError(1, 'Access denied');
    expect(repo.translate(1)).toBe('Access denied');
});

test('translate unknown error code', () => {
    const repo = new ErrorRepository();
    expect(repo.translate(999)).toBe('Unknown error');
});