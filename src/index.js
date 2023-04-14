// Import the app.js
import app from "./app";

// Execution of the server created with Node.js
const main = () => {
    // This application listen to the port
    app.listen(app.get("port"));

    // Print
    console.log(`Server on port ${app.get("port")}`);
};

main();
