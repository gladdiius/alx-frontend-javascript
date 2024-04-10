import handleProfileSignup from './handleProfileSignup';
import { uploadPhoto, createUser } from './utils';

jest.mock('./utils', () => ({
  uploadPhoto: jest.fn(),
  createUser: jest.fn(),
}));

describe('handleProfileSignup', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should log photo and user info when both operations are successful', async () => {
    uploadPhoto.mockResolvedValue({ body: 'photo' });
    createUser.mockResolvedValue({ firstName: 'John', lastName: 'Doe' });

    await handleProfileSignup();

    expect(uploadPhoto).toHaveBeenCalled();
    expect(createUser).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('photo John Doe');
  });

  it('should log "Signup system offline" when an error occurs during any operation', async () => {
    uploadPhoto.mockRejectedValue(new Error('Failed to upload photo'));

    await handleProfileSignup();

    expect(uploadPhoto).toHaveBeenCalled();
    expect(createUser).not.toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith('Signup system offline');
  });
});
