import styles from 'styles/Home.module.css';
import PageLayout from 'components/PageLayout';
import Link from 'next/dist/client/link';
import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react'

import {getAllProjects} from 'lib/api';


export default function Home({ projects }) {

  return (
    <PageLayout project_data={projects}>
        <section className="col-span-2">
          1
          <ul className="top-14 px-4">
            {projects.map((p, index) => 
            <li className="mt-8"key={p.title}>
              <Link href={`/projects/${encodeURIComponent(p.slug)}`}>
                <a>{p.title}</a>
              </Link>
            </li>
            )}
          </ul>
        </section>
        <section className="col-span-4">
          {projects.map((p, index) => (
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
      projects
    }
  }
}