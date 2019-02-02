import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'reactstrap'
import { getBlog } from 'actions'
import moment from 'moment'

interface StateProps {
  id: number
  detailBlog: any
}

interface DispatchProps {
  getBlog: typeof getBlog
}

interface PropsComponent extends StateProps, DispatchProps { }

interface StateComponent { }

class BlogDetail extends Component<PropsComponent, StateComponent> {
  componentDidMount () {
    this.props.getBlog(this.props.id)
  }

  dateFormated (value: any) {
    if (!value) return ''
    const date = String(value).substring(0, 10)
    const dateFormated = moment(date).format('DD MMMM YYYY')
    return dateFormated
  }

  render () {
    const { detailBlog } = this.props
    if (!detailBlog) return ''
    return (
      <Row>
        <Col xs='12'>
          <p className='text-black text-xl text-hel-95'>{detailBlog.blog_title}</p>
          <p className='text-black text-m text-hel-reg'>Posted on <span className='text-yellow'>{this.dateFormated(detailBlog.date_created)}</span></p>
          <img className='img-fluid' src={detailBlog.photo} alt=''/>
          <div className='mt-5' dangerouslySetInnerHTML={{ __html: detailBlog.content }}/>
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = ({ blog }: any) => {
  const { detailBlog } = blog

  return { detailBlog }
}

export default connect(mapStateToProps, { getBlog })(BlogDetail)
