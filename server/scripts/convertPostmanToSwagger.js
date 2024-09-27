const fs = require("fs");
const path = require("path");
const postmanToOpenApi = require("postman-to-openapi");
const YAML = require("yamljs");

// Define the output path for the OpenAPI definition
const outputFilePath = path.join("api-docs", "swagger.yml");

// Define the default tag for Postman to OpenAPI conversion
const defaultTag = "General";

// Convert Postman collection to OpenAPI and update the base URL
postmanToOpenApi("blinks_media.postman_collection.json", outputFilePath, {
  defaultTag,
})
  .then(() => {
    // Load the generated OpenAPI definition
    const result = YAML.load(outputFilePath);

    // Update the base URL
    result.servers[0].url = "/";

    // Serialize the object back to YAML
    const updatedYaml = YAML.dump(result);

    // Write the updated YAML to the output file
    fs.writeFileSync(outputFilePath, updatedYaml);

    console.log("Swagger Generation completed successfully");
  })
  .catch((error) => {
    console.error(error);
    console.log("Swagger Generation stopped due to some error");
  });
