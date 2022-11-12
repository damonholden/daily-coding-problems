const { node } = require("./node");

const serialize = (object) => JSON.stringify(object);
const deserialize = (string) => JSON.parse(string);

JSON.parse.toString();

module.exports  = {serialize, deserialize}
