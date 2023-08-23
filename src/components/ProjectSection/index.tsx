
import React from 'react'
import { LayoutGroup, MotionDiv } from '../motion';
import { projects } from '@/data/projects'
import { slideInVariants } from '@/framer-motion/slide-in'
import { ProjectItem } from './ProjectItem';


type ProjectSectionProps = {
  className?: string;
};

export function ProjectSection({ className }: ProjectSectionProps) {
  return (
    <section className={className} id="projects">
      <h1 className='font-bold text-2xl text-center'>Projects</h1>
      <MotionDiv
        variants={slideInVariants()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-64px" }}
      >
      </MotionDiv>
      <ul className="grid gap-8 mt-6 sm:grid-cols-2 lg:grid-cols-3">
        <LayoutGroup>
          {projects.map((project, i) => (
            <li key={project.slug}>
              <ProjectItem project={project} index={i} />
            </li>
          ))}
        </LayoutGroup>
      </ul>
    </section>
  );
}
export default ProjectSection