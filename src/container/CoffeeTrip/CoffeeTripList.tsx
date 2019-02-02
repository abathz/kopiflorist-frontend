import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import moment from 'moment'
import { Col, Row } from 'reactstrap'
import { Link } from 'routes'
import { getAllTrip } from 'actions'

interface StateProps {
  size?: number
  allTrip: any
}

interface DispatchProps {
  getAllTrip: typeof getAllTrip
}

interface PropsComponent extends StateProps, DispatchProps { }

interface StateComponent { }

class CoffeeTripList extends Component<PropsComponent, StateComponent> {
  constructor (props: any) {
    super(props)
  }

  componentDidMount () {
    this.props.getAllTrip()
  }

  renderList () {
    const { allTrip } = this.props
    const trip = this.props.size ? _.slice(allTrip, 0, this.props.size) : allTrip
    return _.map(trip, (data: any, index: any) => {
      const date = `${data.trip_date}`.substring(0, 10)
      const startDate = moment(date).format('DD MMMM YYYY')
      const endDate = moment(date).add(data.duration - 1, 'd').format('DD MMMM YYYY')
      return (
        <Col key={index} xs='4' className='mb-5'>
          <Link route={`/coffee_trip/${data.id}`}>
            <img className='img-fluid' src={data.main_photo} style={{ cursor: 'pointer' }}/>
          </Link>
          <div className='mt-3'>
            <p className='text-l text-hel-95 h4'>{data.title}</p>
            <p className='text-m text-os-reg text-justify'>{data.description}</p>
            <p><span className='text-hel-bold'>{startDate}</span>{data.duration !== 1 ? <span className='text-hel-bold'> - {endDate}</span> : ''}</p>
          </div>
        </Col>
      )
    })
  }

  render () {
    return (
      <Row>
        {this.renderList()}
      </Row>
    )
  }
}

const mapStateToProps = ({ trip }: any) => {
  const { allTrip } = trip
  return { allTrip }
}

export default connect(mapStateToProps, { getAllTrip })(CoffeeTripList)
