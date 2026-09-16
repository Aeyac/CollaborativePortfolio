import { CapIcon } from './icons'

export default function EducationCard({ education }) {
  return (
    <div className="bg-[#f5f5f7] border border-zinc-200 rounded-2xl p-5 shadow-xs">
      <div className="flex items-center space-x-2 text-zinc-900 mb-3">
        <CapIcon />
        <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-700">Academic Credentials</h4>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
        <div className="font-semibold text-zinc-950">{education.degree}</div>
        <div className="text-xs font-mono px-2 py-0.5 rounded bg-white border border-zinc-300 text-zinc-800 w-fit shadow-xs">
          Class of {education.gradYear}
        </div>
      </div>
      <div className="text-sm text-zinc-600 mt-1 font-medium">{education.institution}</div>
      <div className="mt-3 text-xs text-zinc-700 bg-white p-3 rounded-xl border border-zinc-200">
        <span className="font-mono text-zinc-950 font-semibold">Major in: Software Systems and Web Applications Engineering</span>
        {education.thesis}
      </div>
    </div>
  )
}
