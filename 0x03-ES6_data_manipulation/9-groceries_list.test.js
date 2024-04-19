import groceriesList from './9-groceries_list';

describe('groceriesList function', () => {
  it('should return a map of groceries with their quantities', () => {
    const result = groceriesList();
    
    expect(result).toBeInstanceOf(Map);
    expect(result.size).toBe(5);
    
    expect(result.get('Apples')).toBe(10);
    expect(result.get('Tomatoes')).toBe(10);
    expect(result.get('Pasta')).toBe(1);
    expect(result.get('Rice')).toBe(1);
    expect(result.get('Banana')).toBe(5);
  });
});
