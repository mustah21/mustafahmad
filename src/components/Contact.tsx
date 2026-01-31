import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative bg-secondary/30">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading text-center mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-center text-lg mb-16 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>

          <div className="max-w-3xl mx-auto">
            <div className="card-gradient p-8 rounded-2xl border border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact info */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
                  
                  <a
                    href="mailto:mustafa.ahmad@metropolia.fi"
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">mustafa.ahmad@metropolia.fi</p>
                    </div>
                  </a>

                  <a
                    href="tel:+358449302118"
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium">+358 449302118</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">Helsinki, Finland</p>
                    </div>
                  </div>
                </div>

                {/* Social & CTA */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-6">Social</h3>
                    <div className="flex gap-4 mb-8">
                      <a
                        href="https://www.linkedin.com/in/mustafa-ahmad-002063332/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-lg bg-secondary hover:bg-secondary/80 border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-300"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href="https://github.com/mustah21"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-lg bg-secondary hover:bg-secondary/80 border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-300"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <Button size="lg" className="w-full glow-effect" asChild>
                    <a href="mailto:mustafa.ahmad@metropolia.fi">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
