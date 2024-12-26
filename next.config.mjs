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
			{
				protocol: 'https',
				hostname: 'steamuserimages-a.akamaihd.net',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'avatars.mds.yandex.net',
				port: '',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'i.pinimg.com',
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
