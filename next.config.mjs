/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.infinitum.su',
				port: '',
				pathname: '/**',
			},
		],
	},
	// !!! нерекомндуемая настройка
	experimental: {
		missingSuspenseWithCSRBailout: false,
	},
	typescript: {
		ignoreBuildErrors: true,
		// УБРАТЬ ПОТОМ
	},
}

export default nextConfig;
