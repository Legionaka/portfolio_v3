export type PortfolioProject = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  image_url: string | null;
  live_url: string | null;
  repo_url: string | null;
  video_url: string | null;
};

export function projectHasCaseStudy(projectTitle: string) {
  return projectTitle.toLowerCase().includes("medi-clinic");
}
