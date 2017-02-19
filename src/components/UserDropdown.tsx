import * as React from 'react'
import { Dropdown } from 'semantic-ui-react'

interface IContentProps {
}

interface IContentState {
}

export class UserDropdown extends React.Component<IContentProps, IContentState> {
    constructor(props: IContentProps) {
        super(props)
    }

    public render() {
        return (
            <div style={{float:'right'}}>
              <Dropdown text='Account'></Dropdown>
            </div>
        )
    }
}
