import { motion } from "framer-motion";
import { CreditCard, Send, Smartphone, Banknote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Financial = () => {
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
            Complete <span className="text-gradient font-medium">Financial Services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Pay bills, load airtime, send remittances, get loans - all powered by Platapay integration
          </p>
          <Button size="lg" className="button-gradient">
            Explore Services
          </Button>
        </div>
      </motion.section>

      {/* Financial Services */}
      <section className="container px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="glass">
            <CardHeader>
              <CreditCard className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Bills Payment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 text-sm">
                Pay utilities, internet, loans, and government fees instantly through Platapay.
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass">
            <CardHeader>
              <Smartphone className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Airtime Loading</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 text-sm">
                Load prepaid credits for all major Philippine telecom networks.
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass">
            <CardHeader>
              <Send className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Remittance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 text-sm">
                Send money locally and internationally with competitive rates.
              </p>
            </CardContent>
          </Card>
          
          <Card className="glass">
            <CardHeader>
              <Banknote className="w-8 h-8 text-primary mb-4" />
              <CardTitle>Loans & Cash</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 text-sm">
                Access quick loans and cash-in/cash-out services nationwide.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Financial;