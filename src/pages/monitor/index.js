/* eslint-disable */

import React, {Component} from 'react'
import { Button, Row, Col, Modal } from 'antd'
import ReconnectingWebSocket from 'reconnecting-websocket'
import $ from "jquery";
import { Terminal } from 'xterm';

import './index.less'

const DEFAULT_COMMAND = ['/bin/sh', '-c', 'TERM=xterm-256color; export TERM; [ -x /bin/bash ] && ([ -x /usr/bin/script ] && /usr/bin/script -q -c "/bin/bash" /dev/null || exec /bin/bash) || exec /bin/sh'];

class Monitor extends Component  {
  state = {
    consoleRef: null,
    showConsole: false,
    term: null,
    ws: null,
  };

  constructor(props) {
    super(props);
    this.termRef = React.createRef();
    // this.props.onRef(this);
  }

  fit() {
    const term = this.state.term;
    const socket = this.state.ws;
    if (term && socket) {
      term.resize(80, 24);
    }
  }

  exec() {
    // let url = `wss://${window.location.host}/rancher-api/k8s/clusters/c-dw72h/api/v1/namespaces/default/pods/aaa-869b5f8f97-2b72p/exec`
    // url += `?container=aaa&stdout=1&stdin=1&stderr=1&tty=1`
    // const command = DEFAULT_COMMAND;
    // command.forEach(c => {
    //   url += `&command=${encodeURIComponent(c)}`;
    // });

    let url = `wss://${window.location.host}/rancher-api/v3/clusters/c-4n4sj?shell=true`
    const socket = new WebSocket(url, 'base64.channel.k8s.io')

    socket.onopen = () => {
      const term = new Terminal({
        useStyle: true,
        screenKeys: true,
        cursorBlink: false,
      });

      this.setState({
        term,
      });

      term.on('data', data => {
        socket.send(`0${AWS.util.base64.encode(data)}`);
      });
      term.open($('.shell-body')[0]);

      this.fit();

      term.focus();

      $('.terminal .xterm-viewport').css('overflow-y', 'auto')
      this.state.timer = setInterval(() => {
        this.state.ws.send('ping')
      }, 50000);
    }

    socket.onmessage = (message = {}) => {
      const data = message.data.slice(1);
      switch (message.data[0]) {
        case '1':
        case '2':
        case '3':
          this.state.term.write(AWS.util.base64.decode(data).toString());
          break;
        default: break;
      }
    }

    this.setState({
      ws: socket,
    });
  }

  render() {
    return (
      <Row
        type="flex"
        justify="center"
        style={{marginTop: '45px'}}
      >
        <Button
          onClick={() => {
            this.exec()
            this.setState({
              showConsole: true,
            })
          }}
        >
          打开控制台
        </Button>
        <Modal
          width="60vw"
          footer={null}
          visible={this.state.showConsole}
          onCancel={() => this.setState({
            showConsole: false,
            term: null,
          })}
          maskClosable={false}
        >
        <div className="shell-container">
          <div className="shell-body">
          </div>
        </div>
        </Modal>
      </Row>
    )
  }
}

export default Monitor
