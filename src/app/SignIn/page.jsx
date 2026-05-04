"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import Link from "next/link";
import { GrGoogle } from "react-icons/gr";

export default function SignIpPage() {
    const onSubmit = async (e) => {
        e.preventDefault();

        console.log('submit button is clickked')


        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(name , email, password) 
        const { data, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: '/'
        })
        console.log({ data, error })
    };

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: 'google'
        })
    }

    return (
        <Card className="border mx-auto w-125 py-10 my-5">
            <Button onClick={handleGoogleSignIn} className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:via-purple-800 hover:to-pink-700 w-full"> <GrGoogle /> Login With Google</Button>

            <h1 className="text-center text-2xl font-bold">Sign In</h1>

            <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>



                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }

                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>

                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }

                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <Description>
                        Must be at least 8 characters with 1 uppercase and 1 number
                    </Description>
                    <FieldError />
                </TextField>

                <div className="flex flex-col gap-5">
                    <Button type="submit" className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:via-purple-800 hover:to-pink-700 w-full">
                        <Check />
                        Submit
                    </Button>

                </div>
                <p className="text-center">or</p>
                <Link href="/SignUp">
                <Button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:via-purple-800 hover:to-pink-700 w-full">
                    Create new account
                </Button>
                </Link>
                
            </Form>
            
            
        </Card>
    );
}