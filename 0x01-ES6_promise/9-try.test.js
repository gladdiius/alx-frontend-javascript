import guardrail from './9-try';
import divideFunction from './8-try';

describe('guardrail', () => {
  it('should add result and "Guardrail was processed" to the queue when mathFunction succeeds', () => {
    const mathFunction = () => divideFunction(10, 2);
    expect(guardrail(mathFunction)).toEqual([5, 'Guardrail was processed']);
  });

  it('should add error message and "Guardrail was processed" to the queue when mathFunction throws an error', () => {
    const mathFunction = () => divideFunction(10, 0);
    expect(guardrail(mathFunction)).toEqual(['Error: cannot divide by 0', 'Guardrail was processed']);
  });
});
