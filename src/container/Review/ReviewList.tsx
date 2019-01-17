import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

interface StateProps {}

interface DispatchProps {}

interface PropsComponent extends StateProps, DispatchProps {}

interface StateComponent {
  isReviewItemClicked: boolean
}

const ReviewItem = ({ data, isClicked, onPress }: any) => (
  <Col xs='12'>
    <div className={`review-item ${isClicked ? 'review-item-active' : ''}`} onMouseDown={onPress}>
      a
    </div>
  </Col>
)

class ReviewList extends Component<PropsComponent, StateComponent> {
  constructor (props: any) {
    super(props)
    this.state = {
      isReviewItemClicked: false
    }

    // this.onReviewItemClicked = this.onReviewItemClicked.bind(this)
  }

  onReviewItemClicked = () => {
    this.setState(prevState => ({
      isReviewItemClicked: !prevState.isReviewItemClicked
    }))
  }

  render () {
    return (
      <Row>
        <ReviewItem isClicked={this.state.isReviewItemClicked} onPress={this.onReviewItemClicked} />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
      </Row>
    )
  }
}

export default ReviewList
