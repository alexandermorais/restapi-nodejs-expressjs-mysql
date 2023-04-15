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

// Method addLanguage
const addLanguage = async (request, response) => {
    try {
        // Variables
        const { name, programmers } = request.body;
        const language = { name, programmers };
        const databaseConnection = await getConnection();
        const queryOne = "INSERT INTO languages SET ?";

        // Validation
        if (name === undefined || programmers === undefined) {
            response
                .status(400)
                .json({ message: "Bad request. Please fill all field." });
        }

        // Query
        await databaseConnection.query(queryOne, language);

        // Print result
        response.json({ message: "Language added!" });
    } catch (error) {
        // Response
        response.status(500);
        response.send(error.message);
    }
};

// Export methods
export const methods = {
    getLanguages,
    addLanguage,
};
