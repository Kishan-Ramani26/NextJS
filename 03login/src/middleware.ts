import { NextResponse, NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    const path = request.nextUrl.pathname;
    const isPublic = path === '/login' || path === '/signup' || path === '/verifyemail';

    const token = request.cookies.get('token')?.value || '';

    if(isPublic && token){
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }
 
    if(!isPublic && !token){
        return NextResponse.redirect(new URL('/login', request.url))
    }
}


export const config = {
  matcher:[
    '/',
    '/login',
    '/signup',  
    '/verifyemail',
    '/profile',
    '/dashboard',
  ],
}