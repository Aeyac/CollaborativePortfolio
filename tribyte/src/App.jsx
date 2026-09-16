import { useState } from 'react'
import { teamData } from './data/portfolioData'
import Header from './components/Header'
import Hero from './components/Hero'
import TeamOverviewGrid from './components/TeamOverviewGrid'
import MemberDetailSection from './components/MemberDetailSection'
import ProjectsShowcase from './components/ProjectsShowcase'
import Footer from './components/Footer'


export default function App() {
  const [activeMemberId, setActiveMemberId] = useState(teamData[0].id)
  const activeMember = teamData.find((m) => m.id === activeMemberId) || teamData[0]

  const handleSelectMember = (id) => {
    setActiveMemberId(id)
  }


  return (
    <div className="min-h-screen flex flex-col bg-[#f5f5f7] text-zinc-800">
      <Header />

      <main className="flex-grow">
        <Hero />

        <TeamOverviewGrid
          teamMembers={teamData}
          activeMemberId={activeMemberId}
          onSelectMember={handleSelectMember}
        />

        <MemberDetailSection
          teamMembers={teamData}
          activeMember={activeMember}
          activeMemberId={activeMemberId}
          onSelectMember={handleSelectMember}
        />

        <ProjectsShowcase activeMember={activeMember} />

      </main>

      <Footer teamMembers={teamData} />
    </div>
  )
}
