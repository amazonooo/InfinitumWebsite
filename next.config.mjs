/** @type {import('next').NextConfig} */
const nextConfig = {
  // !!! нерекомндуемая настройка
	experimental: {
		missingSuspenseWithCSRBailout: false,
	},
}

export default nextConfig;
