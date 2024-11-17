import Image from "next/image";
import Profile from "@/public/profile.jpg";

export default function Home() {
  return (
    <section className="home">
      {/* Profile image */}
      <Image 
        className="home-img" 
        src={Profile} 
        alt="Profile picture" 
        width={200} 
        height={200} 
        priority 
      />
      
      {/* Content Section */}
      <div className="home-content">
        <h1>
          Hi, I&apos;m <span>Areeba Shabbir</span>
        </h1>
        <h3>Frontend Developer</h3>
        <p>
          &quot;I am a Frontend Developer with a passion for creating clean, responsive, and user-friendly websites. Using technologies like HTML, CSS, JavaScript, TypeScript, and Next.js, I build dynamic web applications that provide seamless user experiences. My goal is to turn complex ideas into intuitive designs, ensuring performance and accessibility across all devices.&quot;
        </p>
        
        {/* Buttons */}
        <div className="button-container">
          <button 
            onClick={() => window.location.href = '/contact'} 
            aria-label="Contact me for hiring"
          >
            Hire Me
          </button>
          <button 
            onClick={() => window.location.href = '/projects'} 
            aria-label="View my project portfolio"
          >
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
}
