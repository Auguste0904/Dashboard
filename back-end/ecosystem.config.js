module.exports = {
  apps: [{
    name: "dashboard",
    script: "./app.js",
    watch: true,
    watch: ["app.js", "controllers", "models", "routes"],
    ignore_watch: ["node_modules"],
    exec_mode: "cluster",
    instances: 1,
    env: {
      "NODE_ENV": "development",
      "NODE_ENV": "production"
    }
  }],
  externals: {
    "sequelize": "require('sequelize')"
  }
}
