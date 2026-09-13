import { use, useState } from "react";
import type { Technology } from "../type/tecnoType";
import "./tecno.css";

interface comProps {
  comPromise: Promise<Technology[]>;
}

const Tecno = ({ comPromise }: comProps) => {
  const com = use(comPromise);

  const [added, setAdded] = useState<string[]>([]);

  const handleBottun = (id: string) => {
    setAdded((prev) => [...prev, id]);
  };

  return (
    <div className="technology-container">
      {com.map((technology) => (
        <div className="technology-card" key={technology.id}>
          
          <div className="card-top">
            <div className="technology-icon">
              <img
                src={technology.icon}
                alt={technology.name}
              />
            </div>

            <span className="badge">
              {technology.badge}
            </span>
          </div>

          <h3>{technology.name}</h3>

          <p className="description">
            {technology.description}
          </p>

          <div className="card-info">
            <span className="category">
              {technology.category}
            </span>

            <span>{technology.difficulty}</span>

            <span className="rating">
              ★ {technology.rating}
            </span>
          </div>

          <div className="card-bottom">
            <button
              onClick={() => handleBottun(technology.id)}
              className={`add-button ${
                added.includes(technology.id) ? "affter_add" : ""
              }`}
            >
              {added.includes(technology.id)
                ? "✓ Added to Stack"
                : "+ Add to Stack"}
            </button>
          </div>

        </div>
      ))}
    </div>
  );
};

export default Tecno;