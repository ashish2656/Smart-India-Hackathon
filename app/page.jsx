"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { GraduationCap, Users, BookOpen, Trophy, Star, ArrowRight, Play, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">EduHub</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Already have an account?
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container px-4 mx-auto">
          <div className="text-center space-y-8 animate-fade-in">
            <Badge className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium">
              <Star className="w-4 h-4 fill-current" />
              Trusted by 10,000+ Students & Teachers
            </Badge>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
                Choose Your
                <br />
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Learning Journey
                </span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
                Join our educational platform designed for rural students and teachers. Experience gamified learning or
                powerful teaching tools.
              </p>
            </div>

            {/* Role Selection Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16 animate-slide-up">
              {/* Student Card */}
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border-2 hover:border-primary/50 bg-gradient-to-br from-card to-primary/5">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center group-hover:animate-bounce-gentle">
                    <BookOpen className="w-10 h-10 text-white" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">I'm a Student</h3>
                    <p className="text-muted-foreground text-pretty">
                      Play games, earn XP, unlock rewards, and track your learning progress through fun activities.
                    </p>

                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge variant="secondary" className="text-xs">
                        Games & Quizzes
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        XP & Rewards
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Progress Tracking
                      </Badge>
                    </div>
                  </div>

                  <Button
                    asChild
                    size="lg"
                    className="w-full h-12 text-lg font-semibold group-hover:bg-primary group-hover:text-primary-foreground"
                  >
                    <Link href="/student/signup">
                      <Play className="w-5 h-5 mr-2" />
                      Start Learning
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Teacher Card */}
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border-2 hover:border-accent/50 bg-gradient-to-br from-card to-accent/5">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-accent to-secondary rounded-3xl flex items-center justify-center group-hover:animate-bounce-gentle">
                    <Users className="w-10 h-10 text-white" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">I'm a Teacher</h3>
                    <p className="text-muted-foreground text-pretty">
                      Monitor student progress, view detailed analytics, and assign tasks to enhance learning outcomes.
                    </p>

                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge variant="outline" className="text-xs">
                        Student Analytics
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Progress Reports
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Task Assignment
                      </Badge>
                    </div>
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full h-12 text-lg font-semibold group-hover:bg-accent group-hover:text-accent-foreground border-2 bg-transparent"
                  >
                    <Link href="/teacher/signup">
                      <BarChart3 className="w-5 h-5 mr-2" />
                      Start Teaching
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-8 justify-center pt-16 animate-scale-in">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">80+</div>
                <div className="text-sm text-muted-foreground">Learning Games</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">8</div>
                <div className="text-sm text-muted-foreground">Grade Levels</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">4</div>
                <div className="text-sm text-muted-foreground">Core Subjects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-chart-4">500+</div>
                <div className="text-sm text-muted-foreground">Active Teachers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl animate-float"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl animate-bounce-gentle"></div>
        <div className="absolute bottom-20 left-20 w-14 h-14 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl animate-wiggle"></div>
        <div className="absolute bottom-40 right-10 w-10 h-10 bg-gradient-to-br from-chart-4/20 to-accent/20 rounded-2xl animate-float"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">EduHub?</span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Designed specifically for rural education with features that make learning accessible and engaging
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Trophy,
                title: "Gamified Learning",
                description: "Earn XP, badges, and rewards while mastering subjects",
                color: "from-primary to-accent",
              },
              {
                icon: BarChart3,
                title: "Detailed Analytics",
                description: "Track progress with comprehensive reports and insights",
                color: "from-accent to-secondary",
              },
              {
                icon: BookOpen,
                title: "Grade-wise Content",
                description: "Tailored curriculum for grades 1-8 with age-appropriate challenges",
                color: "from-secondary to-chart-4",
              },
              {
                icon: Users,
                title: "Teacher Tools",
                description: "Powerful dashboard for monitoring and managing student progress",
                color: "from-chart-4 to-primary",
              },
            ].map((feature, index) => (
              <div key={feature.title} className="text-center space-y-4 group">
                <div
                  className={cn(
                    "w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br flex items-center justify-center",
                    feature.color,
                    "group-hover:animate-wiggle transition-all duration-300",
                  )}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-pretty">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container px-4 mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold">EduHub</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Empowering rural education through technology • Free to use • Works offline
          </p>
        </div>
      </footer>
    </div>
  )
}
