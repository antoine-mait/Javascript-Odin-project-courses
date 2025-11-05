const { Ship } = require('./battleship');

describe('Ship Class', () => {
  test('should create a Ship with lenght and position', () => {
    const ship = new Ship('5', '[[0,0],[0,4]]');

    expect(ship.length).toBe('5');
    expect(ship.position).toBe('[[0,0],[0,4]]');
    expect(ship.hitCell).toStrictEqual([]);
    expect(ship.sunked).toBe(false);
  });

test('should say Hit ship at selectedCell position', () => {
    const ship = new Ship(5, [[0,0],[0,4]]);
    const selectedCell = [0,3]

    ship.hit(selectedCell);
    expect(ship.hitCell).toStrictEqual([[0,3]]);

  });

test('should say Ship sunk', () => {
    const ship = new Ship(1, [[0,3]]);
    const selectedCell = [0,3]

    ship.hit(selectedCell);
    expect(ship.sunked).toBe(true);
    
  });

});

describe('Ship occupiedCells', () => {
    test('Horizontal Positive', () => {
        const ship = new Ship(5, [[0, 0], [0, 4]]);
        expect(ship.occupiedCells).toStrictEqual([[0, 0], [0, 1], [0, 2], [0, 3], [0, 4]]);
    });

    test('Horizontal Negative', () => {
        const ship = new Ship(5, [[0, 4], [0, 0]]);
        expect(ship.occupiedCells).toStrictEqual([[0, 4], [0, 3], [0, 2], [0, 1], [0, 0]]);
    });

    test('Vertical Positive', () => {
        const ship = new Ship(5, [[0, 0], [4, 0]]);
        expect(ship.occupiedCells).toStrictEqual([[0, 0], [1, 0], [2, 0], [3, 0], [4, 0]]);
    });
    test('Vertical Negative', () => {
        const ship = new Ship(5, [[4, 0], [0, 0]]);
        expect(ship.occupiedCells).toStrictEqual([[4, 0], [3, 0], [2, 0], [1, 0], [0, 0]]);
    });

    test('Single cell Ship', () => {
        const ship = new Ship(1, [[0, 0]]);
        expect(ship.occupiedCells).toStrictEqual([[0, 0]]);
    });

});