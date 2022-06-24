import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames'

export function Lesson(props: LesssonProps) {
  const { slug } = useParams<{ slug: string }>()
  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", { locale: ptBR })

  const isActiveLesson = slug === props.slug;

  return (
    <>
      {isLessonAvailable ? (
        <Link to={`/event/lesson/${props.slug}`} className='group' >
          <span className="text-gray-300">
            {availableDateFormatted}
          </span>
          <div className={classNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors', {
            'bg-green-500': isActiveLesson
          })}>
            <header className="flex items-center justify-between">
              {isLessonAvailable ? (
                <span className={classNames('flex items-center gap-2 text-sm font-medium', {
                  'text-white': isActiveLesson,
                  'font-bold': isActiveLesson,
                  'text-blue-500 ': !isActiveLesson
                })}>
                  <CheckCircle size={20} />
                  Conteúdo Liberado
                </span>
              ) : (
                <span className={classNames('flex items-center gap-2 text-sm text-orange-500 font-medium', {
                  'cursor-not-allowed': isLessonAvailable
                })}>
                  <Lock size={20} />
                  Em Breve
                </span>
              )}
              <span className={classNames('text-xs rounded px-2 py-[2px] text-white border font-bold transition-colors', {
                'border-white': isActiveLesson,
                'border-green-300': !isActiveLesson
              })}>
                {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
              </span>
            </header>
            <strong className={classNames(' mt-5 block', {
              'text-white': isActiveLesson,
              'text-gray-200': !isActiveLesson
            })}>
              {props.title}
            </strong>
          </div>
        </Link >
      ) : (
        <button disabled={isLessonAvailable} className={classNames('group cursor-not-allowed', {
          '  opacity-90': !isLessonAvailable
        })} >
          <span className="text-gray-300">
            {availableDateFormatted}
          </span>
          <div className={classNames('rounded border border-gray-500 p-4 mt-2 transition-colors', {
            'bg-green-500': isActiveLesson
          })}>
            <header className="flex items-center justify-between">
              {isLessonAvailable ? (
                <span className={classNames('flex items-center gap-2 text-sm font-medium', {
                  'text-white': isActiveLesson,
                  'font-bold': isActiveLesson,
                  'text-blue-500 ': !isActiveLesson
                })}>
                  <CheckCircle size={20} />
                  Conteúdo Liberado
                </span>
              ) : (
                <span className={classNames('flex items-center gap-2 text-sm text-orange-500 font-medium', {
                  'cursor-not-allowed': isLessonAvailable
                })}>
                  <Lock size={20} />
                  Em Breve
                </span>
              )}
              <span className={classNames('text-xs rounded px-2 py-[2px] text-white border font-bold transition-colors', {
                'border-white': isActiveLesson,
                'border-2 border-zinc-500': !isActiveLesson
              })}>
                {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
              </span>
            </header>
            <strong className={classNames(' mt-5 block', {
              'text-white': isActiveLesson,
              'text-gray-200': !isActiveLesson
            })}>
              {props.title}
            </strong>
          </div>
        </button >
      )}
    </>
  )
}
