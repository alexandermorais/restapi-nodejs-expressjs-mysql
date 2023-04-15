import { getConnection } from "./../database/database";

// Method getLanguages
const getLanguages = async (request, response) => {
    try {
        // Variables
        const databaseConnection = await getConnection();
        const queryOne = "SELECT * from languages";

        // Query
        const result = await databaseConnection.query(queryOne);

        // Response
        response.json(result);
    } catch (error) {
        // Response
        response.status(500);
        response.send(error.message);
    }
};

// Export methods
export const methods = {
    getLanguages,
};
