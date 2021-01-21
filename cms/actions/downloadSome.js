import { generateUrl } from '../custom/components/previews/some/Some'

export function DownloadSome(props) {
  return {
    label: 'Download SoMe',
    onHandle: () => {
      const url = generateUrl(props.draft || props.published)
      // Here you can perform your actions
      window.open(url.split('upload/').join('upload/fl_attachment:SoMe,'))
    }
  }
}
