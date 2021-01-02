import './App.css'
import Hello from './components/Hello'
import Recent from './components/Recent'
import { useQuery, gql } from '@apollo/client';

const GET_TANKS = gql`
  query getTanks {
    tanks {
      _id
      name
      country
    }
  }
`

function App() {

  const { loading, error, data } = useQuery(GET_TANKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  // console.log(data)

  return (
    <div>
      <nav className="nav-ctn">
        <div className="container">
          <div className="nav-wrapper z-depth-0">
            <a href="#" className="brand-logo">My Tanks</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="#">Sass</a></li>
              <li><a href="#">Components</a></li>
              <li><a href="#">JavaScript</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <Hello data={ data }/>
      <Recent/>
    </div>
  );
}

export default App;
