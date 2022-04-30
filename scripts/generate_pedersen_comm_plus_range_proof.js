const fs = require("fs");

const inputs = {
  "H": [
    "6230554789957970145215337505398881261822212318664924668379426670874097221003",
    "5398230348265168451715249421208726036420771114427148549530635721570527592474"
  ],
  "r": "15234991401612976859424945774878329190532666920322606448273387428648700648199",
  "v": "805",
  "comm": [
    "5434698982234190249305374094631383876778256933564855719986344407296692881880",
    "15114311991195134539210677959285812356643640052349155301332867067573555804389"
  ],
  "a": "0",
  "b": "1000",
  "c": "10000",
  "balance": "2000"
}
fs.writeFileSync(
  "./input.json",
  JSON.stringify(inputs),
  "utf-8"
);
