import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import photo from './boyy.jpeg';
import background from './pic.jpg';
import cisspImage from './images/cissp.jpg';
import cehImage from './images/ceh.jpg';
import comptiaImage from './images/comptia.jpg';
import cismImage from './images/cism.jpg';
import oscpImage from './images/oscp.jpg';
import ccnImage from './images/ccn.jpg';
import hackImage from './images/hack.jpg';
//import newCertImage from './images/new-cert.jpg'; // Import new certificate image

const certificates = [
  {
    title: 'Certified Information Systems Security Professional (CISSP)',
    description: 'I am Recognized globally with knowledge in the field of information security.',
    image: cisspImage,
  },
  {
    title: 'Certified Ethical Hacker (CEH)',
    description: 'I have knowledge of how to look for weaknesses and vulnerabilities in target systems, using the same knowledge and tools as a malicious hacker.',
    image: cehImage,
  },
  {
    title: 'CompTIA Security+',
    description: 'Baseline skills necessary to perform core security functions and pursue an IT security career.',
    image: comptiaImage,
  },
  {
    title: 'Certified Information Security Manager (CISM)',
    description: 'For  managing, designing, and overseeing an enterprise’s information security program.',
    image: cismImage,
  },
  {
    title: 'Offensive Security Certified Professional (OSCP)',
    description: 'Certification for practical knowledge in offensive information security.',
    image: oscpImage,
  },
  {
    title: 'Certified Networking, IT & Routing Protocols Specialist',
    description: 'I am certified Professional with the ability to plan, implement, verify and troubleshoot local and wide-area enterprise networks.',
    image: ccnImage,
  },
  {
    title: 'H4K-IT',
    description: 'Boot Camp in cyber security.',
    image: hackImage,
  },
  /*{
    title: 'New Certification', // New certificate
    description: 'Description of the new certification.',
    image: newCertImage,
  },*/
];

function App() {
  return (
    <Router basename="/cybersecurity-portfolio">
      <div className="App">
        <header className="App-header" style={{ backgroundImage: `url(${background})` }}>
          <div className="header-content">
            <img src={photo} alt="Abubakar Sabalah" />
            <h1>Abubakar Sabalah</h1>
            <p>Cybersecurity Professional</p>
            <div className="contact-info">
              <a href="mailto:sabalahabubakar41@gmail.com">sabalahabubakar41@gmail.com</a>
              <a href="tel:+255784267751">+255784267751</a>
              <a href="https://linkedin.com/in/Abubakar Sabalah" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/Abuu20" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://your-website.com" target="_blank" rel="noopener noreferrer">Website</a>
            </div>
          </div>
        </header>
        <main>
          <section id="personal-statement">
            <h2>Personal Statement</h2>
            <p>I am a dedicated and highly skilled cybersecurity professional with a passion for protecting organizational assets and sensitive information. With a strong background in network security, ethical hacking, and threat analysis, I aim to contribute to your organization by enhancing its cybersecurity posture and mitigating potential risks.</p>
          </section>
          <section id="skills">
            <h2>Skills</h2>
            <h3>Technical Skills</h3>
            <ul>
              <li>Network Security</li>
              <li>Ethical Hacking</li>
              <li>Threat Analysis and Mitigation</li>
              <li>Penetration Testing</li>
              <li>Security Information and Event Management (SIEM)</li>
              <li>Firewalls and VPNs</li>
              <li>Intrusion Detection Systems (IDS) and Intrusion Prevention Systems (IPS)</li>
              <li>Security Auditing and Compliance</li>
              <li>Web Development</li>
              <li>System Automation </li>


            </ul>
            <h3>Soft Skills</h3>
            <ul>
              <li>Analytical Thinking</li>
              <li>Problem Solving</li>
              <li>Communication</li>
              <li>Team Collaboration</li>
              <li>Attention to Detail</li>
            </ul>
          </section>
          <section id="certifications">
            <h2>Certifications</h2>
            <div className="certificates">
              {certificates.map((cert, index) => (
                <div key={index} className="certificate">
                  <img src={cert.image} alt={cert.title} />
                  <div className="certificate-details">
                    <h3>{cert.title}</h3>
                    <p>{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section id="experience">
            <h2>Experience</h2>
            <h3>Cybersecurity Analyst at geeks Tech Solutions (Jan 2020 - Present)</h3>
            <ul>
              <li>Conducted regular security assessments and vulnerability scans.</li>
              <li>Implemented and monitored security measures for the protection of computer systems, networks, and information.</li>
              <li>Responded to security incidents and provided thorough post-event analyses.</li>
              <li>Developed and enforced security policies and procedures.</li>
              <li>Collaborated with IT teams to ensure secure system configurations.</li>
            </ul>
            <h3>Junior Security Consultant at Kadraf Technologies Solutions (Jun 2024 - Present)</h3>
            <ul>
              <li>Assisted in the development of security strategies and risk management plans.</li>
              <li>Performed penetration testing and ethical hacking exercises.</li>
              <li>Assisted clients in achieving compliance with security standards and regulations.</li>
              <li>Provided security awareness training for employees.</li>
            </ul>
          </section>
          <section id="projects">
            <h2>Projects</h2>
            <h3>Secure Network Architecture Design</h3>
            <p>Designed a secure network architecture for a mid-sized company to protect against cyber threats.</p>
            <p><strong>Technologies Used:</strong> Firewalls, VPN, IDS/IPS, SIEM.</p>
            <p><strong>Outcomes:</strong> Enhanced network security, reduced incident response time, and improved overall network performance.</p>
            <h3>Web Application Penetration Testing</h3>
            <p>Conducted penetration testing on a client's web application to identify and fix vulnerabilities.</p>
            <p><strong>Technologies Used:</strong> Burp Suite, OWASP ZAP, Kali Linux.</p>
            <p><strong>Outcomes:</strong> Discovered and mitigated critical vulnerabilities, ensuring the security of user data.</p>
          </section>
          <section id="education">
            <h2>Education</h2>
            <p>Bachelor of Science in Cybersecurity, Institute of Accountancy Arusha (Graduating: July 2025)</p>
          </section>
          <section id="achievements">
            <h2>Achievements and Awards</h2>
            <ul>
              <li>Recognized as "Cybersecurity Professional of the Year" by CISCO Tech Solutions, 2024.</li>
              <li>Published an article on "Advanced Threat Detection Techniques" in the Cybersecurity Journal, 2024.</li>
            </ul>
          </section>
        </main>
        <footer>
          <p>References available upon request.</p>
        </footer>
        <button id="topButton" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Top</button>
      </div>
    </Router>
  );
}

export default App;