"use client";

import {
  achievements,
  hobbies,
  navItems,
  profile,
  projects,
  skills,
  timeline,
} from "../../data/portfolio";
import { SiteHeader } from "./SiteHeader";
import { AchievementsSection } from "../sections/AchievementsSection";
import { ContactSection } from "../sections/ContactSection";
import { HobbiesSection } from "../sections/HobbiesSection";
import { HeroSection } from "../sections/HeroSection";
import { StackSection } from "../sections/StackSection";
import { ProjectsSection, TimelineSection } from "../sections/TimelineSection";

export function PortfolioPage({ achievementMoments = [] }) {
  return (
    <main className="site-shell" id="top">
      <SiteHeader navItems={navItems} profile={profile} />
      <HeroSection profile={profile} projects={projects} />
      <TimelineSection timeline={timeline} />
      <ProjectsSection projects={projects} />
      <AchievementsSection achievements={achievements} moments={achievementMoments} />
      <StackSection skills={skills} />
      {hobbies.length ? <HobbiesSection hobbies={hobbies} /> : null}
      <ContactSection profile={profile} />
    </main>
  );
}
