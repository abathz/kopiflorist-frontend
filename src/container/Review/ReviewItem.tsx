import React, { Component, ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { Col, Row, Button, Input, FormGroup, Label, Alert, FormFeedback } from 'reactstrap'
import ReactStars from 'react-stars'
import { updateDataReview, createReview } from 'actions'

interface StateProps {
  data: any
  ratingReview: number
  review: any
}

interface DispatchProps {
  updateDataReview: typeof updateDataReview
  createReview: typeof createReview
}

interface PropsComponent extends StateProps, DispatchProps {}

interface StateComponent {
  isReviewItemClicked: boolean
  error: boolean
}

class ReviewItem extends Component<PropsComponent, StateComponent> {
  constructor (props: PropsComponent) {
    super(props)

    this.state = {
      isReviewItemClicked: false,
      error: false
    }
  }

  onReviewItemClicked = () => {
    this.setState(prevState => ({
      isReviewItemClicked: !prevState.isReviewItemClicked
    }))
  }

  onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.props.updateDataReview({ prop: e.target.id, value: e.target.value })
  }

  onRatingChanged = (newRating: number) => {
    this.props.updateDataReview({ prop: 'ratingReview', value: newRating })
  }

  onSaveClicked = () => {
    const { data, review } = this.props
    let newData = {
      id: data.trip_id,
      cart_trip_id: data.cart_trip_id,
      message: review.reviewTrip,
      rating: review.ratingReview
    }
    if (newData.message === '' || newData.rating === 0) {
      this.setState({ error: true })
      return
    }
    this.props.createReview(newData)
  }

  render () {
    const { data, ratingReview } = this.props
    return (
      <Col xs='12'>
        <div className={`review-item ${this.state.isReviewItemClicked ? 'review-item-active' : ''}`}>
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
                    count={5}
                    value={data.review === null ? ratingReview : data.review.rating}
                    edit={data.review === null}
                    size={18}
                    color2={'#ffd700'}
                    half={false}
                    onChange={this.onRatingChanged}
                  />
                </div>
                <div className='clearfix' />
                <span className='text-s text-black'>{data.date}</span>
                {data.review !== null ? <span className='text-s text-black-light mt-1'><em>"{data.review.message}"</em></span> : ''}
              </Col>
              <Col xs='2' className='d-flex align-items-center justify-content-center'>
                {data.review === null ? <Button className='button-yellow' block={true} size='sm' onMouseDown={this.onReviewItemClicked}>Review</Button> : <p className='text-yellow' style={{ margin: '0px' }}>Reviewed</p>}
              </Col>
            </Row>
            <Row className='mt-3'>
              <Col xs='12'>
                <div className={`review-input ${this.state.isReviewItemClicked ? 'review-input-active' : ''}`}>
                  <FormGroup>
                    <Label for='reviewTrip'>Review</Label>
                    <Input type='textarea' id='reviewTrip' invalid={this.state.error} onChange={this.onInputChange} />
                    <FormFeedback>Feedback message and rating is required</FormFeedback>
                  </FormGroup>
                  <Row>
                    <Col xs='4'>
                      <Button block={true} className='button-yellow' onMouseDown={this.onSaveClicked}>Save</Button>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
        </div>
      </Col>
    )
  }
}

const mapStateToProps = ({ review }: any) => {
  const { ratingReview } = review

  return { ratingReview, review }
}

export default connect(mapStateToProps, { updateDataReview, createReview })(ReviewItem)
