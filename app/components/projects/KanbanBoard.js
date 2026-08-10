import { KanbanCard, ProjectRow } from "./KanbanCard";

export function KanbanBoard({ items }) {
  const visualProjects = items.filter((item) => item.screenshot);
  const textProjects = items.filter((item) => !item.screenshot);

  return (
    <>
      {visualProjects.length ? (
        <div className="project-grid">
          {visualProjects.map((item) => <KanbanCard item={item} key={item.id} />)}
        </div>
      ) : null}
      {textProjects.length ? (
        <div className="project-list">
          {textProjects.map((item) => <ProjectRow item={item} key={item.id} />)}
        </div>
      ) : null}
    </>
  );
}
