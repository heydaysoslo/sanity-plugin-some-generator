/* eslint-disable react/no-multi-comp, react/no-did-mount-set-state, react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'

const defaultTransformations = 'c_fill,' // always and with , eg. q_auto,

export const someFormats = {
  instagramStory: [1080, 1920],
  instagramPost: [1080, 1080]
}

export const generateUrl = document => {
  // Needs to be uploaded in a special manner
  // https://www.learnwithjason.dev/blog/upload-custom-font-cloudinary-media-library/
  const ff = 'SuisseWorks.otf'
  const secondaryImage = document?.overlayImage?.cldImage || null
  const textColor = document?.textColor?.hex?.split?.('#')?.[1]
  const format = someFormats[document.type]
  return `https://res.cloudinary.com/heydaysoslo/${
    document.cldImage.resource_type
  }/upload/${defaultTransformations}${
    format ? `w_${format[0]},h_${format[1]}` : ''
  }${
    secondaryImage?.public_id
      ? `/l_${secondaryImage.public_id},c_fill,g_center${
          format ? `,w_${format[0]},h_${format[1]}` : ''
        }`
      : ''
  }${document?.content
    ?.map?.(
      i =>
        `/l_text:${i.fontFamily || ff}_${i.fontSize || 800}:${i.title ||
          ''},e_colorize,co_rgb:${textColor || '000000'},x_${i.x},y_${i.y}`
    )
    .join('')}/${document.cldImage.public_id}
    `
}

// /l_text:${ff}_${document.fontSize || 800}:${document.title ||
//   ''},e_colorize,co_rgb:${textColor || '000000'},x_20,y_20,w_1080/${
//   document.cldImage.public_id
// }

class Some extends React.PureComponent {
  static propTypes = {
    document: PropTypes.object
  }

  static defaultProps = {
    document: null
  }

  state = {
    url: ''
  }

  componentDidMount = () => {
    const { displayed } = this.props.document
    this.setState({ url: generateUrl(displayed) })
  }

  componentDidUpdate = prevProps => {
    console.log('props updated')
    const { displayed } = this.props.document
    if (prevProps !== this.props) {
      this.setState({ url: generateUrl(displayed) })
    }
  }

  render() {
    const { displayed } = this.props.document
    const { url } = this.state

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
        {displayed?.cldImage?.public_id ? (
          <>
            {displayed.cldImage.resource_type === 'video' ? (
              <video autoPlay muted loop style={{ maxHeight: '100%' }}>
                <source src={url} />
              </video>
            ) : (
              <img style={{ maxHeight: '100%' }} src={url} alt="" />
            )}
          </>
        ) : (
          <h1>No media selected</h1>
        )}
      </div>
    )
  }
}

export default Some
