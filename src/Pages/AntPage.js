/**
 * Created by Lee on 2019/11/17.
 */
import React from "react";
import { TabBar, Card, WingBlank, WhiteSpace } from 'antd-mobile';

class AntPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selectedTab: 'redTab',
            hidden: false,
            fullScreen: false,
        }
    }

    renderContent(pageText) {
        return (
            <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
                <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
                <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
                   onClick={(e) => {
            e.preventDefault();
            this.setState({
              hidden: !this.state.hidden,
            });
          }}
                >
                    Click to show/hide tab-bar
                </a>
                <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
                   onClick={(e) => {
            e.preventDefault();
            this.setState({
              fullScreen: !this.state.fullScreen,
            });
          }}
                >
                    Click to switch fullscreen
                </a>
            </div>
        );
    }

    render() {
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                <WingBlank size="md">
                    <WhiteSpace />
                    <Card>
                        <Card.Header
                            title="This is title"
                            thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                            extra={<span>this is extra</span>}
                        />
                        <Card.Body>
                            <div>This is content of `Card`</div>
                        </Card.Body>
                        <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                    </Card>
                    <WhiteSpace />
                </WingBlank>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >

                    <TabBar.Item
                        icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
              />
            }
                        selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
              />
            }
                        title="Koubei"
                        key="Koubei"
                        badge={'new'}
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
                        data-seed="logId1"
                    >
                        {this.renderContent('Koubei')}
                    </TabBar.Item>

                    <TabBar.Item
                        icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                        selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                        title="My"
                        key="my"
                        selected={this.state.selectedTab === 'yellowTab'}
                        onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
                    >
                        {this.renderContent('My')}
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}

export default AntPage;