export function StackSection({ skills }) {
  return (
    <section className="content-section" id="stack" aria-labelledby="stack-title">
      <div className="section-title">
        <h2 id="stack-title">Technical Skills</h2>
        <span aria-hidden="true" />
      </div>
      <div className="stack-grid">
        {skills.map((group) => (
          <article className="stack-group" key={group.title}>
            <h3>{group.title}</h3>
            <p>{group.items.join(", ")}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
