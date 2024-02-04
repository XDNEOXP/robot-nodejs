let [X, Y, F] = [0, 0, ""];

const setRobotMovmentItems = (movmentItems) => {
    [X, Y, F] = movmentItems;
};

const handelRobotMoves = (move) => {
    switch (move) {
        case "left":
            if (F === "north") {
                F = "west";
            } else if (F === "south") {
                F = "east";
            } else if (F === "east") {
                F = "north";
            } else if (F === "west") {
                F = "south";
            }
            break;
        case "right":
            if (F === "north") {
                F = "east";
            } else if (F === "south") {
                F = "west";
            } else if (F === "east") {
                F = "south";
            } else if (F === "west") {
                F = "north";
            }
            break;
        case "move":
            if (F === "north") {
                Y < 5 ? (Y += 1) : console.log("You Can't Move Any Farther");
            } else if (F === "south") {
                Y > 0 ? (Y -= 1) : console.log("You Can't Move Any Farther");
            } else if (F === "east") {
                X < 5 ? (X += 1) : console.log("You Can't Move Any Farther");
            } else if (F === "west") {
                X > 0 ? (X -= 1) : console.log("You Can't Move Any Farther");
            }
            break;
        case "report":
            console.log(`The Robot Is Now In ${X}, ${Y}, ${F.toUpperCase()}`);
            break;
        default:
            console.log("Please Enter a Defined Command");
            break;
    }
};

module.exports = { handelRobotMoves, setRobotMovmentItems };
