const stats = [
  { value: "10K+", label: "Active Users" },
  { value: "99.9%", label: "Uptime" },
  { value: "4.9/5", label: "App Rating" },
  { value: "150+", label: "Countries" },
];

const Stats = () => {
  return (
    <section className="py-20 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
