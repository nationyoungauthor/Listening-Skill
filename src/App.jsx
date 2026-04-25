import React, { useState, useMemo, useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link, 
  NavLink,
  useLocation 
} from 'react-router-dom';
import { 
  Search, Code, Palette, Rocket, Users, BookOpen, 
  ChevronRight, Star, Gamepad2, Trophy, Clock, Filter, 
  ChevronDown, GraduationCap, Calendar, LayoutGrid, Award, ArrowLeft, Play, Square,
  Headphones, Brain, MessageSquare, TrendingUp, CheckCircle2, Globe, Ear,
  Mail, MapPin, Phone
} from 'lucide-react';

// Images
import heroImg from './assets/hero.png';
import progImg from './assets/programming.png';
import designImg from './assets/design.png';
import mathGameImg from './assets/game_math.png';
import logicGameImg from './assets/game_logic.png';
import codingGameImg from './assets/game_coding.png';
import wordListenerImg from './assets/word_listener.png';
import dictationHeroImg from './assets/dictation_hero.png';
import { 
  SoundScrambleGame, 
  PhonicsPopGame, 
  ListenFindGame, 
  StoryEchoesGame, 
  SentenceBuilderGame, 
  PatternRecallGame, 
  QuantumAudioGame 
} from './ExtraGames';

// --- Shared Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Rocket className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Listening Skill
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500" : "text-slate-300 hover:text-white transition-colors"}>Home</NavLink>
          <NavLink to="/courses" className={({ isActive }) => isActive ? "text-blue-500" : "text-slate-300 hover:text-white transition-colors"}>Courses</NavLink>
          <NavLink to="/games" className={({ isActive }) => isActive ? "text-blue-500" : "text-slate-300 hover:text-white transition-colors"}>Games</NavLink>
          <NavLink to="/skills" className={({ isActive }) => isActive ? "text-blue-500" : "text-slate-300 hover:text-white transition-colors"}>Skills</NavLink>
          <NavLink to="/test" className={({ isActive }) => isActive ? "text-blue-500" : "text-slate-300 hover:text-white transition-colors"}>Test</NavLink>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all">
            Get Started
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="relative z-20 bg-slate-950 border-t border-slate-900 pt-20 pb-10 mt-auto">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Column */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Rocket className="text-blue-600 w-8 h-8" />
            <span className="text-2xl font-bold text-white">Listening Skill</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            The world's leading platform for auditory comprehension and professional communication development. Master the art of listening.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-400 hover:text-white hover:border-blue-400 transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white hover:border-pink-500 transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-800 hover:text-white hover:border-blue-700 transition-all">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><NavLink to="/" className="text-slate-400 hover:text-blue-500 transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4"/> Home</NavLink></li>
            <li><NavLink to="/courses" className="text-slate-400 hover:text-blue-500 transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4"/> Courses</NavLink></li>
            <li><NavLink to="/games" className="text-slate-400 hover:text-blue-500 transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4"/> Games</NavLink></li>
            <li><NavLink to="/skills" className="text-slate-400 hover:text-blue-500 transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4"/> Skills</NavLink></li>
            <li><NavLink to="/test" className="text-slate-400 hover:text-blue-500 transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4"/> Test Assessment</NavLink></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Resources</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-slate-400 hover:text-blue-500 transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4"/> Audio Library</a></li>
            <li><a href="#" className="text-slate-400 hover:text-blue-500 transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4"/> Exam Preparation</a></li>
            <li><a href="#" className="text-slate-400 hover:text-blue-500 transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4"/> Read Our Blog</a></li>
            <li><a href="#" className="text-slate-400 hover:text-blue-500 transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4"/> Help Center & FAQs</a></li>
            <li><a href="#" className="text-slate-400 hover:text-blue-500 transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4"/> Instructor Portal</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-4 text-slate-400 cursor-pointer hover:text-white transition-colors">
              <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
              <span>123 Knowledge Avenue,<br />Tech District, CA 90210</span>
            </li>
            <li className="flex items-center gap-4 text-slate-400 cursor-pointer hover:text-white transition-colors">
              <Phone className="w-5 h-5 text-blue-500 shrink-0" />
              <span>+1 (800) 123-4567</span>
            </li>
            <li className="flex items-center gap-4 text-slate-400 cursor-pointer hover:text-white transition-colors">
              <Mail className="w-5 h-5 text-blue-500 shrink-0" />
              <span>support@listeningskill.com</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm">
          © 2026 Listening Skill Inc. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-slate-500">
          <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

const SkillCard = ({ title, img, category, reviews, students }) => (
  <div className="group bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
    <div className="aspect-[4/3] overflow-hidden">
      <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
    </div>
    <div className="p-6">
      <div className="flex items-center justify-between mb-3 text-xs font-semibold uppercase tracking-wider text-blue-500">
        <span>{category}</span>
        <div className="flex items-center gap-1 text-yellow-500">
          <Star className="w-3 h-3 fill-current" />
          <span>{reviews}</span>
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{title}</h3>
      <div className="flex items-center justify-between pt-4 border-t border-slate-800">
        <div className="flex items-center gap-2 text-slate-400 text-sm">
          <Users className="w-4 h-4" />
          <span>{students} Students</span>
        </div>
        <button className="text-blue-500 hover:text-white transition-colors">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  </div>
);

// --- Page Components ---

const Home = () => {
  const skills = [
    { title: "Fullstack Web Development", category: "Programming", img: progImg, reviews: "4.9", students: "2.4k" },
    { title: "Professional UI/UX Design", category: "Design", img: designImg, reviews: "4.8", students: "1.8k" },
    { title: "Digital Marketing Analytics", category: "Marketing", img: heroImg, reviews: "4.7", students: "3.1k" },
    { title: "Advanced Python Algorithms", category: "Programming", img: codingGameImg, reviews: "5.0", students: "5.2k" },
    { title: "Creative Branding Strategy", category: "Design", img: logicGameImg, reviews: "4.6", students: "1.5k" },
    { title: "Business Data Science", category: "Analytics", img: mathGameImg, reviews: "4.9", students: "4.8k" }
  ];

  return (
    <div className="relative">
      {/* Background Hero Image - Fixed but obscured by later sections */}
      <div className="fixed inset-0 w-full h-screen -z-0">
        <img src={heroImg} alt="Background" className="w-full h-full object-cover brightness-[0.4]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/60 to-slate-950"></div>
      </div>

      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center justify-center">
            <h1 className="text-6xl lg:text-9xl font-black text-white leading-tight mb-8 tracking-tighter">
              MASTER <span className="text-blue-500">LISTENING</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-3xl font-medium leading-relaxed drop-shadow-xl">
              The ultimate platform to enhance your auditory comprehension. Train your ears, improve communication, and master language through interactive listening.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/courses" className="w-full sm:w-auto bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:scale-105 active:scale-95">
                START LEARNING <ChevronRight className="w-6 h-6" />
              </Link>
              <Link to="/games" className="w-full sm:w-auto bg-white/5 backdrop-blur-md text-white px-10 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 hover:bg-white/10 transition-all border border-white/10 hover:scale-105 active:scale-95">
                PLAY SKILLS GAMES <Gamepad2 className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections - Solid Background with Highest Z-Index to block image */}
      <section className="relative z-20 bg-slate-950 border-t border-slate-900 shadow-[0_-20px_50px_rgba(2,6,23,1)]">
        <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[ {l:'Premium Courses', v:'150+'}, {l:'Expert Mentors', v:'80+'}, {l:'Happy Students', v:'10k+'}, {l:'Placement Rate', v:'94%'} ].map((s,i) => (
            <div key={i} className="text-center group cursor-default">
              <div className="text-4xl font-black text-white mb-2 group-hover:text-blue-500 transition-colors">{s.v}</div>
              <div className="text-xs text-slate-500 font-bold uppercase tracking-[0.2em]">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative z-20 bg-slate-950 border-t border-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-black text-blue-500 uppercase tracking-widest mb-2">Platform Features</h2>
            <h3 className="text-4xl font-black text-white mb-6">Why Choose Listening Skill?</h3>
            <p className="text-slate-400 text-lg">We provide everything you need to upgrade your skills in one powerful ecosystem.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900 rounded-[2rem] p-10 border border-slate-800 hover:border-blue-500/50 transition-colors">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20">
                <LayoutGrid className="w-8 h-8 text-blue-500" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Structured Paths</h4>
              <p className="text-slate-400">Follow carefully curated learning paths designed by industry experts to take you from beginner to pro.</p>
            </div>
            <div className="bg-slate-900 rounded-[2rem] p-10 border border-slate-800 hover:border-purple-500/50 transition-colors">
              <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/20">
                <Gamepad2 className="w-8 h-8 text-purple-500" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Interactive Learning</h4>
              <p className="text-slate-400">Play built-in skill games to reinforce your knowledge, improving memory and strategy in a fun environment.</p>
            </div>
            <div className="bg-slate-900 rounded-[2rem] p-10 border border-slate-800 hover:border-orange-500/50 transition-colors">
              <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 border border-orange-500/20">
                <Award className="w-8 h-8 text-orange-500" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Verified Certificates</h4>
              <p className="text-slate-400">Earn recognized certifications upon completion to boost your resume and stand out to employers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Mastery Journey */}
      <section className="relative z-20 bg-slate-900 border-t border-slate-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-black text-blue-500 uppercase tracking-widest mb-2">Step by Step</h2>
            <h3 className="text-4xl font-black text-white mb-6">The Listening Mastery Journey</h3>
            <p className="text-slate-400 text-lg">Our proven 4-step framework helps you transition from passive hearing to active, analytical listening.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative">
            <div className="hidden md:block absolute top-[40px] left-12 w-[calc(100%-6rem)] h-0.5 bg-slate-800 z-0"></div>
            {[
              { id: 1, title: 'Immerse', desc: 'Listen to native audio across various accents and complex contexts.', icon: Ear },
              { id: 2, title: 'Analyze', desc: 'Break down complicated sentences, vocabulary, and subtle emotional tones.', icon: Brain },
              { id: 3, title: 'Evaluate', desc: 'Test your comprehension with targeted story-based evaluation quizzes.', icon: CheckCircle2 },
              { id: 4, title: 'Elevate', desc: 'Unlock higher levels and achieve professional auditory fluency.', icon: TrendingUp },
            ].map((step) => (
              <div key={step.id} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-slate-950 border-2 border-slate-700 group-hover:border-blue-500 rounded-full flex items-center justify-center mb-6 transition-all group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] group-hover:scale-110">
                  <step.icon className="w-8 h-8 text-slate-400 group-hover:text-blue-500 transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Phase {step.id}: {step.title}</h4>
                <p className="text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Benefits */}
      <section className="relative z-20 bg-slate-950 border-t border-slate-900 py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative w-full">
              <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full"></div>
              <div className="relative bg-slate-900 border border-slate-700 rounded-[3rem] p-8 md:p-10 grid grid-cols-2 gap-4 md:gap-6 shadow-2xl">
                {[
                  { title: 'IELTS / TOEFL', stat: '98%', icon: Globe, color: 'text-blue-500', bg: 'bg-blue-500/10' },
                  { title: 'Job Interviews', stat: '3x', icon: Users, color: 'text-purple-500', bg: 'bg-purple-500/10' },
                  { title: 'Kids & Students', stat: 'A+', icon: GraduationCap, color: 'text-green-500', bg: 'bg-green-500/10' },
                  { title: 'Corporate Comm.', stat: 'Top', icon: MessageSquare, color: 'text-orange-500', bg: 'bg-orange-500/10' }
                ].map((item, i) => (
                   <div key={i} className="bg-slate-950 p-6 md:p-8 rounded-3xl border border-slate-800 flex flex-col items-center text-center hover:-translate-y-2 transition-transform">
                     <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-4`}>
                       <item.icon className={`w-7 h-7 ${item.color}`} />
                     </div>
                     <div className="text-3xl font-black text-white mb-1">{item.stat}</div>
                     <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">{item.title}</div>
                   </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-sm font-black text-blue-500 uppercase tracking-widest mb-2">Target Audience</h2>
              <h3 className="text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">Empowering every kind of listener.</h3>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Whether you are preparing for a crucial language proficiency exam, getting ready for a high-stakes corporate interview, or simply looking to improve your child's auditory comprehension skills, our platform adapts to your goals.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Accents from 10+ English speaking regions',
                  'Adaptive difficulty scoring algorithms',
                  'Real-time quiz evaluation and unlocking',
                  'Certified transcripts and vocabulary breakdowns'
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-300 font-medium text-lg">
                    <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to="/test" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center gap-2 hover:bg-blue-500 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-xl hover:-translate-y-1">
                Try a Free Assessment <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses Preview */}
      <section className="relative z-20 bg-slate-950 border-t border-slate-900 py-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-sm font-black text-blue-500 uppercase tracking-widest mb-2">Top Rated</h2>
              <h3 className="text-4xl font-bold text-white">Popular Courses</h3>
            </div>
            <Link to="/courses" className="text-blue-500 font-bold hover:text-white flex items-center gap-2 transition-colors">
              Explore All Courses <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((s, i) => <SkillCard key={i} {...s} />)}
          </div>
        </div>
      </section>
    </div>
  );
};

const Courses = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const classesList = ['NC', 'LKG', 'UKG', 'Class I', 'Class II', 'Class III', 'Class IV', 'Class V', 'Class VI', 'Class VII', 'Class VIII', 'Class IX', 'Class X'];
  
  const getSubjects = (cls) => {
    const allSubs = {
      'English Phonics': { name: 'English Phonics', icon: BookOpen, color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
      'Number Work': { name: 'Number Work', icon: LayoutGrid, color: 'text-purple-500', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
      'General Awareness': { name: 'General Awareness', icon: Globe, color: 'text-green-500', bg: 'bg-green-500/10', border: 'border-green-500/20' },
      'Rhymes & Stories': { name: 'Rhymes & Stories', icon: Headphones, color: 'text-pink-500', bg: 'bg-pink-500/10', border: 'border-pink-500/20' },
      
      'English Literature': { name: 'English Literature', icon: BookOpen, color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
      'Environmental Science': { name: 'Environmental Science', icon: Globe, color: 'text-green-500', bg: 'bg-green-500/10', border: 'border-green-500/20' },
      'Mathematics': { name: 'Mathematics', icon: LayoutGrid, color: 'text-purple-500', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
      'Social Studies': { name: 'Social Studies', icon: Users, color: 'text-orange-500', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
      'Computer Basics': { name: 'Computer Basics', icon: Code, color: 'text-pink-500', bg: 'bg-pink-500/10', border: 'border-pink-500/20' },
      'Science': { name: 'Science', icon: Brain, color: 'text-green-500', bg: 'bg-green-500/10', border: 'border-green-500/20' },
      
      'Physics': { name: 'Physics', icon: Rocket, color: 'text-blue-400', bg: 'bg-blue-400/10', border: 'border-blue-400/20' },
      'Chemistry': { name: 'Chemistry', icon: Filter, color: 'text-teal-500', bg: 'bg-teal-500/10', border: 'border-teal-500/20' },
      'Biology': { name: 'Biology', icon: Globe, color: 'text-green-600', bg: 'bg-green-600/10', border: 'border-green-600/20' },
      'History & Civics': { name: 'History & Civics', icon: Users, color: 'text-orange-600', bg: 'bg-orange-600/10', border: 'border-orange-600/20' }
    };

    if (['NC', 'LKG', 'UKG'].includes(cls)) {
      return [allSubs['English Phonics'], allSubs['Number Work'], allSubs['General Awareness'], allSubs['Rhymes & Stories']];
    } else if (['Class I', 'Class II', 'Class III', 'Class IV', 'Class V'].includes(cls)) {
      return [allSubs['English Literature'], allSubs['Environmental Science'], allSubs['Mathematics'], allSubs['Computer Basics']];
    } else if (['Class VI', 'Class VII', 'Class VIII'].includes(cls)) {
      return [allSubs['English Literature'], allSubs['Science'], allSubs['Mathematics'], allSubs['Social Studies'], allSubs['Computer Basics']];
    } else {
      return [allSubs['English Literature'], allSubs['Physics'], allSubs['Chemistry'], allSubs['Biology'], allSubs['Mathematics'], allSubs['History & Civics']];
    }
  };

  const getChapters = (cls, subName) => {
    let level = 'middle';
    if (['NC', 'LKG', 'UKG'].includes(cls)) level = 'junior';
    else if (['Class I', 'Class II', 'Class III', 'Class IV', 'Class V'].includes(cls)) level = 'primary';
    else if (['Class IX', 'Class X'].includes(cls)) level = 'senior';

    const db = {
      'English Phonics': { junior: ['A for Apple', 'Vowel Sounds', 'Consonants', 'CVC Words', 'Rhyming Words', 'Sight Words', 'Blending Sounds', 'Short Sentences'] },
      'Number Work': { junior: ['Counting 1 to 10', 'Number Names', 'Shapes Around Us', 'Big and Small', 'Addition Basics', 'Subtraction Basics', 'Patterns', 'Time Basics'] },
      'General Awareness': { junior: ['My Body Parts', 'My Family', 'Colors', 'Animals and Birds', 'Fruits and Vegetables', 'Seasons', 'Transport', 'Good Habits'] },
      'Rhymes & Stories': { junior: ['Twinkle Twinkle', 'Johny Johny', 'The Thirsty Crow', 'The Greedy Dog', 'Baa Baa Black Sheep', 'The Lion and Mouse', 'Humpty Dumpty', 'Jack and Jill'] },
      
      'English Literature': {
        primary: ['The Lost Sheep', 'Grammar: Nouns', 'The Magic Tree', 'Poem: The Wind', 'Adjectives', 'Tenses', 'The Hidden Treasure', 'Comprehension'],
        middle: ['Grammar: Adverbs', 'The Clever Fox', 'Poem: The Daffodils', 'Essay Writing', 'Active & Passive Voice', 'Literature Analysis', 'Short Stories', 'Letter Writing'],
        senior: ['Shakespearean Sonnets', 'Advanced Grammar', 'The Diary of a Young Girl', 'Poetic Devices', 'Debate and Speech', 'The Road Not Taken', 'Creative Writing', 'Figures of Speech']
      },
      'Environmental Science': {
        primary: ['Plants and Trees', 'Water is Life', 'Our Earth', 'Day and Night', 'Seasons and Weather', 'Animals Around Us', 'Food We Eat', 'Air and Water']
      },
      'Science': {
        middle: ['States of Matter', 'The Solar System', 'Force and Energy', 'Living Organisms', 'Human Body Systems', 'Light and Shadows', 'Ecosystems', 'Rocks and Minerals']
      },
      'Mathematics': {
        primary: ['Addition & Subtraction', 'Multiplication Tables', 'Division Basics', 'Fractions', 'Time and Clocks', 'Money', 'Measurement', 'Data Handling'],
        middle: ['Decimals', 'Geometry Basics', 'Area and Perimeter', 'Ratio and Proportion', 'Integers', 'Algebra Basics', 'Statistics', 'Simple Equations'],
        senior: ['Algebraic Expressions', 'Trigonometry', 'Quadratic Equations', 'Probability', 'Coordinate Geometry', 'Surface Area & Volume', 'Polynomials', 'Linear Equations']
      },
      'Social Studies': {
        middle: ['The Earth and Solar System', 'Early Civilizations', 'Local Government', 'The Mughal Empire', 'Latitudes & Longitudes', 'Democracy', 'Resources', 'The Freedom Struggle']
      },
      'History & Civics': {
        senior: ['The French Revolution', 'World War II', 'Indian Constitution', 'Democracy in Action', 'Nationalism in Europe', 'The UN', 'Parliamentary System', 'Fundamental Rights']
      },
      'Computer Basics': {
        primary: ['Parts of a Computer', 'Using the Mouse', 'Keyboard Basics', 'MS Paint Fun', 'What is the Internet?', 'Rules of the Lab', 'Typing Practice', 'Smart Devices'],
        middle: ['Introduction to Word', 'Making Presentations', 'Internet Safety', 'Basics of Scratch', 'Algorithm Logic', 'Spreadsheets', 'Input and Output', 'History of Computers']
      },
      'Physics': {
        senior: ['Laws of Motion', 'Gravitation', 'Work and Energy', 'Sound Waves', 'Light Reflection', 'Electricity', 'Magnetic Effects', 'Sources of Energy']
      },
      'Chemistry': {
        senior: ['Matter in Our Surroundings', 'Atoms and Molecules', 'Structure of the Atom', 'Chemical Reactions', 'Acids, Bases & Salts', 'Metals & Non-metals', 'Carbon Compounds', 'Periodic Classification']
      },
      'Biology': {
        senior: ['The Fundamental Unit of Life', 'Tissues', 'Diversity in Living Organisms', 'Life Processes', 'Control and Coordination', 'Reproduction', 'Heredity and Evolution', 'Our Environment']
      }
    };

    const chapterTitles = db[subName]?.[level] || db[subName]?.['primary'] || db[subName]?.['senior'] || db['English Literature']['primary'];

    return chapterTitles.map((title, i) => ({
      id: i + 1,
      title: title,
      desc: `Master the concepts of ${title} through our interactive audio lesson for ${cls}.`,
      content: `Welcome to ${subName} for ${cls}. Today's chapter is ${title}. Please listen carefully. ${title} is a fundamental topic in this subject. Let's begin the interactive lesson.`
    }));
  };

  const stopAudio = () => {
    if(window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return () => stopAudio();
  }, []);

  const togglePlay = (chapter) => {
    if(isPlaying) {
      stopAudio();
    } else {
      if(window.speechSynthesis) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(chapter.content);
        u.rate = 0.85; // Slightly slower for better listening comprehension
        u.onend = () => setIsPlaying(false);
        window.speechSynthesis.speak(u);
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="pt-24 pb-20 px-4 max-w-7xl mx-auto min-h-[80vh]">
      {!selectedClass && (
        <>
          <div className="mb-12 border-b border-slate-900 pb-8 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-600/10 text-blue-500 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4 border border-blue-500/20">
              <GraduationCap className="w-3 h-3" /> Academic Curriculum
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Select Your Class</h1>
            <p className="text-slate-400 text-lg">Choose your academic level to access dedicated listening chapters.</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {classesList.map(cls => (
              <button 
                key={cls}
                onClick={() => setSelectedClass(cls)}
                className="bg-slate-900 hover:bg-blue-600 border border-slate-800 hover:border-blue-400 rounded-2xl p-6 text-center transition-all group shadow-lg hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:-translate-y-1"
              >
                <div className="text-2xl font-black text-white group-hover:text-white transition-colors">{cls}</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-2 group-hover:text-blue-100 transition-colors">Syllabus</div>
              </button>
            ))}
          </div>
        </>
      )}

      {selectedClass && !selectedSubject && (
        <>
          <div className="mb-12 border-b border-slate-900 pb-8 flex items-center gap-6">
            <button onClick={() => setSelectedClass(null)} className="bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-xl transition-all shadow-lg">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div>
              <div className="text-blue-500 font-bold text-sm tracking-widest uppercase mb-1">{selectedClass}</div>
              <h1 className="text-4xl font-black text-white tracking-tight">Choose Subject</h1>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getSubjects(selectedClass).map(sub => (
              <button 
                key={sub.name}
                onClick={() => setSelectedSubject(sub)}
                className="bg-slate-900 border border-slate-800 hover:border-slate-600 rounded-3xl p-8 text-left transition-all hover:-translate-y-1 group"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border ${sub.bg} ${sub.border}`}>
                  <sub.icon className={`w-8 h-8 ${sub.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{sub.name}</h3>
                <p className="text-slate-400 text-sm">8 Chapters available for listening</p>
              </button>
            ))}
          </div>
        </>
      )}

      {selectedClass && selectedSubject && !selectedChapter && (
        <>
          <div className="mb-12 border-b border-slate-900 pb-8 flex items-center gap-6">
            <button onClick={() => setSelectedSubject(null)} className="bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-xl transition-all shadow-lg">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div>
              <div className="text-blue-500 font-bold text-sm tracking-widest uppercase mb-1">{selectedClass} • {selectedSubject.name}</div>
              <h1 className="text-4xl font-black text-white tracking-tight">Listening Chapters</h1>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {getChapters(selectedClass, selectedSubject.name).map(chap => (
              <div key={chap.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center justify-between hover:border-blue-500/50 transition-colors group">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-slate-950 rounded-xl flex items-center justify-center font-black text-slate-500 border border-slate-800 group-hover:text-blue-500 group-hover:border-blue-500/30 transition-colors">
                     {chap.id}
                   </div>
                   <div>
                     <h4 className="text-lg font-bold text-white">{chap.title}</h4>
                     <p className="text-slate-400 text-sm">{chap.desc}</p>
                   </div>
                </div>
                <button 
                  onClick={() => setSelectedChapter(chap)}
                  className="bg-blue-600/10 text-blue-500 hover:bg-blue-600 hover:text-white w-12 h-12 rounded-xl flex items-center justify-center transition-all shadow-lg"
                >
                  <Headphones className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {selectedClass && selectedSubject && selectedChapter && (
        <div className="max-w-3xl mx-auto">
          <button onClick={() => { setSelectedChapter(null); stopAudio(); }} className="mb-8 flex items-center gap-2 text-slate-400 hover:text-white font-bold transition-colors">
            <ArrowLeft className="w-5 h-5" /> Back to Chapters
          </button>
          
          <div className="bg-slate-900 border border-slate-800 rounded-[3rem] p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
            <div className={`absolute inset-0 bg-blue-500/5 transition-opacity duration-700 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}></div>
            
            <div className={`w-32 h-32 mx-auto rounded-full flex items-center justify-center mb-8 border-4 transition-all duration-500 relative z-10 ${isPlaying ? 'bg-blue-500/20 border-blue-500 text-blue-500 shadow-[0_0_50px_rgba(37,99,235,0.4)]' : 'bg-slate-950 border-slate-800 text-slate-500'}`}>
               <Headphones className={`w-16 h-16 transition-transform ${isPlaying ? 'animate-bounce' : ''}`} />
            </div>
            
            <div className="relative z-10">
              <div className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-2">{selectedClass} • {selectedSubject.name}</div>
              <h2 className="text-4xl font-black text-white mb-8">{selectedChapter.title}</h2>
              
              <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                Press play to begin the listening module. Focus on the pronunciation and the concepts being explained in this chapter.
              </p>
              
              <button 
                onClick={() => togglePlay(selectedChapter)}
                className={`flex items-center justify-center gap-3 w-full md:w-auto mx-auto px-12 py-5 rounded-2xl font-black text-xl transition-all shadow-xl active:scale-95 ${isPlaying ? 'bg-red-500/10 text-red-500 border border-red-500 hover:bg-red-500/20' : 'bg-blue-600 text-white hover:bg-blue-500 shadow-blue-500/30 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]'}`}
              >
                {isPlaying ? (
                  <><Square className="w-6 h-6 fill-current" /> Stop Audio</>
                ) : (
                  <><Play className="w-6 h-6 fill-current" /> Start Listening</>
                )}
              </button>
              
              {isPlaying && (
                <div className="mt-10 flex justify-center gap-1.5 h-12 items-end">
                  {[...Array(20)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-2 bg-blue-500 rounded-t-full animate-pulse" 
                      style={{ height: `${Math.random() * 40 + 10}px`, animationDelay: `${i * 0.05}s` }}
                    ></div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Games = () => {
  const allGames = [
    { id: 'g1', title: 'Audio Memory Match', category: 'Memory', difficulty: 'Beginner', img: mathGameImg },
    { id: 'g2', title: 'Word Listener', category: 'Word Games', difficulty: 'Beginner', img: wordListenerImg },
    { id: 'g3', title: 'Dictation Hero', category: 'Word Games', difficulty: 'Intermediate', img: dictationHeroImg },
    { id: 'g4', title: 'Sound Scramble', category: 'Puzzle', difficulty: 'Intermediate', img: heroImg },
    { id: 'g5', title: 'Phonics Pop', category: 'Arcade', difficulty: 'Beginner', img: progImg },
    { id: 'g6', title: 'Listen & Find', category: 'Logic', difficulty: 'Beginner', img: designImg },
    { id: 'g7', title: 'Story Echoes', category: 'Memory', difficulty: 'Intermediate', img: mathGameImg },
    { id: 'g8', title: 'Sentence Builder', category: 'Strategy', difficulty: 'Advanced', img: logicGameImg },
    { id: 'g9', title: 'Pattern Recall', category: 'Brain Training', difficulty: 'Advanced', img: codingGameImg },
    { id: 'g10', title: 'Quantum Audio', category: 'Logic', difficulty: 'Expert', img: designImg }
  ].map(game => ({
    ...game,
    classLevel: 'All Levels',
    rating: (4.5 + Math.random() * 0.5).toFixed(1)
  }));

  const filteredGames = allGames;

  // -- Playable Games Logic --
  const [activeGame, setActiveGame] = useState(null);

  const AudioMemoryGame = () => {
    const [level, setLevel] = useState(1);
    const [score, setScore] = useState(0);
    const [sequence, setSequence] = useState([]);
    const [options, setOptions] = useState([]);
    const [playerTurn, setPlayerTurn] = useState(false);
    const [playerIndex, setPlayerIndex] = useState(0);
    const [gameStatus, setGameStatus] = useState('waiting');
    const [currentAudioIndex, setCurrentAudioIndex] = useState(-1);

    const allWords = [
      'Apple', 'Cat', 'Dog', 'Bird', 'Sun', 'Moon', 'Tree', 'Book', 'Car', 'Train',
      'Ship', 'Star', 'Cloud', 'Rain', 'Wind', 'Fire', 'Earth', 'Water', 'Ice', 'Snow',
      'Mountain', 'River', 'Ocean', 'Forest', 'Desert', 'Flower', 'Grass', 'Leaf', 'Root', 'Seed',
      'Fish', 'Frog', 'Snake', 'Lizard', 'Turtle', 'Bear', 'Wolf', 'Fox', 'Deer', 'Rabbit',
      'Eagle', 'Hawk', 'Owl', 'Crow', 'Dove', 'Ant', 'Bee', 'Wasp', 'Fly', 'Bug'
    ];

    const generateLevel = (lvl) => {
      const seqLength = Math.min(Math.floor((lvl + 9) / 10) + 1, 8); // Max 8 words
      const optLength = Math.min(seqLength + 4 + Math.floor(lvl / 10), 16); // Max 16 options
      
      const shuffledWords = [...allWords].sort(() => 0.5 - Math.random());
      const selectedOptions = shuffledWords.slice(0, optLength);
      
      const seq = Array.from({length: seqLength}).map(() => selectedOptions[Math.floor(Math.random() * selectedOptions.length)]);
      
      return { seq, selectedOptions };
    };

    const playAudioSequence = (seq, lvl) => {
      setGameStatus('playing_audio');
      setCurrentAudioIndex(-1);
      let i = 0;
      
      window._audioQueue = window._audioQueue || [];
      const rate = Math.min(0.8 + (lvl * 0.015), 1.5);
      
      const playNext = () => {
        if (i < seq.length) {
          setCurrentAudioIndex(i);
          if (window.speechSynthesis) {
            const u = new SpeechSynthesisUtterance(seq[i]);
            u.rate = rate;
            window._audioQueue.push(u);
            window.speechSynthesis.speak(u);
          }
          i++;
          setTimeout(playNext, Math.max(1500 - (lvl * 15), 600));
        } else {
          setCurrentAudioIndex(-1);
          setGameStatus('player_turn');
          setPlayerTurn(true);
        }
      };
      
      playNext();
    };

    const startGame = (startLvl = 1) => {
      if (window.speechSynthesis) window.speechSynthesis.cancel();
      setScore(s => startLvl === 1 ? 0 : s);
      setLevel(startLvl);
      const { seq, selectedOptions } = generateLevel(startLvl);
      setSequence(seq);
      setOptions(selectedOptions.sort(() => 0.5 - Math.random()));
      setPlayerIndex(0);
      setGameStatus('playing_audio');
      setTimeout(() => playAudioSequence(seq, startLvl), 500);
    };

    const handleWordClick = (word) => {
      if (!playerTurn || gameStatus !== 'player_turn') return;
      
      if (window.speechSynthesis) {
        const u = new SpeechSynthesisUtterance(word);
        u.rate = 1.2;
        window.speechSynthesis.speak(u);
      }

      if (word === sequence[playerIndex]) {
        setScore(s => s + 10);
        if (playerIndex + 1 === sequence.length) {
          setPlayerTurn(false);
          if (level >= 50) {
            setGameStatus('game_completed');
          } else {
            setGameStatus('level_clear');
          }
        } else {
          setPlayerIndex(playerIndex + 1);
        }
      } else {
        setGameStatus('failed');
        setPlayerTurn(false);
      }
    };

    const nextLevel = () => {
      startGame(level + 1);
    };

    React.useEffect(() => {
      return () => { if(window.speechSynthesis && window.speechSynthesis.speaking) window.speechSynthesis.cancel(); };
    }, []);

    return (
      <div className="bg-slate-900 p-6 md:p-10 rounded-[2.5rem] border border-slate-800 w-full max-w-4xl mx-auto shadow-[0_0_80px_rgba(37,99,235,0.15)] transition-all">
        <div className="flex justify-between items-center mb-10 text-white">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/10 rounded-2xl border border-blue-500/20">
              <Headphones className="w-8 h-8 text-blue-500" />
            </div>
            <div>
              <div className="text-slate-500 text-xs font-black uppercase tracking-widest">Score</div>
              <div className="text-4xl font-black">{score}</div>
            </div>
          </div>
          <div className="text-right flex flex-col items-end">
            <div className="text-slate-500 text-xs font-black uppercase tracking-widest mb-1">Level {level}/50</div>
            <div className="w-32 h-2 bg-slate-800 rounded-full overflow-hidden mb-2">
              <div className="h-full bg-blue-500" style={{width: `${(level/50)*100}%`}}></div>
            </div>
          </div>
        </div>

        {gameStatus === 'waiting' && (
          <div className="text-center py-20 px-4 bg-slate-950 rounded-[2rem] border border-slate-800">
            <Ear className="w-20 h-20 text-blue-500 mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl font-black text-white mb-2">Audio Memory Match</h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto leading-relaxed">Listen carefully to the sequence of spoken words. Progress through 50 increasingly difficult levels. Don't repeat mistakes!</p>
            <button onClick={() => startGame(1)} className="bg-blue-600 hover:bg-blue-500 text-white px-8 md:px-10 py-4 rounded-xl font-black text-xl flex items-center gap-2 mx-auto shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-transform hover:scale-105"><Play className="fill-current w-5 h-5"/> Start Game</button>
          </div>
        )}

        {gameStatus !== 'waiting' && gameStatus !== 'failed' && gameStatus !== 'level_clear' && gameStatus !== 'game_completed' && (
          <div>
            <div className={`mb-8 text-center p-4 rounded-2xl border transition-colors ${gameStatus === 'playing_audio' ? 'bg-orange-500/10 border-orange-500/30 text-orange-400 animate-pulse' : 'bg-green-500/10 border-green-500/30 text-green-400'}`}>
              <div className="text-lg font-black uppercase tracking-widest flex items-center justify-center gap-2">
                {gameStatus === 'playing_audio' ? <><Ear className="w-5 h-5" /> Listen carefully... (Word {currentAudioIndex + 1} of {sequence.length})</> : <><Brain className="w-5 h-5" /> Your Turn! Click the {sequence.length} words.</>}
              </div>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
              {options.map((w, idx) => (
                <button
                  key={idx}
                  onClick={() => handleWordClick(w)}
                  disabled={gameStatus !== 'player_turn'}
                  className={`py-6 flex items-center justify-center text-lg md:text-xl font-bold rounded-2xl transition-all border-2 ${gameStatus === 'player_turn' ? 'bg-slate-800 hover:bg-blue-600 border-slate-700 hover:border-blue-400 text-white shadow-xl cursor-pointer active:scale-95' : 'bg-slate-950 border-slate-900 shadow-none text-slate-500 cursor-not-allowed opacity-50'}`}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>
        )}

        {gameStatus === 'failed' && (
          <div className="text-center py-20 px-4 bg-slate-950 rounded-[2rem] border border-red-500/30 bg-red-500/5">
            <h2 className="text-4xl font-black text-red-500 mb-2">Memory Failed!</h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto">You clicked the wrong word. You reached Level {level} with a score of {score}.</p>
            <button onClick={() => startGame(1)} className="bg-red-600 hover:bg-red-500 text-white px-10 py-4 rounded-xl font-black text-xl mx-auto shadow-[0_0_30px_rgba(239,68,68,0.4)] transition-transform hover:scale-105">Restart from Level 1</button>
          </div>
        )}

        {gameStatus === 'level_clear' && (
          <div className="text-center py-20 px-4 bg-slate-950 rounded-[2rem] border border-blue-500/30 shadow-[inset_0_0_80px_rgba(37,99,235,0.1)]">
            <h2 className="text-4xl md:text-5xl font-black text-blue-400 mb-2">Sequence Correct!</h2>
            <p className="text-slate-400 tracking-[0.3em] uppercase font-bold mb-8">Level {level} Mastered</p>
            <button onClick={nextLevel} className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-xl font-black text-xl mx-auto shadow-[0_0_30px_rgba(37,99,235,0.4)] border border-blue-400 transition-transform hover:scale-105">Continue to Level {level + 1}</button>
          </div>
        )}
        
        {gameStatus === 'game_completed' && (
          <div className="text-center py-20 px-4 bg-slate-950 rounded-[2rem] border border-yellow-500/50 shadow-[inset_0_0_100px_rgba(234,179,8,0.2)]">
            <Trophy className="w-24 h-24 text-yellow-500 mx-auto mb-6" />
            <h2 className="text-5xl font-black text-yellow-400 mb-4">Champion!</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-md mx-auto">You have completed all 50 levels of Audio Memory Match! Your final score is {score}. Your listening skills are phenomenal.</p>
            <button onClick={() => startGame(1)} className="bg-yellow-600 hover:bg-yellow-500 text-white px-10 py-4 rounded-xl font-black text-xl mx-auto shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-transform hover:scale-105">Play Again</button>
          </div>
        )}
      </div>
    );
  };





  const WordListenerGame = () => {
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [options, setOptions] = useState([]);
    const [target, setTarget] = useState('');
    const [gameStatus, setGameStatus] = useState('waiting');
    const [timeLeft, setTimeLeft] = useState(15);
    const [scorePop, setScorePop] = useState(false);
    
    const allWords = [
      'Cat', 'Dog', 'Sun', 'Run', 'Red', 'Bus', 'Car', 'Pen',
      'Apple', 'Water', 'Table', 'Chair', 'House', 'Train', 'Cloud', 'Music',
      'Elephant', 'Computer', 'Mountain', 'Hospital', 'Umbrella', 'Telescope',
      'Fascinate', 'Exaggerate', 'Phenomenon', 'Hypothesis', 'Vocabulary', 'Architecture',
      'Incomprehensible', 'Uncharacteristically', 'Onomatopoeia', 'Philosophical', 'Psychological', 'Extraterrestrial'
    ];

    const generateLevel = (lvl) => {
      const maxIndex = Math.min(Math.floor((lvl / 50) * allWords.length) + 6, allWords.length);
      const minIndex = Math.max(0, maxIndex - 12);
      const availableWords = allWords.slice(minIndex, maxIndex);
      const optCount = Math.min(4 + Math.floor(lvl / 10), 8);
      const shuffled = [...availableWords].sort(() => 0.5 - Math.random());
      let selected = shuffled.slice(0, optCount);
      if (selected.length < optCount) {
         const extra = [...allWords].sort(() => 0.5 - Math.random()).filter(w => !selected.includes(w));
         selected = [...selected, ...extra.slice(0, optCount - selected.length)];
      }
      const targetWord = selected[Math.floor(Math.random() * selected.length)];
      return { selected, targetWord };
    };

    const playAudio = (text, rate = 0.9) => {
      if(window.speechSynthesis) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.rate = rate;
        window.speechSynthesis.speak(u);
      }
    };

    const nextRound = (currentLvl) => {
      if (currentLvl > 50) {
        setGameStatus('completed');
        return;
      }
      const { selected, targetWord } = generateLevel(currentLvl);
      setOptions(selected);
      setTarget(targetWord);
      setTimeLeft(Math.max(15 - Math.floor(currentLvl / 4), 5));
      setGameStatus('playing');
      setTimeout(() => playAudio(targetWord, Math.min(0.8 + (currentLvl * 0.01), 1.2)), 500);
    };

    const startGame = (startLvl = 1) => {
      setScore(s => startLvl === 1 ? 0 : s);
      setLevel(startLvl);
      nextRound(startLvl);
    };

    const handleSelect = (word) => {
      if(gameStatus !== 'playing') return;
      if(word === target) {
        setScore(s => s + 10);
        setScorePop(true);
        setTimeout(() => setScorePop(false), 1000);
        setGameStatus('correct');
        playAudio("Correct! " + word, 1.2);
        setTimeout(() => {
          setLevel(l => l + 1);
          nextRound(level + 1);
        }, 1500);
      } else {
        playAudio("Wrong. The word was " + target, 1.0);
        setGameStatus('failed');
      }
    };

    React.useEffect(() => {
      if (gameStatus !== 'playing') return;
      const timer = setInterval(() => {
        setTimeLeft(t => {
          if (t <= 1) {
            clearInterval(timer);
            setGameStatus('failed');
            if (window.speechSynthesis) window.speechSynthesis.cancel();
            playAudio("Time is up", 1.0);
            return 0;
          }
          return t - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }, [gameStatus]);

    React.useEffect(() => { return () => { if(window.speechSynthesis) window.speechSynthesis.cancel(); }; }, []);

    return (
      <div className="bg-slate-900 p-6 md:p-10 rounded-[2.5rem] border border-slate-800 w-full max-w-4xl mx-auto shadow-[0_0_80px_rgba(34,197,94,0.15)] transition-all relative overflow-hidden">
        <div className="flex justify-between items-center mb-10 text-white relative z-10">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-500/10 rounded-2xl border border-green-500/20">
              <Headphones className="w-8 h-8 text-green-500" />
            </div>
            <div className="relative">
              <div className="text-slate-500 text-xs font-black uppercase tracking-widest">Score</div>
              <div className="text-4xl font-black flex items-center gap-2">
                {score}
                {scorePop && <span className="absolute -right-12 top-0 text-green-400 font-bold text-2xl animate-ping">+10</span>}
              </div>
            </div>
          </div>
          <div className="text-right flex flex-col items-end">
            <div className="text-slate-500 text-xs font-black uppercase tracking-widest mb-1">Level {level}/50</div>
            <div className="w-32 h-2 bg-slate-800 rounded-full overflow-hidden mb-2">
              <div className="h-full bg-green-500 transition-all duration-500" style={{width: `${(level/50)*100}%`}}></div>
            </div>
            {gameStatus === 'playing' && (
              <div className="text-xs font-bold px-2 py-1 bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg">
                Time Left: <span className="font-black">{timeLeft}s</span>
              </div>
            )}
          </div>
        </div>

        {gameStatus === 'playing' && (
          <div className="w-full h-1 bg-slate-800 absolute top-0 left-0">
            <div className="h-full bg-green-500 transition-all duration-1000 linear" style={{ width: `${(timeLeft / (Math.max(15 - Math.floor(level / 4), 5))) * 100}%` }}></div>
          </div>
        )}

        {gameStatus === 'waiting' && (
          <div className="text-center py-20 px-4 bg-slate-950 rounded-[2rem] border border-slate-800">
            <Ear className="w-20 h-20 text-green-500 mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl font-black text-white mb-2">Word Listener</h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto leading-relaxed">Listen to the spoken word and select the correct option before time runs out!</p>
            <button onClick={() => startGame(1)} className="bg-green-600 hover:bg-green-500 text-white px-8 md:px-10 py-4 rounded-xl font-black text-xl flex items-center gap-2 mx-auto shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-transform hover:scale-105"><Play className="fill-current w-5 h-5"/> Start Challenge</button>
          </div>
        )}

        {gameStatus === 'failed' && (
          <div className="text-center py-20 px-4 bg-slate-950 rounded-[2rem] border border-red-500/30 bg-red-500/5">
            <h2 className="text-4xl font-black text-red-500 mb-2">{timeLeft === 0 ? "Time's Up!" : "Incorrect!"}</h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto">{timeLeft === 0 ? `You couldn't answer in time.` : `The word was "${target}".`} You reached Level {level} with {score} points.</p>
            <button onClick={() => startGame(1)} className="bg-red-600 hover:bg-red-500 text-white px-10 py-4 rounded-xl font-black text-xl mx-auto shadow-[0_0_30px_rgba(239,68,68,0.4)] transition-transform hover:scale-105">Restart from Level 1</button>
          </div>
        )}
        
        {gameStatus === 'completed' && (
          <div className="text-center py-20 px-4 bg-slate-950 rounded-[2rem] border border-yellow-500/50 shadow-[inset_0_0_100px_rgba(234,179,8,0.2)]">
            <Trophy className="w-24 h-24 text-yellow-500 mx-auto mb-6" />
            <h2 className="text-5xl font-black text-yellow-400 mb-4">Vocabulary Master!</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-md mx-auto">You conquered all 50 levels of Word Listener! Final score: {score}.</p>
            <button onClick={() => startGame(1)} className="bg-yellow-600 hover:bg-yellow-500 text-white px-10 py-4 rounded-xl font-black text-xl mx-auto shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-transform hover:scale-105">Play Again</button>
          </div>
        )}

        {(gameStatus === 'playing' || gameStatus === 'correct') && (
          <div>
            <div className="mb-8 text-center">
               <button onClick={() => playAudio(target, Math.min(0.8 + (level * 0.01), 1.2))} className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-full border border-slate-700 font-bold flex items-center gap-2 mx-auto transition-transform active:scale-95"><Ear className="w-5 h-5"/> Repeat Audio</button>
               {gameStatus === 'correct' && <div className="text-green-400 font-bold mt-4 text-xl animate-bounce">Correct! Next level...</div>}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {options.map((w, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(w)}
                  disabled={gameStatus !== 'playing'}
                  className={`py-6 px-2 text-center flex items-center justify-center text-xl font-bold rounded-2xl transition-all border-4 ${gameStatus === 'playing' ? 'bg-slate-800 hover:bg-green-600 hover:border-green-400 border-slate-700 text-white shadow-xl active:scale-95 cursor-pointer' : (w === target ? 'bg-green-600 border-green-400 text-white shadow-xl' : 'bg-slate-950 border-slate-900 text-slate-600 opacity-50')}`}
                >
                  <span className="break-all">{w}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const DictationGame = () => {
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [target, setTarget] = useState('');
    const [input, setInput] = useState('');
    const [gameStatus, setGameStatus] = useState('waiting');
    
    const sentences = [
      "Cat", "Dog", "Sun", "Run", "Red", "Bus", "Car", "Pen",
      "Apple", "Water", "Table", "Chair", "House", "Train", "Cloud", "Music",
      "Red Car", "Fast Run", "Big Bus", "Blue Pen", "Sweet Apple", "Cold Water", "Round Table", "High Chair",
      "I run fast.", "The cat sleeps.", "She reads books.", "We eat apples.", "He drives a car.",
      "The sun is hot.", "They play outside.", "Water is clear.", "Birds fly high.", "Look at the sky.",
      "The quick brown fox jumps.", "She walked to the store today.", "He is reading a good book.",
      "They are playing soccer in the park.", "The weather is very nice today.", "I need to buy some milk.",
      "Please close the door behind you.", "The train arrives at six o'clock.", "My favorite color is bright blue.",
      "We went to the beach yesterday.",
      "The unexpected rain caused a significant delay in our journey.",
      "Scientific research requires a great deal of patience and dedication.",
      "She elegantly played the piano during the evening concert.",
      "The architect designed a building that is both functional and beautiful.",
      "Environmental conservation is crucial for future generations.",
      "He explained the complicated theory with remarkable clarity.",
      "The committee reached a unanimous decision after hours of debate.",
      "Exploring the vastness of space has always fascinated humanity.",
      "Her comprehensive understanding of the subject impressed the professor.",
      "The new software update includes several important security features.",
      "The intricate mechanisms of a mechanical watch demand meticulous craftsmanship.",
      "Global economic fluctuations often have profound impacts on local markets.",
      "The philosophical implications of artificial intelligence continue to spark intense debate.",
      "Sustainable agricultural practices are essential for long-term ecological balance.",
      "The symphony orchestra performed a mesmerizing rendition of the classical masterpiece.",
      "Technological advancements have exponentially accelerated the pace of communication.",
      "The protagonist's psychological journey is the central theme of the novel.",
      "Rigorous methodology is the foundation of any credible scientific investigation.",
      "The intricate diplomatic negotiations finally yielded a comprehensive peace treaty.",
      "The phenomenon of quantum entanglement challenges our fundamental understanding of physics.",
      "The cardiovascular system relies on a complex network of arteries, veins, and capillaries.",
      "Jurisprudence requires an objective interpretation of established constitutional principles.",
      "The socioeconomic ramifications of the policy shift were immediately apparent to the analysts.",
      "Epistemological inquiries delve into the nature, origin, and limits of human knowledge.",
      "The astrophysical observations corroborated the previously untested theoretical models.",
      "The pharmacological efficacy of the novel compound exceeded initial clinical expectations.",
      "Linguistic anthropology examines how language influences social life and cultural identity.",
      "The macroeconomic stabilization program aimed to mitigate the effects of hyperinflation.",
      "Neuroplasticity demonstrates the brain's remarkable ability to reorganize itself.",
      "The intricate choreography seamlessly integrated classical ballet with contemporary movements."
    ];

    const playAudio = (text, rate = 0.8) => {
      if(window.speechSynthesis) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.rate = rate;
        window.speechSynthesis.speak(u);
      }
    };

    const nextRound = (currentLvl) => {
      if (currentLvl > 50) {
        setGameStatus('completed');
        return;
      }
      const targetSentence = sentences[currentLvl - 1];
      setTarget(targetSentence);
      setInput('');
      setGameStatus('playing');
      setTimeout(() => playAudio(targetSentence, Math.min(0.8 + (currentLvl * 0.005), 1.0)), 500);
    };

    const startGame = (startLvl = 1) => {
      setScore(s => startLvl === 1 ? 0 : s);
      setLevel(startLvl);
      nextRound(startLvl);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if(gameStatus !== 'playing') return;
      
      const cleanTarget = target.toLowerCase().replace(/[^a-z0-9]/g, '');
      const cleanInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');

      if(cleanInput === cleanTarget) {
        setScore(s => s + 20);
        setGameStatus('correct');
        playAudio("Excellent", 1.2);
        setTimeout(() => {
          setLevel(l => l + 1);
          nextRound(level + 1);
        }, 1500);
      } else {
        playAudio("Incorrect.", 1.0);
        setGameStatus('failed');
      }
    };

    React.useEffect(() => { return () => { if(window.speechSynthesis) window.speechSynthesis.cancel(); }; }, []);

    return (
      <div className="bg-slate-900 p-6 md:p-10 rounded-[2.5rem] border border-slate-800 w-full max-w-4xl mx-auto shadow-[0_0_80px_rgba(239,68,68,0.15)] transition-all">
        <div className="flex justify-between items-center mb-10 text-white">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-red-500/10 rounded-2xl border border-red-500/20">
              <BookOpen className="w-8 h-8 text-red-500" />
            </div>
            <div>
              <div className="text-slate-500 text-xs font-black uppercase tracking-widest">Score</div>
              <div className="text-4xl font-black">{score}</div>
            </div>
          </div>
          <div className="text-right flex flex-col items-end">
            <div className="text-slate-500 text-xs font-black uppercase tracking-widest mb-1">Level {level}/50</div>
            <div className="w-32 h-2 bg-slate-800 rounded-full overflow-hidden mb-2">
              <div className="h-full bg-red-500" style={{width: `${(level/50)*100}%`}}></div>
            </div>
          </div>
        </div>

        {gameStatus === 'waiting' && (
          <div className="text-center py-20 px-4 bg-slate-950 rounded-[2rem] border border-slate-800">
            <MessageSquare className="w-20 h-20 text-red-500 mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl font-black text-white mb-2">Dictation Hero</h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto leading-relaxed">Listen to the spoken sentence and type it exactly. Complete all 50 increasingly complex sentences!</p>
            <button onClick={() => startGame(1)} className="bg-red-600 hover:bg-red-500 text-white px-8 md:px-10 py-4 rounded-xl font-black text-xl flex items-center gap-2 mx-auto shadow-[0_0_30px_rgba(239,68,68,0.4)] transition-transform hover:scale-105"><Play className="fill-current w-5 h-5"/> Start Dictation</button>
          </div>
        )}

        {gameStatus === 'failed' && (
          <div className="text-center py-20 px-4 bg-slate-950 rounded-[2rem] border border-red-500/30 bg-red-500/5">
             <h2 className="text-4xl font-black text-red-500 mb-2">Typo Detected!</h2>
             <p className="text-slate-400 mb-2 max-w-md mx-auto">You typed: <span className="text-white">"{input}"</span></p>
             <p className="text-slate-400 mb-8 max-w-md mx-auto">Correct was: <span className="text-green-400 font-bold">"{target}"</span></p>
             <button onClick={() => startGame(1)} className="bg-red-600 hover:bg-red-500 text-white px-10 py-4 rounded-xl font-black text-xl mx-auto shadow-[0_0_30px_rgba(239,68,68,0.4)] transition-transform hover:scale-105">Restart from Level 1</button>
          </div>
        )}

        {gameStatus === 'completed' && (
          <div className="text-center py-20 px-4 bg-slate-950 rounded-[2rem] border border-yellow-500/50 shadow-[inset_0_0_100px_rgba(234,179,8,0.2)]">
            <Trophy className="w-24 h-24 text-yellow-500 mx-auto mb-6" />
            <h2 className="text-5xl font-black text-yellow-400 mb-4">Dictation Legend!</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-md mx-auto">You successfully transcribed all 50 sentences flawlessly! Final score: {score}.</p>
            <button onClick={() => startGame(1)} className="bg-yellow-600 hover:bg-yellow-500 text-white px-10 py-4 rounded-xl font-black text-xl mx-auto shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-transform hover:scale-105">Play Again</button>
          </div>
        )}

        {(gameStatus === 'playing' || gameStatus === 'correct') && (
          <div>
            <div className="mb-8 text-center flex flex-col gap-4 items-center">
               <button onClick={() => playAudio(target, Math.min(0.8 + (level * 0.005), 1.0))} className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-full border border-slate-700 font-bold flex items-center gap-2 mx-auto transition-transform active:scale-95"><Ear className="w-5 h-5"/> Play Normal</button>
               <button onClick={() => playAudio(target, 0.5)} className="bg-slate-950 hover:bg-slate-800 text-slate-400 px-6 py-2 rounded-full border border-slate-800 font-bold flex items-center gap-2 mx-auto text-sm transition-transform active:scale-95"><Clock className="w-4 h-4"/> Play Slow</button>
               {gameStatus === 'correct' && <div className="text-green-400 font-bold mt-2 text-xl animate-bounce">Perfect Spelling!</div>}
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <input 
                type="text" 
                value={input}
                onChange={e => setInput(e.target.value)}
                disabled={gameStatus !== 'playing'}
                placeholder="Type what you hear..."
                className="w-full bg-slate-950 border-2 border-slate-700 text-white px-6 py-5 rounded-2xl focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none text-2xl font-medium shadow-inner transition-colors"
                autoFocus
                autoComplete="off"
                spellCheck="false"
              />
              <button 
                type="submit"
                disabled={gameStatus !== 'playing' || !input.trim()}
                className="w-full bg-red-600 hover:bg-red-500 disabled:opacity-50 disabled:hover:bg-red-600 text-white py-5 rounded-2xl font-black text-xl transition-all shadow-[0_0_20px_rgba(239,68,68,0.3)] active:scale-95"
              >
                Submit Answer
              </button>
            </form>
          </div>
        )}
      </div>
    );
  };

  if (activeGame) {
    const getActiveComponent = () => {
      switch (activeGame.title) {
        case 'Audio Memory Match': return <AudioMemoryGame />;
        case 'Word Listener': return <WordListenerGame />;
        case 'Dictation Hero': return <DictationGame />;
        case 'Sound Scramble': return <SoundScrambleGame />;
        case 'Phonics Pop': return <PhonicsPopGame />;
        case 'Listen & Find': return <ListenFindGame />;
        case 'Story Echoes': return <StoryEchoesGame />;
        case 'Sentence Builder': return <SentenceBuilderGame />;
        case 'Pattern Recall': return <PatternRecallGame />;
        case 'Quantum Audio': return <QuantumAudioGame />;
        default: return <AudioMemoryGame />;
      }
    };

    return (
      <div className="pt-24 pb-20 px-4 max-w-5xl mx-auto flex flex-col items-center">
        <button 
          onClick={() => setActiveGame(null)}
          className="mb-8 flex items-center gap-2 text-slate-400 hover:text-white transition-colors self-start font-bold"
        >
          <ChevronDown className="rotate-90 w-5 h-5" /> Back to Academy
        </button>
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black text-white mb-2">{activeGame.title}</h1>
          <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">{activeGame.category} • {activeGame.classLevel}</p>
        </div>
        {getActiveComponent()}
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 px-4 max-w-7xl mx-auto text-center lg:text-left">
      <div className="mb-12 border-b border-slate-900 pb-8 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <div className="inline-flex items-center gap-2 bg-blue-600/10 text-blue-500 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4 border border-blue-500/20">
            <Trophy className="w-3 h-3" /> Skill Development Games
          </div>
          <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">Level-Up Academy</h1>
          <p className="text-slate-400">Master your listening skills through 10 highly focused, interactive challenges.</p>
        </div>
        <div className="bg-slate-900/50 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-800 text-xs font-bold text-slate-400">
          Total Games: <span className="text-white">10</span>
        </div>
      </div>
      


      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredGames.map(game => (
          <div key={game.id} className="group bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all text-left relative">
            <div className="relative aspect-video overflow-hidden">
              <img src={game.img} alt={game.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
              <div className="flex gap-2 mb-4">
                <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-1 rounded uppercase font-bold">{game.classLevel}</span>
                <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-1 rounded uppercase font-bold">{game.difficulty}</span>
              </div>
              <button 
                onClick={() => setActiveGame(game)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2"
              >
                Play Now <Gamepad2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    { title: "Technical Skills", icon: <Code className="w-6 h-6 text-blue-500" />, items: ["React.js", "Node.js", "Python", "AWS", "SQL"] },
    { title: "Creative Skills", icon: <Palette className="w-6 h-6 text-purple-500" />, items: ["UI/UX", "Photoshop", "Figma", "Canva", "Video Editing"] },
    { title: "Business Skills", icon: <Rocket className="w-6 h-6 text-orange-500" />, items: ["Marketing", "Sales", "SEO", "Analytics", "Project Management"] }
  ];
  // Note: fixed the icon name Rocket in the object if needed

  return (
    <div className="pt-24 pb-20 px-4 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Skills Directory</h1>
        <p className="text-slate-400">Discover and master the most in-demand skills in the industry.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((cat, i) => (
          <div key={i} className="bg-slate-900 p-8 rounded-3xl border border-slate-800">
            <div className="mb-6">{cat.icon}</div>
            <h3 className="text-2xl font-bold text-white mb-6">{cat.title}</h3>
            <ul className="space-y-4">
              {cat.items.map((item, idx) => (
                <li key={idx} className="flex items-center justify-between text-slate-400 hover:text-white group cursor-pointer">
                  <span>{item}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const TestPage = () => {
  const classes = ['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'];
  const [selectedClass, setSelectedClass] = useState(classes[0]);
  
  // Track highest unlocked level per class (default 1)
  const [unlockedLevels, setUnlockedLevels] = useState({ 'Class 6': 1, 'Class 7': 1, 'Class 8': 1, 'Class 9': 1, 'Class 10': 1 });
  
  const [viewState, setViewState] = useState('levels'); // 'levels', 'story', 'quiz', 'result'
  const [currentLevel, setCurrentLevel] = useState(null);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  // Generate mock realistic data for the levels
  const getLevelData = (levelNum) => {
    const titles = ["The Smart Crow", "Mystery of the Old Clock", "Journey to Mars", "The Hidden Treasure", "The AI Revolution"];
    return {
      level: levelNum,
      title: titles[levelNum - 1],
      storyText: `Welcome to Level ${levelNum} Listening Exercise.\n\nOnce upon a time in a world full of wonders, lived a curious mind named Alex. Everyday, Alex would go for an adventure, seeking to learn something new about the universe and its mysteries. In this particular level, the focus is on understanding the deep context of the narrative and picking up key details that will be asked in the following 10 questions. Pay close attention to the characters, the setting, and the plot twists to successfully pass this level and unlock the next one!`,
      questions: Array.from({ length: 10 }).map((_, i) => ({
        q: `What is the key takeaway from part ${i + 1} of the story?`,
        options: ["Alex learned a new skill", "The treasure was found", "The clock struck midnight", "None of the above"],
        answer: 0 // Index of correct option
      }))
    };
  };

  const levels = [1, 2, 3, 4, 5];
  const activeLevelData = currentLevel ? getLevelData(currentLevel) : null;

  const [isPlaying, setIsPlaying] = useState(false);

  const stopAudio = () => {
    if (window.speechSynthesis && window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return () => stopAudio();
  }, []);

  const handleStartStory = (level) => {
    stopAudio();
    setCurrentLevel(level);
    setViewState('story');
  };

  const handleStartQuiz = () => {
    stopAudio();
    setScore(0);
    setCurrentQIndex(0);
    setSelectedOption(null);
    setViewState('quiz');
  };

  const handleGoBack = () => {
    stopAudio();
    if (viewState === 'quiz') {
      setViewState('story');
    } else if (viewState === 'story' || viewState === 'result') {
      setViewState('levels');
    }
  };

  const handleToggleAudio = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      if (!activeLevelData) return;
      const utterance = new SpeechSynthesisUtterance(activeLevelData.storyText);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.onend = () => setIsPlaying(false);
      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
    }
  };

  const handleAnswerSubmit = () => {
    if (selectedOption === activeLevelData.questions[currentQIndex].answer) {
      setScore(s => s + 1);
    }
    
    if (currentQIndex < 9) {
      setCurrentQIndex(i => i + 1);
      setSelectedOption(null);
    } else {
      // Quiz finished
      setViewState('result');
      // Unlock next level if passed (70% score)
      if (score + (selectedOption === activeLevelData.questions[currentQIndex].answer ? 1 : 0) >= 7) {
        if (currentLevel < 5 && unlockedLevels[selectedClass] === currentLevel) {
          setUnlockedLevels({ ...unlockedLevels, [selectedClass]: currentLevel + 1 });
        }
      }
    }
  };

  return (
    <div className="pt-24 pb-20 px-4 max-w-5xl mx-auto min-h-screen">
      <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex items-center gap-4">
          {viewState !== 'levels' && (
            <button 
              onClick={handleGoBack}
              className="bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-xl transition-all shadow-lg hover:-translate-x-1"
              title="Go Back"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
          )}
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Listening Skills Assessment</h1>
            <p className="text-slate-400">Complete the stories and pass the quiz to unlock higher levels.</p>
          </div>
        </div>
        {viewState === 'levels' && (
          <div className="relative">
            <select 
              value={selectedClass} 
              onChange={(e) => setSelectedClass(e.target.value)}
              className="appearance-none bg-slate-900 border border-slate-700 text-white px-6 py-3 pr-12 rounded-xl text-lg font-semibold focus:outline-none focus:border-blue-500 cursor-pointer shadow-lg"
            >
              {classes.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
          </div>
        )}
      </div>

      {viewState === 'levels' && (
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
            Curriculum for {selectedClass}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {levels.map((lvl) => {
              const isUnlocked = lvl <= unlockedLevels[selectedClass];
              return (
                <div 
                  key={lvl} 
                  className={`relative p-6 rounded-2xl border-2 transition-all ${isUnlocked ? 'bg-slate-800 border-blue-500/30 hover:border-blue-500 hover:-translate-y-1 shadow-lg' : 'bg-slate-900/50 border-slate-800 opacity-60 grayscale'}`}
                >
                  <div className="flex flex-col text-center items-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-black mb-4 ${isUnlocked ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]' : 'bg-slate-800 text-slate-500'}`}>
                      {lvl}
                    </div>
                    <div className="font-bold text-lg text-white mb-1">Level {lvl}</div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-6">
                      {isUnlocked ? 'Available' : 'Locked'}
                    </div>
                    
                    <button 
                      disabled={!isUnlocked}
                      onClick={() => handleStartStory(lvl)}
                      className={`w-full py-2.5 rounded-lg text-sm font-bold transition-colors ${isUnlocked ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'bg-slate-800 text-slate-500 cursor-not-allowed'}`}
                    >
                      {isUnlocked ? 'Start' : 'Requires Level ' + (lvl-1)}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {viewState === 'story' && activeLevelData && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="bg-blue-600 px-8 py-6 flex justify-between items-center">
            <div>
              <div className="text-blue-200 text-sm font-bold uppercase tracking-wider mb-1">Level {currentLevel} • {selectedClass}</div>
              <h2 className="text-3xl font-black text-white">{activeLevelData.title}</h2>
            </div>
            <BookOpen className="w-12 h-12 text-white/20" />
          </div>
          <div className="p-8">
            <div className="bg-slate-950 rounded-2xl p-6 mb-8 border border-slate-800 flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center shrink-0 transition-all ${isPlaying ? 'bg-blue-500/20 shadow-[0_0_30px_rgba(37,99,235,0.4)] animate-pulse' : 'bg-slate-800'}`}>
                {isPlaying ? <Rocket className="w-10 h-10 text-blue-500" /> : <BookOpen className="w-10 h-10 text-slate-500" />}
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-white font-bold text-xl mb-4">Listen to the Story</h3>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button 
                    onClick={handleToggleAudio}
                    className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-lg transition-all ${isPlaying ? 'bg-red-500/10 border border-red-500/50 text-red-500 hover:bg-red-500/20' : 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25 cursor-pointer hover:-translate-y-1'}`}
                  >
                    {isPlaying ? (
                      <><Square className="w-5 h-5 fill-current" /> Stop Audio</>
                    ) : (
                      <><Play className="w-5 h-5 fill-current" /> Play Audio</>
                    )}
                  </button>
                  {isPlaying && (
                    <div className="flex max-w-[200px] gap-1 h-8 items-center">
                      {[...Array(15)].map((_, i) => <div key={i} className="w-1.5 bg-blue-500/80 rounded-full animate-pulse" style={{height: Math.random() * 20 + 8 + 'px', animationDelay: `${i * 0.1}s`}}></div>)}
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none mb-10">
              <p className="text-slate-300 text-lg leading-relaxed">{activeLevelData.storyText}</p>
            </div>
            
            <div className="flex justify-between items-center pt-6 border-t border-slate-800">
              <button onClick={() => setViewState('levels')} className="text-slate-400 hover:text-white font-semibold transition-colors">
                Back to Levels
              </button>
              <button onClick={handleStartQuiz} className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all hover:scale-105 active:scale-95">
                Start Evaluation Quiz
              </button>
            </div>
          </div>
        </div>
      )}

      {viewState === 'quiz' && activeLevelData && (
        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 h-1.5 bg-slate-800 w-full">
              <div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${((currentQIndex) / 10) * 100}%`}}></div>
            </div>
            
            <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-sm">Question {currentQIndex + 1} of 10</span>
              <span className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-500/20">Level {currentLevel}</span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-8 leading-relaxed">
              {activeLevelData.questions[currentQIndex].q}
            </h3>
            
            <div className="space-y-4 mb-10">
              {activeLevelData.questions[currentQIndex].options.map((opt, idx) => (
                <button 
                  key={idx}
                  onClick={() => setSelectedOption(idx)}
                  className={`w-full text-left p-5 rounded-xl border-2 transition-all font-semibold text-lg ${selectedOption === idx ? 'bg-blue-600/10 border-blue-500 text-white transform scale-[1.01]' : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-600 hover:bg-slate-800'}`}
                >
                  <span className="inline-block w-8 text-slate-500 mr-2">{String.fromCharCode(65 + idx)}.</span>
                  {opt}
                </button>
              ))}
            </div>

            <div className="flex justify-end pt-6 border-t border-slate-800">
              <button 
                disabled={selectedOption === null}
                onClick={handleAnswerSubmit} 
                className={`flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-lg transition-all ${selectedOption !== null ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25 cursor-pointer' : 'bg-slate-800 text-slate-500 cursor-not-allowed'}`}
              >
                {currentQIndex === 9 ? 'Finish Quiz' : 'Next Question'} <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {viewState === 'result' && (
        <div className="max-w-2xl mx-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden">
            <div className={`absolute top-0 left-0 w-full h-2 ${score >= 7 ? 'bg-green-500' : 'bg-orange-500'}`}></div>
            
            <div className={`w-28 h-28 mx-auto rounded-full flex items-center justify-center mb-8 ${score >= 7 ? 'bg-green-500/10 border border-green-500/20' : 'bg-orange-500/10 border border-orange-500/20'}`}>
              <Trophy className={`w-14 h-14 ${score >= 7 ? 'text-green-500' : 'text-orange-500'}`} />
            </div>
            
            <h2 className="text-5xl font-black text-white mb-4">{score * 10}%</h2>
            <div className="text-xl font-bold text-slate-300 mb-8">
              You scored <span className={score >= 7 ? "text-green-400" : "text-orange-400"}>{score} out of 10</span> questions correctly.
            </div>
            
            {score >= 7 ? (
              <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6 mb-10">
                <h3 className="text-green-400 font-bold text-lg mb-2">Level Passed! 🎉</h3>
                <p className="text-green-500/80">Excellent listening skills. You have successfully unlocked the next level curriculum.</p>
              </div>
            ) : (
              <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-6 mb-10">
                <h3 className="text-orange-400 font-bold text-lg mb-2">Level Failed</h3>
                <p className="text-orange-500/80">You need a score of 70% or higher to unlock the next level. Please listen closely and try again.</p>
              </div>
            )}
            
            <div className="flex gap-4 justify-center">
              <button onClick={() => setViewState('levels')} className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3.5 rounded-xl font-bold transition-colors">
                Return to Levels
              </button>
              {score < 7 && (
                <button onClick={() => setViewState('story')} className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-xl font-bold transition-colors shadow-lg">
                  Try Again
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// --- Main App ---

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans select-none">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/games" element={<Games />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/test" element={<TestPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
