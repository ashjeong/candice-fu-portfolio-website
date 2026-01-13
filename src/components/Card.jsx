import "./Card.css";

export default function Card({ title, description, imageUrl, tags, backgroundColor }) {

  return (
    <div className="card" style={{ backgroundColor: backgroundColor }}>
      <img src={imageUrl} width="500px" height="auto" className="image" />
      <div className="overlay-content">
        <div className="tags">
          {tags.map((tag) => (
            <div className="tag" key={tag}>
              {tag}
            </div>
          ))}
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}