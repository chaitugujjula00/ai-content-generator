/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.jsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai-content-generator_owner:PWYmOzI5f4vR@ep-damp-dawn-a50b5wbt.us-east-2.aws.neon.tech/ai-content-generator?sslmode=require',
    }
  };
  