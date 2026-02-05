import "./Hero.css"
import { useEffect, useState } from "react"
import { type HeroDto } from "./HeroDto"


const Hero: React.FC = () => {
  const [heroes, setHeroes] = useState<HeroDto[]>([]);

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        
        const response: Response = await fetch("https://localhost:7016/api/heroes");
        const data: HeroDto[] = await response.json();
        setHeroes(data);
        console.log(data);
        
      } catch (error) {
        console.error("Error fetching heroes", error);
        
      }
    }

    fetchHeroes();
  }, [])

  return (
    
    <section className="hero-section">
        <div className="container">
            Hero section
        </div>
    </section>
  )
}

export default Hero