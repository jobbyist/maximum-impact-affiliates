import { UserPlus, Share2, DollarSign, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up",
      description: "Join our affiliate program in minutes with a simple registration process. No fees, no commitments."
    },
    {
      icon: Share2,
      title: "Share & Promote",
      description: "Use our high-quality marketing materials and unique tracking links to promote our travel services to your audience."
    },
    {
      icon: DollarSign,
      title: "Earn Commissions",
      description: "Receive competitive commissions for every qualified booking made through your affiliate links."
    },
    {
      icon: TrendingUp,
      title: "Grow Together",
      description: "Scale your earnings with our dedicated support team and access to exclusive promotional opportunities."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-20 animate-fade-in">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 animate-slide-up">
          How It Works
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up stagger-1">
          Getting started with our affiliate program is simple and straightforward
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div 
              key={index} 
              className={`text-center space-y-4 p-6 rounded-2xl hover:bg-muted/50 transition-all animate-slide-up stagger-${index + 1}`}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <Icon className="w-8 h-8" />
              </div>
              <div className="relative">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-6xl font-bold text-muted/20">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2 relative z-10">{step.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;
