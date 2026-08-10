import Image from "next/image";
import { Globe2 } from "lucide-react";
import { InstagramLogo, LinkedInLogo, XLogo } from "../ui/BrandLogos";

export function AchievementsSection({ achievements, moments = [] }) {
  return (
    <section className="content-section" id="achievements" aria-labelledby="achievements-title">
      <div className="section-title">
        <h2 id="achievements-title">Achievements</h2>
        <span aria-hidden="true" />
      </div>

      <div className="achievement-list">
        {achievements.map((achievement) => {
          const Icon = achievement.icon;
          const ActionIcon = achievement.platform === "Instagram"
            ? InstagramLogo
            : achievement.platform === "Website"
              ? Globe2
              : LinkedInLogo;

          return (
            <article className="achievement-row" key={achievement.title}>
              <div className="achievement-meta">
                <span
                  className="achievement-icon"
                  style={{ "--achievement-accent": achievement.accent }}
                  aria-hidden="true"
                >
                  <Icon size={19} />
                </span>
                <span>{achievement.year}</span>
              </div>
              <div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
                {achievement.href ? (
                  <div className="achievement-actions">
                    <a
                      className="achievement-action"
                      href={achievement.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ActionIcon size={15} />
                      {achievement.action}
                    </a>
                    {achievement.secondaryHref ? (
                      <a
                        className="achievement-action"
                        href={achievement.secondaryHref}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <XLogo size={15} />
                        {achievement.secondaryAction}
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>

      {moments.length ? (
        <div className="achievement-moments">
          {moments.map((moment) => (
            <figure className="achievement-moment" key={moment.image}>
              <a
                className="achievement-photo"
                href={moment.image}
                target="_blank"
                rel="noreferrer"
                aria-label={`View full photo: ${moment.imageAlt}`}
              >
                <Image
                  alt={moment.imageAlt}
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                  src={moment.image}
                />
              </a>
              <figcaption>
                <strong>{moment.title}</strong>
                <span>{moment.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      ) : null}
    </section>
  );
}
