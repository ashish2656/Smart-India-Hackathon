"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Home, BookOpen, Users, Trophy, Settings, Wifi, WifiOff } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

interface FunHeaderProps {
  currentPage?: string
  studentName?: string
  grade?: number
}

export function FunHeader({ currentPage = "home", studentName, grade }: FunHeaderProps) {
  const [isOnline, setIsOnline] = useState(true)

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  const navItems = [
    { href: "/", icon: Home, label: "Home", id: "home" },
    { href: "/dashboard", icon: BookOpen, label: "Dashboard", id: "dashboard" },
    { href: "/games", icon: Trophy, label: "Games", id: "games" },
    { href: "/teacher", icon: Users, label: "Teacher", id: "teacher" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center group-hover:animate-wiggle">
            <span className="text-2xl font-bold text-white">🎓</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              EduGameHub
            </h1>
            <p className="text-xs text-muted-foreground">Fun Learning for Everyone!</p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => (
            <Button
              key={item.id}
              asChild
              variant={currentPage === item.id ? "default" : "ghost"}
              size="lg"
              className={cn(
                "rounded-2xl font-medium transition-all duration-300",
                "hover:scale-105 hover:animate-bounce-gentle",
                currentPage === item.id && "shadow-lg",
              )}
            >
              <Link href={item.href}>
                <item.icon className="w-5 h-5 mr-2" />
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>

        {/* User Info & Status */}
        <div className="flex items-center space-x-3">
          {/* Online Status */}
          <Badge
            variant={isOnline ? "default" : "destructive"}
            className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full"
          >
            {isOnline ? <Wifi className="w-4 h-4" /> : <WifiOff className="w-4 h-4" />}
            {isOnline ? "Online" : "Offline"}
          </Badge>

          {/* Student Info */}
          {studentName && (
            <div className="hidden sm:flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
                <span className="text-lg">👦</span>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">{studentName}</p>
                {grade && <p className="text-xs text-muted-foreground">Grade {grade}</p>}
              </div>
            </div>
          )}

          <Button variant="ghost" size="icon" className="rounded-full">
            <Settings className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
