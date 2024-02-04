const { readFile, sliceArrayItem } = require("./src/utils/fileHandler");
const {
    handelRobotMoves,
    setRobotMovmentItems,
} = require("./src/utils/handelRobotMoves");

let fileName = "./commands.txt";

const runRobot = () => {
    let fileItems = readFile(fileName);
    let movmentItems = [
        Number(fileItems[1]),
        Number(fileItems[2]),
        fileItems[3],
    ];
    setRobotMovmentItems(movmentItems);
    fileItems = sliceArrayItem(fileItems);
    fileItems.map((item) => {
        handelRobotMoves(item);
    });
};

runRobot();
