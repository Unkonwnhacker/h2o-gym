import { defineConfig } from "prisma/config";
import path from "path";

export default defineConfig({
  earlyAccess: true,
  schema: "./prisma/schema.prisma",
  datasource: {
    url: "file:" + path.join(process.cwd(), "prisma", "dev.db"),
  },
});
