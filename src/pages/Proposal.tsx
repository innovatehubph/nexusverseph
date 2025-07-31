import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Globe, Zap, Shield, Gamepad2, Coins, Users, Rocket, Star } from "lucide-react";

const Proposal = () => {
  const colorPalette = [
    { name: "Royal Purple", color: "#57317A", description: "Main color – premium, secure, elegant" },
    { name: "Neon Cyan", color: "#20C1D9", description: "Accent – techy, energetic" },
    { name: "Deep Navy", color: "#0F0F1C", description: "Background – futuristic, dark mode" },
    { name: "Almost White", color: "#F9FAFB", description: "Text/contrast on dark" }
  ];

  const taglines = [
    "Where Crypto Meets Reality",
    "The Future of Connected Finance and Gaming",
    "Power Your Digital Universe",
    "Seamless. Secure. Limitless."
  ];

  const messagingPillars = [
    { icon: <Globe className="w-5 h-5" />, title: "Borderless Payments" },
    { icon: <Gamepad2 className="w-5 h-5" />, title: "Gamified Earning" },
    { icon: <Coins className="w-5 h-5" />, title: "Hybrid Crypto + Fiat" },
    { icon: <Shield className="w-5 h-5" />, title: "Trust & Security" },
    { icon: <Zap className="w-5 h-5" />, title: "AI-Assisted Transactions" }
  ];

  const nextSteps = [
    "Finalize logo variants (flat, icon, dark/light mode)",
    "Secure domain and social handles (nexusverse.io, @nexusverse)",
    "Build landing page MVP with waitlist form, use case explainer, early supporter badge system",
    "Launch teaser campaigns across Facebook, TikTok, Telegram, and YouTube shorts"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Hero Logo Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="relative overflow-hidden rounded-2xl bg-black p-16 md:p-24">
              <div className="flex items-center justify-center">
                <img 
                  src="/lovable-uploads/8eaac305-4f63-49e0-ae2b-a7b4e8c04c7b.png" 
                  alt="NexusVerse Brand Logo" 
                  className="h-32 md:h-48 w-auto cyber-glow"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50"></div>
            </div>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 glass">
              Partnership Proposal
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              NexusVerse
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive branding proposal for our futuristic, global ecosystem combining crypto, trading, gaming, and fiat gateway services.
            </p>
          </motion.div>

          {/* Brand Identity */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <Card className="p-8 glass">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Star className="w-8 h-8 text-primary" />
                Brand Name & Meaning
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Nexus</h3>
                  <p className="text-muted-foreground">Connection, network, integration.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Verse</h3>
                  <p className="text-muted-foreground">Universe, expansive, immersive digital ecosystem.</p>
                </div>
              </div>
              <Separator className="my-6" />
              <p className="text-lg">
                Together, it evokes the image of a <span className="font-semibold text-primary">vast digital world where multiple technologies converge</span>.
              </p>
            </Card>
          </motion.section>

          {/* Taglines */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <Card className="p-8 glass">
              <h2 className="text-3xl font-bold mb-6">Brand Taglines</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {taglines.map((tagline, index) => (
                  <div key={index} className="p-4 rounded-lg border bg-card/50">
                    <p className="text-lg font-medium">{tagline}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.section>

          {/* Color Palette */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <Card className="p-8 glass">
              <h2 className="text-3xl font-bold mb-6">Color Palette</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {colorPalette.map((color, index) => (
                  <div key={index} className="text-center">
                    <div 
                      className="w-full h-24 rounded-lg mb-3 border"
                      style={{ backgroundColor: color.color }}
                    ></div>
                    <h3 className="font-semibold mb-1">{color.name}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{color.color}</p>
                    <p className="text-xs text-muted-foreground">{color.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.section>

          {/* Messaging Pillars */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <Card className="p-8 glass">
              <h2 className="text-3xl font-bold mb-6">Messaging Pillars</h2>
              <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                {messagingPillars.map((pillar, index) => (
                  <div key={index} className="text-center p-4 rounded-lg border bg-card/50">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {pillar.icon}
                    </div>
                    <p className="font-medium text-sm">{pillar.title}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.section>

          {/* Brand Tone */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
          >
            <Card className="p-8 glass">
              <h2 className="text-3xl font-bold mb-6">Brand Tone & Voice</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Voice</h3>
                  <p className="text-muted-foreground">Smart, bold, and innovative.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Tone</h3>
                  <p className="text-muted-foreground">Confident but approachable. Appeals to Gen Z, Millennial, and emerging-market professionals.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Target</h3>
                  <p className="text-muted-foreground">Local (Filipino) and international users seeking financial innovation.</p>
                </div>
              </div>
            </Card>
          </motion.section>

          {/* Smart Add-ons */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <Card className="p-8 glass">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Zap className="w-8 h-8 text-primary" />
                Smart Add-Ons (AI-powered)
              </h2>
              <div className="space-y-4">
                <div className="p-4 rounded-lg border bg-card/50">
                  <h3 className="font-semibold mb-2">Voice Assistant (Nova)</h3>
                  <p className="text-muted-foreground">Real-time chat support + walkthroughs.</p>
                </div>
                <div className="p-4 rounded-lg border bg-card/50">
                  <h3 className="font-semibold mb-2">Gamification</h3>
                  <p className="text-muted-foreground">Daily login streaks, badge rewards, unlockable content.</p>
                </div>
                <div className="p-4 rounded-lg border bg-card/50">
                  <h3 className="font-semibold mb-2">PHPT Leaderboard</h3>
                  <p className="text-muted-foreground">Display top referrers, traders, or gamers weekly.</p>
                </div>
              </div>
            </Card>
          </motion.section>

          {/* Next Steps */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-16"
          >
            <Card className="p-8 glass">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Rocket className="w-8 h-8 text-primary" />
                Next Steps
              </h2>
              <div className="space-y-3">
                {nextSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-muted-foreground">{step}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.section>

          {/* Call to Action */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <Card className="p-8 glass">
              <h2 className="text-3xl font-bold mb-4">Ready to Build the Future?</h2>
              <p className="text-xl text-muted-foreground mb-6">
                "The Verse is Coming. Are You Ready?"
              </p>
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center justify-center gap-2 text-lg mb-4">
                  <Users className="w-6 h-6 text-primary" />
                  <span className="font-semibold">Let's discuss this vision together</span>
                </div>
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6"
                  onClick={() => window.open('/platform', '_blank')}
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  View Live Platform Demo
                </Button>
                <p className="text-sm text-muted-foreground">
                  See the NexusVerse ecosystem in action
                </p>
              </div>
            </Card>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Proposal;