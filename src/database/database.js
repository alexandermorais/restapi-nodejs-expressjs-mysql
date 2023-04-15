// File to manage database connections

// Import promise-mysql. This allows to connect to database
import mysql from "promise-mysql";
import config from "./../config";

// Const of connection
const connection = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password,
});

// Module of getConnection
export const getConnection = () => {
    return connection;
};

// Export the module
module.exports = {
    getConnection,
};
