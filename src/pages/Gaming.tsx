import { motion } from "framer-motion";
import { Gamepad2, Trophy, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Gaming = () => {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container px-4 pt-32 pb-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-normal mb-6">
            Gaming <span className="text-gradient font-medium">Entertainment</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Enjoy premium gaming experiences integrated within the NexusVerse ecosystem
          </p>
          <Button size="lg" className="button-gradient">
            Start Playing
          </Button>
        </div>
      </motion.section>

      {/* Gaming Platforms */}
      <section className="container px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="glass">
            <CardHeader>
              <Gamepad2 className="w-8 h-8 text-primary mb-4" />
              <CardTitle>747ph.live</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4">
                Experience premium online gaming with 747ph.live integration.
              </p>
              <Button variant="outline" className="w-full">
                Play Now
              </Button>
            </CardContent>
          </Card>
          
          <Card className="glass">
            <CardHeader>
              <Trophy className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Sabong Legend</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4">
                Traditional Filipino sabong gaming powered by AbacusAI technology.
              </p>
              <Button variant="outline" className="w-full">
                Join Match
              </Button>
            </CardContent>
          </Card>
          
          <Card className="glass">
            <CardHeader>
              <Star className="w-8 h-8 text-primary mb-4" />
              <CardTitle>More Games</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4">
                Discover more exciting games coming soon to the NexusVerse platform.
              </p>
              <Button variant="outline" className="w-full">
                Coming Soon
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features */}
      <section className="container px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Seamless Gaming Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Instant Deposits</h3>
              <p className="text-gray-400">
                Use your NexusVerse wallet for instant gaming deposits across all platforms
              </p>
            </div>
            <div className="glass rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Unified Rewards</h3>
              <p className="text-gray-400">
                Earn rewards that work across trading, financial services, and gaming
              </p>
            </div>
            <div className="glass rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Secure Gaming</h3>
              <p className="text-gray-400">
                All gaming activities protected by NexusVerse's enterprise security
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gaming;