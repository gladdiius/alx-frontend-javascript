import updateUniqueItems from './10-update_uniq_items';
import groceriesList from './9-groceries_list';

describe('updateUniqueItems function', () => {
  it('should update the quantity to 100 for items with an initial quantity of 1', () => {
    const initialMap = new Map([
      ['Apples', 10],
      ['Tomatoes', 10],
      ['Pasta', 1],
      ['Rice', 1],
      ['Banana', 5],
    ]);
    const updatedMap = updateUniqueItems(initialMap);

    expect(updatedMap).toBeInstanceOf(Map);

    expect(updatedMap.get('Apples')).toBe(10);
    expect(updatedMap.get('Tomatoes')).toBe(10);
    expect(updatedMap.get('Pasta')).toBe(100);
    expect(updatedMap.get('Rice')).toBe(100);
    expect(updatedMap.get('Banana')).toBe(5);
  });

  it('should throw an error if the argument is not a map', () => {
    const notAMap = { key: 'value' };

    expect(() => {
      updateUniqueItems(notAMap);
    }).toThrow('Cannot process');
  });


});
