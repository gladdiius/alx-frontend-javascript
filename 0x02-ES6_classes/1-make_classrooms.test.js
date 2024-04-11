import initializeRooms from './1-make_classrooms.js';
import ClassRoom from './0-classroom.js';

describe('initializeRooms', () => {
    test('returns an array of ClassRoom objects with correct sizes', () => {
        const rooms = initializeRooms(19, 20, 34);
        
        // Check if the returned value is an array
        expect(Array.isArray(rooms)).toBe(true);

        // Check if the array has the correct length
        expect(rooms.length).toBe(3);

        // Check if each element of the array is an instance of ClassRoom with correct size
        rooms.forEach((room, index) => {
            expect(room instanceof ClassRoom).toBe(true);
            expect(room.maxStudentsSize).toBe(room[index]);
        });
    });
});
