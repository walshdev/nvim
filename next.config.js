module.exports = {
	compiler: {
		styledComponents: true,
	},
	env: {
		API_URL: process.env.API_URL || "http://next-smrt.csprance.localhost/api",
		API_TOKEN: process.env.API_TOKEN || "API_TOKEN"
	},
	reactStrictMode: true,
};
