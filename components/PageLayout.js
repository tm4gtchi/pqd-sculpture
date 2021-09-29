import Navbar from './Navbar';
import ProjectList from './ProjectList';

export default function PageLayout({projects, children, className}) {
  return (
    <div>
        <Navbar />
      <div className="flex">
        <ProjectList className="bg-gray-100 w-40 sm:w-64" projects={projects} />
        <div className="flex-1 flex bg-gray-100 overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  )
}