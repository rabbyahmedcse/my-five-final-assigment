import { use, useState } from "react";
import type { Technology } from "../type/tecnoType";
import "./tecno.css";
import { toast } from "react-toastify";

interface comProps {
  comPromise: Promise<Technology[]>;
}

const Tecno = ({ comPromise }: comProps) => {
  const com = use(comPromise);

  const [added, setAdded] = useState<Technology[]>([]);


  const handleBottun = (technology: Technology) => {
    const alreadyAdded = added.find(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setAdded((prev) => [...prev, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };


  const handleRemove = (id: string) => {
    const technology = added.find(
      (item) => item.id === id
    );

    if (!technology) {
      return;
    }

    setAdded((prev) =>
      prev.filter((item) => item.id !== id)
    );

    toast.error(`${technology.name} removed from your stack!`);
  };

  const handleCloseAll = () => {
    setAdded([]);

    toast.info("All technologies removed from your stack!");
  };
  return (

    <div>
      <div className="explore-text">
        <div><h1>
          Explore the <span>Technologies</span>
        </h1></div>

        <div><p>
          Pick one technology per category to build your ideal stack.
        </p></div>
      </div>
      <div className="prant-css">






        <div className="technology-container left">

          {com.map((technology) => (

            <div
              className={`technology-card ${added.some(
                (item) => item.id === technology.id
              )
                  ? "card-added"
                  : ""
                }`}
              key={technology.id}
            > 



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




              <h3>
                {technology.name}
              </h3>




              <p className="description">
                {technology.description}
              </p>




              <div className="card-info">

                <span className="category">
                  {technology.category}
                </span>

                <span className="difficulty">
                  {technology.difficulty}
                </span>

                <span className="rating">
                  ★ {technology.rating}
                </span>

              </div>




              <div className="card-bottom">

                <button
                  onClick={() =>
                    handleBottun(technology)
                  }
                  className={`add-button ${added.some(
                    (item) =>
                      item.id === technology.id
                  )
                    ? "affter_add"
                    : ""
                    }`}
                >

                  {added.some(
                    (item) =>
                      item.id === technology.id
                  )
                    ? "✓ Added to Stack"
                    : "+ Add to Stack"}

                </button>

              </div>

            </div>

          ))}

        </div>


        <div className="my-stack right">


          <div className="stack-header">
            <h2>Your Stack</h2>

            <p>
              {added.length === 0
                ? "No technologies selected yet."
                : `${added.length} Technology Selected`}
            </p>
          </div>




          <div className="stack-list">

            {added.length === 0 ? (

              <div className="empty-stack">
                Your stack is empty.
              </div>

            ) : (

              added.map((technology) => (

                <div
                  className="stack-item"
                  key={technology.id}
                >



                  <div className="stack-left">

                    <div className="stack-icon">

                      <img
                        src={technology.icon}
                        alt={technology.name}
                      />

                    </div>


                    <div className="stack-info">

                      <h4>
                        {technology.name}
                      </h4>

                      <p>
                        {technology.category}
                      </p>

                    </div>

                  </div>




                  <button
                    className="remove-button"
                    onClick={() =>
                      handleRemove(technology.id)
                    }
                  >
                    ×
                  </button>

                </div>

              ))

            )}

          </div>




          {added.length > 0 && (

            <button
              className="remove-all"
              onClick={handleCloseAll}
            >
              Remove All
            </button>

          )}

        </div>

      </div>
    </div>

  );
};

export default Tecno;