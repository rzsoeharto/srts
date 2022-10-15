import React, { Component } from "react";

const API_HOST = "http://localhost:8000/api";

let _csrfToken = null;

async function getCsrfToken() {
  if (_csrfToken === null) {
    const response = await fetch(`${API_HOST}/csrf/`, {
      credentials: "include",
    });
    const data = await response.json();
    _csrfToken = data.csrfToken;
  }
  return _csrfToken;
}

async function testRequest(method) {
  const response = await fetch(`${API_HOST}/ping/`, {
    method: method,
    headers: method === "POST" ? { "X-CSRFToken": await getCsrfToken() } : {},
    credentials: "include",
  });
  const data = await response.json();
  return data.result;
}

class Csrf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testGet: "KO",
      testPost: "KO",
    };
  }

  async componentDidMount() {
    this.setState({
      testGet: await testRequest("GET"),
      testPost: await testRequest("POST"),
    });
  }

  render() {
    return (
      <div>
        <p>Test GET request: {this.state.testGet}</p>
        <p>Test POST request: {this.state.testPost}</p>
      </div>
    );
  }
}

export default Csrf;
