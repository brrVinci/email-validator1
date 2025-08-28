const { isValidEmail } = require('../src/emailValidator.js');

describe('isValidEmail', () => {
  test('valide une adresse simple', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
  });

  test('refuse sans @', () => {
    expect(isValidEmail('testexample.com')).toBe(false);
  });

  test('refuse sans texte avant @', () => {
    expect(isValidEmail('@example.com')).toBe(false);
  });

  test('refuse sans texte après @', () => {
    expect(isValidEmail('test@')).toBe(false);
  });

  test('refuse sans point dans le domaine', () => {
    expect(isValidEmail('test@example')).toBe(false);
  });

  test('refuse si le domaine finit par un point', () => {
    expect(isValidEmail('test@example.')).toBe(false);
  });

  test('refuse si espace présent', () => {
    expect(isValidEmail('test @example.com')).toBe(false);
  });
});