import React, { Component } from 'react'
import _ from 'lodash'
import { UncontrolledCollapse } from 'reactstrap'

interface StateProps {
  year: string
}

interface DispatchProps { }

interface PropsComponent extends StateProps, DispatchProps { }

interface StateComponent { }

class ListArchive extends Component<PropsComponent, StateComponent> {
  constructor (props: any) {
    super(props)
  }

  render () {
    return (
      <>
        <ul className='list-archive'>
          {_.map(['Juli', 'Agustus', 'September', 'Oktober', 'November'], (data: any) => {
            return (
              <>
                <li key={data} id={data.toLowerCase()}>{data} {this.props.year}</li>
                <UncontrolledCollapse toggler={`#${data.toLowerCase()}`}>
                  <div>askdalskjdalksjd</div>
                </UncontrolledCollapse>
              </>
            )
          })}
        </ul>
      </>
    )
  }
}

export default ListArchive
