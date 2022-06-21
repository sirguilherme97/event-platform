import { gql, useQuery } from "@apollo/client"

interface Lesson {
    id: string;
    title: string;
    availableAt: string;
    teacher: {
        id: string;
        name: string;
    }
}

const GET_LESSON_QUERY = gql`
  query {
    lessons{
      id,
      title,
      availableAt,
      teacher{
        id,
        name
      }
    }
  }
`

export function Lessons() {
    const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSON_QUERY)
    return (
        <div className="w-full h-50">
            {data?.lessons.map((lesson) => {
                return (
                    <div className="mt-8">
                        <h1 key={lesson.id} className="text-base text-zinc-500 font-medium">{lesson.availableAt}</h1>
                        <div className="p-4 mt-2 border border-zinc-700 rounded-md">
                            <h1 className="font-bold text-[C4C4CC]">{lesson.title}</h1>
                        </div>
                    </div >
                )
            })}

        </div>
    )
}
