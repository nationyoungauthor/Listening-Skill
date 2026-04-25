import React, { useState, useEffect } from 'react';
import { LayoutGrid, Zap, Search, BookOpen, Edit3, Target, FlaskConical, Play, Ear, Trophy } from 'lucide-react';

const playVoice = (text, rate = 0.9) => {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.rate = rate;
    window.speechSynthesis.speak(u);
  }
};

const GameTopBar = ({ level, score, icon: Icon, themeClass, title, timeLeft, maxTime }) => {
  const [scorePop, setScorePop] = useState(false);
  const [prevScore, setPrevScore] = useState(score);

  useEffect(() => {
    if (score > prevScore) {
      setScorePop(true);
      const t = setTimeout(() => setScorePop(false), 1000);
      setPrevScore(score);
      return () => clearTimeout(t);
    } else if (score < prevScore) {
      setPrevScore(score);
    }
  }, [score]);

  return (
    <div className="flex justify-between items-center mb-10 text-white relative">
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-2xl border ${themeClass.bgOpacity} ${themeClass.borderOpacity}`}>
          <Icon className={`w-8 h-8 ${themeClass.text}`} />
        </div>
        <div className="relative">
          <div className="text-slate-500 text-xs font-black uppercase tracking-widest">Score</div>
          <div className="text-4xl font-black flex items-center gap-2">
            {score}
            {scorePop && <span className="absolute -right-12 top-0 font-bold text-2xl animate-ping text-green-400">+15</span>}
          </div>
        </div>
      </div>
      <div className="text-right flex flex-col items-end">
        <div className="text-slate-500 text-xs font-black uppercase tracking-widest mb-1">Level {level}/50</div>
        <div className="w-32 h-2 bg-slate-800 rounded-full overflow-hidden mb-2">
          <div className={`h-full ${themeClass.bgSolid} transition-all duration-500`} style={{ width: `${(level / 50) * 100}%` }}></div>
        </div>
        {timeLeft !== undefined && (
          <div className="text-xs font-bold px-2 py-1 bg-red-500/20 text-red-400 border border-red-500/30 rounded-lg">
            Time: <span className="font-black">{timeLeft}s</span>
          </div>
        )}
      </div>
      {timeLeft !== undefined && maxTime && (
        <div className="w-full h-1 bg-slate-800 absolute -top-4 left-0 rounded-full overflow-hidden">
          <div className={`h-full ${themeClass.bgSolid} transition-all duration-1000 linear`} style={{ width: `${(timeLeft / maxTime) * 100}%` }}></div>
        </div>
      )}
    </div>
  );
};

const GameWrapper = ({ status, level, score, title, themeClass, onStart, icon: Icon, desc, children }) => {
  if (status === 'waiting') return (
    <div className="text-center py-20 px-4 bg-slate-950 rounded-[2rem] border border-slate-800">
      <Icon className={`w-20 h-20 ${themeClass.text} mx-auto mb-6 animate-pulse`} />
      <h2 className="text-3xl font-black text-white mb-2">{title}</h2>
      <p className="text-slate-400 mb-8 max-w-md mx-auto leading-relaxed">{desc}</p>
      <button onClick={() => onStart(1)} className={`${themeClass.bgSolid} hover:opacity-80 text-white px-8 py-4 rounded-xl font-black text-xl flex items-center gap-2 mx-auto transition-transform hover:scale-105`}>
        <Play className="fill-current w-5 h-5" /> Start Game
      </button>
    </div>
  );
  if (status === 'failed') return (
    <div className="text-center py-20 px-4 bg-slate-950 rounded-[2rem] border border-red-500/30 bg-red-500/5">
      <h2 className="text-4xl font-black text-red-500 mb-2">Game Over!</h2>
      <p className="text-slate-400 mb-8 max-w-md mx-auto">You reached Level {level} with a score of {score}.</p>
      <button onClick={() => onStart(1)} className="bg-red-600 hover:bg-red-500 text-white px-10 py-4 rounded-xl font-black text-xl mx-auto transition-transform hover:scale-105">Restart</button>
    </div>
  );
  if (status === 'completed') return (
    <div className="text-center py-20 px-4 bg-slate-950 rounded-[2rem] border border-yellow-500/50 shadow-[inset_0_0_100px_rgba(234,179,8,0.2)]">
      <Trophy className="w-24 h-24 text-yellow-500 mx-auto mb-6" />
      <h2 className="text-5xl font-black text-yellow-400 mb-4">Mastered!</h2>
      <p className="text-slate-300 text-lg mb-8 max-w-md mx-auto">You completed all 50 levels of {title}! Score: {score}.</p>
      <button onClick={() => onStart(1)} className="bg-yellow-600 hover:bg-yellow-500 text-white px-10 py-4 rounded-xl font-black text-xl mx-auto transition-transform hover:scale-105">Play Again</button>
    </div>
  );
  return children;
};

// --- GAME 4: Sound Scramble ---
export const SoundScrambleGame = () => {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState('waiting');
  const [sentence, setSentence] = useState([]);
  const [scrambled, setScrambled] = useState([]);
  const [selected, setSelected] = useState([]);
  const [timeLeft, setTimeLeft] = useState(20);
  const maxTime = Math.max(25 - Math.floor(level / 2), 8);

  const sentences = [
    "I like apples", "Cats run fast", "The sun is hot", "Birds fly very high", "Water is cold today",
    "He drives a red car", "She plays piano well", "We eat pizza now", "Dogs bark loudly", "Look at the big sky"
  ];

  const theme = { text: 'text-purple-500', bgSolid: 'bg-purple-600', bgOpacity: 'bg-purple-500/10', borderOpacity: 'border-purple-500/20', hover: 'hover:border-purple-500 hover:bg-purple-600' };

  const startGame = (l) => {
    setLevel(l); setScore(l === 1 ? 0 : score); setStatus('playing'); setSelected([]);
    setTimeLeft(Math.max(25 - Math.floor(l / 2), 8));
    const baseSentence = sentences[l % 10] + (l > 10 ? " everywhere" : "") + (l > 20 ? " everyday" : "") + (l > 30 ? " gracefully" : "") + (l > 40 ? " without stopping" : "");
    const words = baseSentence.split(' ');
    setSentence(words);
    setScrambled([...words].sort(() => 0.5 - Math.random()));
    setTimeout(() => playVoice(baseSentence, Math.min(0.8 + l * 0.01, 1.2)), 500);
  };

  const handleClick = (w, idx) => {
    const newSel = [...selected, w];
    setSelected(newSel);
    if (newSel.length === sentence.length) {
      if (newSel.join(' ') === sentence.join(' ')) {
        playVoice("Correct", 1.2); setScore(s => s + 15);
        if (level >= 50) setStatus('completed'); else { setStatus('correct'); setTimeout(() => startGame(level + 1), 1500); }
      } else setStatus('failed');
    }
  };

  useEffect(() => {
    if (status !== 'playing') return;
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timer);
          setStatus('failed');
          playVoice("Time is up", 1.0);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [status]);

  useEffect(() => { return () => { if (window.speechSynthesis) window.speechSynthesis.cancel(); }; }, []);

  return (
    <div className="bg-slate-900 p-6 md:p-10 rounded-[2.5rem] border border-slate-800 w-full max-w-4xl mx-auto shadow-[0_0_80px_rgba(168,85,247,0.15)]">
      <GameTopBar level={level} score={score} icon={LayoutGrid} themeClass={theme} title="Sound Scramble" timeLeft={timeLeft} maxTime={maxTime} />
      <GameWrapper status={status} level={level} score={score} title="Sound Scramble" themeClass={theme} onStart={startGame} icon={LayoutGrid} desc="Listen to the sentence, then click the scrambled words in the exact correct order.">
        <div className="text-center mb-8"><button onClick={() => playVoice(sentence.join(' '))} className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-full font-bold inline-flex items-center gap-2 transition-transform active:scale-95"><Ear className="w-5 h-5" /> Repeat</button></div>
        <div className="min-h-[80px] bg-slate-950 rounded-2xl p-4 flex flex-wrap gap-2 mb-8 border border-slate-800 shadow-inner">
          {selected.map((w, i) => <div key={i} className="bg-purple-600 px-4 py-2 rounded-xl text-white font-bold">{w}</div>)}
        </div>
        {status === 'correct' ? <div className="text-purple-400 font-bold text-center text-2xl animate-bounce">Correctly assembled!</div> : (
          <div className="flex flex-wrap gap-4 justify-center">
            {scrambled.map((w, i) => (
              <button key={i} disabled={selected.includes(w)} onClick={() => handleClick(w, i)} className={`px-6 py-4 text-xl font-bold rounded-xl border-2 transition-all ${selected.includes(w) ? 'opacity-0 scale-90' : 'bg-slate-800 border-slate-700 hover:border-purple-500 hover:bg-purple-600/20 text-white shadow-lg active:scale-95'}`}>{w}</button>
            ))}
          </div>
        )}
      </GameWrapper>
    </div>
  );
};

// --- GAME 5: Phonics Pop ---
export const PhonicsPopGame = () => {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState('waiting');
  const [target, setTarget] = useState('');
  const [options, setOptions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(15);
  const maxTime = Math.max(15 - Math.floor(level / 4), 5);

  const rhymes = [
    { t: 'Cat', a: 'Bat', w: ['Dog', 'Sun', 'Pen', 'Car', 'Box'] }, { t: 'Sun', a: 'Bun', w: ['Ice', 'Rain', 'Car', 'Sky', 'Tree'] },
    { t: 'Day', a: 'Play', w: ['Night', 'Dark', 'Eat', 'Run', 'Walk'] }, { t: 'Red', a: 'Bed', w: ['Blue', 'Green', 'Box', 'Toy', 'Hat'] },
    { t: 'Light', a: 'Night', w: ['Heavy', 'Dark', 'Sun', 'Moon', 'Star'] }
  ];

  const theme = { text: 'text-pink-500', bgSolid: 'bg-pink-600', bgOpacity: 'bg-pink-500/10', borderOpacity: 'border-pink-500/20', hover: 'hover:border-pink-500 hover:bg-pink-600' };

  const startGame = (l) => {
    setLevel(l); setScore(l === 1 ? 0 : score); setStatus('playing');
    setTimeLeft(Math.max(15 - Math.floor(l / 4), 5));
    const pair = rhymes[l % rhymes.length];
    setTarget(pair.t);
    const numOptions = Math.min(2 + Math.floor(l / 5), 6);
    const opts = [pair.a, ...pair.w.slice(0, numOptions - 1)].sort(() => 0.5 - Math.random());
    setOptions(opts);
    setTimeout(() => playVoice("What rhymes with " + pair.t), 500);
  };

  const handleSelect = (w) => {
    const pair = rhymes.find(r => r.t === target);
    if (w === pair.a) {
      setScore(s => s + 10); playVoice("Pop!", 1.5);
      if (level >= 50) setStatus('completed'); else { setStatus('correct'); setTimeout(() => startGame(level + 1), 1000); }
    } else setStatus('failed');
  };

  useEffect(() => {
    if (status !== 'playing') return;
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timer);
          setStatus('failed');
          playVoice("Time is up", 1.0);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [status]);

  useEffect(() => { return () => { if (window.speechSynthesis) window.speechSynthesis.cancel(); }; }, []);

  return (
    <div className="bg-slate-900 p-6 md:p-10 rounded-[2.5rem] border border-slate-800 w-full max-w-4xl mx-auto shadow-[0_0_80px_rgba(236,72,153,0.15)]">
      <GameTopBar level={level} score={score} icon={Zap} themeClass={theme} title="Phonics Pop" timeLeft={timeLeft} maxTime={maxTime} />
      <GameWrapper status={status} level={level} score={score} title="Phonics Pop" themeClass={theme} onStart={startGame} icon={Zap} desc="Listen to the word and quickly select the option that RHYMES with it!">
        <div className="text-center mb-10"><button onClick={() => playVoice("What rhymes with " + target)} className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-full font-bold inline-flex items-center gap-2 active:scale-95 transition-transform"><Ear className="w-5 h-5" /> Repeat</button></div>
        {status === 'correct' ? <div className="text-pink-400 font-bold text-center text-3xl animate-ping py-10">POP!</div> : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {options.map((w, i) => <button key={i} onClick={() => handleSelect(w)} className="py-10 bg-slate-800 hover:bg-pink-600 border-4 border-slate-700 hover:border-pink-400 rounded-full text-2xl font-bold text-white transition-all active:scale-90 shadow-lg">{w}</button>)}
          </div>
        )}
      </GameWrapper>
    </div>
  );
};

// --- GAME 6: Listen & Find ---
export const ListenFindGame = () => {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState('waiting');
  const [riddle, setRiddle] = useState('');
  const [options, setOptions] = useState([]);
  const [answer, setAnswer] = useState('');
  const [timeLeft, setTimeLeft] = useState(20);
  const maxTime = Math.max(20 - Math.floor(level / 4), 6);

  const riddles = [
    { r: "I am round and you kick me.", a: "Ball", w: ["Apple", "Sun", "Moon"] },
    { r: "I have four legs but cannot walk.", a: "Table", w: ["Dog", "Cat", "Chair"] },
    { r: "I fall from the sky but never get hurt.", a: "Rain", w: ["Bird", "Plane", "Leaf"] },
    { r: "I have hands but cannot clap.", a: "Clock", w: ["Statue", "Tree", "Robot"] },
    { r: "I have a tail and bark.", a: "Dog", w: ["Cat", "Fish", "Bird"] }
  ];

  const theme = { text: 'text-emerald-500', bgSolid: 'bg-emerald-600', bgOpacity: 'bg-emerald-500/10', borderOpacity: 'border-emerald-500/20', hover: 'hover:border-emerald-500 hover:bg-emerald-600' };

  const startGame = (l) => {
    setLevel(l); setScore(l === 1 ? 0 : score); setStatus('playing');
    setTimeLeft(Math.max(20 - Math.floor(l / 4), 6));
    const base = riddles[l % riddles.length];
    setRiddle(base.r); setAnswer(base.a);
    const numOptions = Math.min(2 + Math.floor(l / 10), 4);
    setOptions([base.a, ...base.w.slice(0, numOptions - 1)].sort(() => 0.5 - Math.random()));
    setTimeout(() => playVoice(base.r, Math.min(0.8 + l * 0.005, 1.1)), 500);
  };

  const handleSelect = (w) => {
    if (w === answer) {
      setScore(s => s + 10); playVoice("Correct!");
      if (level >= 50) setStatus('completed'); else { setStatus('correct'); setTimeout(() => startGame(level + 1), 1500); }
    } else setStatus('failed');
  };

  useEffect(() => {
    if (status !== 'playing') return;
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timer);
          setStatus('failed');
          playVoice("Time is up", 1.0);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [status]);

  useEffect(() => { return () => { if (window.speechSynthesis) window.speechSynthesis.cancel(); }; }, []);

  return (
    <div className="bg-slate-900 p-6 md:p-10 rounded-[2.5rem] border border-slate-800 w-full max-w-4xl mx-auto shadow-[0_0_80px_rgba(16,185,129,0.15)]">
      <GameTopBar level={level} score={score} icon={Search} themeClass={theme} title="Listen & Find" timeLeft={timeLeft} maxTime={maxTime} />
      <GameWrapper status={status} level={level} score={score} title="Listen & Find" themeClass={theme} onStart={startGame} icon={Search} desc="Listen to the audio riddle and find the correct object from the options.">
        <div className="text-center mb-10"><button onClick={() => playVoice(riddle)} className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-full font-bold inline-flex items-center gap-2 active:scale-95 transition-transform"><Ear className="w-5 h-5" /> Hear Riddle</button></div>
        {status === 'correct' ? <div className="text-emerald-400 font-bold text-center text-3xl animate-bounce py-10">You found it!</div> : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {options.map((w, i) => <button key={i} onClick={() => handleSelect(w)} className="py-6 bg-slate-800 hover:bg-emerald-600 border-4 border-slate-700 hover:border-emerald-400 rounded-2xl text-xl font-bold text-white transition-all active:scale-95 cursor-pointer">{w}</button>)}
          </div>
        )}
      </GameWrapper>
    </div>
  );
};

// --- GAME 7: Story Echoes ---
export const StoryEchoesGame = () => {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState('waiting');
  const [story, setStory] = useState('');
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [answer, setAnswer] = useState('');
  const [timeLeft, setTimeLeft] = useState(25);
  const maxTime = Math.max(25 - Math.floor(level / 4), 8);

  const stories = [
    { s: "Max went to the park. He saw a red balloon.", q: "What color was the balloon?", a: "Red", w: ["Blue", "Green", "Yellow"] },
    { s: "Sam bought an apple from the store. It was very sweet.", q: "What did Sam buy?", a: "Apple", w: ["Banana", "Orange", "Grapes"] },
    { s: "The cat slept on the mat all day. It was tired.", q: "Where did the cat sleep?", a: "Mat", w: ["Bed", "Sofa", "Floor"] }
  ];

  const theme = { text: 'text-indigo-500', bgSolid: 'bg-indigo-600', bgOpacity: 'bg-indigo-500/10', borderOpacity: 'border-indigo-500/20', hover: 'hover:border-indigo-500 hover:bg-indigo-600' };

  const startGame = (l) => {
    setLevel(l); setScore(l === 1 ? 0 : score); setStatus('playing_audio');
    setTimeLeft(Math.max(25 - Math.floor(l / 4), 8));
    const base = stories[l % stories.length];
    setStory(base.s); setQuestion(base.q); setAnswer(base.a);
    setOptions([base.a, ...base.w].sort(() => 0.5 - Math.random()));
    
    setTimeout(() => {
      playVoice(base.s, 0.9);
      setTimeout(() => {
        playVoice("Question: " + base.q, 1.0);
        setStatus('playing');
      }, base.s.length * 80);
    }, 500);
  };

  const handleSelect = (w) => {
    if (w === answer) {
      setScore(s => s + 20); playVoice("Correct!");
      if (level >= 50) setStatus('completed'); else { setStatus('correct'); setTimeout(() => startGame(level + 1), 1500); }
    } else setStatus('failed');
  };

  useEffect(() => {
    if (status !== 'playing') return;
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timer);
          setStatus('failed');
          playVoice("Time is up", 1.0);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [status]);

  useEffect(() => { return () => { if (window.speechSynthesis) window.speechSynthesis.cancel(); }; }, []);

  return (
    <div className="bg-slate-900 p-6 md:p-10 rounded-[2.5rem] border border-slate-800 w-full max-w-4xl mx-auto shadow-[0_0_80px_rgba(99,102,241,0.15)]">
      <GameTopBar level={level} score={score} icon={BookOpen} themeClass={theme} title="Story Echoes" timeLeft={status === 'playing' ? timeLeft : undefined} maxTime={maxTime} />
      <GameWrapper status={status} level={level} score={score} title="Story Echoes" themeClass={theme} onStart={startGame} icon={BookOpen} desc="Listen to a short story, then answer the question accurately. Memory is key!">
        {status === 'playing_audio' ? (
          <div className="py-20 text-center"><Ear className="w-24 h-24 text-indigo-500 mx-auto animate-pulse mb-4" /><h3 className="text-2xl text-white font-bold">Listen to the story...</h3></div>
        ) : status === 'correct' ? (
          <div className="text-indigo-400 font-bold text-center text-3xl animate-pulse py-10">Excellent Memory!</div>
        ) : (
          <div>
            <div className="text-center mb-8"><button onClick={() => playVoice(question)} className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-full font-bold inline-flex items-center gap-2"><Play className="w-5 h-5" /> Repeat Question</button></div>
            <div className="grid grid-cols-2 gap-4">
              {options.map((w, i) => <button key={i} onClick={() => handleSelect(w)} className="py-6 bg-slate-950 hover:bg-indigo-600 border-2 border-slate-800 hover:border-indigo-400 rounded-xl text-xl font-bold text-slate-300 hover:text-white transition-all active:scale-95">{w}</button>)}
            </div>
          </div>
        )}
      </GameWrapper>
    </div>
  );
};

// --- GAME 8: Sentence Builder ---
export const SentenceBuilderGame = () => {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState('waiting');
  const [sentence, setSentence] = useState('');
  const [options, setOptions] = useState([]);
  const [answer, setAnswer] = useState('');
  const [timeLeft, setTimeLeft] = useState(15);
  const maxTime = Math.max(15 - Math.floor(level / 4), 5);

  const sentences = [
    { s: "The sky is blank today.", r: "The sky is blank today.", a: "blue", w: ["red", "car", "dog"] },
    { s: "I want to blank an apple.", r: "I want to blank an apple.", a: "eat", w: ["drink", "sleep", "run"] },
    { s: "She reads a blank every night.", r: "She reads a blank every night.", a: "book", w: ["shoe", "tree", "water"] }
  ];

  const theme = { text: 'text-amber-500', bgSolid: 'bg-amber-600', bgOpacity: 'bg-amber-500/10', borderOpacity: 'border-amber-500/20', hover: 'hover:border-amber-500 hover:bg-amber-600' };

  const startGame = (l) => {
    setLevel(l); setScore(l === 1 ? 0 : score); setStatus('playing');
    setTimeLeft(Math.max(15 - Math.floor(l / 4), 5));
    const base = sentences[l % sentences.length];
    setSentence(base.s); setAnswer(base.a);
    setOptions([base.a, ...base.w].sort(() => 0.5 - Math.random()));
    setTimeout(() => playVoice(base.r), 500);
  };

  const handleSelect = (w) => {
    if (w === answer) {
      setScore(s => s + 15); playVoice("Perfect!");
      if (level >= 50) setStatus('completed'); else { setStatus('correct'); setTimeout(() => startGame(level + 1), 1500); }
    } else setStatus('failed');
  };

  useEffect(() => {
    if (status !== 'playing') return;
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timer);
          setStatus('failed');
          playVoice("Time is up", 1.0);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [status]);

  useEffect(() => { return () => { if (window.speechSynthesis) window.speechSynthesis.cancel(); }; }, []);

  return (
    <div className="bg-slate-900 p-6 md:p-10 rounded-[2.5rem] border border-slate-800 w-full max-w-4xl mx-auto shadow-[0_0_80px_rgba(245,158,11,0.15)]">
      <GameTopBar level={level} score={score} icon={Edit3} themeClass={theme} title="Sentence Builder" timeLeft={timeLeft} maxTime={maxTime} />
      <GameWrapper status={status} level={level} score={score} title="Sentence Builder" themeClass={theme} onStart={startGame} icon={Edit3} desc="Listen to the sentence with a missing word and fill in the blank.">
        <div className="text-center mb-8"><button onClick={() => playVoice(sentence)} className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-full font-bold inline-flex items-center gap-2"><Ear className="w-5 h-5" /> Re-listen</button></div>
        {status === 'correct' ? <div className="text-amber-400 font-bold text-center text-3xl animate-bounce py-10">Sentence Built!</div> : (
          <div className="grid grid-cols-2 gap-4">
            {options.map((w, i) => <button key={i} onClick={() => handleSelect(w)} className="py-6 bg-slate-950 hover:bg-amber-600 border-2 border-slate-800 hover:border-amber-400 rounded-xl text-xl font-bold text-slate-300 hover:text-white transition-all active:scale-95 uppercase tracking-wider">{w}</button>)}
          </div>
        )}
      </GameWrapper>
    </div>
  );
};

// --- GAME 9: Pattern Recall ---
export const PatternRecallGame = () => {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState('waiting');
  const [sequence, setSequence] = useState([]);
  const [input, setInput] = useState('');
  const [timeLeft, setTimeLeft] = useState(15);
  const maxTime = Math.max(20 - Math.floor(level / 3), 6);

  const theme = { text: 'text-cyan-500', bgSolid: 'bg-cyan-600', bgOpacity: 'bg-cyan-500/10', borderOpacity: 'border-cyan-500/20', hover: 'hover:border-cyan-500 hover:bg-cyan-600' };

  const startGame = (l) => {
    setLevel(l); setScore(l === 1 ? 0 : score); setStatus('playing_audio'); setInput('');
    setTimeLeft(Math.max(20 - Math.floor(l / 3), 6));
    const len = Math.min(2 + Math.floor(l / 5), 10);
    const seq = Array.from({ length: len }).map(() => Math.floor(Math.random() * 10).toString());
    setSequence(seq);
    
    let i = 0;
    const playNext = () => {
      if (i < seq.length) {
        playVoice(seq[i], 1.0);
        i++; setTimeout(playNext, Math.max(1200 - l * 10, 500));
      } else {
        setStatus('playing');
      }
    };
    setTimeout(playNext, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === sequence.join('')) {
      setScore(s => s + 20); playVoice("Genius!", 1.3);
      if (level >= 50) setStatus('completed'); else { setStatus('correct'); setTimeout(() => startGame(level + 1), 1500); }
    } else setStatus('failed');
  };

  useEffect(() => {
    if (status !== 'playing') return;
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timer);
          setStatus('failed');
          playVoice("Time is up", 1.0);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [status]);

  useEffect(() => { return () => { if (window.speechSynthesis) window.speechSynthesis.cancel(); }; }, []);

  return (
    <div className="bg-slate-900 p-6 md:p-10 rounded-[2.5rem] border border-slate-800 w-full max-w-4xl mx-auto shadow-[0_0_80px_rgba(6,182,212,0.15)]">
      <GameTopBar level={level} score={score} icon={Target} themeClass={theme} title="Pattern Recall" timeLeft={status === 'playing' ? timeLeft : undefined} maxTime={maxTime} />
      <GameWrapper status={status} level={level} score={score} title="Pattern Recall" themeClass={theme} onStart={startGame} icon={Target} desc="Listen to the sequence of numbers and type them back exactly in order.">
        {status === 'playing_audio' ? (
          <div className="py-20 text-center"><Ear className="w-24 h-24 text-cyan-500 mx-auto animate-pulse mb-4" /><h3 className="text-2xl text-white font-bold">Memorizing Sequence...</h3></div>
        ) : status === 'correct' ? (
          <div className="text-cyan-400 font-bold text-center text-3xl animate-pulse py-10">Perfect Recall!</div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-md mx-auto">
            <input type="text" value={input} onChange={e => setInput(e.target.value)} disabled={status !== 'playing'} placeholder="Type..." className="w-full bg-slate-950 border-2 border-slate-700 text-white px-6 py-5 rounded-2xl focus:border-cyan-500 outline-none text-3xl font-mono text-center tracking-[1em] shadow-inner" autoFocus />
            <button type="submit" disabled={!input} className="w-full bg-cyan-600 hover:bg-cyan-500 text-white py-4 rounded-2xl font-black text-xl transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] active:scale-95">Submit Pattern</button>
          </form>
        )}
      </GameWrapper>
    </div>
  );
};

// --- GAME 10: Quantum Audio ---
export const QuantumAudioGame = () => {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState('waiting');
  const [problem, setProblem] = useState('');
  const [answer, setAnswer] = useState('');
  const [input, setInput] = useState('');
  const [timeLeft, setTimeLeft] = useState(20);
  const maxTime = Math.max(20 - Math.floor(level / 4), 5);

  const theme = { text: 'text-fuchsia-500', bgSolid: 'bg-fuchsia-600', bgOpacity: 'bg-fuchsia-500/10', borderOpacity: 'border-fuchsia-500/20', hover: 'hover:border-fuchsia-500 hover:bg-fuchsia-600' };

  const startGame = (l) => {
    setLevel(l); setScore(l === 1 ? 0 : score); setStatus('playing'); setInput('');
    setTimeLeft(Math.max(20 - Math.floor(l / 4), 5));
    const num1 = Math.floor(Math.random() * (l * 2)) + 1;
    const num2 = Math.floor(Math.random() * (l * 2)) + 1;
    const isAdd = Math.random() > 0.5;
    const probText = `What is ${num1} ${isAdd ? 'plus' : 'minus'} ${num2}?`;
    setProblem(probText);
    setAnswer((isAdd ? num1 + num2 : num1 - num2).toString());
    setTimeout(() => playVoice(probText), 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === answer) {
      setScore(s => s + 25); playVoice("Correct!");
      if (level >= 50) setStatus('completed'); else { setStatus('correct'); setTimeout(() => startGame(level + 1), 1500); }
    } else setStatus('failed');
  };

  useEffect(() => {
    if (status !== 'playing') return;
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timer);
          setStatus('failed');
          playVoice("Time is up", 1.0);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [status]);

  useEffect(() => { return () => { if (window.speechSynthesis) window.speechSynthesis.cancel(); }; }, []);

  return (
    <div className="bg-slate-900 p-6 md:p-10 rounded-[2.5rem] border border-slate-800 w-full max-w-4xl mx-auto shadow-[0_0_80px_rgba(217,70,239,0.15)]">
      <GameTopBar level={level} score={score} icon={FlaskConical} themeClass={theme} title="Quantum Audio" timeLeft={timeLeft} maxTime={maxTime} />
      <GameWrapper status={status} level={level} score={score} title="Quantum Audio" themeClass={theme} onStart={startGame} icon={FlaskConical} desc="Listen to the complex audio equation and type the exact numeric answer.">
        <div className="text-center mb-8"><button onClick={() => playVoice(problem)} className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-full font-bold inline-flex items-center gap-2"><Ear className="w-5 h-5" /> Re-listen</button></div>
        {status === 'correct' ? <div className="text-fuchsia-400 font-bold text-center text-3xl animate-bounce py-10">Calculation Perfect!</div> : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-sm mx-auto">
            <input type="number" value={input} onChange={e => setInput(e.target.value)} disabled={status !== 'playing'} placeholder="Answer" className="w-full bg-slate-950 border-2 border-slate-700 text-white px-6 py-5 rounded-2xl focus:border-fuchsia-500 outline-none text-4xl font-black text-center shadow-inner" autoFocus />
            <button type="submit" disabled={!input} className="w-full bg-fuchsia-600 hover:bg-fuchsia-500 text-white py-4 rounded-2xl font-black text-xl transition-all shadow-[0_0_20px_rgba(217,70,239,0.3)] active:scale-95">Verify</button>
          </form>
        )}
      </GameWrapper>
    </div>
  );
};
