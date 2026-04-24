'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';

const COMMANDS = ['help', 'whoami', 'about', 'skills', 'experience', 'education', 'projects', 'achievements', 'contact', 'stats', 'banner', 'clear', 'exit', 'quit'];

const BANNER = `<span class="green">
 ______  __  __   ______   __   __
/\\  __ \\/\\ \\/\\ \\ /\\  __ \\ /\\ "-.\\  \\
\\ \\  __ \\ \\ \\_\\ \\\\ \\  __ \\\\ \\ \\-.  \\
 \\ \\_\\ \\_\\ \\_____\\\\ \\_\\ \\_\\\\ \\_\\\\"\\_\\
  \\/_/\\/_/\\/_____/ \\/_/\\/_/ \\/_/ \\/_/
</span>
<span class="cyan">Full Stack Software Engineer @ Oracle</span>
<span class="dim">NIT Jamshedpur '23  |  amans-canvas.vercel.app</span>`;

const PROJECTS_DATA = [
  { name: 'keyfort',          summary: 'OAuth 2.0 server with RBAC, PKCE, brute force protection',           stack: ['NextJS', 'Spring Boot', 'PostgreSQL'],                      repo: 'https://github.com/AmanPandey0320/keyfort-ui' },
  { name: 'typebox',          summary: 'SaaS file management MVP (24-hr hackathon)',                          stack: ['NextJS', 'Spring Boot', 'MySQL', 'Tailwind'],               repo: 'https://github.com/AmanPandey0320/typebox' },
  { name: 'balancify',        summary: 'Custom load balancer from scratch (no 3rd-party libs)',               stack: ['Java'],                                                     repo: 'https://github.com/AmanPandey0320/balancify' },
  { name: 'json-parsor',      summary: 'JSON parser built without external libraries',                        stack: ['Java'],                                                     repo: 'https://github.com/AmanPandey0320/JSON-Parser' },
  { name: 'santhali-nlp',     summary: 'NLP translation model for Santhali tribal language',                  stack: ['Python', 'PyTorch', 'NLP'],                                 repo: 'https://github.com/AmanPandey0320/santhali-model' },
  { name: 'nit-jsr',          summary: 'NIT Jamshedpur official website (10k+ daily visits)',                 stack: ['ReactJS', 'Node.js', 'MySQL', 'Docker', 'NGINX'],           repo: null, demo: 'https://nitjsr.ac.in/' },
  { name: 'elite-classroom',  summary: 'Remote learning platform (COVID era)',                                stack: ['Node.js', 'MySQL', 'Docker', 'AWS'],                        repo: 'https://github.com/pcon-code-tribe/Elite-Classroom-Backend' },
  { name: 'forms',            summary: 'Google Forms-like survey app',                                        stack: ['Node.js', 'MySQL', 'ReactJS', 'Material-UI'],               repo: null },
];

function getCommandOutput(cmd: string): string {
  const parts = cmd.trim().toLowerCase().split(/\s+/);
  const base = parts[0];

  switch (base) {
    case 'help':
      return `<span class="yellow">Available commands:</span>

<span class="cyan">whoami</span>       <span class="dim">—</span> Identity & role
<span class="cyan">about</span>        <span class="dim">—</span> About me
<span class="cyan">skills</span>       <span class="dim">—</span> Technical skill tree
<span class="cyan">experience</span>   <span class="dim">—</span> Work history
<span class="cyan">education</span>    <span class="dim">—</span> Academic background
<span class="cyan">projects</span>     <span class="dim">—</span> Project list  (then: <span class="green">project &lt;1-8&gt;</span> for details)
<span class="cyan">achievements</span> <span class="dim">—</span> Awards & recognitions
<span class="cyan">contact</span>      <span class="dim">—</span> Links & resume
<span class="cyan">stats</span>        <span class="dim">—</span> Stats bar chart
<span class="cyan">banner</span>       <span class="dim">—</span> Reprint banner
<span class="cyan">clear</span>        <span class="dim">—</span> Clear terminal
<span class="cyan">exit</span>         <span class="dim">—</span> End session &amp; return to home`;

    case 'whoami':
      return `<span class="green">Name   </span>  : Aman Kr Pandey
<span class="green">Role   </span>  : Full Stack Software Engineer
<span class="green">Company</span>  : Oracle India Pvt. Ltd.
<span class="dim">NIT Jamshedpur | CSE | 2019–2023</span>`;

    case 'about':
      return `<span class="cyan">About Me</span>
<span class="dim">────────────────────────────────────────────────────────────────────────────────</span>
I'm a Full Stack Software Engineer at Oracle India, passionate about building
high-performance, scalable systems. With a B.Tech in Computer Science from NIT
Jamshedpur (Class of 2023), I specialize in cloud-native applications, 5G-Core
network infrastructure, and full-stack development.

I enjoy working across the stack — from crafting intuitive UIs with React to
engineering robust backend microservices in Java/Spring Boot, and deploying
containerized workloads with Docker &amp; Kubernetes. I care deeply about clean
architecture, security (TLS, IAM, OAuth), and measurable performance wins.

Outside the terminal: hackathons, open-source contributions, and exploring the
intersection of systems design with real-world impact.`;

    case 'skills':
      return `<span class="yellow">Technical Skills</span>
<span class="dim">────────────────────────────────────────────────────────────────────────────────</span>
<span class="green">├──</span> <span class="cyan">Frontend        </span>  React.js, Redux, Android, Flutter, TypeScript, Material UI
<span class="green">├──</span> <span class="cyan">Backend         </span>  Node.js, Java/Spring Boot, Python/Django, GraphQL, WebSocket
<span class="green">├──</span> <span class="cyan">Databases       </span>  PostgreSQL, MySQL, MongoDB, Firestore
<span class="green">├──</span> <span class="cyan">DevOps &amp; Cloud  </span>  Docker, Kubernetes, Helm, AWS, CI/CD, Git
<span class="green">├──</span> <span class="cyan">Testing         </span>  JUnit, Mockito, Selenium, JMeter, Mocha
<span class="green">└──</span> <span class="cyan">Tools           </span>  Agile, JIRA, Figma, IntelliJ, System Design`;

    case 'experience':
      return `<span class="yellow">Work Experience</span>
<span class="dim">────────────────────────────────────────────────────────────────────────────────</span>
<span class="cyan">[Oracle India Pvt. Ltd.]</span> <span class="green">Associate Software Developer</span>  <span class="dim">(Aug 2023 – Present)</span>
  <span class="dim">-</span>  Benchmarking strategies for product performance evaluation
  <span class="dim">-</span>  Enabled multi-admin IAM, logging, and key metrics pegging
  <span class="dim">-</span>  TLSv1.3 microservice communication with cipher enforcement
  <span class="dim">-</span>  20x API gateway response improvement + DDoS mitigation

<span class="cyan">[Oracle India Pvt. Ltd.]</span> <span class="green">Product Intern</span>  <span class="dim">(Jan 2023 – Jun 2023)</span>
  <span class="dim">-</span>  Reduced Docker image size 30% via custom JRE
  <span class="dim">-</span>  Spring Boot 3.1 migration across project
  <span class="dim">-</span>  LDAP/SAML integration testing

<span class="cyan">[GE Healthcare]</span> <span class="green">EID Intern</span>  <span class="dim">(May 2022 – Jul 2022)</span>
  <span class="dim">-</span>  Automated real-time network proxy detection (25% time saved)
  <span class="dim">-</span>  TCP/IP fingerprint tests + ASN-based IP retrieval (20x speed)`;

    case 'education':
      return `<span class="yellow">Education</span>
<span class="dim">────────────────────────────────────────────────────────────────────────────────</span>
<span class="cyan">[NIT Jamshedpur]</span>       B.Tech – CSE  <span class="dim">|</span>  2019–2023  <span class="dim">|</span>  <span class="green">CGPA: 8.29/10</span>
<span class="cyan">[HemSheela Model School]</span>  Class 12 (Science)  <span class="dim">|</span>  2016–2018  <span class="dim">|</span>  <span class="green">92%</span>`;

    case 'projects': {
      const rows = PROJECTS_DATA.map((p, i) =>
        `  <span class="green">${String(i + 1).padStart(2)}.</span>  <span class="cyan">${p.name.padEnd(18)}</span>${p.summary}`
      ).join('\n');
      return `<span class="yellow">Projects</span>  <span class="dim">(type <span class="green">project &lt;n&gt;</span> for details)</span>
<span class="dim">────────────────────────────────────────────────────────────────────────────────</span>
${rows}`;
    }

    case 'project': {
      const idx = parseInt(parts[1], 10) - 1;
      if (isNaN(idx) || idx < 0 || idx >= PROJECTS_DATA.length) {
        return `<span class="red">Usage: project &lt;1-${PROJECTS_DATA.length}&gt;</span>`;
      }
      const p = PROJECTS_DATA[idx];
      const stackTags = p.stack.map(s => `<span class="dim">[</span><span class="cyan">${s}</span><span class="dim">]</span>`).join(' ');
      const repoLine = p.repo
        ? `<span class="green">Repo   </span>  <a href="${p.repo}" target="_blank" rel="noopener" class="link">${p.repo}</a>`
        : p.demo
          ? `<span class="green">Demo   </span>  <a href="${(p as { demo?: string }).demo}" target="_blank" rel="noopener" class="link">${(p as { demo?: string }).demo}</a>`
          : `<span class="dim">No public repo available</span>`;
      return `<span class="yellow">${p.name.toUpperCase()}</span>
<span class="dim">────────────────────────────────────────────────────────────────────────────────</span>
<span class="green">Summary</span>  ${p.summary}
<span class="green">Stack  </span>  ${stackTags}
${repoLine}`;
    }

    case 'achievements':
      return `<span class="yellow">Achievements</span>
<span class="dim">────────────────────────────────────────────────────────────────────────────────</span>
<span class="green">★</span>  <span class="cyan">CNCC SPOT Award CY-2025</span>  — Oracle, Communication GIU  <span class="dim">(Jul 2025)</span>
<span class="green">★</span>  <span class="cyan">CNCC SPOT Award CY-2024</span>  — Oracle, Communication GIU  <span class="dim">(Jul 2024)</span>
<span class="green">★</span>  <span class="cyan">1st Runner Up – Hack-de-Science</span>  — NIT Jamshedpur  <span class="dim">(Mar 2022)</span>`;

    case 'contact':
      return `<span class="yellow">Contact</span>
<span class="dim">────────────────────────────────────────────────────────────────────────────────</span>
<span class="green">GitHub  </span>  →  <a href="https://github.com/AmanPandey0320" target="_blank" rel="noopener" class="link">github.com/AmanPandey0320</a>
<span class="green">LinkedIn</span>  →  <a href="https://linkedin.com/in/aman-pandey-5b2437199" target="_blank" rel="noopener" class="link">linkedin.com/in/aman-pandey</a>
<span class="green">Resume  </span>  →  <a href="https://drive.google.com/file/d/1yQ5kl61y0AQhyD8rg9uNwp1gUFxM-OKT/view" target="_blank" rel="noopener" class="link">[Download PDF]</a>`;

    case 'stats':
      return `<span class="yellow">Stats</span>
<span class="dim">────────────────────────────────────────────────────────────────────────────────</span>
<span class="cyan">Experience  </span>  <span class="green">██████████████████░░</span>  2+ YOE
<span class="cyan">Projects    </span>  <span class="green">█████████████░░░░░░░</span>  8 built
<span class="cyan">Code time   </span>  <span class="green">██████████████████░░</span>  75–90%
<span class="cyan">Delivery    </span>  <span class="green">████████████████████</span>  On-time ✓`;

    case 'banner':
      return BANNER;

    case 'clear':
      return '__CLEAR__';

    case 'exit':
    case 'quit':
      return '__EXIT__';

    default:
      return `__NOTFOUND__:${cmd.trim()}`;
  }
}

interface Line {
  id: number;
  html: string;
  type: 'output' | 'input' | 'boot';
}

export default function TerminalPage() {
  const router = useRouter();
  const [lines, setLines] = useState<Line[]>([]);
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const [booting, setBooting] = useState(true);
  const [exited, setExited] = useState(false);
  const [glitch, setGlitch] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef(0);

  const nextId = () => ++counterRef.current;

  const addLine = useCallback((html: string, type: Line['type'] = 'output') => {
    setLines(prev => [...prev, { id: nextId(), html, type }]);
  }, []);

  const scrollBottom = useCallback(() => {
    setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 50);
  }, []);

  // Boot sequence
  useEffect(() => {
    const bootLines = [
      '<span class="dim">Initializing system...</span>',
      '<span class="dim">Loading kernel modules... <span class="green">[OK]</span></span>',
      '<span class="dim">Mounting filesystem... <span class="green">[OK]</span></span>',
      '<span class="cyan">Starting aman\'s-canvas v1.0.0</span>',
      '<span class="dim">----------------------------------------</span>',
      BANNER,
      '<span class="green">Welcome.</span> Type <span class="cyan">help</span> to get started.',
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < bootLines.length) {
        const line = bootLines[i];
        setLines(prev => [...prev, { id: ++counterRef.current, html: line, type: 'boot' }]);
        i++;
      } else {
        clearInterval(interval);
        setBooting(false);
        setTimeout(() => inputRef.current?.focus(), 100);
      }
    }, 260);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => { scrollBottom(); }, [lines, scrollBottom]);

  const handleCommand = useCallback((raw: string) => {
    const cmd = raw.trim();
    if (!cmd) return;

    // Echo the typed command
    addLine(`<span class="dim">aman@canvas:~$</span> <span class="green">${cmd.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</span>`, 'input');

    // Update history
    setHistory(prev => [cmd, ...prev]);
    setHistIdx(-1);

    const out = getCommandOutput(cmd);

    if (out === '__CLEAR__') {
      setLines([]);
      return;
    }

    if (out === '__EXIT__') {
      addLine('<span class="dim">Session ended. Goodbye, user.</span>');
      setExited(true);
      setTimeout(() => router.push('/'), 1600);
      return;
    }

    if (out.startsWith('__NOTFOUND__:')) {
      const badCmd = out.slice('__NOTFOUND__:'.length);
      setGlitch(`Command not found: ${badCmd}`);
      addLine(`<span class="red glitch">Command not found: ${badCmd.replace(/</g, '&lt;')}</span>`);
      setTimeout(() => setGlitch(''), 1000);
      return;
    }

    addLine(out);
  }, [addLine]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
      setInputVal('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHistIdx(prev => {
        const next = Math.min(prev + 1, history.length - 1);
        setInputVal(history[next] ?? '');
        return next;
      });
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHistIdx(prev => {
        const next = Math.max(prev - 1, -1);
        setInputVal(next === -1 ? '' : history[next] ?? '');
        return next;
      });
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const partial = inputVal.toLowerCase();
      const match = COMMANDS.find(c => c.startsWith(partial) && c !== partial);
      if (match) setInputVal(match);
    }
  }, [inputVal, history, handleCommand]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body { background: #0d0d0d; }

        .terminal-root {
          min-height: 100dvh;
          background: #0d0d0d;
          font-family: 'JetBrains Mono', 'Fira Code', monospace;
          font-size: 14px;
          color: #00ff41;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        /* CRT scanline overlay */
        .terminal-root::before {
          content: '';
          pointer-events: none;
          position: fixed;
          inset: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.04) 2px,
            rgba(0,0,0,0.04) 4px
          );
          z-index: 10;
        }

        /* CRT grain */
        .terminal-root::after {
          content: '';
          pointer-events: none;
          position: fixed;
          inset: 0;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          z-index: 11;
        }

        .output-area {
          flex: 1;
          overflow-y: auto;
          padding: 20px 24px 8px;
          scroll-behavior: smooth;
        }

        .output-area::-webkit-scrollbar { width: 4px; }
        .output-area::-webkit-scrollbar-track { background: #0d0d0d; }
        .output-area::-webkit-scrollbar-thumb { background: #1a4a1a; border-radius: 2px; }

        .line {
          line-height: 1.7;
          white-space: pre-wrap;
          word-break: break-word;
        }

        .line + .line { margin-top: 0; }
        .line.gap { margin-top: 10px; }

        .prompt-row {
          display: flex;
          align-items: center;
          padding: 8px 24px 20px;
          gap: 8px;
          position: sticky;
          bottom: 0;
          background: #0d0d0d;
          z-index: 5;
          border-top: 1px solid #1a1a1a;
        }

        .prompt-label {
          color: #666;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .prompt-label .host { color: #00d4aa; }

        .prompt-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: #00ff41;
          font-family: inherit;
          font-size: inherit;
          caret-color: #00ff41;
        }

        .cursor-blink {
          display: inline-block;
          width: 8px;
          height: 1em;
          background: #00ff41;
          animation: blink 1s step-end infinite;
          vertical-align: text-bottom;
          margin-left: 1px;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .green  { color: #00ff41; }
        .cyan   { color: #00d4aa; }
        .yellow { color: #ffd700; }
        .red    { color: #ff4444; }
        .dim    { color: #666; }

        .link {
          color: #00d4aa;
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .link:hover { color: #00ff41; }

        .glitch {
          animation: glitch-anim 0.15s infinite;
        }

        @keyframes glitch-anim {
          0%   { opacity: 1; transform: translateX(0); }
          25%  { opacity: 0.7; transform: translateX(-2px); }
          50%  { opacity: 1; transform: translateX(2px); }
          75%  { opacity: 0.7; transform: translateX(-1px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        .fade-out {
          animation: fadeOut 1.5s forwards;
        }

        @keyframes fadeOut {
          0%   { opacity: 1; }
          100% { opacity: 0; background: #000; }
        }

        .mobile-block {
          display: none;
        }

        @media (max-width: 768px) {
          .terminal-root { display: none; }
          .mobile-block {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100dvh;
            background: #0d0d0d;
            font-family: 'JetBrains Mono', monospace;
            color: #00ff41;
            text-align: center;
            padding: 32px 24px;
            gap: 20px;
          }
          .mobile-block .mb-ascii {
            font-size: 11px;
            line-height: 1.4;
            color: #1a6b1a;
            white-space: pre;
          }
          .mobile-block .mb-title {
            font-size: 18px;
            font-weight: 700;
            color: #00ff41;
          }
          .mobile-block .mb-msg {
            font-size: 13px;
            color: #666;
            max-width: 300px;
            line-height: 1.8;
          }
          .mobile-block .mb-link {
            display: inline-block;
            margin-top: 8px;
            padding: 10px 24px;
            border: 1px solid #00d4aa;
            color: #00d4aa;
            text-decoration: none;
            font-size: 13px;
            border-radius: 4px;
            transition: background 0.2s;
          }
          .mobile-block .mb-link:hover {
            background: rgba(0,212,170,0.1);
          }
        }
      `}</style>

      {/* Mobile fallback */}
      <div className="mobile-block">
        <span className="mb-ascii">{`
 ______  __  __   ______   __   __
/\\  __ \\/\\ \\/\\ \\ /\\  __ \\ /\\ "-.\\  \\
\\ \\  __ \\ \\ \\_\\ \\\\ \\  __ \\\\ \\ \\-.  \\
 \\ \\_\\ \\_\\ \\_____\\\\ \\_\\ \\_\\\\ \\_\\\\"\\_ \\
  \\/_/\\/_/\\/_____/ \\/_/\\/_/ \\/_/ \\/_/`}</span>
        <p className="mb-title">Terminal Mode</p>
        <p className="mb-msg">
          This experience is designed for a desktop browser.<br />
          Please visit on a larger screen to access the interactive terminal.
        </p>
        <a href="/" className="mb-link">← Back to Portfolio</a>
      </div>

      <div
        className={`terminal-root${exited ? ' fade-out' : ''}`}
        onClick={() => inputRef.current?.focus()}
      >
        {/* Output */}
        <div className="output-area">
          {lines.map(line => (
            <div
              key={line.id}
              className="line"
              dangerouslySetInnerHTML={{ __html: line.html }}
            />
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Prompt input row */}
        {!booting && !exited && (
          <div className="prompt-row" onClick={e => { e.stopPropagation(); inputRef.current?.focus(); }}>
            <span className="prompt-label">
              <span className="cyan">aman</span>
              <span className="dim">@</span>
              <span className="host">canvas</span>
              <span className="dim">:~$</span>
            </span>
            <input
              ref={inputRef}
              className="prompt-input"
              value={inputVal}
              onChange={e => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck={false}
              aria-label="terminal input"
            />
            <span className="cursor-blink" />
          </div>
        )}

        {exited && (
          <div style={{ padding: '20px 24px', color: '#666', fontFamily: 'JetBrains Mono, monospace' }}>
            Session ended.
          </div>
        )}
      </div>

      {/* Suppress unused glitch state lint warning */}
      {glitch && null}
    </>
  );
}
