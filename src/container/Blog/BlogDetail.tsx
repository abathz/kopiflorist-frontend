import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'reactstrap'
import { getBlog } from 'actions/index'

interface StateProps {
  id: number
  detailBlog: any
}

interface DispatchProps {
  getBlog: typeof getBlog
}

interface PropsComponent extends StateProps, DispatchProps { }

interface StateComponent { }

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

class BlogDetail extends Component<PropsComponent, StateComponent> {
  componentDidMount () {
    this.props.getBlog(this.props.id)
  }

  dateFormated (value: any) {
    if (!value) return ''
    const date = String(value).substring(0, 10).split('-')
    const dateFormated = `${date[2]} ${arrMonth[date[1]]} ${date[0]}`
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
