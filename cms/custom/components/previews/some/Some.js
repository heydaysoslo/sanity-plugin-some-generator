/* eslint-disable react/no-multi-comp, react/no-did-mount-set-state, react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import heydaysConfig from '../../../../heydays-config'
import resolveProductionUrl from '../../../../resolveProductionUrl'

class Some extends React.PureComponent {
  static propTypes = {
    document: PropTypes.object
  }

  static defaultProps = {
    document: null
  }

  state = {
    size: 'full'
  }

  setSize = size => {
    this.setState(state => ({ ...state, size }))
  }

  render() {
    const { displayed } = this.props.document
    console.log(
      '🚀 ~ file: Some.js ~ line 27 ~ Some ~ render ~ this.props',
      this.props
    )

    const url = resolveProductionUrl(displayed)

    if (!displayed._id) return null

    const sizes = {
      full: '100%',
      mobile: '375px',
      tablet: '768px',
      laptop: '1200px'
    }

    const icons = {
      full: '💯',
      mobile: '📱',
      tablet: '🏓',
      laptop: '💻'
    }

    const { size } = this.state

    const ff = 'SuisseWorks.otf'

    return (
      <div
        style={{
          position: 'relative',
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img
          style={{ maxHeight: '100%' }}
          src={`https://res.cloudinary.com/heydaysoslo/image/upload/${displayed.type ||
            ''}/l_text:${ff}_${displayed.fontSize || 800}:${displayed.title ||
            ''},x_20,y_20,w_1080/DSCF3236_qjn87m.jpg`}
          alt=""
        />
      </div>
    )
  }
}

export default Some
