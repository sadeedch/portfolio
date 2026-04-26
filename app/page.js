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

       <section className="proofGrid sectionPadSmall" aria-label="Career highlights">{details_sadeed.map((item) => (<div className="proofCard" key={item.label}><strong style={{ fontSize: '26px' }}>{item.value}</strong><span 
         style={{
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
