"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"
import {
  Trophy,
  Star,
  Award,
  Gift,
  Crown,
  Zap,
  Target,
  BookOpen,
  ArrowLeft,
  Home,
  Settings,
  LogOut,
  Lock,
  Check,
} from "lucide-react"
import Link from "next/link"

export default function StudentRewards() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Mock rewards data
  const studentData = {
    xp: 2450,
    level: 12,
    badges: 15,
    availableRewards: 3,
  }

  const badges = [
    {
      id: 1,
      title: "First Steps",
      description: "Complete your first lesson",
      icon: Trophy,
      category: "milestone",
      earned: true,
      earnedDate: "2 weeks ago",
      rarity: "common",
    },
    {
      id: 2,
      title: "Math Wizard",
      description: "Score 100% in 5 math games",
      icon: Star,
      category: "subject",
      earned: true,
      earnedDate: "1 week ago",
      rarity: "rare",
    },
    {
      id: 3,
      title: "Speed Learner",
      description: "Complete 3 lessons in one day",
      icon: Zap,
      category: "achievement",
      earned: true,
      earnedDate: "3 days ago",
      rarity: "uncommon",
    },
    {
      id: 4,
      title: "Streak Master",
      description: "Maintain a 7-day streak",
      icon: Target,
      category: "streak",
      earned: true,
      earnedDate: "Today",
      rarity: "rare",
    },
    {
      id: 5,
      title: "Knowledge Seeker",
      description: "Complete 50 lessons",
      icon: BookOpen,
      category: "milestone",
      earned: false,
      progress: 96,
      rarity: "epic",
    },
    {
      id: 6,
      title: "Perfect Score",
      description: "Get 100% in all subjects",
      icon: Award,
      category: "achievement",
      earned: false,
      progress: 75,
      rarity: "legendary",
    },
    {
      id: 7,
      title: "Science Explorer",
      description: "Complete all science lessons",
      icon: Star,
      category: "subject",
      earned: false,
      progress: 60,
      rarity: "rare",
    },
    {
      id: 8,
      title: "Champion",
      description: "Reach Level 15",
      icon: Crown,
      category: "milestone",
      earned: false,
      progress: 80,
      rarity: "legendary",
    },
  ]

  const rewards = [
    {
      id: 1,
      title: "Custom Avatar",
      description: "Unlock a special avatar for your profile",
      cost: 500,
      category: "cosmetic",
      available: true,
      icon: "🎭",
    },
    {
      id: 2,
      title: "XP Booster",
      description: "Double XP for the next 3 games",
      cost: 300,
      category: "booster",
      available: true,
      icon: "⚡",
    },
    {
      id: 3,
      title: "Golden Badge Frame",
      description: "Make your badges shine with golden frames",
      cost: 800,
      category: "cosmetic",
      available: true,
      icon: "🏆",
    },
    {
      id: 4,
      title: "Hint Helper",
      description: "Get 5 extra hints for difficult questions",
      cost: 200,
      category: "utility",
      available: true,
      icon: "💡",
    },
    {
      id: 5,
      title: "Rainbow Theme",
      description: "Unlock colorful rainbow theme for your dashboard",
      cost: 1000,
      category: "cosmetic",
      available: false,
      requiredLevel: 15,
      icon: "🌈",
    },
    {
      id: 6,
      title: "Time Freeze",
      description: "Pause the timer for 30 seconds in timed games",
      cost: 600,
      category: "utility",
      available: false,
      requiredLevel: 10,
      icon: "⏰",
    },
  ]

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case "common":
        return "from-gray-400 to-gray-500"
      case "uncommon":
        return "from-green-400 to-green-500"
      case "rare":
        return "from-blue-400 to-blue-500"
      case "epic":
        return "from-purple-400 to-purple-500"
      case "legendary":
        return "from-yellow-400 to-orange-500"
      default:
        return "from-gray-400 to-gray-500"
    }
  }

  const getRarityText = (rarity) => {
    return rarity.charAt(0).toUpperCase() + rarity.slice(1)
  }

  const filteredBadges = badges.filter((badge) => selectedCategory === "all" || badge.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-6">
              <Link href="/student/dashboard" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Home className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">EduHub</span>
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link href="/student/dashboard" className="text-sm text-muted-foreground hover:text-foreground">
                  Dashboard
                </Link>
                <Link href="/student/games" className="text-sm text-muted-foreground hover:text-foreground">
                  Games
                </Link>
                <Link href="/student/progress" className="text-sm text-muted-foreground hover:text-foreground">
                  Progress
                </Link>
                <Link href="/student/rewards" className="text-sm font-medium text-primary">
                  Rewards
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1 bg-secondary/20 rounded-full">
                <Zap className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium">{studentData.xp} XP</span>
              </div>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container px-4 mx-auto py-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Rewards & Badges</h1>
            <p className="text-muted-foreground">Celebrate your achievements and unlock special rewards</p>
          </div>
          <Link href="/student/dashboard">
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </Button>
          </Link>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card className="text-center p-4 bg-gradient-to-br from-primary/10 to-accent/10">
            <Trophy className="w-8 h-8 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">{badges.filter((b) => b.earned).length}</div>
            <div className="text-sm text-muted-foreground">Badges Earned</div>
          </Card>
          <Card className="text-center p-4 bg-gradient-to-br from-secondary/10 to-yellow-500/10">
            <Star className="w-8 h-8 mx-auto mb-2 text-secondary" />
            <div className="text-2xl font-bold">{studentData.xp}</div>
            <div className="text-sm text-muted-foreground">Total XP</div>
          </Card>
          <Card className="text-center p-4 bg-gradient-to-br from-accent/10 to-cyan-500/10">
            <Crown className="w-8 h-8 mx-auto mb-2 text-accent" />
            <div className="text-2xl font-bold">{studentData.level}</div>
            <div className="text-sm text-muted-foreground">Current Level</div>
          </Card>
          <Card className="text-center p-4 bg-gradient-to-br from-chart-4/10 to-green-500/10">
            <Gift className="w-8 h-8 mx-auto mb-2 text-chart-4" />
            <div className="text-2xl font-bold">{studentData.availableRewards}</div>
            <div className="text-sm text-muted-foreground">Available Rewards</div>
          </Card>
        </div>

        {/* Badges Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Your Badges</h3>
            <select
              className="px-3 py-1 border border-input bg-background rounded-md text-sm"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="milestone">Milestones</option>
              <option value="subject">Subjects</option>
              <option value="achievement">Achievements</option>
              <option value="streak">Streaks</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredBadges.map((badge) => (
              <Card
                key={badge.id}
                className={cn(
                  "relative overflow-hidden transition-all duration-300",
                  badge.earned ? "hover:shadow-xl hover:scale-105" : "opacity-75",
                )}
              >
                <CardContent className="p-4 text-center space-y-3">
                  <div className="relative">
                    <div
                      className={cn(
                        "w-16 h-16 mx-auto rounded-full bg-gradient-to-br flex items-center justify-center",
                        badge.earned ? getRarityColor(badge.rarity) : "from-muted-foreground/20 to-muted-foreground/30",
                      )}
                    >
                      <badge.icon className={cn("w-8 h-8", badge.earned ? "text-white" : "text-muted-foreground")} />
                    </div>
                    {badge.earned && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    )}
                    {!badge.earned && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-muted-foreground/50 rounded-full flex items-center justify-center">
                        <Lock className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>

                  <div>
                    <h4
                      className={cn(
                        "font-bold text-sm mb-1",
                        badge.earned ? "text-foreground" : "text-muted-foreground",
                      )}
                    >
                      {badge.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-2">{badge.description}</p>
                    <Badge
                      variant="outline"
                      className={cn(
                        "text-xs",
                        badge.earned ? `bg-gradient-to-r ${getRarityColor(badge.rarity)} text-white border-none` : "",
                      )}
                    >
                      {getRarityText(badge.rarity)}
                    </Badge>
                  </div>

                  {badge.earned ? (
                    <div className="text-xs text-muted-foreground">Earned {badge.earnedDate}</div>
                  ) : badge.progress ? (
                    <div className="space-y-1">
                      <div className="text-xs text-muted-foreground">{badge.progress}% complete</div>
                      <Progress value={badge.progress} className="h-1" />
                    </div>
                  ) : (
                    <div className="text-xs text-muted-foreground">Not earned yet</div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Rewards Shop */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gift className="w-5 h-5" />
              Rewards Shop
            </CardTitle>
            <CardDescription>Spend your XP to unlock special rewards and power-ups</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {rewards.map((reward) => (
                <Card
                  key={reward.id}
                  className={cn(
                    "relative transition-all duration-300",
                    reward.available ? "hover:shadow-lg hover:scale-105" : "opacity-60",
                  )}
                >
                  <CardContent className="p-4 text-center space-y-3">
                    <div className="text-4xl">{reward.icon}</div>
                    <div>
                      <h4 className="font-bold text-sm mb-1">{reward.title}</h4>
                      <p className="text-xs text-muted-foreground mb-2">{reward.description}</p>
                      <div className="flex items-center justify-center gap-1 text-sm font-medium">
                        <Zap className="w-3 h-3 text-secondary" />
                        <span>{reward.cost} XP</span>
                      </div>
                    </div>

                    {reward.available ? (
                      <Button
                        size="sm"
                        className="w-full"
                        disabled={studentData.xp < reward.cost}
                        variant={studentData.xp >= reward.cost ? "default" : "outline"}
                      >
                        {studentData.xp >= reward.cost ? "Unlock" : "Not enough XP"}
                      </Button>
                    ) : (
                      <div className="space-y-2">
                        <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                          <Lock className="w-3 h-3" />
                          <span>Requires Level {reward.requiredLevel}</span>
                        </div>
                        <Button size="sm" variant="outline" className="w-full bg-transparent" disabled>
                          Locked
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
