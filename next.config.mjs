/** @type {import('next').NextConfig} */
const nextConfig = {
	// !!! нерекомндуемая настройка
	experimental: {
		missingSuspenseWithCSRBailout: false,
	},
	typescript: {
		ignoreBuildErrors: true
		// УБРАТЬ ПОТОМ
	}
}

export default nextConfig;
