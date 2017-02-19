import * as React from 'react'

interface IContentProps {
}

interface IContentState {
}

export class SearchBar extends React.Component<IContentProps, IContentState> {
    constructor(props: IContentProps) {
        super(props)
    }

    public render() {
        return (
            <div style={{float:'left'}}>
              <form onSubmit={e => e.preventDefault()}>
                <input
                  type='text'
                  size={45}
                  placeholder='Search...'
                />
              </form>
            </div>
        )
    }
}
