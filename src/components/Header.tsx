import * as React from 'react'
import { Container, Divider } from 'semantic-ui-react'

import { IAppStoreProps } from '../stores/appStore'
import { SearchBar } from './SearchBar'
import { UserDropdown } from './UserDropdown'

export interface IHeaderProps extends IAppStoreProps {

}

interface IHeaderState {

}


// @observer
export class Header extends React.Component<IHeaderProps, IHeaderState> {
    public render() {
        return (
            <Container>
              <div style={{minheight:'100px'}}>
                <img style={{float: 'left'}} src={require<string>('url-loader?limit=10000!../../static/images/aeonium.png')} alt={'aeonium-logo'} />
                <header>Aeonium</header>
                <SearchBar />
                <UserDropdown />
                <br/>
                <Divider />
              </div>
            </Container>
        );
    }
};

