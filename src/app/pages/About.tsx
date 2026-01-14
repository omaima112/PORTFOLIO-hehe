import { User } from 'lucide-react';

export function About() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 space-y-10 text-left">
      <h1 className="text-4xl font-bold text-accent mb-6">About Me</h1>
      <p className="text-lg text-white">
        I am a Computer Science student focused on information security and misinformation mitigation through web development. I work on building tools that address gaps in data protection and content verification, two areas that affect how people interact with digital information daily.
        <br /><br />
        My interest in this area grew from observing how easily false information spreads and how often people unknowingly compromise their own data. I'm drawn to the challenge of making security and verification feel intuitive rather than overwhelming. Building projects like TruthGuard and encryption tools has taught me that the technical part is only half the work—understanding what people actually need is just as important.
        <br /><br />
        Beyond coursework, I actively participate in hackathons, present at exhibitions, and engage with emerging technologies to deepen my understanding. I view learning as an ongoing process, not a checklist, and I'm committed to building my skills with both discipline and curiosity.
      </p>

      {/* Research Interests Section */}
      <div className="mt-10 p-6 rounded-xl border border-accent/20 bg-white/10">
        <h2 className="text-2xl font-semibold text-accent mb-4">Research Interests</h2>
        <div className="flex flex-wrap justify-center gap-3">
          <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-base font-medium">Information Security</span>
          <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-base font-medium">Misinformation Mitigation</span>
          <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-base font-medium">Data Privacy &amp; Protection</span>
          <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-base font-medium">Digital Trust Systems</span>
          <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-base font-medium">Cryptographic Applications</span>
          <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-base font-medium">Verification Technologies</span>
          <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-base font-medium">User-Centered Security</span>
          <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-base font-medium">Digital Literacy Education</span>
        </div>
      </div>
    </div>
  );
}
