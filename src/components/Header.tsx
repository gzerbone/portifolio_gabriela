import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Sobre Mim", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Formação", href: "#formacao" },
  { label: "Pesquisa", href: "#pesquisa" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Certificações", href: "#certificacoes" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollToSection("#home"); }}
            className="text-xl font-semibold text-primary"
          >
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.href)}
                className="text-foreground/80 hover:text-primary hover:bg-accent"
              >
                {item.label}
              </Button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className="justify-start text-foreground/80 hover:text-primary hover:bg-accent"
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
