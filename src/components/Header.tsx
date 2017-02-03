import * as React from 'react';
import { Dropdown, Icon, Menu, Image } from 'semantic-ui-react'

import { IAppStoreProps } from '../stores/appStore'

export interface IHeaderProps extends IAppStoreProps {

}

interface IHeaderState {

}

// return (
//     <div>
//         <img src={require<string>('url-loader?limit=10000!../../static/images/aeonium.png')} alt={'aeonium-logo'} />
//         <header>Aeonium</header>
//     </div>
// );

// @observer
export class Header extends React.Component<IHeaderProps, IHeaderState> {
    public render() {
        return (
            <div>
                <Menu attached='top'>
                    <Menu.Item>
                        <div>
                            <Image avatar src={require<string>('url-loader?limit=10000!../../static/images/aeonium.png')} alt={'aeonium-logo'} />
                            <span>Aeonium</span>
                        </div>
                    </Menu.Item>


                    <Menu.Menu>
                        <div className='ui right aligned category search item'>
                            <div className='ui transparent icon input'>
                                <input className='prompt' type='text' placeholder='Search ...' />
                                <i className='search link icon' />
                            </div>
                            <div className='results'></div>
                        </div>
                    </Menu.Menu>

                    <Menu.Menu position='right'>
                        <Dropdown icon='settings' simple>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <Icon name='dropdown' />
                                    <span className='text'>New</span>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>Document</Dropdown.Item>
                                        <Dropdown.Item>Image</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown.Item>
                                <Dropdown.Item>Open</Dropdown.Item>
                                <Dropdown.Item>Save...</Dropdown.Item>
                                <Dropdown.Item>Edit Permissions</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Header>Export</Dropdown.Header>
                                <Dropdown.Item>Share</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Menu>
                </Menu>
            </div>
        );
    }
};
