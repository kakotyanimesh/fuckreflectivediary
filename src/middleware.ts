import NextAuth from "next-auth";
import { authConfig } from "../auth.cofig";

const { auth } = NextAuth(authConfig)

export default auth((req) => {
    const isLogged = !!req.auth
    const { nextUrl } = req

    const IsSigninApi = nextUrl.pathname.startsWith("/api/auth/*")
    const publicUrl = ["/"].includes(nextUrl.pathname)

    if(IsSigninApi){
        return
    }

    if(publicUrl){
        if(isLogged){
            return Response.redirect(new URL("/dashboard", nextUrl))
        }
        return
    }

    if(!isLogged && !publicUrl){
        return Response.redirect(new URL("/", nextUrl))
    }
})