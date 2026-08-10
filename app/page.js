import { PortfolioPage } from "./components/layout/PortfolioPage";
import { achievements } from "./data/portfolio";
import { loadAchievementMoments } from "./lib/achievementPhotos.mjs";

export default async function Home() {
  const achievementMoments = await loadAchievementMoments(achievements);

  return <PortfolioPage achievementMoments={achievementMoments} />;
}
