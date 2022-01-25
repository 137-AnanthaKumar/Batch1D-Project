import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { Card } from 'react-bootstrap'

const Profile = () => {
  const admin = JSON.parse(sessionStorage.getItem('admin'))
  return (
    <div>
      <Container className="text-white">
        <Card className={' text-dark'}>
          <Card.Header>Profile</Card.Header>
          <Card.Body>
            <h4>Personal Information</h4>
            <div>Name : {admin.name}</div>
            <div>Email : {admin.email}</div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default Profile
