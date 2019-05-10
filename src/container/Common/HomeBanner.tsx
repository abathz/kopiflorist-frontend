import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap'
import { Link } from 'routes'
import { getAllBanners } from 'actions'

interface StateProps {
  allBanner: any[]
}

interface DispatchProps {
  getAllBanners: typeof getAllBanners
}

interface PropsComponent extends StateProps, DispatchProps { }

interface StateComponent {
  activeIndex: number
  animating: boolean
  // items: any[]
}

class HomeBanner extends Component<PropsComponent, StateComponent> {
  constructor (props: PropsComponent) {
    super(props)
    this.state = {
      activeIndex: 0,
      animating: false
      // items: [
      //   { caption: 'Slide 1' },
      //   { caption: 'Slide 2' },
      //   { caption: 'Slide 3' }
      // ]
    }
  }

  componentDidMount() {
    this.props.getAllBanners()
  }

  onExiting = () => {
    this.setState({ animating: true })
  }

  onExited = () => {
    this.setState({ animating: false })
  }

  next = () => {
    if (this.state.animating) return
    const index = this.state.activeIndex === this.props.allBanner.length - 1 ? 0 : this.state.activeIndex + 1
    this.setState({ activeIndex: index })
  }

  previous = () => {
    if (this.state.animating) return
    const index = this.state.activeIndex === 0 ? this.props.allBanner.length - 1 : this.state.activeIndex - 1
    this.setState({ activeIndex: index })
  }

  goToIndex = (newIndex: number) => {
    if (this.state.animating) return
    this.setState({ activeIndex: newIndex })
  }

  renderLinkedBanner = (banner: any) => {
    return (
      <Link route={banner.url}>
        <div style={{ backgroundImage: `url(${banner.photo})`, backgroundSize: 'cover', height: '576px' }}/>
      </Link>
    )
  }

  renderNormalBanner = (banner: any) => {
    return (<div style={{ backgroundImage: `url(${banner.photo})`, backgroundSize: 'cover', height: '576px' }}/>)
  }

  renderSlide () {
    const { allBanner } = this.props
    if (!allBanner) return ''
    return _.map(allBanner, (item: any, index: number) => {
      let displayBanner
      if (item.url) {
        displayBanner = this.renderLinkedBanner(item)
      } else {
        displayBanner = this.renderNormalBanner(item)
      }
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={index}
        >
          {displayBanner}
          <CarouselCaption captionText={item.name} captionHeader={item.name} />
        </CarouselItem>
      )
    })
  }

  render () {
    const { activeIndex } = this.state
    let { allBanner } = this.props
    allBanner.forEach(function(element) { element.key = element.id; });
    return (
      <Carousel
        className='mb-5'
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        interval={5000}
      >
        <CarouselIndicators items={allBanner} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {this.renderSlide()}
        <CarouselControl direction='prev' directionText='Previous' onClickHandler={this.previous} />
        <CarouselControl direction='next' directionText='Next' onClickHandler={this.next} />
      </Carousel>
    )
  }
}

const mapStateToProps = ({ banner }: any) => {
  const { allBanner } = banner

  return { allBanner }
}

export default connect(mapStateToProps, { getAllBanners })(HomeBanner)
