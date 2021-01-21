// import the default document actions
import defaultResolve from 'part:@sanity/base/document-actions'

import { DownloadSome } from './actions/downloadSome'

export default function resolveDocumentActions(props) {
  return props.type === 'some'
    ? [DownloadSome, ...defaultResolve(props)]
    : [...defaultResolve(props)]
}
