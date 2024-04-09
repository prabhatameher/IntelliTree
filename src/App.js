
import Tree from './Tree.json'
import FlatTree from './FlatTree'

function App() {

  return (
    <div className="App">
      <FlatTree data={Tree.data} />;
    </div>
  );
}

export default App;
