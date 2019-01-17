import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'
import { getUserReviews } from 'actions/index'

interface StateProps {}

interface DispatchProps {
  getUserReviews: typeof getUserReviews
}

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
  }

  componentDidMount () {
    this.props.getUserReviews()
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

// const mapStateToProps = ({ }) => {

// }

export default connect(null, { getUserReviews })(ReviewList)
