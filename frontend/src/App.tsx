import { Button } from './components/ui/button'
import { Card } from './components/ui/spaceCard'
import { AddIcon, ShareIcon  } from './icons/Icons'
import './App.css'

function App() {

  return (
    <div>
     <div className='p-9'>
         <Button
          variant="secondary"
          size="md"
          innerText="Share Brain"
          icon={<ShareIcon size='md'/>}
          onClick={() => alert("Primary Button Clicked")}
        />
        <Button
          variant="primary"
          size="md"
          innerText="Add Content"
          icon= {<AddIcon size='md'/>}
          onClick={() => alert("Primary Button Clicked")}
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
  )
}
export default App
