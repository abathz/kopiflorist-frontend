import React, { Component, ChangeEvent } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Col, Row, Nav, NavItem, NavLink } from 'reactstrap'
import { Link } from 'routes'
import { getAllProduct } from 'actions/index'

interface StateProps {
  size?: number
  cat?: boolean
  all?: boolean
  allProduct: any
}

interface DispatchProps {
  getAllProduct: typeof getAllProduct
}

interface PropsComponent extends StateProps, DispatchProps { }

interface StateComponent {
  activeTab: number
}

class ShopList extends Component<PropsComponent, StateComponent> {
  constructor (props: any) {
    super(props)

    this.state = {
      activeTab: 1
    }

    this.onCatClicked = this.onCatClicked.bind(this)
  }

  componentDidMount () {
    this.props.getAllProduct()
  }

  onCatClicked (value: number) {
    if (this.state.activeTab !== value) {
      this.setState({
        activeTab: value
      })
    }
  }

  renderList () {
    const { allProduct } = this.props
    if (!allProduct) return ''
    console.log(allProduct)
    const product = this.props.size ? _.slice(allProduct.data, 0, this.props.size) : allProduct.data

    if (this.props.all) {
      return _.map(product, (data: any) => {
        if (!data.availability) return ''
        const slug = data.name.split(' ').join('-').toLowerCase()
        return (
          <Col key={data.id} xs='3' className='mb-5'>
            <Link route={`/shop/${data.id}/${slug}`} replace={true}>
              <a><img className='img-fluid' src={data.photo} alt={data.name} /></a>
            </Link>
            <div className='mt-3'>
              <p className='text-l text-hel-95 h4'>{data.name}</p>
              <p className='text-m text-os-reg text-justify'>{data.description}</p>
            </div>
          </Col>
        )
      })
    } else {
      if (this.state.activeTab === 1) {
        return _.map(product, (data: any) => {
          if (!data.availability) return ''
          if (data.category === 'Roasted Beans') {
            const slug = data.name.split(' ').join('-').toLowerCase()
            return (
              <Col key={data.id} xs='3' className='mb-5'>
                <Link route={`/shop/${data.id}/${slug}`} replace={true}>
                  <a><img className='img-fluid' src={data.photo} alt={data.name} /></a>
                </Link>
                <div className='mt-3'>
                  <p className='text-l text-hel-95 h4'>{data.name}</p>
                  <p className='text-m text-os-reg text-justify'>{data.description}</p>
                </div>
              </Col>
            )
          }
        })
      } else if (this.state.activeTab === 2) {
        return _.map(product, (data: any) => {
          if (!data.availability) return ''
          if (data.category === 'Green Beans') {
            const slug = data.name.split(' ').join('-').toLowerCase()
            return (
              <Col key={data.id} xs='3' className='mb-5'>
                <Link route={`/shop/${data.id}/${slug}`} replace={true}>
                  <a><img className='img-fluid' src={data.photo} alt={data.name} /></a>
                </Link>
                <div className='mt-3'>
                  <p className='text-l text-hel-95 h4'>{data.name}</p>
                  <p className='text-m text-os-reg text-justify'>{data.description}</p>
                </div>
              </Col>
            )
          }
        })
      }
    }
  }

  render () {
    return (
      <>
        <Row>
          <Nav>
            {
              this.props.cat ? ''
              : <Nav className='mb-5'>
                  <NavItem>
                    <NavLink onMouseDown={this.onCatClicked.bind(this, 1)}>
                      <div className={`list-categories-shop ${this.state.activeTab === 1 ? 'active' : ''}`}>
                        <div style={{ paddingTop: '6px', paddingLeft: '12px' }}>
                          <img style={{ width: '35px' }} className='float-left' src={`/static/img/roasted${this.state.activeTab === 1 ? '-inverted' : ''}.png`} />
                          <p className={`text-ml pl-2 pr-3 ${this.state.activeTab === 1 ? 'text-yellow' : 'text-white'} text-hel-bold float-left`} style={{ paddingTop: '6px' }}>Roasted</p>
                        </div>
                        <div className='clearfix' />
                      </div>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink onMouseDown={this.onCatClicked.bind(this, 2)}>
                      <div className={`list-categories-shop ${this.state.activeTab === 2 ? 'active' : ''}`}>
                        <div style={{ paddingTop: '6px', paddingLeft: '12px' }}>
                          <img style={{ width: '35px' }} className='float-left' src={`/static/img/greenbeans${this.state.activeTab === 2 ? '-inverted' : ''}.png`} />
                          <p className={`text-ml pl-2 pr-3 ${this.state.activeTab === 2 ? 'text-yellow' : 'text-white'} text-hel-bold float-left`} style={{ paddingTop: '6px' }}>Green Beans</p>
                        </div>
                        <div className='clearfix' />
                      </div>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink onMouseDown={this.onCatClicked.bind(this, 3)}>
                      <div className={`list-categories-shop ${this.state.activeTab === 3 ? 'active' : ''}`}>
                        <div style={{ paddingTop: '6px', paddingLeft: '12px' }}>
                          <img style={{ width: '35px' }} className='float-left' src={`/static/img/merch${this.state.activeTab === 3 ? '-inverted' : ''}.png`} />
                          <p className={`text-ml pl-2 pr-3 ${this.state.activeTab === 3 ? 'text-yellow' : 'text-white'} text-hel-bold float-left`} style={{ paddingTop: '6px' }}>Merch</p>
                        </div>
                        <div className='clearfix' />
                      </div>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink onMouseDown={this.onCatClicked.bind(this, 4)}>
                      <div className={`list-categories-shop ${this.state.activeTab === 4 ? 'active' : ''}`}>
                        <div style={{ paddingTop: '6px', paddingLeft: '12px' }}>
                          <img style={{ width: '35px' }} className='float-left' src={`/static/img/other${this.state.activeTab === 4 ? '-inverted' : ''}.png`} />
                          <p className={`text-ml pl-2 pr-3 ${this.state.activeTab === 4 ? 'text-yellow' : 'text-white'} text-hel-bold float-left`} style={{ paddingTop: '6px' }}>Other</p>
                        </div>
                        <div className='clearfix' />
                      </div>
                    </NavLink>
                  </NavItem>
                </Nav>
            }
          </Nav>
        </Row>
        <Row>
          {this.renderList()}
        </Row>
      </>
    )
  }
}

const mapStateToProps = ({ shop }: any) => {
  const { allProduct } = shop

  return { allProduct }
}

export default connect(mapStateToProps, { getAllProduct })(ShopList)
