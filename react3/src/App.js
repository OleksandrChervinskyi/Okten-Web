import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { OnePost } from './components/Endpoints/OnePost';
import { Endpoints } from './components/Endpoints/Endpoints';


// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <div>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/dashboard">Dashboard</Link>
//             </li>
//             <li>
//               <Link to="/posts">Start test</Link>
//             </li>
//           </ul>

//           <hr />

//           <Switch>
//             <Route exact path="/" component={Home} />

//             <Route path="/about">
//               <About />
//             </Route>

//             <Route path="/dashboard" render={(args) => {
//               console.log(args);
//               return <Dashboard />
//             }} />

//             <Route path="/posts" exact>
//               <Test />
//             </Route>

//             <Route path="/posts/:id">
//               <One />
//             </Route>

//             <Route>
//               <Redirect to="/about" />
//             </Route>

//           </Switch>
//         </div>
//       </Router>
//     </div>
//   );

//   function Home() {
//     return (
//       <div>
//         <h2>Home</h2>
//       </div>
//     );
//   }

//   function About() {
//     return (
//       <div>
//         <h2>About</h2>
//       </div>
//     );
//   }

//   function Dashboard() {
//     return (
//       <div>
//         <h2>Dashboard</h2>
//       </div>
//     );
//   }

//   function Test() {
//     const [items, setItems] = useState([]);

//     const fetchFn = async () => {
//       const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
//       const json = await resp.json()

//       setItems(json)
//     }

//     // Hooks outher
//     const match = useRouteMatch()
//     const location = useLocation()
//     const history = useHistory()

//     useEffect(() => {
//       fetchFn()
//     }, [])

//     return (
//       <div>
//         <ul>
//           {items.map(item => <Link to={`posts/${item.id}`}><li key={item.id}>{item.id} - {item.title}</li> </Link>)}
//         </ul>
//       </div>
//     );
//   }

//   function One() {
//     const [post, setPost] = useState()
//     const { id } = useParams()
//     const history = useHistory()


//     const fetchFn = async () => {
//       const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//       const json = await resp.json()

//       setPost(json)
//     }

//     useEffect(() => {
//       fetchFn()
//     }, [id])

//     return (
//       <div>
//         <h1>
//           Post alone #{id}
//         </h1>
//         <div>
//           {post && <h2>{post.title} - {post.userId}</h2>}
//         </div>
//         <button onClick={()=> {history.push(`/posts/${+id + 1}`)}} >Next post</button>
//       </div>
//     );
//   }
// }

const END_POINTS = [
  'posts',
  'albums',
  'todos',
  'users',
  'photos',
  'comments'
];

// Кнопки 
const BildBt = ({ arr }) => {
  return (
    <div className='nav'>
      {arr.map(el => (
        <div className='nav_item' key={el}>
          <Link to={`/` + el}>{el}</Link>
        </div>
      ))}
    </div >


  )
}


function App() {

  return (
    <div className='App'>
      <Router>
        <BildBt arr={END_POINTS} />

        <Switch>
          <Route path='/:endpoint' exact>
            <Endpoints />
          </Route>

          <Route path='/:endpoint/:id'>
            <OnePost />
          </Route>

        </Switch>
      </Router>
    </div>
  )
}



export default App;
