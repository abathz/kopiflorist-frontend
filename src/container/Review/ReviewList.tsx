import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'reactstrap'
import { getUserReviews } from 'actions/index'
import _ from 'lodash'
import moment from 'moment'
import ReactStars from 'react-stars'

interface StateProps {
  userReviews: any[]
}

interface DispatchProps {
  getUserReviews: typeof getUserReviews
}

interface PropsComponent extends StateProps, DispatchProps {}

interface StateComponent {
  isReviewItemClicked: boolean
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

const ReviewItem = ({ data, isClicked, onPress, ratingChanged }: any) => (
  <Col xs='12'>
    <div className={`review-item ${isClicked ? 'review-item-active' : ''}`}>
      <Col xs='12'>
        <Row>
          <Col xs='1'>
            <img className='img-fluid' src={data.photo} alt={data.title} />
          </Col>
          <Col xs='9' className='d-flex flex-column justify-content-center'>
            <div className='d-flex justify-content-between' style={{ width: '160px' }}>
              <span className='text-ml text-black'>{data.title}</span>
              <ReactStars
                className='float-right'
                style={{ marginTop: '-1px' }}
                count={5}
                value={data.review.rating}
                size={18}
                color2={'#ffd700'}
                half={false}
              />
            </div>
            <div className='clearfix'/>
            <span className='text-s text-black'>{data.date}</span>
          </Col>
          <Col xs='2' className='d-flex align-items-center justify-content-center'>
            {data.review === null ? <Button className='button-yellow' block={true} size='sm' onMouseDown={onPress}>Review</Button> : <p className='text-yellow' style={{ margin: '0px' }}>Reviewed</p>}
          </Col>
        </Row>
      </Col>
    </div>
  </Col>
)

class ReviewList extends Component<PropsComponent, StateComponent> {
  constructor (props: any) {
    super(props)
    this.state = {
      isReviewItemClicked: false
    }
  }

  componentDidMount () {
    this.props.getUserReviews()
  }

  onReviewItemClicked = () => {
    this.setState(prevState => ({
      isReviewItemClicked: !prevState.isReviewItemClicked
    }))
  }

  onRatingChanged = (newRating: any) => {
    console.log(newRating)
  }

  renderReviewItem () {
    const { userReviews } = this.props
    return _.map(userReviews, (data: any, index: number) => {
      console.log(data)
      let date = data.trip_days.trip_date.substring(0, 10).split('-')
      const startDate = `${date[2]} ${arrMonth[Number(date[1])]} ${date[0]}`
      const endDate = moment(new Date(`${date[0]}-${date[1]}-${date[2]}`)).add(data.trip_days.duration_in_days - 1, 'd').format('DD MMMM YYYY')
      let item = {
        title: data.title,
        photo: data.photo,
        date: `${startDate} - ${endDate}`,
        review: data.review
      }
      return <ReviewItem key={index} data={item} isClicked={this.state.isReviewItemClicked} onPress={this.onReviewItemClicked} ratingChanged={this.onRatingChanged} />
    })
  }

  render () {
    return (
      <Row>
        {this.renderReviewItem()}
      </Row>
    )
  }
}

const mapStateToProps = ({ review }: any) => {
  const { userReviews } = review

  return { userReviews }
}

export default connect(mapStateToProps, { getUserReviews })(ReviewList)
