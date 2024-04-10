// Import the function to be tested
import signUpUser from './4-user-promise';

describe('signUpUser', () => {
  it('should resolve with an object containing firstName and lastName', async () => {
    // Call the signUpUser function with mock firstName and lastName
    const firstName = 'John';
    const lastName = 'Doe';
    const result = await signUpUser(firstName, lastName);

    // Check if the result is an object containing firstName and lastName
    expect(result).toEqual({ firstName, lastName });
  });

  it('should reject with an error if firstName or lastName is missing', async () => {
    // Call the signUpUser function with missing firstName
    const lastName = 'Doe';
    await expect(signUpUser(undefined, lastName)).rejects.toThrow('First name and last name are required');

    // Call the signUpUser function with missing lastName
    const firstName = 'John';
    await expect(signUpUser(firstName, undefined)).rejects.toThrow('First name and last name are required');
  });
});
