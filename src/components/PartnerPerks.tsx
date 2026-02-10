import { DollarSign, Palette, Headphones, Wallet, Award, BarChart, Globe, Clock } from "lucide-react";

const PartnerPerks = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Commission-Based System",
      description: "Earn industry-leading commissions on every successful booking with transparent tracking and reporting."
    },
    {
      icon: Palette,
      title: "High Quality Marketing Tools",
      description: "Access professionally designed banners, landing pages, and promotional materials to maximize conversions."
    },
    {
      icon: Headphones,
      title: "Dedicated Account Manager",
      description: "Receive personalized support from your dedicated account manager to optimize your affiliate strategy."
    },
    {
      icon: Wallet,
      title: "Flexible Payout Options",
      description: "Choose from multiple payment methods and customizable payout schedules that work best for you."
    },
    {
      icon: Award,
      title: "Performance Bonuses",
      description: "Unlock additional rewards and incentives as you reach higher performance milestones."
    },
    {
      icon: BarChart,
      title: "Real-Time Analytics",
      description: "Monitor your performance with detailed analytics and insights to track clicks, conversions, and earnings."
    },
    {
      icon: Globe,
      title: "Global Travel Portfolio",
      description: "Promote a diverse range of premium travel services and destinations to suit any audience."
    },
    {
      icon: Clock,
      title: "30-Day Cookie Duration",
      description: "Benefit from extended cookie tracking to ensure you receive credit for all qualified referrals."
    }
  ];

  return (
    <section id="perks" className="py-16 md:py-20 bg-muted/30 rounded-[2.5rem] px-6 md:px-12 my-12 animate-fade-in">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 animate-slide-up">
          Partner Perks
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-1">
          Discover our competitive affiliate benefits and unlock powerful marketing tools and world-class support 
          to help you make the most out of our program
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <div 
              key={index} 
              className={`bg-background p-6 md:p-8 rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all animate-slide-up stagger-${Math.min(index + 1, 6)}`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold mb-2 leading-tight">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PartnerPerks;
