import React, { Component, EventHandler } from 'react'
import _ from 'lodash'
import {
  Col,
  Row,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import { Link } from 'routes'
import ListArchive from 'components/Blog/ListArchive'

class BlogList extends Component<{}, { dropdownOpen: boolean, year: string }> {
  constructor (props: any) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.select = this.select.bind(this)
    this.state = {
      dropdownOpen: false,
      year: '2018'
    }
  }

  toggle () {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    })
  }

  select (e: any) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      year: e.target.innerText
    })
  }

  render () {
    return (
      <Row>
        <Col xs='8'>
        {
          _.map(Array(3), (data: any, index: number) => {
            return (
              <Link key={index} route={`/blog/${index}`}>
                <div className='mb-5' style={{ backgroundColor: '#333', height: '423.5px' }} />
              </Link>
            )
          })
        }
        </Col>
        <Col xs='4'>
          <Row>
            <Col xs='8'>
              <h5 className='pt-1'>Archive</h5>
            </Col>
            <Col xs='4'>
              <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} >
                <DropdownToggle caret={true} style={{ backgroundColor: 'transparent', color: '#222' }}>
                  {this.state.year}
                </DropdownToggle>
                <DropdownMenu right={true}>
                  <DropdownItem onClick={this.select}>2018</DropdownItem>
                  <DropdownItem onClick={this.select}>2019</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </Col>
          </Row>
          <ListArchive year={this.state.year}/>
        </Col>
      </Row>
    )
  }
}

export default BlogList
