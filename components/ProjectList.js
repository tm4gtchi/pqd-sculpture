import Link from 'next/link';

const ProjectList = ({projects}) => {

return(
  <div className="bg-gray-100 w-40 sm:w-64" >
      <ul className="fixed top-14 px-4">
        {projects.map((p, index) => 
        <li className="mt-8"key={p.title}>
          <Link href={`/projects/${encodeURIComponent(p.slug)}`}>
            <a>{p.title}</a>
          </Link>
        </li>
        )}
      </ul>
    </div>
  )
}

export default ProjectList;
