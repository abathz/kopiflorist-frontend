import React, { Component } from 'react'
import { connect } from 'react-redux'
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
import ListArchive from 'container/Blog/ListArchive'
import { getAllBlog } from 'actions/index'

interface StateProps {
  allBlog: any[]
}

interface DispatchProps {
  getAllBlog: typeof getAllBlog
}

interface PropsComponent extends StateProps, DispatchProps { }

interface StateComponent {
  dropdownOpen: boolean
  year: string
}

class BlogList extends Component<PropsComponent, StateComponent> {
  constructor (props: any) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.select = this.select.bind(this)
    this.state = {
      dropdownOpen: false,
      year: '2018'
    }
  }

  componentDidMount () {
    this.props.getAllBlog()
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

  renderBlogList () {
    const { allBlog } = this.props
    if (!allBlog) return ''
    console.log(allBlog)
    return _.map(allBlog, (data: any) => {
      const dateCreated = data.date_created.substring(0, 10).split('-')
      const date = `${dateCreated[2]}-${dateCreated[1]}-${dateCreated[0]}`
      return (
        <div key={data.id}>
          <h3>{data.blog_title}</h3>
          <span className='text-s'>{date}</span>
          <Link route={`/blog/${data.id}/${data.slug}`} prefetch={true}>
            <img className='img-fluid' src={data.photo} />
          </Link>
        </div>
      )
    })
  }

  render () {
    return (
      <Row>
        <Col xs='8'>
          {this.renderBlogList()}
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

const mapStateToProps = ({ blog }: any) => {
  const { allBlog } = blog

  return { allBlog }
}

export default connect(mapStateToProps, { getAllBlog })(BlogList)
