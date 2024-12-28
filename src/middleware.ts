import { NextRequest, NextResponse } from 'next/server'
import { EnumTokens } from './services/auth-token.service'
import { ENDPOINTS } from './config/endpoints.config'

export async function middleware(request: NextRequest, response: NextResponse) {
	const { url, cookies } = request

	const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value
  const accessToken = request.cookies.get(EnumTokens.ACCESS_TOKEN)?.value

	const isAuthPage =
		request.url.includes(ENDPOINTS.REGISTER) ||
		request.url.includes(ENDPOINTS.LOGIN)
	const isProtectedPage =
		request.url.includes('/profile') || request.url.includes('/dashboard')

	if (isAuthPage && accessToken) {
		return NextResponse.redirect(new URL(ENDPOINTS.HOME, url))
	}

	if (isAuthPage) {
		return NextResponse.next()
	}

	if (isProtectedPage && !accessToken) {
		return NextResponse.redirect(new URL(ENDPOINTS.LOGIN, url))
	}

	// Раскомментить на проде
	// if (isProfilePage && !refreshToken) {
	// 	return NextResponse.redirect(new URL(ENDPOINTS.LOGIN, url))
	// }

	return NextResponse.next()
} 	