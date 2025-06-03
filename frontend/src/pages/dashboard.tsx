import { Button } from '../components/ui/button'
import { Card } from '../components/ui/spaceCard'
import { CreateContentModel } from '../components/createContentModel'
import { SideBar } from '../components/sideBar'
import { AddIcon, ShareIcon  } from '../icons/Icons'
import '../App.css'
import { useState } from 'react'

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div>
      <SideBar 
        isCollapsed={sidebarCollapsed} 
        onToggle={setSidebarCollapsed} 
      />
      <div className={`p-4 h-screen bg-[#f2f5fc] transition-all duration-300 ease-in-out ${
        sidebarCollapsed ? 'ml-20' : 'ml-64'
      }`}>
        <CreateContentModel open={modalOpen} onClose={() => setModalOpen(false)} />
        <div className='flex justify-end gap-4'>
          <Button
            variant="secondary"
            size="md"
            innerText="Share Brain"
            icon={<ShareIcon size='md' color='#fff'/>}
            onClick={() => alert("Primary Button Clicked")}
          />
          <Button
            variant="primary"
            size="md"
            innerText="Add Content"
            icon= {<AddIcon size='md' color='#fff'/>}
            onClick={() => setTimeout(() => {
              setModalOpen(true);
              }, 150) 
            }
          />
        </div>

        <div className='flex'>
          <Card
            type="youtube"
            title="Am I going Insane!"
            tags={["Tech",]}
            time={new Date()}
            url='https://youtu.be/6CJiM3E2mAA?si=0zK11PClMTAJMb8g'
          />       
          <Card
            type="tweet"
            title="Sony's Crazy!"
            tags={["Sony", "Tech", "Gaming"]}
            time={new Date()}
            url='https://x.com/ObsoleteSony/status/1923679892538785966'
          /> 
          <Card
            type='reel'
            title='testing'
            tags={["testing"]}
            time={new Date()}
            url='https://www.instagram.com/reel/DBH-9VoI-c3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard;