import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { CourseDetail } from "@/components/sections/detail-sections";

type CoursePageProps = {
  params: Promise<{ curso: string }>;
};

export default async function CoursePage({ params }: CoursePageProps) {
  const { curso } = await params;

  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <CourseDetail slug={curso} />
      </main>
      <SiteFooter />
    </>
  );
}
