import { NextRequest, NextResponse } from 'next/server'
import { EnumTokens } from './services/auth-token.service'
import { ENDPOINTS } from './config/endpoints.config'

export async function middleware(request: NextRequest) {
	const { url, cookies } = request

	const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value

	const isAuthPage = url.includes('/login') || url.includes('/register')
	const isResetPasswordPage = url.includes('/reset-password')

	if (isAuthPage || isResetPasswordPage) {
		if (refreshToken) return NextResponse.redirect(new URL(ENDPOINTS.PROFILE, url))

		return NextResponse.next()
	}

	if (!refreshToken) {
		return NextResponse.redirect(new URL(ENDPOINTS.LOGIN, url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/register', '/login', '/reset-password', '/profile'],
}
