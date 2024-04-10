// Import the necessary functions and the handleProfileSignup function
import handleProfileSignup from './6-final-user';
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// Mock the signUpUser and uploadPhoto functions
jest.mock('./4-user-promise');
jest.mock('./5-photo-reject');

describe('handleProfileSignup', () => {
  it('should return an array with status and value/error for signing up and uploading a photo', async () => {
    // Mock the resolved values for signUpUser and uploadPhoto functions
    signUpUser.mockResolvedValue('User signed up successfully');
    uploadPhoto.mockRejectedValue('Error uploading photo');

    // Call the handleProfileSignup function
    const result = await handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg');

    // Check if the function returns the expected array structure
    expect(result).toEqual([
      { status: 'fulfilled', value: 'User signed up successfully' },
      { status: 'rejected', value: 'Error uploading photo' },
    ]);
  });
});
