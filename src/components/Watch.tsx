// src/components/Watch.tsx
import React, { Component } from 'react';

interface WatchState {
  time: string;
}

class Watch extends Component<{}, WatchState> {
  private timerID: NodeJS.Timeout | undefined;

  constructor(props: {}) {
    super(props);
    this.state = { time: new Date().toLocaleTimeString() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    if (this.timerID) clearInterval(this.timerID);
  }

  tick() {
    this.setState({ time: new Date().toLocaleTimeString() });
  }

  render() {
    return <div>{this.state.time}</div>;
  }
}

export default Watch;
