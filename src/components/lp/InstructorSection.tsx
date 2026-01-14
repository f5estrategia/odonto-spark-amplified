import { Tv, Building2, Mic2, Users, Award, TrendingUp } from "lucide-react";

const credentials = [
  {
    icon: Tv,
    value: "13 anos",
    label: "de experiência em TV",
  },
  {
    icon: Mic2,
    value: "20 anos",
    label: "especialista em comunicação",
  },
  {
    icon: Building2,
    value: "+3.000",
    label: "clínicas atendidas",
  },
  {
    icon: Users,
    value: "+10.000",
    label: "alunos formados",
  },
];

const InstructorSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-card/50">
      <div className="container-lp">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Seu mentor
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Quem é
            <span className="text-gradient"> Fernando Machado</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-card to-secondary border border-border overflow-hidden">
              {/* Placeholder for Fernando's photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-5xl font-bold text-primary">FM</span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Foto de Fernando Machado
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 md:bottom-8 md:-right-8 bg-primary text-primary-foreground p-4 md:p-6 rounded-2xl shadow-lg shadow-primary/30">
              <div className="text-center">
                <Award className="w-8 h-8 mx-auto mb-2" />
                <p className="font-bold text-lg">CEO & Fundador</p>
                <p className="text-sm opacity-90">F5 Estratégia</p>
              </div>
            </div>
          </div>

          {/* Bio content */}
          <div>
            <div className="space-y-6 text-lg">
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-foreground font-semibold">Fernando Machado</span> é 
                especialista em comunicação, oratória e vendas com mais de 
                <span className="text-primary font-semibold"> 20 anos de experiência</span>.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Com passagem de <span className="text-foreground font-semibold">13 anos na televisão</span>, 
                Fernando domina como poucos a arte de se comunicar diante das câmeras e 
                conquistar a confiança do público.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Como <span className="text-primary font-semibold">CEO e fundador da F5 Estratégia</span>, 
                já ajudou mais de 3.000 clínicas odontológicas a transformarem sua presença 
                digital e multiplicarem seus resultados.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Agora, ele condensa todo esse conhecimento em um método prático 
                especialmente desenvolvido para <span className="text-foreground font-semibold">dentistas 
                que querem se tornar autoridades</span> no cenário digital.
              </p>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {credentials.map((cred, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <cred.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{cred.value}</p>
                    <p className="text-xs text-muted-foreground">{cred.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;