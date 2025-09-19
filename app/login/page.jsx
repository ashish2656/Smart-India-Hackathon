"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, ArrowLeft, BookOpen, Users } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-6 animate-fade-in">
        {/* Header */}
        <div className="text-center space-y-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">EduHub</span>
          </div>
          <h1 className="text-2xl font-bold">Sign In to Your Account</h1>
          <p className="text-muted-foreground">Choose your account type to continue</p>
        </div>

        {/* Login Options */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Student Login */}
          <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-primary/50">
            <CardHeader className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center group-hover:animate-bounce-gentle">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl">Student Login</CardTitle>
                <CardDescription>Access your learning dashboard</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full h-12 text-lg font-semibold">
                <Link href="/student/login">Sign In as Student</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Teacher Login */}
          <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-accent/50">
            <CardHeader className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center group-hover:animate-bounce-gentle">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl">Teacher Login</CardTitle>
                <CardDescription>Access your teaching dashboard</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full h-12 text-lg font-semibold border-2 bg-transparent">
                <Link href="/teacher/login">Sign In as Teacher</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/" className="text-primary hover:underline font-medium">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
