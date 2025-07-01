import { useTranslations } from 'next-intl';

type ProjectPageProps = {
  params: { slug: string };
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const t = useTranslations('projects');
  const { slug } = params;
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{t.raw(slug)}</h1>
    </div>
  );
}