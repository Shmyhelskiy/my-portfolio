import { useTranslations } from 'next-intl';

export function useProjectsData() {
  const t = useTranslations("Projects");

  const projects = {
    SkySight: t.raw("SkySight"),
    TaskTamer: t.raw("TaskTamer"),
    NumberCascade: t.raw("NumberCascade"),
    SpotlightPage: t.raw("SpotlightPage"),
  };

  return {
    mainTitle: t("mainTitle"),
    projects,
    projectsArray: Object.values(projects),
  };
}
