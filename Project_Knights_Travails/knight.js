function knightMoves(startingPos, EndingPos) {

    const moves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ]

    function isInbound([x, y]) {
        if (x > 7 || x < 0 || y > 7 || y < 0) return false;
        return true;
    }

    if (!isInbound(startingPos) || !isInbound(EndingPos)) {
        console.log("Out of bound for one or both position , can't process");
    }

    if (startingPos[0] === EndingPos[0] && startingPos[1] === EndingPos[1]) {
        console.log(`You made it in ${current.path.length - 1} moves! Here's your path:`);
        current.path.forEach(pos => console.log(pos));
        return current.path;
    }

    let queue = [{
        position: startingPos,
        path: [startingPos]
    }];
    let visited = new Set();
    visited.add(`${startingPos[0]},${startingPos[1]}`);

    while (queue.length > 0) {
        const current = queue.shift();
        const [x, y] = current.position;
        if (current.position[0] === EndingPos[0] && current.position[1] === EndingPos[1]) {
            console.log(`You made it in ${current.path.length - 1} moves! Here's your path:`);
            current.path.forEach(pos => console.log(pos));
            return current.path;
        }
        for (const [mx, my] of moves) {
            const newX = x + mx;
            const newY = y + my;
            const newPos = [newX, newY];
            const posKey = `${newX},${newY}`;
            if (!isInbound(newPos) || visited.has(posKey)) {
                continue;
            }
            visited.add(`${newX},${newY}`);
            queue.push({
                position: newPos,
                path: [...current.path, newPos]
            });

        }
    }
}