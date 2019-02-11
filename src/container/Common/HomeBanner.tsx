import React, { Component } from 'react'
import _ from 'lodash'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap'

interface StateProps { }

interface DispatchProps { }

interface PropsComponent extends StateProps, DispatchProps { }

interface StateComponent {
  activeIndex: number
  animating: boolean
  items: any[]
}

class HomeBanner extends Component<PropsComponent, StateComponent> {
  constructor (props: PropsComponent) {
    super(props)
    this.state = {
      activeIndex: 0,
      animating: false,
      items: [
        { caption: 'Slide 1' },
        { caption: 'Slide 2' },
        { caption: 'Slide 3' }
      ]
    }
  }

  onExiting = () => {
    this.setState({ animating: true })
  }

  onExited = () => {
    this.setState({ animating: false })
  }

  next = () => {
    if (this.state.animating) return
    const index = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1
    this.setState({ activeIndex: index })
  }

  previous = () => {
    if (this.state.animating) return
    const index = this.state.activeIndex === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1
    this.setState({ activeIndex: index })
  }

  goToIndex = (newIndex: number) => {
    if (this.state.animating) return
    this.setState({ activeIndex: newIndex })
  }

  renderSlide () {
    return _.map(this.state.items, (item: any, index: number) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={index}
        >
          <div style={{ backgroundColor: '#333', height: '576px' }}/>
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      )
    })
  }

  render () {
    const { activeIndex, items } = this.state
    return (
      <Carousel
        className='mb-5'
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        interval={2000}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {this.renderSlide()}
        <CarouselControl direction='prev' directionText='Previous' onClickHandler={this.previous} />
        <CarouselControl direction='next' directionText='Next' onClickHandler={this.next} />
      </Carousel>
    )
  }
}

export default HomeBanner
