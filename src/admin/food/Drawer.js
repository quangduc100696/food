import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Drawer, Button } from 'antd';
import UpdateFood from './UpdateFood';

class App extends React.Component {
    state = { visible: false, childrenDrawer: false };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    showChildrenDrawer = () => {
        this.setState({
            childrenDrawer: true,
        });
    };

    onChildrenDrawerClose = () => {
        this.setState({
            childrenDrawer: false,
        });
    };

    render() {
        return (
          <>
            <Drawer
              title="Multi-level drawer"
              width={520}
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
            >
              <Button type="primary" onClick={this.showChildrenDrawer}>
                Thêm mới
              </Button>
              <Drawer
                title="Two-level Drawer"
                width={320}
                closable={false}
                onClose={this.onChildrenDrawerClose}
                visible={this.state.childrenDrawer}
                style={{float:"left", width: "100%", }}
              >
               <UpdateFood/>
              </Drawer>
            </Drawer>
          </>
        );
      }
}



const Drawers = () => {
    return (
        <App />
    );
};

export default Drawers;