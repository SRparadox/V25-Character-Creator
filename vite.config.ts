import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

import * as path from "path"

export default defineConfig({
    build: {
        outDir: "build",
    },
    server: {
        port: 3000,
    },
    plugins: [react()],
    base: "/V25-Character-Creator/",
    resolve: {
        alias: {
            "~": path.resolve(__dirname, "src"),
        },
    },
})
