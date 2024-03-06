
import Image from './components/imageslider/image'
function App() {
  return (
    <div style={{color: 'black' }}>
       <Image url={"https://picsum.photos/v2/list"} page={"10"} limit={"4"}/>
    </div>
  );
}

export default App;
