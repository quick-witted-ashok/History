import {Component} from 'react'
import './App.css'

const HistoryItem = props => {
  const {itemDetails, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = itemDetails
  const deleteIcon = () => {
    deleteHistory(id)
  }
  return (
    <li className="card">
      <div className="time-logo">
        <p>{timeAccessed}</p>
        <div className="middle">
          <img src={logoUrl} className="logo" alt="domain logo" />

          <p>{title}</p>

          <p href={domainUrl} target="_blank">
            {domainUrl}
          </p>
        </div>
      </div>
      <div className="delete-logo">
        <button data-testid="delete" type="button" onClick={deleteIcon}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete"
          />
        </button>
      </div>
    </li>
  )
}
// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here

class App extends Component {
  state = {
    searchInput: '',
    HistoryList: initialHistoryList,
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteHistory = id => {
    const {HistoryList} = this.state
    const filteredList = HistoryList.filter(eachList => eachList.id !== id)

    this.setState({HistoryList: filteredList})
  }

  render() {
    const {searchInput, HistoryList} = this.state
    const searchResults = HistoryList.filter(
      eachHistory =>
        eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        eachHistory.domainUrl.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div>
        <div className="navbar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="history-logo"
          />
          <div className="input-search">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search"
            />
            <input
              type="search"
              value={searchInput}
              onChange={this.onChangeSearchInput}
              placeholder="Search History"
              className="input"
            />
          </div>
        </div>

        <div className="card-1">
          <ul className="container">
            {searchResults.length > 0 ? (
              searchResults.map(eachHistory => (
                <HistoryItem
                  key={eachHistory.id}
                  itemDetails={eachHistory}
                  deleteHistory={this.deleteHistory}
                />
              ))
            ) : (
              <p>There is no history to show</p>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
