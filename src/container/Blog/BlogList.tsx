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

const arrMonth: any = []
arrMonth[1] = 'January'
arrMonth[2] = 'February'
arrMonth[3] = 'March'
arrMonth[4] = 'April'
arrMonth[5] = 'May'
arrMonth[6] = 'June'
arrMonth[7] = 'July'
arrMonth[8] = 'August'
arrMonth[9] = 'September'
arrMonth[10] = 'October'
arrMonth[11] = 'November'
arrMonth[12] = 'December'

class BlogList extends Component<PropsComponent, StateComponent> {
  constructor (props: any) {
    super(props)
  }

  componentDidMount () {
    this.props.getAllBlog()
  }

  renderBlogList () {
    const { allBlog } = this.props
    if (!allBlog) return ''
    return _.map(allBlog, (data: any) => {
      const dateCreated = data.date_created.substring(0, 10).split('-')
      const date = `${dateCreated[2]} ${arrMonth[Number(dateCreated[1])]} ${dateCreated[0]}`
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
