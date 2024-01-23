async function generateProducts() {
  try {
    const fetch = (await import("node-fetch")).default;

    const response = await fetch("https://static8-api.herokuapp.com/babyhaj");
    const result = await response.json();
    // console.log("Result ::", result.products);

    // Convert the array of objects to a JSON string
    const jsonString = `export const product = ${JSON.stringify(
      result.products,
      null,
      2
    )};`;

    // Specify the file path where you want to save the JSON data
    const filePath = "utils/output.js";

    const fs = (await import("fs")).default;
    // Write the JSON string to the file
    fs.writeFile(filePath, jsonString, (err) => {
      if (err) {
        console.error("Error writing file:", err);
      } else {
        console.log("File written successfully:", filePath);
      }
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to handle it elsewhere if needed
  }
}

// Check if this script is the main module
if (require.main === module) {
  // If so, execute the generateProducts function
  generateProducts()
    .then((products) => {
      // Handle the products
      console.log("Products:", products);
    })
    .catch((error) => {
      // Handle the error
      console.error("Error:", error);
      process.exit(1); // Terminate the process with an error code
    });
}

module.exports = generateProducts;
