class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  // Getter for sqft attribute
  get sqft() {
    return this._sqft;
  }

  // Abstract method: evacuationWarningMessage
  evacuationWarningMessage() {
    this.message = 'Class extending Building must override evacuationWarningMessage';
    throw new Error(this.message);
  }
}

export default Building;
