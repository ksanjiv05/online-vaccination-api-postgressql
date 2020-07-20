const { client } = require("../database/db_connection");

module.exports.executeQuery = async (sqlquery) => {
  let flag = false;
  try {
    client.connect();
    const query = client.query(sqlquery);
    console.log(query);
    await query.on("end", () => {
      console.log("Query successfully executed ");
      //client.end();
      flag = true;
    });
    return flag;
  } catch (err) {
    console.error("Error in Query");
    return flag;
  }
};

module.exports.readQuery = async (sqlquery) => {
  let result = [];
  try {
    client.connect();
    const query = client.query(sqlquery);
    await query.on("row", (row) => {
      console.log(row);
      result.push(row);
    });
    await query.on("end", () => {
      console.log("Query successfully executed ", result);
      //client.end();
    });
    return result;
  } catch (err) {
    console.error("Error in Query");
    return flag;
  }
};
