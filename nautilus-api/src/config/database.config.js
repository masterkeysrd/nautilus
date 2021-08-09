const config = {
    server: process.env.DATABASE_SERVER,
    user: process.env.DATABASE_USER,
    port: process.env.DATABASE_PORT,
    password: process.env.DATABASE_PASSWORD,
    instance: process.env.DATABASE_INSTANCE
};

module.exports = config;