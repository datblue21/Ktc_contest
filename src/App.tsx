import { Route, Routes } from 'react-router-dom'
import { UserProvider } from './context/UserProvider'
import HomePage from './pages/HomePage'
import UsersPage from './pages/UsersPage'
import UserDetail from './pages/UserDetail'
import Layout from './components/ui/Layout'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <UserProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/:id" element={<UserDetail />} />
          </Routes>
        </Layout>
      </Router>
    </UserProvider>
  )
}

export default App;
