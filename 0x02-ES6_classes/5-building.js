// Building class definition
class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  // Getter for sqft attribute
  get sqft() {
    return this._sqft;
  }

  // Abstract method that must be implemented by subclasses
}

Building.prototype.evacuationWarningMessage = () => {
  throw new Error('Method evacuationWarningMessage must be implemented');
};
// Export the Building class
export default Building;
