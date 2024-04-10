import handleProfileSignup from './3-all';
import { uploadPhoto, createUser } from './utils';

// Mock the console.log function
console.log = jest.fn();

describe('handleProfileSignup', () => {
  it('should log the photo and user info when both operations are successful', async () => {
    // Mock successful responses for uploadPhoto and createUser
    uploadPhoto.mockResolvedValue({ body: 'photo-profile-1' });
    createUser.mockResolvedValue({ firstName: 'Guillaume', lastName: 'Salva' });

    // Call handleProfileSignup
    await handleProfileSignup();

    // Check if console.log was called with the expected output
    expect(console.log).toHaveBeenCalledWith('photo-profile-1 Guillaume Salva');
  });

  it('should log "Signup system offline" when an error occurs during any operation', async () => {
    // Mock an error response for uploadPhoto
    uploadPhoto.mockRejectedValue(new Error('Failed to upload photo'));

    // Call handleProfileSignup
    await handleProfileSignup();

    // Check if console.log was called with the expected output
    expect(console.log).toHaveBeenCalledWith('Signup system offline');
  });
});
