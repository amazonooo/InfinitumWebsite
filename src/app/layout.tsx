import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import "./globals.css";
import { Header } from '@/components/layout/Header';
import { ThemeProvider } from '@/providers/theme-provider'
import StarsCanvas from '@/components/ui/stars/Stars'
import Footer from '@/components/layout/Footer'
import { navButtons, navItems } from '@/components/ui/header/navItems'
import dynamic from 'next/dynamic'
import { Bounce, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import QueryProvider from '@/providers/query-provider'

const Sidebar = dynamic(() => import('../components/layout/sidebar/Sidebar'), { ssr: false })

const unbounded = Unbounded({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang='en' className='dark'>
			<body className={`bg-[#09090B] overflow-x-hidden`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					enableSystem
					disableTransitionOnChange
				>
					<QueryProvider>
						<StarsCanvas />
						<Sidebar />
						<Header navItems={navItems} navButtons={navButtons} />
						<ToastContainer
							autoClose={3000}
							limit={3}
							position='top-center'
							hideProgressBar={true}
							closeOnClick
							theme='dark'
							pauseOnHover={false}
							transition={Bounce}
						/>
						{children}
						<Footer />
					</QueryProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
