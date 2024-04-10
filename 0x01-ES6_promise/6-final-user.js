import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  // Call signUpUser and uploadPhoto functions with the provided arguments
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  // Wait for all promises to settle using Promise.allSettled
  return Promise.allSettled([userPromise, photoPromise])
    .then(results => {
      // Map over the settled promises and create an array with the status and value/error
      return results.map(result => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason,
      }));
    });
}
