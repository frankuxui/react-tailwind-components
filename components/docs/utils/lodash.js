import get from 'lodash.get'
import ui from '../../../config/ui.json'

export function lodash (string) {
  return get(ui, string)
}
