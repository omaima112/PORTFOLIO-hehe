import { GraduationCap, Target, BookOpen, Calendar } from 'lucide-react';

export function Education() {
  const subjects = [
    'Programming Fundamentals',
    'Web Development',
    'Mathematics',
    'Physics',
    'Computer Science Concepts',
  ];

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Page Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <GraduationCap className="text-secondary" size={40} />
          <h1 className="text-4xl md:text-5xl text-accent">Education</h1>
        </div>
        <p className="text-lg text-foreground/80 max-w-3xl">
          My academic journey and the foundation of my technical skills.
        </p>
      </div>

      {/* Current Education */}
      <section className="mb-16">
        <div className="bg-card rounded-3xl p-8 md:p-12 border border-border animate-fadeInUp">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl text-accent mb-2">
                Intermediate in Computer Science (ICS)
              </h2>
              <p className="text-xl text-secondary">PAEC College</p>
            </div>
            <div className="flex items-center gap-2 text-foreground/70">
              <Calendar size={20} />
              <span>2024 – Present</span>
            </div>
          </div>
          
          <p className="text-lg text-foreground/90 leading-relaxed mb-8">
            Currently pursuing ICS with a focus on computer science fundamentals, 
            programming, and mathematics. Actively building practical skills through 
            web development projects, competitions, and independent learning alongside academics.
          </p>

          {/* Relevant Subjects */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="text-secondary" size={24} />
              <h3 className="text-xl text-accent">Relevant Subjects</h3>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {subjects.map((subject, index) => (
                <div
                  key={index}
                  className="px-4 py-3 bg-primary/50 rounded-xl text-foreground/90 border border-border"
                >
                  {subject}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Focus */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <Target className="text-secondary" size={32} />
          <h2 className="text-3xl md:text-4xl text-accent">Learning Focus</h2>
        </div>
        <div className="bg-card rounded-3xl p-8 md:p-12 border border-border space-y-6 text-left">
          <p className="text-lg text-foreground/90 leading-relaxed">
            I am currently strengthening my skills in web development with a focus on building tools for information security and content verification. My technical learning prioritizes understanding how to create secure, privacy-aware applications that handle sensitive data responsibly.
          </p>
          <p className="text-lg text-foreground/90 leading-relaxed">
            Beyond the fundamentals, I'm working to understand cryptographic principles, secure authentication systems, and how to design interfaces that make security accessible rather than intimidating. Each project is both a technical exercise and an exploration of how to build trustworthy digital tools.
          </p>
          <p className="text-lg text-foreground/90 leading-relaxed">
            Looking ahead, I'm interested in deepening my understanding of backend security, database protection, and how machine learning can improve misinformation detection. I want to build systems that don't just work well, but that people can actually trust with their information.
          </p>
          
          {/* Current Learning */}
          <div className="pt-6 border-t border-border">
            <h3 className="text-xl text-secondary mb-4">Currently Learning</h3>
            <div className="flex flex-wrap gap-3">
              {['React', 'Next.js', 'TypeScript', 'Backend Development', 'API Integration', 'Security Fundamentals'].map((item, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-secondary/30 text-accent rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
