import { useTranslations } from 'next-intl';

export const getProjectsData = () => {
  const t = useTranslations("Projects");

  return {
    mainTitle: t("mainTitle"),
    projects: {
      SkySight: t.raw("SkySight"),
      TaskTamer: t.raw("TaskTamer"),
      NumberCascade: t.raw("NumberCascade"),
      SpotlightPage: t.raw("SpotlightPage"),
    },
  };
};
