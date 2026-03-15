import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";
import profileImage2 from "@/assets/profile2.jpeg";



const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid — YOUR ORIGINAL */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

      {/* Gradient orb — YOUR ORIGINAL */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      {/* Main content — side by side */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-20">

        {/* ── LEFT: Image ── */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex-shrink-0"
        >

          <div className="absolute inset-0 rounded-full border-2 border-purple-500/30 scale-110" />

          <img
            src={profileImage2}
            alt="Mustafa Ahmad"
            className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-purple-500/40 shadow-xl shadow-purple-500/20"
          />


          {/* <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-background/80 backdrop-blur border border-purple-500/30 rounded-full px-4 py-1.5 text-sm whitespace-nowrap shadow-lg"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </motion.div> */}

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">
            Mustafa Ahmad
          </h1>

          <p className="text-xl md:text-2xl text-purple-400 font-medium mb-4">
            Software Engineer
          </p>

          <p className="text-muted-foreground text-base md:text-lg max-w-md mb-8 leading-relaxed">
            Full stack developer passionate about building scalable applications
            and crafting exceptional user experiences.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            {/* <Button size="lg">
              <Mail className="mr-2 h-4 w-4" />
              <a href="#contact">Get in Touch</a>
            </Button> */}
            <Button size="lg" variant="outline">
              <a href="#projects">View Projects</a>
            </Button>

            <Button size="lg" variant="outline">
              <a href="/Mustafa_Ahmad-Resume.pdf" download>Download CV</a>
            </Button>

          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="h-5 w-5" />
            </a>
          </div>

        </motion.div>
      </div>


      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground text-sm"
      >
        <span>Scroll down</span>
        <ArrowDown className="h-4 w-4" />
      </motion.div>
    </section>

  );
};

export default Hero;