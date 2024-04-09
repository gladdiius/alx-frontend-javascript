import getBudgetForCurrentYear from "./8-getBudgetCurrentYear"

test('return {...} object', () => {
    expect(getBudgetForCurrentYear(2100, 5200, 1090)).toEqual({ 'income-2024': 2100, 'gdp-2024': 5200, 'capita-2024': 1090 });
});
