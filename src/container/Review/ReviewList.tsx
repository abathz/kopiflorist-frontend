import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'reactstrap'
import { getUserReviews } from 'actions'
import _ from 'lodash'
import moment from 'moment'
import ReviewItem from './ReviewItem'

interface StateProps {
  userReviews: any[]
}

interface DispatchProps {
  getUserReviews: typeof getUserReviews
}

interface PropsComponent extends StateProps, DispatchProps {}

interface StateComponent {}

class ReviewList extends Component<PropsComponent, StateComponent> {

  componentDidMount () {
    this.props.getUserReviews()
  }

  renderReviewItem () {
    const { userReviews } = this.props
    return _.map(userReviews, (data: any, index: number) => {
      let date = data.trip_days.trip_date.substring(0, 10)
      const startDate = moment(date).format('DD MMMM YYYY')
      const endDate = moment(date).add(data.trip_days.duration_in_days - 1, 'd').format('DD MMMM YYYY')
      let item = {
        trip_id: data.trip_id,
        title: data.title,
        photo: data.photo,
        date: `${startDate} - ${endDate}`,
        review: data.review || null
      }
      return <ReviewItem key={index} data={item}/>
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
