import styles from 'styles/Home.module.css';
import PageLayout from 'components/PageLayout';
import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react'

import {getAllProjects} from 'lib/api';

export default function Home({ projects }) {

  return (
    <PageLayout projects={projects}>
          <div>
          {projects.map((p, index) => (
              <img className="w-4/5 mb-6" src={p.mainImg} alt="image"/>
          ))}
        </div>
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