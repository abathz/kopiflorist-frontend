import React, { Component } from 'react'
import _ from 'lodash'
import moment from 'moment'
import { UncontrolledCollapse, Row, Col, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Link } from 'routes'

interface StateProps {
  data: any
}

interface DispatchProps { }

interface PropsComponent extends StateProps, DispatchProps { }

interface StateComponent {
  dropdownOpen: boolean
  year: string
}

class ListArchive extends Component<PropsComponent, StateComponent> {
  constructor (props: any) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.select = this.select.bind(this)
    this.state = {
      dropdownOpen: false,
      year: moment().format('YYYY')
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

  sortMonth () {
    return _.countBy(this.props.data, (data: any) => {
      const dateCreated = data.date_created.substring(0, 10).split('-')
      switch (dateCreated[1]) {
        case '01': return 'January'
        case '02': return 'February'
        case '03': return 'March'
        case '04': return 'April'
        case '05': return 'May'
        case '06': return 'June'
        case '07': return 'July'
        case '08': return 'August'
        case '09': return 'September'
        case '10': return 'October'
        case '11': return 'November'
        case '12': return 'December'
        default: return ''
      }
    })
  }

  sortYear () {
    return _.countBy(this.props.data, (data: any) => {
      const MAX_YEAR = 2029
      const dateCreated: number[] = data.date_created.substring(0, 10).split('-')
      for (let index = dateCreated[0] ; index < MAX_YEAR; index++) {
        return `${dateCreated[0]}`
      }
    })
  }

  renderYearArchive () {
    const sortYear = this.sortYear()
    const year = Object.keys(sortYear)
    return _.map(year, (_year: any, index: any) => {
      return (
        <DropdownItem key={index} onMouseDown={this.select}>{_year}</DropdownItem>
      )
    })
  }

  renderListArchive () {
    const sortMonth = this.sortMonth()
    const month = Object.keys(sortMonth)

    const sortYear = this.sortYear()
    const year = Object.keys(sortYear)

    const list = (_month: string, index: number) => (
      <>
        <li id={_month.toLowerCase()} className='text-hel-bold'>{_month} {year[index]}</li>
        <UncontrolledCollapse toggler={`#${_month.toLowerCase()}`} className='mb-1'>
          {this.renderBlogArchive(_month)}
        </UncontrolledCollapse>
      </>
    )

    return _.map(month, (_month: string, index: number) => {
      return (
        <div key={index}>
          {this.state.year === year[index] ? list(_month, index) : ''}
        </div>
      )
    })
  }

  renderBlogArchive (month: any) {
    return _.map(this.props.data, (data: any, index: any) => {
      const dateCreated = data.date_created.substring(0, 10).split('-')
      if (dateCreated[1] === '01' && month === 'January') return <Link key={index} route={`/blog/${data.id}/${data.slug}`}><a className='text-m text-black'><p>{data.blog_title}</p></a></Link>
      else if (dateCreated[1] === '02' && month === 'February') return <Link key={index} route={`/blog/${data.id}/${data.slug}`}><a className='text-m text-black'><p>{data.blog_title}</p></a></Link>
      else if (dateCreated[1] === '03' && month === 'March') return <Link key={index} route={`/blog/${data.id}/${data.slug}`}><a className='text-m text-black'><p>{data.blog_title}</p></a></Link>
      else if (dateCreated[1] === '04' && month === 'April') return <Link key={index} route={`/blog/${data.id}/${data.slug}`}><a className='text-m text-black'><p>{data.blog_title}</p></a></Link>
      else if (dateCreated[1] === '05' && month === 'May') return <Link key={index} route={`/blog/${data.id}/${data.slug}`}><a className='text-m text-black'><p>{data.blog_title}</p></a></Link>
      else if (dateCreated[1] === '06' && month === 'June') return <Link key={index} route={`/blog/${data.id}/${data.slug}`}><a className='text-m text-black'><p>{data.blog_title}</p></a></Link>
      else if (dateCreated[1] === '07' && month === 'July') return <Link key={index} route={`/blog/${data.id}/${data.slug}`}><a className='text-m text-black'><p>{data.blog_title}</p></a></Link>
      else if (dateCreated[1] === '08' && month === 'August') return <Link key={index} route={`/blog/${data.id}/${data.slug}`}><a className='text-m text-black'><p>{data.blog_title}</p></a></Link>
      else if (dateCreated[1] === '09' && month === 'September') return <Link key={index} route={`/blog/${data.id}/${data.slug}`}><a className='text-m text-black'><p>{data.blog_title}</p></a></Link>
      else if (dateCreated[1] === '10' && month === 'October') return <Link key={index} route={`/blog/${data.id}/${data.slug}`}><a className='text-m text-black'><p>{data.blog_title}</p></a></Link>
      else if (dateCreated[1] === '11' && month === 'November') return <Link key={index} route={`/blog/${data.id}/${data.slug}`}><a className='text-m text-black'><p>{data.blog_title}</p></a></Link>
      else if (dateCreated[1] === '12' && month === 'December') return <Link key={index} route={`/blog/${data.id}/${data.slug}`}><a className='text-m text-black'><p>{data.blog_title}</p></a></Link>
    })
  }

  render () {
    return (
      <>
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
                {this.renderYearArchive()}
              </DropdownMenu>
            </ButtonDropdown>
          </Col>
        </Row>
        <ul className='list-archive'>
          {this.renderListArchive()}
        </ul>
      </>
    )
  }
}

export default ListArchive
