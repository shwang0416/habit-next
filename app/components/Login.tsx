'use client'

import { redirect } from "next/navigation";
import Button from "./Button";
import { signIn, useSession } from "next-auth/react"

const Login = () => {
    const { data: session } = useSession()
    if(session) {
        const userEmail = session.user?.email || 'unknown-user'
        const userId = userEmail.split('@')[0]
        redirect(`/${userId}`)
    }
    return (
        <div>
            <Button type="primary" styles="px-4 py-2 cursor-pointer w-full" onClick={() => signIn('google')}>Sign In With Google</Button>
        </div>
    )
}

export default Login;