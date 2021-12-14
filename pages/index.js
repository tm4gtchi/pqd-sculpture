import styles from 'styles/Home.module.css';
import PageLayout from 'components/PageLayout';
import Link from 'next/dist/client/link';
import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react'

import {getAllProjects} from 'lib/api';

export default function Home({ projects }) {

  return (
    <PageLayout project_data={projects}>
        <section className="col-span-1"> 
        {/* col-span-2 */}
          <div className="flex flex-col mt-11 h-screen fixed">
              <ul className="px-4">
                {projects.map(p => 
                <li className="mt-8"key={p.title}>
                  <Link href='/projects/[slug]' as={`/projects/${encodeURIComponent(p.slug)}`}>
                    <a>{p.title}</a>
                  </Link>
                </li>
                )}
              </ul>
          </div>
        </section>
        <section className="flex-1 col-span-2">
          {projects.map(p => (
              <img className="w-full mb-6" src={p.mainImg} alt="image"/>
          ))}
        </section>
    </PageLayout>
  )
}

//called during build time (build time)
//provides props to your page
//creates static page
export async function getStaticProps() {
  const projects = await getAllProjects();
  return {
    props: {
      projects,
    }
  }
}
