"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { useAuth } from "../contexts/AuthContext"
import { Home, Users, BookOpen, BarChart3, Settings, Menu, X, LogOut, GraduationCap } from "lucide-react"

export default function TeacherNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { user, logout } = useAuth()

  const navItems = [
    { href: "/teacher/dashboard", icon: Home, label: "Dashboard" },
    { href: "/teacher/students", icon: Users, label: "Students" },
    { href: "/teacher/assignments", icon: BookOpen, label: "Assignments" },
    { href: "/teacher/analytics", icon: BarChart3, label: "Analytics" },
    { href: "/teacher/settings", icon: Settings, label: "Settings" },
  ]

  const handleLogout = () => {
    logout()
    setIsOpen(false)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        className="fixed top-4 left-4 z-50 md:hidden bg-primary text-primary-foreground p-2 rounded-lg shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Navigation Sidebar */}
      <motion.nav
        className={`fixed left-0 top-0 h-full bg-card border-r border-border z-40 w-64 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
        initial={false}
      >
        <div className="p-6">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <GraduationCap className="text-white" size={20} />
            </div>
            <div>
              <h1 className="font-bold text-lg text-foreground">EduGameHub</h1>
              <p className="text-xs text-muted-foreground">Teacher Portal</p>
            </div>
          </motion.div>

          {/* User Info */}
          <motion.div
            className="bg-muted/50 rounded-lg p-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <GraduationCap className="text-primary-foreground" size={20} />
              </div>
              <div>
                <p className="font-medium text-foreground">{user?.name || "Teacher"}</p>
                <p className="text-xs text-muted-foreground">Educator</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Items */}
          <div className="space-y-2">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon size={20} />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* Logout Button */}
          <motion.button
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200 w-full mt-8"
            onClick={handleLogout}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </motion.button>
        </div>
      </motion.nav>

      {/* Main Content Spacer */}
      <div className="md:ml-64" />
    </>
  )
}
