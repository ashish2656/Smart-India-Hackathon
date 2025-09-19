export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center">
      <div className="text-center space-y-4">
        <div className="text-6xl animate-bounce-gentle">🎮</div>
        <h2 className="text-2xl font-bold">Loading Game...</h2>
        <p className="text-muted-foreground">Get ready for some fun learning!</p>
      </div>
    </div>
  )
}
