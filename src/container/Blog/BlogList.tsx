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
import { getAllBlog } from 'actions'
import moment from 'moment'

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
  constructor (props: PropsComponent) {
    super(props)
  }

  componentDidMount () {
    this.props.getAllBlog()
  }

  renderBlogList () {
    const { allBlog } = this.props
    if (!allBlog) return ''
    return _.map(allBlog, (data: any) => {
      const dateCreated = data.date_created.substring(0, 10)
      const date = moment(dateCreated).format('DD MMMM YYYY')
      return (
        <div key={data.id} className='mb-5'>
          <h3>{data.blog_title}</h3>
          <p className='text-black text-s text-hel-reg'>Posted on <span className='text-yellow'>{date}</span></p>
          <Link route={`/blog/${data.id}/${data.slug}`}>
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
          <ListArchive data={this.props.allBlog}/>
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
