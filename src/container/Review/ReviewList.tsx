import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'reactstrap'
import { getUserReviews } from 'actions/index'
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

class ReviewList extends Component<PropsComponent, StateComponent> {
  constructor (props: any) {
    super(props)
  }

  componentDidMount () {
    this.props.getUserReviews()
  }

  renderReviewItem () {
    const { userReviews } = this.props
    return _.map(userReviews, (data: any, index: number) => {
      let date = data.trip_days.trip_date.substring(0, 10).split('-')
      const startDate = `${date[2]} ${arrMonth[Number(date[1])]} ${date[0]}`
      const endDate = moment(new Date(`${date[0]}-${date[1]}-${date[2]}`)).add(data.trip_days.duration_in_days - 1, 'd').format('DD MMMM YYYY')
      // console.log(data)
      let item = {
        trip_id: data.trip_id,
        trip_booked_id: data.trip_booked_id,
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
