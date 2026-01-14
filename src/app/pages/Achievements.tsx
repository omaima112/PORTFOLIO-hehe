
import { useState, useRef } from 'react';
import { Award, Trophy, Medal, Star, GraduationCap, Lightbulb, Shield, Presentation, X } from 'lucide-react';

export default function Achievements() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Each achievement can now have multiple images for the slideshow
  const achievements = [
    {
      title: 'Academic Excellence in Matriculation',
      description: 'Secured 993/1100 marks in Matric, demonstrating strong academic discipline and consistent performance across core subjects.',
      icon: GraduationCap,
      category: 'Academic',
      year: '2023',
      images: ['/achievements/5.png'],
    },
    {
      title: 'Hackathon 2nd Position',
      description: 'Achieved 2nd position in a frontend development hackathon by building a functional and visually polished weather application within a limited time frame.',
      icon: Trophy,
      category: 'Competition',
      year: 'September 2024',
      images: ['/achievements/3.png'],
    },
    {
      title: 'College Science Exhibition – 2nd Position',
      description: 'Secured 2nd position in consecutive years (1st & 2nd Year) for innovative science projects, earning recognition and a college shield for outstanding contribution.',
      icon: Shield,
      category: 'Competition',
      year: '2024-2025',
      images: ['/achievements/2.png'],
    },
    {
      title: 'Project Presentation at Allama Iqbal University',
      description: 'Represented the college to present technical projects at a university-level event, demonstrating both technical knowledge and presentation skills.',
      icon: Presentation,
      category: 'Recognition',
      year: '2024',
      images: ['/achievements/1.png'],
    },
    {
      title: 'FBISE STEM Exhibition Participant',
      description: 'Selected to present a student-built website at an FBISE STEM Exhibition, explaining project functionality, technical choices, and implementation to evaluators and visitors.',
      icon: Star,
      category: 'Recognition',
      year: '2024 & 2025',
      images: ['/achievements/4.png'],
    },
    {
      title: 'Scholarship Recipient (Matric)',
      description: 'Awarded scholarship based on academic merit in Matric.',
      icon: Medal,
      category: 'Academic',
      year: '2023',
      images: [],
    },
    {
      title: 'Scholarship Recipient (HSSC)',
      description: 'Awarded scholarship based on academic merit in HSSC.',
      icon: Medal,
      category: 'Academic',
      year: '2024 - Present',
      images: [],
    },
    {
      title: 'Self-Driven Technical Learning',
      description: 'Continuously learn and apply modern web technologies beyond the curriculum through hands-on projects, experimentation, and structured self-study.',
      icon: Lightbulb,
      category: 'Personal Growth',
      year: '',
      images: [],
    },
  ];

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-3xl w-full mx-4"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 bg-black/60 rounded-full p-2 text-white hover:bg-black/80 focus:outline-none"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image modal"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage}
              alt="Achievement Full View"
              className="w-full h-auto max-h-[80vh] rounded-xl shadow-lg border border-border bg-card"
            />
          </div>
        </div>
      )}
      {/* Page Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Award className="text-secondary" size={40} />
          <h1 className="text-4xl md:text-5xl text-accent">Achievements</h1>
        </div>
        <p className="text-lg text-foreground/80 max-w-3xl">
          Milestones and accomplishments throughout my academic and professional journey.
        </p>
      </div>

      {/* Achievements Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          const cardRef = useRef<HTMLDivElement>(null);
          return (
            <div
              key={index}
              ref={cardRef}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-secondary transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 animate-fadeInUp relative"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Year Badge (always shown if year exists) */}
              {achievement.year && (
                <span
                  className="absolute top-3 left-3 px-4 py-1 text-sm font-bold rounded shadow border border-white"
                  style={{ backgroundColor: '#facb3f', color: '#210635', zIndex: 10, letterSpacing: '0.03em' }}
                >
                  {achievement.year}
                </span>
              )}
              {/* Scholarship & Self-Driven: Special Card Style */}
              {(achievement.title === 'Scholarship Recipient (Matric)' || achievement.title === 'Scholarship Recipient (HSSC)' || achievement.title === 'Self-Driven Technical Learning') ? (
                <div className="flex flex-col items-center justify-center bg-primary/10 rounded-2xl p-8 h-full text-center min-h-[260px]">
                  <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-primary/20">
                    <Icon size={28} className="text-primary/60" />
                  </div>
                  <span className="text-xs text-secondary/80 uppercase tracking-wider mb-1">{achievement.category}</span>
                  <h3 className="text-xl font-semibold text-accent mb-2">{achievement.title}</h3>
                  <p className="text-foreground/80">{achievement.description}</p>
                </div>
              ) : (
                <>
                  {achievement.images.length > 0 && (
                    <button
                      type="button"
                      className="relative aspect-video bg-primary/50 overflow-hidden cursor-pointer w-full focus:outline-none mt-2"
                      onClick={() => setSelectedImage(achievement.images[0])}
                      tabIndex={0}
                      aria-label={`View image for ${achievement.title}`}
                    >
                      <img
                        src={achievement.images[0]}
                        alt={achievement.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 hover:bg-black/20 focus:bg-black/20 transition-colors flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 hover:opacity-100 focus:opacity-100 transition-opacity text-sm">
                          Click to view
                        </span>
                      </div>
                    </button>
                  )}
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-secondary/20 rounded-xl group-hover:bg-secondary/40 transition-colors">
                        <Icon size={24} className="text-secondary" />
                      </div>
                      <div className="flex-1">
                        <span className="text-xs text-secondary/80 uppercase tracking-wider">
                          {achievement.category}
                        </span>
                        <h3 className="text-xl mt-1 mb-2 text-accent">{achievement.title}</h3>
                        <p className="text-foreground/80">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <div className="bg-card rounded-3xl p-8 md:p-12 border border-border">
          <h2 className="text-2xl md:text-3xl text-accent mb-4">
            Always Striving for More
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            These achievements represent my dedication to continuous learning and growth. 
            I'm always looking for new challenges and opportunities to expand my skills.
          </p>
        </div>
      </div>
    </div>
  );
}
