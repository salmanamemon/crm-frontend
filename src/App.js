import './App.css';
import DefaultLayout from './layout/DefaultLayout';
import Entry from './page/entry/Entry.page';

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        Send Props to main area
      </DefaultLayout>
    </div>
  );
}

export default App;
