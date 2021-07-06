import React, { Component } from 'react'
import IssuesList from '../components/IssuesList'

class AllIssuesPage extends Component {
  state = {
    issues: [
      {
        id: 1,
        description: 'On clicking Delete, the application crashes.',
        severity: 'Critical',
        status: 'Open',
      },
      {
        id: 2,
        description: 'The heading Add is wrongly displayed as Edit.',
        severity: 'Minor',
        status: 'Closed',
      },
      {
        id: 3,
        description: 'The payment functionality is missing.',
        severity: 'Major',
        status: 'In Progress',
      },
    ],
  }

  render() {
    return (
      <>
        <h1>Issue List</h1>
        <IssuesList issues={this.state.issues} />
      </>
    )
  }
}

export default AllIssuesPage
