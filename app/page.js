const skills = [
  { name: 'Next.js', icon: 'N' },
  { name: 'React', icon: '⚛' },
  { name: 'TypeScript', icon: 'TS' },
  { name: 'ASP.NET Core', icon: '.NET' },
  { name: 'C#', icon: 'C#' },
  { name: 'SQL Server', icon: 'SQL' },
  { name: 'Azure DevOps', icon: 'AZ' },
  { name: 'Power Platform', icon: 'PP' },
  { name: 'Prisma', icon: '◇' },
  { name: 'AG Grid', icon: '▦' },
  { name: 'Jest', icon: '✓' },
  { name: 'IIS', icon: 'IIS' }
];

const stats = [
  { value: '5+', label: 'Years Experience', icon: '</>' },
  { value: '1,000+', label: 'Healthcare Staff Supported', icon: '◎' },
  { value: '20+', label: 'Enterprise Features Delivered', icon: '↗' },
  { value: 'Remote', label: 'International Ready', icon: '◌' }
];

const details_sadeed = [
  { value: 'Healthcare Systems Scaled', label: '🏥' },
  { value: 'Real-time Systems Built', label: '⚡'},
  { value: 'Secure Enterprise Apps', label: '🔐'},
  { value: 'Production Deployments', label: '🌍'}
];

const work = [
  {
    period: '',
    role: 'Senior Data System & Application Specialist',
    company: 'Metro South Health, Queensland Health',
    points: [
      'Modernising disease management systems for the Public Health Unit using ASP.NET Core MVC, IIS and Microsoft SQL Server.',
      'Improving release reliability through Azure DevOps CI/CD pipelines while supporting existing on-premises hosting environments.',
      'Working directly with public health stakeholders to convert operational needs into secure, maintainable software.'
    ]
  },
  {
    period: '',
    role: 'Full Stack Developer',
    company: 'Gold Coast Health, Queensland Health',
    points: [
      'Built healthcare applications for patient management, bed tracking and mental health workflows.',
      'Delivered scalable interfaces using Next.js, React, TypeScript, Material UI, Prisma, Microsoft SQL Server and AG Grid.',
      'Designed Power Apps adopted by over 1,000 healthcare staff, improving workflow speed and operational visibility.'
    ]
  },
  {
    period: '',
    role: 'Software Developer / Delivery Manager',
    company: 'Tata Consultancy Services',
    points: [
      'Supported software delivery for enterprise inventory and retail systems with strong governance, Jira tracking and Git workflows.',
      'Coordinated cross-functional delivery, integration planning and technical standards across multiple teams.'
    ]
  },
  {
    period: '',
    role: 'Software Developer',
    company: 'foundU',
    points: [
      'Contributed to workforce management products across frontend, backend and product-focused delivery workflows.',
      'Worked with Vue, TypeScript, PHP, SQL and responsive UI patterns to improve customer-facing features.'
    ]
  }
];

const projects = [
  {
    title: 'Healthcare Patient Management Platform',
    tag: 'Enterprise Healthcare',
    text: 'Patient, episode, bed and clinical workflow interfaces designed for high-volume healthcare environments.',
    stack: ['Next.js', 'React', 'TypeScript', 'Prisma', 'SQL Server', 'AG Grid']
  },
  {
    title: 'Disease Management System Modernisation',
    tag: 'Public Health',
    text: 'Modernisation of public health applications with improved maintainability, deployment reliability and stakeholder alignment.',
    stack: ['ASP.NET Core MVC', 'C#', 'IIS', 'SQL Server', 'Azure DevOps']
  },
  {
    title: 'Power Platform Workflow Automation',
    tag: 'Low-Code at Scale',
    text: 'Microsoft Power Apps used by 1,000+ healthcare staff to streamline operational workflows and reduce manual process friction.',
    stack: ['Power Apps', 'Dataverse', 'Power Automate', 'Microsoft 365']
  },
   {
  title: 'Sports Science Motion Analysis App',
  tag: 'iOS Development',
  text: 'iOS application built at Griffith University to capture and visualise athlete motion data using device sensors, enabling real-time insights for sports science research and performance analysis.',
  stack: ['Swift', 'iOS', 'Core Motion', 'MVC', 'iOS Charts', 'File Manager']
}
 
];

const services = [
  'Full-stack product engineering',
  'Healthcare and government systems',
  'Frontend architecture and reusable UI systems',
  'API design and database-backed applications',
  'Power Platform automation',
  'CI/CD, release pipelines and deployment reliability'
];

function Robot() {
  return (
    <div className="robotScene" aria-label="Neon robot illustration">
      <div className="speech">Building the future,<br />one line of code<br />at a time. ⚡</div>
      <div className="orbit orbitOne" />
      <div className="orbit orbitTwo" />
      <div className="robot">
        <div className="antenna" />
        <div className="head">
          <div className="face">
            <span className="eye" /><span className="eye" />
            <span className="smile" />
          </div>
          <div className="ear leftEar" />
          <div className="ear rightEar" />
        </div>
        <div className="neck" />
        <div className="body">
          <div className="screen">&lt;/&gt;</div>
          <div className="arm leftArm" />
          <div className="arm rightArm" />
        </div>
      </div>
      <div className="desk"><div className="laptop"><span>SA </span></div></div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="portfolio">
      <style>{`
        .portfolio {
          --text: #f8fbff;
          --muted: #aeb9d6;
          --line: rgba(103, 232, 249, 0.18);
          --purple: #b026ff;
          --violet: #7c3cff;
          --pink: #ff3df2;
          --cyan: #22d3ee;
          --green: #37ff8b;
          --yellow: #ffe66d;
          --shadow: 0 35px 120px rgba(34, 211, 238, 0.16);
          min-height: 100vh;
          background: linear-gradient(rgba(34, 211, 238, 0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(176, 38, 255, 0.035) 1px, transparent 1px), radial-gradient(circle at 20% 5%, rgba(176, 38, 255, 0.22), transparent 34rem), radial-gradient(circle at 78% 12%, rgba(34, 211, 238, 0.16), transparent 35rem), #02030d;
          background-size: 42px 42px, 42px 42px, auto, auto, auto;
          color: var(--text);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          overflow-x: hidden;
        }
        .portfolio * { box-sizing: border-box; }
        .portfolio a { color: inherit; text-decoration: none; }
        .nav { position: sticky; top: 0; z-index: 40; display: flex; align-items: center; justify-content: space-between; gap: 18px; padding: 18px clamp(18px, 4vw, 64px); backdrop-filter: blur(22px); background: rgba(2, 3, 13, 0.76); border-bottom: 1px solid var(--line); box-shadow: 0 12px 45px rgba(0,0,0,0.28); }
        .brand, .nav nav, .navActions { display: flex; align-items: center; gap: 14px; }
        .brand { font-weight: 900; letter-spacing: -0.03em; }
        .brandMark { display: grid; place-items: center; width: 46px; height: 46px; color: #fff; border: 1px solid rgba(255,61,242,0.65); border-radius: 15px; background: linear-gradient(135deg, rgba(176,38,255,0.14), rgba(34,211,238,0.08)); box-shadow: 0 0 22px rgba(255,61,242,0.55), inset 0 0 22px rgba(34,211,238,0.16); text-shadow: 0 0 12px var(--cyan), 0 0 22px var(--pink); }
        .brandMeta small { display: block; color: var(--green); font-size: 12px; margin-top: 2px; }
        .brandMeta small::before { content: '●'; margin-right: 7px; }
        .nav nav a { color: var(--muted); font-size: 14px; transition: 180ms ease; position: relative; }
        .nav nav a:hover { color: #fff; text-shadow: 0 0 14px var(--cyan); }
        .sectionPad { padding: 96px clamp(18px, 5vw, 86px); }
        .sectionPadSmall { padding: 34px clamp(18px, 5vw, 86px); }
        .hero { position: relative; min-height: 88vh; display: grid; grid-template-columns: minmax(0, 1.06fr) minmax(360px, 0.94fr); align-items: center; gap: clamp(30px, 5vw, 80px); }
        .glow { position: absolute; width: 310px; height: 310px; border-radius: 999px; filter: blur(55px); opacity: 0.62; animation: float 8s ease-in-out infinite; pointer-events: none; }
        .glowOne { top: 16%; left: 4%; background: rgba(176, 38, 255, 0.45); }
        .glowTwo { right: 12%; bottom: 16%; background: rgba(34, 211, 238, 0.24); animation-delay: -3s; }
        .eyebrow { margin: 0 0 16px; color: var(--pink); text-transform: uppercase; letter-spacing: 0.18em; font-size: 13px; font-weight: 900; text-shadow: 0 0 16px rgba(255,61,242,0.78); font-family: 'SFMono-Regular', Consolas, monospace; }
        h1, h2, h3, p { margin-top: 0; }
        h1 { max-width: 940px; font-size: clamp(52px, 7.8vw, 108px); line-height: 0.92; letter-spacing: -0.075em; margin-bottom: 26px; }
        h2 { font-size: clamp(34px, 5vw, 64px); line-height: 0.98; letter-spacing: -0.055em; margin-bottom: 18px; }
        h3 { font-size: 24px; letter-spacing: -0.035em; margin-bottom: 8px; }
        .neonTitle span { display: block; }
        .neonWhite { color: #fff; text-shadow: 0 0 12px #fff, 0 0 34px rgba(176,38,255,0.95); }
        .neonCyan { color: var(--cyan); text-shadow: 0 0 12px var(--cyan), 0 0 42px rgba(34,211,238,0.85); }
        .cursor { display: inline-block; width: 0.42em; height: 0.08em; margin-left: 8px; background: var(--cyan); box-shadow: 0 0 22px var(--cyan); animation: blink 900ms steps(2) infinite; vertical-align: baseline; }
        .lead { max-width: 760px; color: var(--muted); font-size: clamp(18px, 2vw, 23px); line-height: 1.65; }
        .availabilityGrid { display: grid; grid-template-columns: minmax(0, 0.75fr) minmax(0, 1fr); gap: 14px; margin: 28px 0; max-width: 760px; }
        .availability { display: flex; align-items: center; gap: 14px; min-height: 70px; padding: 14px 18px; color: #efe8ff; border: 1px solid rgba(255,61,242,0.42); border-radius: 12px; background: rgba(5,10,30,0.72); box-shadow: inset 0 0 24px rgba(176,38,255,0.12), 0 0 22px rgba(176,38,255,0.14); }
        .availability strong { display: block; color: var(--green); font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; text-shadow: 0 0 12px var(--green); }
        .availability span:not(.pulse):not(.miniIcon) { display: block; color: var(--text); font-family: 'SFMono-Regular', Consolas, monospace; font-size: 13px; margin-top: 5px; }
        .miniIcon { font-size: 26px; color: var(--cyan); text-shadow: 0 0 18px var(--cyan); }
        .pulse { width: 10px; height: 10px; border-radius: 999px; background: var(--green); box-shadow: 0 0 0 0 rgba(55,255,139,0.7); animation: pulse 1.8s infinite; flex: 0 0 auto; }
        .heroActions, .contactActions { display: flex; flex-wrap: wrap; gap: 14px; }
        .button { display: inline-flex; align-items: center; justify-content: center; min-height: 50px; padding: 0 22px; border-radius: 10px; font-weight: 900; border: 1px solid rgba(103,232,249,0.26); transition: 220ms ease; position: relative; overflow: hidden; }
        .button:hover { transform: translateY(-3px); }
        .primary { background: linear-gradient(135deg, var(--purple), var(--cyan)); color: #fff; border: 0; box-shadow: 0 0 24px rgba(176,38,255,0.55), 0 0 48px rgba(34,211,238,0.2); }
        .ghost { background: rgba(3,7,20,0.78); color: var(--text); }
        .robotScene { position: relative; min-height: 560px; display: grid; place-items: center; z-index: 2; }
        .speech { position: absolute; top: 28px; right: 42px; padding: 20px 24px; border: 1px solid rgba(255,61,242,0.7); border-radius: 16px 16px 16px 4px; background: rgba(14,8,35,0.86); color: #fff; font-family: 'SFMono-Regular', Consolas, monospace; line-height: 1.8; box-shadow: 0 0 28px rgba(255,61,242,0.38), inset 0 0 22px rgba(176,38,255,0.14); animation: bob 4s ease-in-out infinite; z-index: 6; }
        .speech::after { content: ''; position: absolute; left: 38px; bottom: -14px; width: 24px; height: 24px; border-right: 1px solid rgba(255,61,242,0.7); border-bottom: 1px solid rgba(255,61,242,0.7); background: rgba(14,8,35,0.86); transform: rotate(45deg); }
        .orbit { position: absolute; border-radius: 999px; border: 1px solid rgba(34,211,238,0.24); animation: rotate 12s linear infinite; }
        .orbitOne { width: 410px; height: 410px; box-shadow: 0 0 45px rgba(34,211,238,0.10); }
        .orbitTwo { width: 300px; height: 300px; border-color: rgba(255,61,242,0.22); animation-duration: 18s; animation-direction: reverse; }
        .robot { position: relative; width: 250px; height: 345px; animation: robotFloat 5s ease-in-out infinite; z-index: 5; }
        .antenna { position: absolute; top: -12px; left: 50%; width: 3px; height: 24px; background: var(--cyan); box-shadow: 0 0 16px var(--cyan); }
        .antenna::after { content: ''; position: absolute; top: -9px; left: -6px; width: 15px; height: 15px; border-radius: 50%; background: var(--pink); box-shadow: 0 0 18px var(--pink); }
        .head { position: relative; width: 178px; height: 142px; margin: 38px auto 0; border-radius: 46px; background: linear-gradient(145deg, #6d46ff, #15163b 45%, #030816 78%); border: 2px solid rgba(103,232,249,0.42); box-shadow: 0 0 34px rgba(124,60,255,0.62), inset 0 0 28px rgba(255,255,255,0.12); }
        .face { position: absolute; inset: 23px 18px 24px; border-radius: 34px; background: #030711; border: 1px solid rgba(34,211,238,0.28); box-shadow: inset 0 0 28px rgba(34,211,238,0.10); }
        .eye { position: absolute; top: 36px; width: 27px; height: 17px; border-top: 5px solid var(--cyan); border-radius: 50%; filter: drop-shadow(0 0 9px var(--cyan)); }
        .eye:first-child { left: 32px; }
        .eye:nth-child(2) { right: 32px; }
        .smile { position: absolute; left: 50%; bottom: 25px; width: 34px; height: 16px; border-bottom: 4px solid var(--cyan); border-radius: 0 0 99px 99px; transform: translateX(-50%); filter: drop-shadow(0 0 9px var(--cyan)); }
        .ear { position: absolute; top: 44px; width: 28px; height: 58px; border-radius: 15px; background: linear-gradient(180deg, var(--cyan), var(--violet)); box-shadow: 0 0 24px rgba(34,211,238,0.32); }
        .leftEar { left: -22px; } .rightEar { right: -22px; }
        .neck { width: 42px; height: 22px; margin: 0 auto; background: linear-gradient(90deg, #3e2bb8, #0a102a); border: 1px solid rgba(103,232,249,0.3); }
        .body { position: relative; width: 148px; height: 136px; margin: 0 auto; border-radius: 34px 34px 44px 44px; background: linear-gradient(145deg, #3d2ee6, #101530 64%, #060712); border: 2px solid rgba(103,232,249,0.34); box-shadow: 0 0 34px rgba(176,38,255,0.35), inset 0 0 22px rgba(255,255,255,0.08); }
        .screen { position: absolute; left: 50%; top: 34px; transform: translateX(-50%); display: grid; place-items: center; width: 78px; height: 52px; border-radius: 14px; background: #03101d; color: var(--cyan); font-weight: 900; box-shadow: inset 0 0 20px rgba(34,211,238,0.18), 0 0 18px rgba(34,211,238,0.22); }
        .arm { position: absolute; top: 32px; width: 28px; height: 96px; border-radius: 20px; background: linear-gradient(180deg, #6d46ff, #11152e); border: 1px solid rgba(103,232,249,0.24); }
        .leftArm { left: -30px; transform: rotate(16deg); } .rightArm { right: -30px; transform: rotate(-16deg); }
        .desk { position: absolute; bottom: 62px; width: min(520px, 92%); height: 14px; border-radius: 999px; background: linear-gradient(90deg, transparent, rgba(34,211,238,0.7), rgba(255,61,242,0.6), transparent); box-shadow: 0 0 35px rgba(34,211,238,0.35); }
        .laptop { position: absolute; left: 28px; bottom: 14px; width: 170px; height: 105px; border-radius: 14px 14px 4px 4px; background: linear-gradient(145deg, #101635, #020612); border: 1px solid rgba(34,211,238,0.28); transform: perspective(400px) rotateX(8deg); display: grid; place-items: center; box-shadow: 0 0 22px rgba(34,211,238,0.12); }
        .laptop span { color: var(--pink); font-size: 32px; font-weight: 900; text-shadow: 0 0 18px var(--pink); }
        .statsRail { position: absolute; right: -12px; top: 158px; display: grid; gap: 16px; z-index: 7; }
        .statPill { display: grid; grid-template-columns: 50px 1fr; align-items: center; gap: 14px; width: 240px; padding: 14px; border: 1px solid rgba(103,232,249,0.14); border-radius: 18px; background: rgba(3,7,20,0.72); backdrop-filter: blur(18px); transition: 220ms ease; }
        .statPill:hover { transform: translateX(-8px); border-color: rgba(34,211,238,0.55); box-shadow: 0 0 30px rgba(34,211,238,0.18); }
        .statIcon { display: grid; place-items: center; width: 46px; height: 46px; border-radius: 50%; color: var(--cyan); border: 1px solid rgba(34,211,238,0.45); box-shadow: inset 0 0 18px rgba(34,211,238,0.12), 0 0 18px rgba(34,211,238,0.18); font-family: 'SFMono-Regular', Consolas, monospace; }
        .statPill strong { display: block; color: var(--cyan); font-size: 24px; text-shadow: 0 0 12px var(--cyan); }
        .statPill span { color: var(--muted); font-size: 13px; }
        .panel, .timelineCard, .projectCard, .contactCard, .proofCard { border: 1px solid var(--line); background: linear-gradient(180deg, rgba(5,10,30,0.86), rgba(3,7,20,0.72)); backdrop-filter: blur(22px); box-shadow: var(--shadow); }
        .proofGrid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; }
        .proofCard { padding: 20px; border-radius: 22px; position: relative; overflow: hidden; transition: 240ms ease; }
        .proofCard:hover { transform: translateY(-7px); border-color: rgba(255,61,242,0.48); box-shadow: 0 0 34px rgba(255,61,242,0.18); }
        .proofCard strong { display: block; font-size: 34px; letter-spacing: -0.04em; color: var(--cyan); text-shadow: 0 0 18px var(--cyan); }
        .proofCard span { color: var(--muted); line-height: 1.45; }
        .split { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 42px; align-items: start; }
        .sectionIntro p:not(.eyebrow) { color: var(--muted); font-size: 18px; line-height: 1.7; }
        .centered { text-align: center; max-width: 820px; margin: 0 auto 46px; }
        .valueGrid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; }
        .valueItem { padding: 18px; border-radius: 18px; background: rgba(3,7,20,0.72); border: 1px solid rgba(103,232,249,0.16); color: #efe8ff; transition: 220ms ease; }
        .valueItem:hover { transform: translateY(-5px); border-color: rgba(34,211,238,0.5); box-shadow: 0 0 28px rgba(34,211,238,0.12); }
        .valueItem::before { content: '✦'; color: var(--pink); margin-right: 10px; text-shadow: 0 0 14px var(--pink); }
        .terminalPanel { border-radius: 24px; padding: 24px; }
        .terminalBar { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 20px; }
        .dots { display: flex; gap: 8px; }
        .dots span { width: 11px; height: 11px; border-radius: 99px; background: var(--pink); box-shadow: 0 0 14px var(--pink); }
        .dots span:nth-child(2) { background: var(--yellow); box-shadow: 0 0 14px var(--yellow); }
        .dots span:nth-child(3) { background: var(--green); box-shadow: 0 0 14px var(--green); }
        .terminalText { display: grid; gap: 11px; color: #dffaff; font-family: 'SFMono-Regular', Consolas, monospace; font-size: 14px; line-height: 1.75; }
        .terminalText b { color: var(--green); text-shadow: 0 0 12px rgba(55,255,139,0.6); }
        .terminalText i { color: var(--pink); font-style: normal; }
        .timeline { max-width: 1040px; margin: 0 auto; display: grid; gap: 18px; }
        .timelineCard { display: grid; grid-template-columns: 210px 1fr; gap: 26px; padding: 28px; border-radius: 24px; transition: 240ms ease; }
        .timelineCard:hover { transform: translateY(-6px); border-color: rgba(255,61,242,0.44); box-shadow: 0 0 34px rgba(255,61,242,0.14); }
        .period { color: var(--cyan); font-weight: 900; font-size: 14px; font-family: 'SFMono-Regular', Consolas, monospace; text-shadow: 0 0 12px var(--cyan); }
        .company { color: var(--pink); font-weight: 800; text-shadow: 0 0 10px rgba(255,61,242,0.45); }
        ul { margin: 16px 0 0; padding-left: 20px; color: var(--muted); line-height: 1.75; }
        li::marker { color: var(--cyan); }
        .skillsSection { display: grid; grid-template-columns: 0.72fr 1.28fr; gap: 42px; align-items: center; }
        .skillGrid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 14px; }
        .skillTile { min-height: 112px; display: grid; place-items: center; gap: 8px; padding: 16px; border: 1px solid rgba(103,232,249,0.18); border-radius: 20px; background: rgba(3,7,20,0.72); transition: 220ms ease; }
        .skillTile:hover { transform: translateY(-8px) scale(1.02); border-color: rgba(34,211,238,0.62); box-shadow: 0 0 30px rgba(34,211,238,0.15); }
        .skillIcon { display: grid; place-items: center; width: 46px; height: 46px; color: var(--cyan); border-radius: 14px; border: 1px solid rgba(34,211,238,0.34); background: rgba(34,211,238,0.06); text-shadow: 0 0 15px var(--cyan); font-weight: 900; font-family: 'SFMono-Regular', Consolas, monospace; }
        .skillTile span:last-child { color: #eef6ff; font-size: 14px; text-align: center; }
        .projectsGrid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px; }
        .projectCard { padding: 24px; border-radius: 26px; min-height: 340px; display: flex; flex-direction: column; transition: 240ms ease; position: relative; overflow: hidden; }
        .projectCard:hover { transform: translateY(-8px); border-color: rgba(34,211,238,0.54); box-shadow: 0 0 34px rgba(34,211,238,0.14); }
        .projectCard > span { color: var(--cyan); font-weight: 900; font-size: 12px; text-transform: uppercase; letter-spacing: 0.14em; font-family: 'SFMono-Regular', Consolas, monospace; }
        .projectCard p { color: var(--muted); line-height: 1.65; }
        .miniStack { display: flex; flex-wrap: wrap; gap: 8px; margin-top: auto; }
        .miniStack small { font-size: 12px; padding: 8px 10px; border-radius: 999px; color: #f4ecff; background: rgba(176,38,255,0.12); border: 1px solid rgba(255,61,242,0.22); }
        .contactSection { padding-top: 48px; }
        .contactCard { max-width: 1180px; margin: 0 auto; padding: clamp(28px, 6vw, 66px); border-radius: 30px; text-align: center; background: radial-gradient(circle at 20% 0%, rgba(176,38,255,0.26), transparent 28rem), linear-gradient(180deg, rgba(5,10,30,0.92), rgba(3,7,20,0.76)); }
        .contactCard p:not(.eyebrow) { max-width: 820px; margin: 0 auto 28px; color: var(--muted); font-size: 18px; line-height: 1.75; }
        .contactActions { justify-content: center; }
        .reveal { animation: rise 700ms ease both; }
        .delayOne { animation-delay: 120ms; }
        @keyframes rise { from { opacity: 0; transform: translateY(26px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translate3d(0, 0, 0) scale(1); } 50% { transform: translate3d(18px, -22px, 0) scale(1.08); } }
        @keyframes bob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes robotFloat { 0%,100% { transform: translateY(0) rotate(-1deg); } 50% { transform: translateY(-16px) rotate(1deg); } }
        @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(55,255,139,0.6); } 70% { box-shadow: 0 0 0 12px rgba(55,255,139,0); } 100% { box-shadow: 0 0 0 0 rgba(55,255,139,0); } }
        @keyframes rotate { to { transform: rotate(1turn); } }
        @keyframes blink { 0%,45% { opacity: 1; } 46%,100% { opacity: 0; } }
        @media (max-width: 1180px) { .statsRail { position: static; grid-template-columns: repeat(2, minmax(0, 1fr)); margin-top: 26px; } .statPill { width: auto; } }
        @media (max-width: 1000px) { .hero, .split, .skillsSection { grid-template-columns: 1fr; } .proofGrid, .projectsGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); } .skillGrid { grid-template-columns: repeat(3, minmax(0, 1fr)); } .robotScene { min-height: 500px; } }
        @media (max-width: 760px) { .nav nav, .navActions { display: none; } .sectionPad { padding-top: 70px; padding-bottom: 70px; } .proofGrid, .projectsGrid, .valueGrid, .availabilityGrid, .statsRail { grid-template-columns: 1fr; } .timelineCard { grid-template-columns: 1fr; } .skillGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); } h1 { font-size: 50px; } .speech { right: 8px; top: 0; font-size: 12px; } .robotScene { min-height: 470px; transform: scale(0.92); transform-origin: center; } }
      `}</style>

      <header className="nav">
        <a className="brand" href="#top" aria-label="Sadeed Ahmad home"><span className="brandMark">SA</span><span className="brandMeta">Sadeed Ahmad<small>Available for work</small></span></a>
        <nav><a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#work">Experience</a><a href="#contact">Contact</a></nav>
        <div className="navActions"><a className="button ghost" href="mailto:sadeedahmadch@gmail.com">Let&apos;s talk</a></div>
      </header>

      <section id="top" className="hero sectionPad">
        <div className="glow glowOne" /><div className="glow glowTwo" />
        <div className="heroCopy reveal">
          <p className="eyebrow">&lt; Hello, World! /&gt;</p>
          <h1 className="neonTitle"><span className="neonWhite">I&apos;m Sadeed</span><span className="neonCyan">Software Engineer<span className="cursor" /></span></h1>
          <p className="lead">I build scalable, secure and high-performance software for healthcare, government and enterprise teams using React, Next.js, .NET, SQL Server, Azure DevOps and Power Platform.</p>
          <div className="availabilityGrid">
            <div className="availability"><span className="pulse" /><div><strong>Open to work</strong><span>International • Remote</span></div></div>
            <div className="availability"><span className="miniIcon">◎</span><div><strong>Based in Australia</strong><span>Open to relocate Internationally</span></div></div>
          </div>
          <div className="heroActions"><a className="button primary" href="#projects">View my work →</a><a className="button ghost" href="mailto:sadeedahmadch@gmail.com">Let&apos;s connect ✈</a></div>
        </div>
        <div className="reveal delayOne"><Robot /><div className="statsRail">{stats.map((item) => (<div className="statPill" key={item.label}><div className="statIcon">{item.icon}</div><div><strong>{item.value}</strong><span >{item.label}</span></div></div>))}</div></div>
      </section>

       <section className="proofGrid sectionPadSmall" aria-label="Career highlights">{details_sadeed.map((item) => (<div className="proofCard" key={item.label}><strong style={{ fontSize: '26px' }}>{item.value}</strong><span   style={{
    fontSize: '28px',
    paddingTop: '10px',
    textAlign: 'center',
    display: 'block',
    width: '100%'
  }}>{item.label}</span></div>))}</section>

      <section id="about" className="sectionPad split">
        <div className="sectionIntro reveal"><p className="eyebrow">About Me_</p><h2>I combine product thinking, enterprise discipline and hands-on engineering.</h2><p>I am a Brisbane-based software engineer with strong experience across healthcare systems, public-sector software, frontend architecture, Microsoft technologies and workflow automation.</p></div>
        <div className="panel terminalPanel reveal delayOne"><div className="terminalBar"><div className="dots"><span /><span /><span /></div><p className="eyebrow" style={{ margin: 0 }}>sadeed.profile</p></div><div className="terminalText"><span>&gt; role: <b>Senior Full Stack Developer</b></span><span>&gt; strength: <b>React + Next.js + .NET + SQL Server</b></span><span>&gt; domain: <i>Healthcare, public sector, enterprise systems</i></span><span>&gt; mindset: <b>Clean code. Reliable releases. Real user impact.</b></span><span>&gt; availability: <i>Remote worldwide, Australia-based, Europe relocation possible</i></span></div></div>
      </section>

      <section className="sectionPad split"><div className="sectionIntro reveal"><p className="eyebrow">What I bring_</p><h2>Not just coding, I help teams ship better software.</h2></div><div className="valueGrid reveal delayOne">{services.map((service) => (<div className="valueItem" key={service}>{service}</div>))}</div></section>

      <section id="skills" className="sectionPad skillsSection"><div className="sectionIntro reveal"><p className="eyebrow">Tech Stack_</p><h2>Modern full-stack delivery with strong Microsoft and frontend depth.</h2><p>Tools I use to build, modernise, deploy and support production systems.</p></div><div className="skillGrid reveal delayOne">{skills.map((skill) => (<div className="skillTile" key={skill.name}><span className="skillIcon">{skill.icon}</span><span>{skill.name}</span></div>))}</div></section>

      <section id="projects" className="sectionPad projectsSection"><div className="sectionIntro centered reveal"><p className="eyebrow">Featured Projects_</p></div><div className="projectsGrid">{projects.map((project, index) => (<article className="projectCard reveal" style={{ animationDelay: `${index * 90}ms` }} key={project.title}><span>{project.tag}</span><h3>{project.title}</h3><p>{project.text}</p><div className="miniStack">{project.stack.map((item) => <small key={item}>{item}</small>)}</div></article>))}</div></section>

      <section id="work" className="sectionPad timelineSection"><div className="sectionIntro centered reveal"><p className="eyebrow">Experience_</p><h2>Real systems, real users, real impact.</h2><p>My background spans healthcare, public-sector systems, workforce platforms and enterprise delivery.</p></div><div className="timeline">{work.map((job, index) => (<article className="timelineCard reveal" style={{ animationDelay: `${index * 80}ms` }} key={job.role + job.company}><div className="period">{job.period}</div><div><h3>{job.role}</h3><p className="company">{job.company}</p><ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul></div></article>))}</div></section>

      <section id="contact" className="sectionPad contactSection"><div className="contactCard reveal"><p className="eyebrow">Open to work internationally_</p><h2>Need a developer who can ship, modernise and communicate clearly?</h2><p>I am available for senior full-stack, frontend-heavy, Microsoft stack, healthcare, government and international remote opportunities. I can work from Australia or discuss relocation to Europe.</p><div className="contactActions"><a className="button primary" href="mailto:sadeedahmadch@gmail.com">sadeedahmadch@gmail.com</a><a className="button ghost" href="tel:+61450237005">+61 450 237 005</a><a className="button ghost" href="https://www.linkedin.com/in/sadeedahmad/" target="_blank" rel="noreferrer">LinkedIn profile</a></div></div></section>
    </main>
  );
}
