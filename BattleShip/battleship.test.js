const { Ship, GameBoard, Player } = require('./battleship');

describe('Ship Class', () => {
  test('should create a Ship with lenght and position', () => {
    const ship = new Ship('5', '[[0,0],[0,4]]');

    expect(ship.length).toBe('5');
    expect(ship.position).toBe('[[0,0],[0,4]]');
    expect(ship.hitCell).toStrictEqual([]);
    expect(ship.sunked).toBe(false);
  });

  test('should say Hit ship at selectedCell position', () => {
    const ship = new Ship(5, [[0, 0], [0, 4]]);
    const selectedCell = [0, 3]

    ship.hit(selectedCell);
    expect(ship.hitCell).toStrictEqual([[0, 3]]);

  });

  test('should say Ship sunk', () => {
    const ship = new Ship(1, [[0, 3]]);
    const selectedCell = [0, 3]

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

describe("GameBoard tests", () => {

  test("Board Size", () => {
    const myBoard = new GameBoard(0, 9);
    myBoard.placeShip(3, [[0, 0], [0, 2]]);
    expect(myBoard.size).toStrictEqual([[0, 0], [9, 9]])
  });

  test("ship Placement", () => {
    const myBoard = new GameBoard(0, 9);
    myBoard.placeShip(3, [[0, 0], [0, 2]]);
    const ship = myBoard.ships[0]
    expect(ship.occupiedCells).toStrictEqual([[0, 0], [0, 1], [0, 2]])
  });

  test("ship hit", () => {
    const myBoard = new GameBoard(0, 9);
    myBoard.placeShip(3, [[0, 0], [0, 2]]);
    myBoard.receiveAttack([0, 0]);
    const ship = myBoard.ships[0]
    expect(ship.hitCell).toStrictEqual([[0, 0]])
  });

  test("ship missed", () => {
    const myBoard = new GameBoard(0, 9);
    myBoard.placeShip(3, [[0, 0], [0, 2]]);
    myBoard.receiveAttack([0, 3]);
    expect(myBoard.missedShot).toStrictEqual([[0, 3]])
  });

  test("Attack on the same Cell raise Error", () => {
    const myBoard = new GameBoard(0, 9);
    myBoard.placeShip(3, [[0, 0], [0, 2]]);
    myBoard.receiveAttack([0, 3]);
    myBoard.receiveAttack([0, 3]);
    expect(myBoard.missedShot).toStrictEqual([[0, 3]])
  });
})

describe("Create Player , and simulate Game", () => {
  let player1;
  let player2;

  beforeEach(() => {
    // Fresh instances for each test
    player1 = new Player("Sewsi", true);
    player2 = new Player("computer", false);

    player1.board.placeShip(3, [[0, 0], [0, 2]]);
    player2.board.placeShip(3, [[0, 0], [0, 2]]);
  });

  test("Create a computer player", () => {
    expect(player2.name).toBe("computer");
    expect(player2.isReal).toBe(false);
    expect(player2.board).toBeInstanceOf(GameBoard);
  });

  test("Create a user player", () => {
    expect(player1.name).toBe("Sewsi");
    expect(player1.isReal).toBe(true);
    expect(player1.board).toBeInstanceOf(GameBoard);
  });

  test("Simulate a computer attack", () => {
    player2.attack(player1.board);
    // Check that computer made an attack (either hit or miss)
    const totalAttacks = player1.board.ships[0].hitCell.length + player1.board.missedShot.length;
    expect(totalAttacks).toBe(1);
  });

  test("Computer doesn't attack same cell twice", () => {
    for (let i = 0; i < 10; i++) {
        player2.attack(player1.board);
    }
    const totalAttacks = player1.board.ships[0].hitCell.length + 
                         player1.board.missedShot.length;
    expect(totalAttacks).toBe(10);
    expect(player2.availableCell.length).toBe(100 - 10); 
});
  
  test("Simulate a user attack", () => {
    player1.attack(player2.board, [0, 0]);
    // Check that the ship was hit
    expect(player2.board.ships[0].hitCell).toContainEqual([0, 0]);
  });

  test("Simulate a user sinking a ship", () => {
    player1.attack(player2.board, [0, 0]);
    player1.attack(player2.board, [0, 1]);
    player1.attack(player2.board, [0, 2]);
    expect(player2.board.ships[0].sunked).toBe(true);
  });

})