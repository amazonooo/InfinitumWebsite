import { NextRequest, NextResponse } from 'next/server'
import { EnumTokens } from './services/auth-token.service'
import { ENDPOINTS } from './config/endpoints.config'

export async function middleware(request: NextRequest, response: NextResponse) {
	const { url, cookies } = request

	const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value

	const isAuthPage = url.includes(ENDPOINTS.REGISTER) || url.includes(ENDPOINTS.LOGIN)

	if (isAuthPage && refreshToken) {
		return NextResponse.redirect(new URL(ENDPOINTS.HOME, url))
	}

	if (isAuthPage) {
		return NextResponse.next()
	}

	//TODO: Если переходит в профиль/лк и нет токенов, то на авторизацию

	return NextResponse.next()
}