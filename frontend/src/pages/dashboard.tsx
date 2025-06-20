import { Button } from '../components/ui/button'
import { Card } from '../components/ui/spaceCard'
import { CreateContentModel } from '../components/createContentModel'
import { SideBar } from '../components/sideBar'
import { AddIcon, ShareIcon  } from '../icons/Icons'
import '../App.css'
import { useState } from 'react'

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  return (
    <div className='bg-gray-200'>
      <SideBar 
        isCollapsed={sidebarCollapsed} 
        onToggle={setSidebarCollapsed} 
      />
      <div className={`p-4 h-scree transition-all duration-300 ease-in-out mr-3 ${
        sidebarCollapsed ? 'ml-20' : 'ml-64'
      }`}>
        <CreateContentModel open={modalOpen} onClose={() => setModalOpen(false)} />
        <div className='flex justify-end gap-4 mb-6'>
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

        {/* Masonry Layout */}
        <div className='columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 space-y-2'>
          <Card
            type="link"
            title="Am I going Insane!"
            tags={["Tech"]}
            time={new Date()}
            url='https://youtu.be/6CJiM3E2mAA?si=0zK11PClMTAJMb8g'
          />       
          <Card
            type="link"
            title="An exceptional achievement by Gukesh!"
            tags={["chess"]}
            time={new Date()}
            url='https://x.com/narendramodi/status/1929538936998691151'
          /> 
          <Card
            type='link'
            title='Suits'
            tags={["elegance"]}
            time={new Date()}
            url='https://www.instagram.com/reel/DKbOgIpP_it/?utm_source=ig_web_copy_link'
          />
          <Card
            type="link"
            title="Building!"
            tags={["home"]}
            time={new Date()}
            url='https://youtu.be/xZtpbLnd0EE?si=m3pAKaQ8gwk03BxV'
          />       
          <Card
            type="link"
            title="NVIDIA Summer Upgraded"
            tags={["NVIDIA", "Tech", "Gaming"]}
            time={new Date()}
            url='https://x.com/NVIDIAGeForce/status/1929553635370786905'
          /> 
          <Card
            type='link'
            title='testing'
            tags={["testing"]}
            time={new Date()}
            url='https://www.instagram.com/reel/DKaFzOgCn_m/?utm_source=ig_web_copy_link'
          />
          <Card
            type="link"
            title="First Short"
            tags={["Tech"]}
            time={new Date()}
            url='https://youtube.com/shorts/HlxtPH9mgCA?si=1QEQNu59x5JxYYPk'
          />       
          <Card
            type="link"
            title="Psychology"
            tags={["Psychology"]}
            time={new Date()}
            url='https://x.com/strongminded101/status/1929280922957844619'
          /> 
          <Card
            type='link'
            title='testing'
            tags={["testing"]}
            time={new Date()}
            url='https://www.instagram.com/reel/DBH-9VoI-c3/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
          />
          <Card
            type="link"
            title="Am I going Insane!"
            tags={["Tech"]}
            time={new Date()}
            url='https://youtube.com/shorts/h5Qzq7FH0T0?si=0EPG8Vo7rl9VbtnB'
          />       
          <Card
            type="link"
            title="Sony's Crazy!"
            tags={["Sony", "Tech", "Gaming"]}
            time={new Date()}
            url='https://x.com/ObsoleteSony/status/1923679892538785966'
          />
          
          <Card
            type="link"
            title="testing Pintrest Stuff"
            tags={["anime", "design"]}
            time={new Date()}
            url='https://pin.it/61taW2Z6Q'
          />

          <Card
            type="link"
            title="testing Linkdln Stuff!!"
            tags={["educational"]}
            time={new Date()}
            url='https://www.linkedin.com/posts/pushpendra-pateriya-344b5727_javatraining-summerprogram-applicationdevelopment-activity-7336421174383378432-yj58?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEfyoTYBa19mZnGUy08fLy_Xhjpf7DFaf0g'
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard;