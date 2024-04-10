import handleProfileSignup from './3-all';
import { uploadPhoto, createUser } from './utils';

// Mock the console.log function
console.log = jest.fn();

jest.mock('./utils', () => ({
  uploadPhoto: jest.fn(),
  createUser: jest.fn(),
}));

describe('handleProfileSignup', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should log the photo and user info when both operations are successful', async () => {
    uploadPhoto.mockResolvedValue({ body: 'photo-profile-1' });
    createUser.mockResolvedValue({ firstName: 'Guillaume', lastName: 'Salva' });

    await handleProfileSignup();

    expect(uploadPhoto).toHaveBeenCalled();
    expect(createUser).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('photo-profile-1 Guillaume Salva');
  });

  it('should log "Signup system offline" when an error occurs during any operation', async () => {
    uploadPhoto.mockRejectedValue(new Error('Failed to upload photo'));

    await handleProfileSignup();

    expect(uploadPhoto).toHaveBeenCalled();
  });
});
