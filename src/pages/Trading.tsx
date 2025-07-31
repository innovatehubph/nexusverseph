import { motion } from "framer-motion";
import { ArrowUpDown, TrendingUp, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Trading = () => {
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
            Trade <span className="text-gradient font-medium">PHPT & Crypto</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Access the Philippine crypto market with PHPT tokens via Paygram API integration and global cryptocurrencies
          </p>
          <Button size="lg" className="button-gradient">
            Start Trading Now
          </Button>
        </div>
      </motion.section>

      {/* Trading Features */}
      <section className="container px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="glass">
            <CardHeader>
              <BarChart3 className="w-8 h-8 text-primary mb-4" />
              <CardTitle>PHPT Trading</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Trade Paygram's PHPT tokens with real-time Philippine market data and instant settlements.
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass">
            <CardHeader>
              <TrendingUp className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Crypto Markets</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Access major cryptocurrencies with advanced charting tools and market analysis.
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass">
            <CardHeader>
              <ArrowUpDown className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Nexuspay Gateway</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Seamless PHP deposits and withdrawals through our secure Nexuspay integration.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Trading;