import { comparePassword } from "@/utils/lib";
import { prisma } from "@/utils/prisma";
import { signinObject } from "@/utils/zod";
import { CredentialsSignin, NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authConfig : NextAuthConfig = {
    providers : [
        Credentials({
            name : "credentials",
            credentials : {
                email : {label : "email", placeholder : "your email id here"},
                password : {label : "password", placeholder : "password"},
                schoolName : {label : "School Name", placeholder : "write your school Name"}
            },
            authorize : async (credentials) => {
                const parsedData = signinObject.safeParse(credentials)

                if(!parsedData.success){
                    throw new CredentialsSignin("Invalid inputs")
                }

                const { email, password, schoolName } = parsedData.data

                try {
                    const user = await prisma.user.findUnique({
                        where : {
                            email : email
                        }
                    })


                    if(!user){
                        const newUser = await prisma.user.create({
                            data : {
                                email,
                                password,
                                schoolName
                            }
                        })
                        return {
                            email : newUser.email
                        }
                    } 

                    if(!user.password){
                        throw new CredentialsSignin(" no fuckiun password")
                    }

                    const isValid = await comparePassword({
                        inputPassword : password,
                        password : user.password
                    })

                    if(!isValid){
                        throw new CredentialsSignin("invalid password")
                    }

                    return {email : user.email}
                } catch (error) {
                    throw new Error(`sign in error ${error}`)
                }
            }
        })
    ],
    callbacks : {
        async jwt({token, user}) {
            if(user){
                token.email = user.email
            }

            return token
        },
        async session({session, token}){
            if(token.sub){
                session.user.email = token.email as string
            }
            return session
        },
        signIn : async({account}) => {
            if(account?.provider === "credentials"){
                return true
            } else {
                return false
            }
        }
    }
}