// utils.js

// Simulate uploading a photo (returns a Promise)
export function uploadPhoto() {
  return new Promise((resolve) => {
    // Simulate uploading a photo
    // For demonstration, we're resolving with mock data after a delay
    setTimeout(() => {
      resolve({ body: 'photo-profile-1' }); // Mocked photo data
    }, 1000); // Simulating a delay of 1 second
  });
}

// Simulate creating a user (returns a Promise)
export function createUser() {
  return new Promise((resolve) => {
    // Simulate creating a user
    // For demonstration, we're resolving with mock data after a delay
    setTimeout(() => {
      resolve({ firstName: 'Guillaume', lastName: 'Salva' }); // Mocked user data
    }, 1500); // Simulating a delay of 1.5 seconds
  });
}
