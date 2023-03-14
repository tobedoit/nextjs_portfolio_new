import Project from '@/components/project'

async function getNotionData() {
  // https://developers.notion.com/reference/post-database-query
  // Notion post database query
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [{ "property": "Name", "direction": "ascending" }],
      page_size: 100
    })
  };

  const response = await fetch(`https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`, options);
  return response.json();
}

export default async function Page() {

  const projects = await getNotionData();

  return (
    <div className='flex flex-col px-4 xs:px-10 items-center justify-center min-h-screen'>
      <h1 className='text-4xl sm:text-6xl font-bold mt-12'>
        총 프로젝트 : <span className='pl-4 text-blue-500 dark:text-blue-500'>{projects.results ? projects.results.length : 0}</span>
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 xs:w-full py-10 xs:m-6 m-2'>
        {projects.results && projects.results.map((project) => (
          <Project data={project} key={project.id} />
        ))}
      </div>
    </div>
  )
}