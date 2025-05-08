import NextAuth from "next-auth";
import { authConfig } from "../auth.config";

const { auth } = NextAuth(authConfig)

export default auth((req) => {
    const isLogged = !!req.auth
    const { nextUrl } = req

    const IsSigninApi = nextUrl.pathname.startsWith("/api/auth")
    const publicRoutes = ["/"]
    const publicUrl = publicRoutes.includes(nextUrl.pathname)

    if(IsSigninApi){
        return
    }

    if(publicUrl){
        if(isLogged){
            return Response.redirect(new URL("/dashboard", nextUrl))
        }
        return
    }

    if(!isLogged){
        return Response.redirect(new URL("/", nextUrl))
    }
})

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}