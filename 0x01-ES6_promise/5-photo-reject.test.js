import uploadPhoto from './5-photo-reject';

describe('uploadPhoto', () => {
  it('should reject with an error message containing the filename', async () => {
    const fileName = 'guillaume.jpg';
    await expect(uploadPhoto(fileName)).rejects.toThrowError(`${fileName} cannot be processed`);
  });
});
