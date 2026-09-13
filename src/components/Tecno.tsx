import { use, useState } from "react";
import type { Technology } from "../type/tecnoType";
import "./tecno.css";

interface comProps {
  comPromise: Promise<Technology[]>;
}

const Tecno = ({ comPromise }: comProps) => {
  const com = use(comPromise);

  const [added, setAdded] = useState<Technology[]>([]);

  // Add technology
  const handleBottun = (technology: Technology) => {
    setAdded((prev) => {
      const alreadyAdded = prev.find(
        (item) => item.id === technology.id
      );
  
      if (alreadyAdded) {
        return prev;
      }
  
      return [...prev, technology];
    });
  };

  // Remove one technology
  const handleRemove = (id: string) => {
    setAdded((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  // Remove all
  const handleCloseAll = () => {
    setAdded([]);
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

    


{/* ================= Technology Cards ================= */}

<div className="technology-container left">

  {com.map((technology) => (

    <div
      className="technology-card"
      key={technology.id}
    >

      {/* Card Top */}

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


      {/* Technology Name */}

      <h3>
        {technology.name}
      </h3>


      {/* Description */}

      <p className="description">
        {technology.description}
      </p>


      {/* Card Info */}

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


      {/* Add Button */}

      <div className="card-bottom">

        <button
          onClick={() =>
            handleBottun(technology)
          }
          className={`add-button ${
            added.some(
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
{/* ================= Your Stack ================= */}

<div className="my-stack right">

{/* Stack Header */}
<div className="stack-header">
<h2>Your Stack</h2>

<p>
{added.length === 0
? "No technologies selected yet."
: `${added.length} Technology Selected`}
</p>
</div>


{/* Stack Items */}

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

  {/* Left Side */}

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


  {/* Remove Button */}

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


{/* Remove All Button */}

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