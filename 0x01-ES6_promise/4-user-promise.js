export default function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    // Check if firstName and lastName are provided
    if (!firstName || !lastName) {
      reject(new Error('First name and last name are required'));
    } else {
      // Resolve the promise with an object containing firstName and lastName
      resolve({ firstName, lastName });
    }
  });
}
