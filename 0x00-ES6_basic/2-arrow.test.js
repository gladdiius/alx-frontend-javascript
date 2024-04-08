import getNeighborhoodsList from './2-arrow.js';


describe('getNeighborhoodsList', () => {
    let getneighborhoodsList;

    beforeEach(() => {
        getneighborhoodsList = new getNeighborhoodsList();
    });

    test('initializes with two neighborhoods', () => {
        expect(getneighborhoodsList.sanFranciscoNeighborhoods).toEqual(['SOMA', 'Union Square']);
    });

    test('adds a new neighborhood correctly', () => {
        const newNeighborhood = 'Fisherman\'s Wharf';
        const updatedNeighborhoods = getneighborhoodsList.addNeighborhood(newNeighborhood);
        
        expect(updatedNeighborhoods).toEqual(['SOMA', 'Union Square', 'Fisherman\'s Wharf']);
    });
});
