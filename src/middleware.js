import { NextResponse } from "next/server"

export function middleware(request){
const dummyUserData = {
    role: "admin",
}
const isProductsPage = request.nextUrl.pathname.startsWith('/products')
const isAdmin = dummyUserData.role == "admi"
if (isProductsPage && !isAdmin) {
    // return NextResponse.redirect(new URL('/', request.url))
    return NextResponse.rewrite(new URL('/', request.url))
}
return NextResponse.next()
}