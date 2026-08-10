import { readdir } from "node:fs/promises";
import path from "node:path";

const supportedImage = /\.(?:avif|jpe?g|png|webp)$/i;

export async function loadAchievementMoments(
  achievements,
  publicDirectory = path.join(process.cwd(), "public"),
) {
  const groups = await Promise.all(achievements.map(async (achievement) => {
    if (!achievement.photoDirectory) return [];

    let entries;
    try {
      entries = await readdir(
        path.join(publicDirectory, "achievements", achievement.photoDirectory),
        { withFileTypes: true },
      );
    } catch (error) {
      if (error.code === "ENOENT") return [];
      throw error;
    }

    return entries
      .filter((entry) => entry.isFile() && !entry.name.startsWith(".") && supportedImage.test(entry.name))
      .sort((left, right) => left.name.localeCompare(right.name, "en", { numeric: true }))
      .map((entry) => {
        const caption = path.parse(entry.name).name
          .replace(/^\d+[-_ ]+/, "")
          .replace(/[-_]+/g, " ")
          .trim();

        return {
          title: achievement.title,
          detail: caption,
          imageAlt: `${achievement.title}: ${caption}`,
          image: `/achievements/${achievement.photoDirectory}/${encodeURIComponent(entry.name)}`,
        };
      });
  }));

  return groups.flat();
}
