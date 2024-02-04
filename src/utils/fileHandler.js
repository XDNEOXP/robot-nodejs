const fs = require("fs");

const readFile = (fileName) => {
    let fileItems = fs
        .readFileSync(fileName)
        .toString()
        .toLowerCase()
        .split(/[,\s/]+/);
    return fileItems;
};

const sliceArrayItem = (array) => {
    let index;
    index = array.findIndex(
        (item) =>
            (item == "south") |
            (item == "north") |
            (item == "west") |
            (item == "east")
    );
    return array.slice(index + 1);
};

module.exports = { readFile, sliceArrayItem };
