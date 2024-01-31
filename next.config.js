const path = require("path")

const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'scss')],
    },
};

module.exports = nextConfig;