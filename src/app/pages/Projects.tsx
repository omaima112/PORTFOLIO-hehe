import { ProjectCard } from '../components/ProjectCard';

export function Projects() {
  // Core Projects
  const coreProjects = [
    {
      title: 'TruthGuard',
      description: `Pattern-recognition tool to verify statements and detect misleading content, helping users verify information efficiently. (P.S. Paste a sketchy headline and watch the AI do its thing.)`,
      techStack: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript'],
      images: [
        '/projects/truthguard1.PNG',
        '/projects/truthguard2.PNG',
        '/projects/Truthguard3.PNG',
      ],
      liveUrl: 'https://omaima112.pythonanywhere.com/',
      codeUrl: 'https://github.com/omaima112/TruthGuard.git',
      badge: '2nd Place',
    },
    {
      title: 'Encryption App',
      description: `Secure web application for encrypting and decrypting text and files using AES (Fernet) and Caesar Cipher. Features drag-and-drop file support. (P.S. Encrypt something and see it transform. Decryption is the fun part though.)`,
      techStack: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript'],
      images: [
        '/projects/encryption1.PNG',
        '/projects/encryption2.PNG',
        '/projects/encryption3.PNG',
      ],
      liveUrl: 'https://omaimah-encryption-app.hf.space/',
      codeUrl: 'https://github.com/omaima112/Encryption-Web-App.git',
    },
    {
      title: 'ClimaCast – Weather App',
      description: `Weather forecasting app with current, hourly, and daily forecasts. Built as a hackathon project with interactive UI and responsive design. (P.S. Use the compare feature to check your hometown vs. somewhere you've always wanted to visit.)`,
      techStack: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Vite'],
      images: [
        '/projects/climacast1.PNG',
        '/projects/climacast2.PNG',
        '/projects/climacast3.PNG',
      ],
      liveUrl: 'https://clima-cast-murex.vercel.app/',
      codeUrl: 'https://github.com/omaima112/ClimaCast.git',
      badge: '2nd Place',
    },
    {
      title: 'To-Do List App',
      description: `Task management app with add, edit, delete features for organizing daily activities. Features dynamic counters for completed and uncompleted tasks. (P.S. Add a task, check it off. Feel that dopamine hit.)`,
      techStack: ['HTML', 'CSS', 'JavaScript'],
      images: [
        '/projects/todolist1.PNG',
        '/projects/todolist2.PNG',
      ],
      liveUrl: 'https://to-do-list-five-beta-67.vercel.app/',
      codeUrl: 'https://github.com/omaima112/TO-DO-list.git',
    },
  ];

  // Personal & Exploratory Work
  const personalProjects = [
    {
      title: 'Birthday Gift App',
      description: `Interactive app for sending personalized digital birthday greetings. Includes small interactive pages, a sticky audio player, and a handwritten-style letter modal. (P.S. Click the music button to hear what song made the cut. 🎵)`,
      techStack: ['React', 'Vite', 'CSS'],
      images: [
        '/projects/birthday1.PNG',
        '/projects/birthday2.PNG',
        '/projects/birthday3.PNG',
      ],
      liveUrl: 'https://birthday-gift-lzkg.vercel.app/',
      codeUrl: 'https://github.com/omaima112/BirthdayGift.git',
    },
    {
      title: 'Tribute Website',
      description: 'Personal tribute site with interactive elements and responsive layout, demonstrating UI/UX skills and front-end design principles.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      images: [
        '/projects/tribute1.PNG',
        '/projects/tribute2.PNG',
      ],
      liveUrl: 'https://tribute-wheat.vercel.app/',
      codeUrl: 'https://github.com/omaima112/Tribute-.git',
    },
  ];

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl mb-4 text-accent">Projects</h1>
        <p className="text-lg text-foreground/90 max-w-3xl">
          A collection of projects showcasing my skills in web development. Each project 
          represents hands-on learning and problem-solving in different areas of software development.
        </p>
      </div>

      {/* Core Projects Section */}
      <h1 className="text-3xl font-bold mb-10 mt-10 text-accent text-center">Core Projects</h1>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {coreProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      {/* Personal & Exploratory Work Section */}
      <h1 className="text-3xl font-bold mb-10 mt-10 text-accent/80 text-center">Personal & Exploratory Work</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {personalProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
