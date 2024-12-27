import { NextRequest, NextResponse } from 'next/server'
import { EnumTokens } from './services/auth-token.service'
import { ENDPOINTS } from './config/endpoints.config'

export async function middleware(request: NextRequest, response: NextResponse) {
	const { url, cookies } = request

	const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value
	const accessToken = cookies.get(EnumTokens.ACCESS_TOKEN)?.value

	const isAuthPage =
		url.includes(ENDPOINTS.REGISTER) || url.includes(ENDPOINTS.LOGIN)
	const isProfilePage = url.includes('/profile') || url.includes('/dashboard')

	if (isAuthPage && refreshToken) {
		return NextResponse.redirect(new URL(ENDPOINTS.HOME, url))
	}

	if (isAuthPage) {
		return NextResponse.next()
	}

	if (isProfilePage && !refreshToken) {
		return NextResponse.redirect(new URL(ENDPOINTS.LOGIN, url))
	}

	return NextResponse.next()
}