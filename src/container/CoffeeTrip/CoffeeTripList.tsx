import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import moment from 'moment'
import { Col, Row } from 'reactstrap'
import { Link } from 'routes'
import { getAllTrip } from 'actions/index'

interface StateProps {
  size?: number
  allTrip: any
}

interface DispatchProps {
  getAllTrip: typeof getAllTrip
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
      const date = `${data.trip_date}`.substring(0, 10).split('-')
      const startDate = `${date[2]} ${arrMonth[Number(date[1])]} ${date[0]}`
      const endDate = moment(`${date[0]}${date[1]}${date[2]}`).add(data.duration - 1, 'd').format('DD MMMM YYYY')
      return (
        <Col key={index} xs='4' className='mb-5'>
          <Link route={`/coffee_trip/${data.id}`} replace={true}>
            <img className='img-fluid' src={data.main_photo} alt=''/>
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
