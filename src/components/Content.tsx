import * as React from 'react';
import { observer } from 'mobx-react';

import { IAppStoreProps } from '../stores/appStore'

export interface IContentProps extends IAppStoreProps {
}

interface IContentState {
}

@observer
export class Content extends React.Component<IContentProps, IContentState> {
    public render() {
        return (
            <div>
                {React.Children.map(this.props.children, (child: React.ReactElement<any>) => React.cloneElement(child, { store: this.props.store }))}
            </div>
        );
    }
};
