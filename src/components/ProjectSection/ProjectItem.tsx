"use client";

import * as React from "react";
import { MotionDiv, MotionImg, MotionLi } from "@/components/motion";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { slideInVariants } from "@/framer-motion/slide-in";
import { scaleHoverVariants } from "@/framer-motion/scale-hover";
import { Icon } from "../icon";

type ProjectItemProps = {
    project: any;
    index: number;
};

export function ProjectItem({ project, index }: ProjectItemProps) {
    const params = useParams();

    const hide = params.slug === `projects/${project.slug}`;

    if (hide) {
        return null;
    }
    return (
        <>
            <MotionDiv
                key={project.slug}
                variants={{
                    ...slideInVariants({ from: "bottom", delay: index * 0.05 }),
                    // ...scaleHoverVariants(),
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-64px" }}
                whileHover="hover"
                layoutId={`${project.slug}-container`}
            >
                <div
                    className="block p-4 transition bg-gray-50 rounded-xl hover:bg-gray-100"
                >
                    <MotionImg
                        src={project.thumbnail.src}
                        alt=""
                        layoutId={`${project.slug}-thumbnail`}
                        className="rounded-lg"
                    />
                    <div className="flex flex-col gap-1 mt-4">
                        <p className="font-medium text-gray-700 md:text-lg">
                            {project.title}
                        </p>
                        <div className="flex flex-row items-center justify-between">
                            <p className="text-gray-500 md:text-lg">{project.jobs.join(", ")}</p>
                            <ul className="flex flex-row">
                                <MotionLi
                                    key={"github"}
                                    variants={{
                                        ...slideInVariants({ from: "right", delay: index * 0.05 }),
                                        ...scaleHoverVariants({ scale: 1.3 }),
                                    }}
                                    initial="hidden"
                                    animate="visible"
                                    whileHover="hover"
                                    className="mr-2"
                                >
                                    <a
                                        href={project.gitUrl}
                                        target="_blank"
                                        title="Github"
                                        className="transition hover:grayscale-0 grayscale"
                                    >
                                        <Icon className="text-lg md:text-xl" icon="logos:github-icon" />
                                    </a>
                                </MotionLi>
                                <MotionLi
                                    key={"web"}
                                    variants={{
                                        ...slideInVariants({ from: "right", delay: index * 0.05 }),
                                        ...scaleHoverVariants({ scale: 1.3 }),
                                    }}
                                    initial="hidden"
                                    animate="visible"
                                    whileHover="hover"
                                >
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        title="Visit Web"
                                        className="transition hover:grayscale-0 grayscale"
                                    >
                                        <Icon className="text-lg md:text-xl" icon="tabler:external-link" />
                                    </a>
                                </MotionLi>
                            </ul>
                        </div>
                    </div>
                </div>
            </MotionDiv>
        </>
    );
}
